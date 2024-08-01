// react frontend src/Component/Kursil/TopicCardTab.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Row, Col, Button, Alert, Nav, NavItem, NavLink, TabContent, TabPane, Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';
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
  const [totalElapsedTime, setTotalElapsedTime] = useState(0);
  const [stopwatchInterval, setStopwatchInterval] = useState(null);
  const [totalStopwatchInterval, setTotalStopwatchInterval] = useState(null);

  const [elaborateLoading, setElaborateLoading] = useState(false);
  const [promptingLoading, setPromptingLoading] = useState(false);
  const [contentLoading, setContentLoading] = useState(false);
  const [miscLoading, setMiscLoading] = useState(false);
  const [quizLoading, setQuizLoading] = useState(false);
  const [executingAll, setExecutingAll] = useState(false);
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
      console.error('Data points of discussion is not available:', error);
      showAlert(`Data points of discussion is not available ${showUpdateAlert ? 'updated ' : ''}`, 'danger');
    }
  }, [topic._id, showAlert]);

  useEffect(() => {
    fetchPointsDiscussion();
  }, [fetchPointsDiscussion]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    if (minutes === 0) {
      return `${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''}`;
    } else if (minutes === 1) {
      return `${minutes} minute ${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''}`;
    } else {
      return `${minutes} minutes ${remainingSeconds} second${remainingSeconds !== 1 ? 's' : ''}`;
    }
  };
  
  const startStopwatch = () => {
    if (stopwatchInterval) clearInterval(stopwatchInterval);
    setElapsedTime(0);
    const interval = setInterval(() => {
      setElapsedTime(prevTime => prevTime + 1);
    }, 1000);
    setStopwatchInterval(interval);
  };

  const stopStopwatch = () => {
    if (stopwatchInterval) clearInterval(stopwatchInterval);
    setStopwatchInterval(null);
  };

  const startTotalStopwatch = () => {
    if (totalStopwatchInterval) clearInterval(totalStopwatchInterval);
    setTotalElapsedTime(0);
    const interval = setInterval(() => {
      setTotalElapsedTime(prevTime => prevTime + 1);
    }, 1000);
    setTotalStopwatchInterval(interval);
  };

  const stopTotalStopwatch = () => {
    if (totalStopwatchInterval) clearInterval(totalStopwatchInterval);
    setTotalStopwatchInterval(null);
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

      await new Promise(resolve => setTimeout(resolve, 2000));
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
    setCurrentActivity('Generating Prompting');
    startStopwatch();

    try {
      const response = await axios.post('http://localhost:8000/api/generate-topic-prompting', {
        topic_id: topic._id
      });
      await new Promise(resolve => setTimeout(resolve, 2000));
      if (response.status === 200) {
        await fetchPointsDiscussion(true);
        showAlert('Prompting generation completed', 'success');
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      showAlert(`Error generating prompting summaries: ${error.message}`, 'danger');
      console.error('Error:', error);
    }

    setPromptingLoading(false);
    setIsLoading(false);
    stopStopwatch();
  };


const handleHandout = async () => {
  setIsLoading(true);
  setContentLoading(true);
  setCurrentActivity('Generating Handout');
  startStopwatch();

  try {
    const response = await axios.post('http://localhost:8000/api/generate-topic-handout', {
      topic_id: topic._id
    });

    if (response.status === 200) {
      await fetchPointsDiscussion(true);
      showAlert('Handout generation completed successfully', 'success');
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error generating handout:', error);
    showAlert(`Error generating handout: ${error.message}`, 'danger');
  }

  setContentLoading(false);
  setIsLoading(false);
  stopStopwatch();
};

const handleMiscPoints = async () => {
  setIsLoading(true);
  setMiscLoading(true);
  setCurrentActivity('Generating Objective - Method - Duration');
  startStopwatch();

  try {
    const response = await axios.post('http://localhost:8000/api/generate-topic-misc', {
      topic_id: topic._id
    });

    if (response.status === 200) {
      await fetchPointsDiscussion(true);
      showAlert('Misc points generation completed successfully', 'success');
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error generating misc points:', error);
    showAlert(`Error generating misc points: ${error.message}`, 'danger');
  }

  setMiscLoading(false);
  setIsLoading(false);
  stopStopwatch();
};

const handleQuizGeneration = async () => {
  setIsLoading(true);
  setQuizLoading(true);
  setCurrentActivity('Generating Quiz');
  startStopwatch();

  try {
    const response = await axios.post('http://localhost:8000/api/generate-topic-quiz', {
      topic_id: topic._id
    });

    if (response.status === 200) {
      await fetchPointsDiscussion(true);
      showAlert('Quiz generation completed successfully', 'success');
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error generating quiz:', error);
    showAlert(`Error generating quiz: ${error.message}`, 'danger');
  }

  setQuizLoading(false);
  setIsLoading(false);
  stopStopwatch();
};

const handleExecuteAll = async () => {
  setExecutingAll(true);
  setIsLoading(true);
  startTotalStopwatch();

  try {
    // Elaborate
    setCurrentActivity('Elaborating Points');
    startStopwatch();
    const elaborateResponse = await axios.post('http://localhost:8000/api/elaborate-points', {
      topic: topic.topic_name,
      objective: topic.objective,
      points_of_discussion: topic.point_of_discussion
    });
    if (elaborateResponse.status !== 200) throw new Error('Elaboration failed');
    await fetchPointsDiscussion(true);
    stopStopwatch();

    // Prompting
    setCurrentActivity('Generating Prompting');
    startStopwatch();
    const promptingResponse = await axios.post('http://localhost:8000/api/generate-topic-prompting', {
      topic_id: topic._id
    });
    if (promptingResponse.status !== 200) throw new Error('Prompting generation failed');
    await fetchPointsDiscussion(true);
    stopStopwatch();

    // Handout
    setCurrentActivity('Generating Handout');
    startStopwatch();
    const handoutResponse = await axios.post('http://localhost:8000/api/generate-topic-handout', {
      topic_id: topic._id
    });
    if (handoutResponse.status !== 200) throw new Error('Handout generation failed');
    await fetchPointsDiscussion(true);
    stopStopwatch();

    // Misc Points
    setCurrentActivity('Generating Objective - Method - Duration');
    startStopwatch();
    const miscResponse = await axios.post('http://localhost:8000/api/generate-topic-misc', {
      topic_id: topic._id
    });
    if (miscResponse.status !== 200) throw new Error('Misc points generation failed');
    await fetchPointsDiscussion(true);
    stopStopwatch();

    // Quiz
    setCurrentActivity('Generating Quiz');
    startStopwatch();
    const quizResponse = await axios.post('http://localhost:8000/api/generate-topic-quiz', {
      topic_id: topic._id
    });
    if (quizResponse.status !== 200) throw new Error('Quiz generation failed');
    await fetchPointsDiscussion(true);
    stopStopwatch();

    showAlert('All processes completed successfully', 'success');
  } catch (error) {
    console.error('Error in Execute All process:', error);
    showAlert(`Error: ${error.message}`, 'danger');
  } finally {
    setIsLoading(false);
    setExecutingAll(false);
    stopTotalStopwatch();
  }
};


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
              {['Overview', 'Elaboration', 'Prompting', 'Handout', 'Learning Objective', 'Assessment', 'Method', 'Quiz', 'Slide', 'Actions'].map((item, index) => (
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
              <TabPane tabId="9">{renderAccordion('slide', 'slide')}</TabPane>
              <TabPane tabId="10">
              <Button 
                    color="primary" 
                    className="mb-3 w-100" 
                    size="lg"
                    onClick={handleExecuteAll}
                    disabled={executingAll || isLoading}
                  >
                    EXECUTE ALL
                  </Button>

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
            <P>{currentActivity} | Time elapsed: {formatTime(elapsedTime)}</P>
            {executingAll && (
              <P>Total time elapsed: {formatTime(totalElapsedTime)}</P>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default TopicCardTab;