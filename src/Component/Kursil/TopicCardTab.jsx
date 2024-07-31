// src/Component/Kursil/TopicCardTab.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Row, Col, Button, Alert, Nav, NavItem, NavLink, TabContent, TabPane, Accordion, AccordionItem, AccordionHeader, AccordionBody, Progress } from 'reactstrap';
import { H5, P } from '../../AbstractElements';
import styled from 'styled-components';
import axios from 'axios';
import Markdown from 'markdown-to-jsx';

const StyledUl = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  
  li {
    margin-bottom: 5px;
  }
`;

const Loader = styled.div`
  width: 120px;
  height: 20px;
  -webkit-mask: linear-gradient(90deg, #000 70%, #0000 0) 0/20%;
  background:
    linear-gradient(#000 0 0) 0/0% no-repeat
    #ddd;
  animation: l4 2s infinite steps(6);

  @keyframes l4 {
    100% { background-size: 120% }
  }
`;

const TopicCardTab = ({ topic }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentActivity, setCurrentActivity] = useState('');
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');
  const [elaborateLoading, setElaborateLoading] = useState(false);
  const [promptingLoading, setPromptingLoading] = useState(false);
  const [contentLoading, setContentLoading] = useState(false);
  const [miscLoading, setMiscLoading] = useState(false);
  const [quizLoading, setQuizLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('1');
  const [pointsDiscussion, setPointsDiscussion] = useState([]);
  const [openAccordion, setOpenAccordion] = useState(null);
  const [alert, setAlert] = useState({ visible: false, message: '', color: 'success' });

  const showAlert = useCallback((message, color) => {
    setAlert({ visible: true, message, color });
    setTimeout(() => setAlert({ visible: false, message: '', color: 'success' }), 5000);
  }, []);

  const fetchPointsDiscussion = useCallback(async (showUpdateAlert = false) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/points-discussion/${topic._id}`);
      setPointsDiscussion(response.data);
      if (showUpdateAlert) {
        showAlert('Points of discussion updated successfully', 'success');
      }
    } catch (error) {
      console.error('Error fetching points of discussion:', error);
      showAlert(`Error fetching ${showUpdateAlert ? 'updated ' : ''}points of discussion`, 'danger');
    }
  }, [topic._id, showAlert]);

  useEffect(() => {
    fetchPointsDiscussion();
  }, [fetchPointsDiscussion]);

  const startStopwatch = () => {
    const id = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 1000);
    setTimerId(id);
  };

  const stopStopwatch = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
    setElapsedTime(0);
    setCurrentActivity('');
  };

  const handleOperation = async (operation, loadingSetter, activityName, apiEndpoint) => {
    setIsLoading(true);
    loadingSetter(true);
    setCurrentActivity(activityName);
    startStopwatch();

    try {
      const response = await axios.post(`http://localhost:8000/api/${apiEndpoint}`, {
        topic_id: topic._id
      });
      showAlert(response.data.message, 'success');
      await fetchPointsDiscussion(true);
    } catch (error) {
      console.error(`Error ${operation}:`, error);
      showAlert(`Error ${operation}`, 'danger');
    }

    loadingSetter(false);
    setIsLoading(false);
    stopStopwatch();
  };

  const handleElaborate = async () => {
    setIsLoading(true);
    setElaborateLoading(true);
    setCurrentActivity('Elaborating Points');
    startStopwatch();
    try {
      const response = await axios.post('http://localhost:8000/api/elaborate-points', {
        topic: topic.topic_name,
        objective: topic.objective,
        points_of_discussion: topic.point_of_discussion
      });
      setPointsDiscussion(response.data.elaborated_points);
      await fetchPointsDiscussion(true);
      showAlert('Points elaborated successfully!', 'success');
    } catch (error) {
      console.error('Error elaborating points:', error);
      showAlert('Error elaborating points', 'danger');
    }
    setElaborateLoading(false);
    setIsLoading(false);
    stopStopwatch();
  };

  const handlePrompting = async () => {
    setIsLoading(true);
    setPromptingLoading(true);
    setProgress(0);
    setProgressMessage('');
    setCurrentActivity('Generating Prompting');
    startStopwatch();

    try {
      const response = await fetch(`http://localhost:8000/api/generate-topic-prompting`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic_id: topic._id }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        console.log('Received chunk:', chunk);

        const lines = chunk.split('\n\n');

        for (const line of lines) {
          if (line.trim() !== '') {
            try {
              const [eventField, dataField] = line.split('\n');
              const eventType = eventField.replace('event: ', '').trim();
              const data = JSON.parse(dataField.replace('data: ', '').trim());

              console.log('Parsed event:', eventType, 'data:', data);

              if (eventType === 'progress') {
                setProgress(data.progress);
                setProgressMessage(data.message);
              } else if (eventType === 'complete') {
                await fetchPointsDiscussion(true);
                showAlert('Prompting generation completed', 'success');
                break;
              }
            } catch (parseError) {
              console.error('Error parsing SSE data:', parseError, 'Line:', line);
            }
          }
        }
      }
    } catch (error) {
      showAlert(`Error generating prompting summaries: ${error.message}`, 'danger');
      console.error('Error:', error);
    }

    setPromptingLoading(false);
    setIsLoading(false);
    stopStopwatch();
  };

  const handleHandout = () => handleOperation('generating handout', setContentLoading, 'Generating Handout', 'generate-topic-handout');
  const handleMiscPoints = () => handleOperation('generating misc points', setMiscLoading, 'Generating Objective - Method - Duration', 'generate-topic-misc');
  const handleQuizGeneration = () => handleOperation('generating quiz', setQuizLoading, 'Generating Quiz', 'generate-topic-quiz');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const renderAccordion = (content, contentKey) => (
    <Accordion open={openAccordion} toggle={toggleAccordion}>
      {pointsDiscussion.map((point, index) => (
        <AccordionItem key={index}>
          <AccordionHeader targetId={`${contentKey}${index}`}>{point.point_of_discussion}</AccordionHeader>
          <AccordionBody accordionId={`${contentKey}${index}`}>
            <Markdown>
              {point[contentKey] || `No ${contentKey} content available.`}
            </Markdown>
          </AccordionBody>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <Card className="mb-4">
      <CardHeader>
        <H5>{topic.topic_name}</H5>
        <P className="text-muted mb-0">{topic.objective}</P>
      </CardHeader>
      <CardBody>
        <Row>
          <Col md="3">
            <Nav vertical pills>
              {['Overview', 'Elaboration', 'Prompting', 'Handout', 'Learning Objective', 'Assessment', 'Method', 'Quiz', 'Studi Kasus', 'Bahan Diskusi', 'Outline Presentasi', 'Script Bicara', 'Actions'].map((item, index) => (
                <NavItem key={index}>
                  <NavLink
                    className={activeTab === `${index + 1}` ? 'active' : ''}
                    onClick={() => toggle(`${index + 1}`)}
                  >
                    {item}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Col>
          <Col md="9">
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <H5>Key Concepts:</H5>
                <P>{topic.key_concepts}</P>
                <H5>Skills to be Mastered:</H5>
                <P>{topic.skills_to_be_mastered}</P>
                <H5>Points of Discussion:</H5>
                <StyledUl>
                  {topic.point_of_discussion.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </StyledUl>
              </TabPane>
              <TabPane tabId="2">{renderAccordion('elaboration', 'elaboration')}</TabPane>
              <TabPane tabId="3">{renderAccordion('prompting', 'prompting')}</TabPane>
              <TabPane tabId="4">{renderAccordion('handout', 'handout')}</TabPane>
              <TabPane tabId="5">{renderAccordion('learn_objective', 'learn_objective')}</TabPane>
              <TabPane tabId="6">{renderAccordion('assessment', 'assessment')}</TabPane>
              <TabPane tabId="7">{renderAccordion('method', 'method')}</TabPane>
              <TabPane tabId="8">{renderAccordion('quiz', 'quiz')}</TabPane>
              <TabPane tabId="9">{renderAccordion('casestudy', 'casestudy')}</TabPane>
              <TabPane tabId="10">{renderAccordion('discussion', 'discussion')}</TabPane>
              <TabPane tabId="11">{renderAccordion('outline', 'outline')}</TabPane>
              <TabPane tabId="12">{renderAccordion('script', 'script')}</TabPane>
              <TabPane tabId="13">
                <Button color="primary" className="mb-2 w-100" onClick={handleElaborate} disabled={elaborateLoading}>
                  {elaborateLoading ? 'Generating...' : 'Elaborate'}
                </Button>
                <Button color="secondary" className="mb-2 w-100" onClick={handlePrompting} disabled={promptingLoading}>
                  {promptingLoading ? 'Generating...' : 'Prompting'}
                </Button>
                <Button color="info" className="mb-2 w-100" onClick={handleHandout} disabled={contentLoading}>
                  {contentLoading ? 'Generating...' : 'Handout'}
                </Button>
                <Button color="warning" className="mb-2 w-100" onClick={handleMiscPoints} disabled={miscLoading}>
                  {miscLoading ? 'Generating...' : 'Objective - Method - Duration'}
                </Button>
                <Button color="primary" className="mb-2 w-100" onClick={handleQuizGeneration} disabled={quizLoading}>
                  {quizLoading ? 'Generating...' : 'Quiz'}
                </Button>
                <Button color="success" className="mb-2 w-100">Presentation</Button>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
        {alert.visible && (
          <Alert color={alert.color} className="mt-3">
            {alert.message}
          </Alert>
        )}
      </CardBody>
      <CardFooter>
        {isLoading && (
          <div className="d-flex flex-column align-items-center">
            <Loader className="mb-2" />
            <P>{currentActivity} | Time elapsed: {elapsedTime} seconds</P>
          </div>
        )}
        {promptingLoading && (
          <div>
            <Progress value={progress} className="mb-3">
              {Math.round(progress)}%
            </Progress>
            <P className="text-center">{progressMessage}</P>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default TopicCardTab;