// react frontend src/Component/Kursil/TopicCardTab.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Row, Col, Button, Alert, Nav, NavItem, NavLink, TabContent, TabPane, Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';
import { H5, P } from '../../AbstractElements';
import styled from 'styled-components';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const API_URL = process.env.REACT_APP_API_URL;

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

const MarkdownRenderer = ({ children }) => (
  <ReactMarkdown
    components={{
      h1: ({ node, ...props }) => <H5 {...props} />,
      h2: ({ node, ...props }) => <H5 {...props} />,
      h3: ({ node, ...props }) => <H5 className="mt-3" {...props} />,
      p: ({ node, ...props }) => <P {...props} />,
      ul: ({ node, ...props }) => <StyledUl {...props} />,
      ol: ({ node, ...props }) => <ol className="pl-4" {...props} />,
      li: ({ node, ...props }) => <li className="mb-2" {...props} />
    }}
  >
    {children}
  </ReactMarkdown>
);

// This is to fix messed up display of markdown
const processText = (text) => {
  if (!text) return '';

  let lines = text.split('\n');

  lines = lines.map((line, index) => {
    // Add three newlines before and one after numbered headings, preserving markdown
    if (/^\d+\.\s+\*\*/.test(line)) {
      // If it's not the first line and the previous line isn't already blank, add three newlines before
      if (index > 0 && lines[index - 1].trim() !== '') {
        line = '\n\n\n' + line;
      }
      return line + '\n';
    }
    
    // Remove space before dash in list items, preserving markdown
    if (/^\s+-\s/.test(line)) {
      return line.replace(/^\s+-/, '-');
    }
    
    return line;
  });

  return lines.join('\n');
};

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
  const [translateLoading, setTranslateLoading] = useState(false);
  const [analogyLoading, setAnalogyLoading] = useState(false);
  const [executingAll, setExecutingAll] = useState(false);
  const [activeTab, setActiveTab] = useState('1');
  const [pointsDiscussion, setPointsDiscussion] = useState([]);
  const [topicAnalogy, setTopicAnalogy] = useState('');
  const [openAccordion, setOpenAccordion] = useState(null);
  const [alert, setAlert] = useState({ visible: false, message: '', color: 'success' });

  const showAlert = useCallback((message, color) => {
    setAlert({ visible: true, message, color });
    setTimeout(() => setAlert({ visible: false, message: '', color: 'success' }), 5000);
  }, []);

  const fetchPointsDiscussion = useCallback(async (showUpdateAlert = false) => {
    try {
      const response = await axios.get(`${API_URL}/points-discussion/${topic._id}`);
      // const response = await axios.get(`http://localhost:8000/api/points-discussion/${topic._id}`);
      setPointsDiscussion(response.data);

      // Fetch the topic details to get the analogy
      const topicResponse = await axios.get(`${API_URL}/topic/${topic._id}`);
      if (topicResponse.data && topicResponse.data.topic_analogy) {
        setTopicAnalogy(topicResponse.data.topic_analogy);
      }

      if (showUpdateAlert) {
        showAlert('Points of discussion updated successfully', 'success');
      }
    } catch (error) {
      console.error('Data points of discussion is not available:', error);
      showAlert(`Data points of discussion is not available ${showUpdateAlert ? 'updated ' : ''}`, 'light');
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
      const response = await axios.post(`${API_URL}/elaborate-points`, {
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
      const response = await axios.post(`${API_URL}/generate-topic-prompting`, {
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
    const response = await axios.post(`${API_URL}/generate-topic-handout`, {
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
    const response = await axios.post(`${API_URL}/generate-topic-misc`, {
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
    const response = await axios.post(`${API_URL}/generate-topic-quiz`, {
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


const handleTranslateHandout = async () => {
  setIsLoading(true);
  setTranslateLoading(true);
  setCurrentActivity('Translating Handout');
  startStopwatch();

  try {
    const response = await axios.post(`${API_URL}/translate-handout`, {
      topic_id: topic._id
    });

    if (response.status === 200) {
      await fetchPointsDiscussion(true);
      showAlert('Translating Handout completed successfully', 'success');
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error Translating Handout:', error);
    showAlert(`Error Translating Handout: ${error.message}`, 'danger');
  }

  setTranslateLoading(false);
  setIsLoading(false);
  stopStopwatch();
};


// Update the handleAnalogy function
const handleAnalogy = async () => {
  setIsLoading(true);
  setAnalogyLoading(true);
  setCurrentActivity('Generate Analogy');
  startStopwatch();

  try {
    const response = await axios.post(`${API_URL}/generate-analogy`, {
      topic_id: topic._id
    });

    if (response.status === 200) {
      await fetchPointsDiscussion(true);
      showAlert('Generate Analogy completed successfully', 'success');
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error Generate Analogy:', error);
    showAlert(`Error Generate Analogy: ${error.message}`, 'danger');
  }

  setAnalogyLoading(false);
  setIsLoading(false);
  stopStopwatch();
};



const handleExecuteAll = async () => {
  setExecutingAll(true);
  setIsLoading(true);
  startTotalStopwatch();

  const processes = [
    { name: 'Elaborating Points', endpoint: '/elaborate-points', data: { topic: topic.topic_name, objective: topic.objective, points_of_discussion: topic.point_of_discussion } },
    { name: 'Generating Prompting', endpoint: '/generate-topic-prompting', data: { topic_id: topic._id } },
    { name: 'Generating Handout', endpoint: '/generate-topic-handout', data: { topic_id: topic._id } },
    { name: 'Generating Objective - Method - Duration', endpoint: '/generate-topic-misc', data: { topic_id: topic._id } },
    { name: 'Generating Quiz', endpoint: '/generate-topic-quiz', data: { topic_id: topic._id } }
  ];

  try {
    for (const process of processes) {
      setCurrentActivity(process.name);
      const response = await axios.post(`${API_URL}${process.endpoint}`, process.data);
      if (response.status !== 200) throw new Error(`${process.name} failed`);
      await fetchPointsDiscussion(true);
    }

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
            <MarkdownRenderer>
              {processText(point[contentKey] || `No ${contentKey} content available.`)}
            </MarkdownRenderer>
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
              {['Overview', 'Elaboration', 'Prompting', 'Handout', 'Handout [id]', 'Learning Objective', 'Assessment', 'Method', 'Quiz', 'Analogy', 'Actions'].map((item, index) => (
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
              <TabPane tabId="5">{renderAccordion('handout_id', 'handout_id')}</TabPane>
              <TabPane tabId="6">{renderAccordion('learn_objective', 'learn_objective')}</TabPane>
              <TabPane tabId="7">{renderAccordion('assessment', 'assessment')}</TabPane>
              <TabPane tabId="8">{renderAccordion('method', 'method')}</TabPane>
              <TabPane tabId="9">{renderAccordion('quiz', 'quiz')}</TabPane>
              <TabPane tabId="10">
                <H5>Analogy:</H5>
                {topicAnalogy ? (
                  <MarkdownRenderer>
                    {processText(topicAnalogy)}
                  </MarkdownRenderer>
                ) : (
                  <P>No analogy available for this topic.</P>
                )}
              </TabPane>
              <TabPane tabId="11">
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
                <hr />
                <Button color="primary" className="mb-2 w-100" onClick={handleTranslateHandout} disabled={translateLoading}>
                  {translateLoading ? 'Generating...' : 'Translate Handout'}
                </Button>
                <Button color="success" className="mb-2 w-100" onClick={handleAnalogy} disabled={analogyLoading}>
                  {analogyLoading ? 'Generating...' : 'Generate Analogy'}
                </Button>
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
            {executingAll ? (
              <>
                <P>{currentActivity}</P>
                <P>Total time elapsed: {formatTime(totalElapsedTime)}</P>
              </>
            ) : (
              <P>{currentActivity} | Time elapsed: {formatTime(elapsedTime)}</P>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default TopicCardTab;