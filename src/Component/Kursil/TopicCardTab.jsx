// src/Component/Kursil/TopicCardTab.jsx
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, Row, Col, Button, Alert, Nav, NavItem, NavLink, TabContent, TabPane, Accordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';
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

const TopicCardTab = ({ topic }) => {
  const [loading, setLoading] = useState(false);
  const [elaborated, setElaborated] = useState(false);
  const [promptingLoading, setPromptingLoading] = useState(false);
  const [contentLoading, setContentLoading] = useState(false);
  const [alert, setAlert] = useState({ visible: false, message: '', color: 'success' });
  const [activeTab, setActiveTab] = useState('1');
  const [pointsDiscussion, setPointsDiscussion] = useState([]);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    const fetchPointsDiscussion = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/points-discussion/${topic._id}`);
        setPointsDiscussion(response.data);
        setElaborated(response.data.some(point => point.elaboration));
      } catch (error) {
        console.error('Error fetching points of discussion:', error);
        showAlert('Error fetching points of discussion', 'danger');
      }
    };

    fetchPointsDiscussion();
  }, [topic._id]);

  const handleElaborate = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/api/elaborate-points', {
        topic: topic.topic_name,
        objective: topic.objective,
        points_of_discussion: topic.point_of_discussion
      });
      setPointsDiscussion(response.data.elaborated_points);
      setElaborated(true);
      showAlert('Points elaborated successfully!', 'success');
    } catch (error) {
      console.error('Error elaborating points:', error);
      showAlert('Error elaborating points', 'danger');
    }
    setLoading(false);
  };

const handlePrompting = async () => {
  setPromptingLoading(true);
  try {
    const response = await axios.post('http://localhost:8000/api/generate-topic-prompting', {
      topic_id: topic._id
    });
    showAlert(response.data.message, 'success');
    // Fetch updated points discussion after prompting generation
    const updatedPointsDiscussion = await axios.get(`http://localhost:8000/api/points-discussion/${topic._id}`);
    setPointsDiscussion(updatedPointsDiscussion.data);
  } catch (error) {
    console.error('Error generating prompting summaries:', error);
    showAlert('Error generating prompting summaries', 'danger');
  }
  setPromptingLoading(false);
};

  const handleContent = async () => {
    setContentLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/api/generate-content', {
        topic_id: topic._id
      });
      setPointsDiscussion(response.data.generated_content);
      showAlert('Content generated successfully!', 'success');
    } catch (error) {
      console.error('Error generating content:', error);
      showAlert('Error generating content', 'danger');
    }
    setContentLoading(false);
  };

  const showAlert = (message, color) => {
    setAlert({ visible: true, message, color });
    setTimeout(() => setAlert({ visible: false, message: '', color: 'success' }), 5000);
  };

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

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
              <NavItem>
                <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => toggle('1')}>
                  Overview
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => toggle('2')}>
                  Elaboration
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => toggle('3')}>
                  Prompting
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => toggle('4')}>
                  Handout
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === '5' ? 'active' : ''} onClick={() => toggle('5')}>
                  Learning Objective
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === '6' ? 'active' : ''} onClick={() => toggle('6')}>
                  Assessment
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === '7' ? 'active' : ''} onClick={() => toggle('7')}>
                  Method
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === '8' ? 'active' : ''} onClick={() => toggle('8')}>
                  Quiz
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === '9' ? 'active' : ''} onClick={() => toggle('9')}>
                  Studi Kasus
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === '10' ? 'active' : ''} onClick={() => toggle('10')}>
                  Bahan Diskusi
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === '11' ? 'active' : ''} onClick={() => toggle('11')}>
                  Outline Presentasi
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === '12' ? 'active' : ''} onClick={() => toggle('12')}>
                  Script Bicara
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeTab === '13' ? 'active' : ''} onClick={() => toggle('13')}>
                  Actions
                </NavLink>
              </NavItem>
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
              <TabPane tabId="2">
                <H5>Elaborations</H5>
                <Accordion open={openAccordion} toggle={toggleAccordion}>
                  {pointsDiscussion.map((point, index) => (
                    <AccordionItem key={index}>
                      <AccordionHeader targetId={index.toString()}>{point.point_of_discussion}</AccordionHeader>
                      <AccordionBody accordionId={index.toString()}>
                        <Markdown>{point.elaboration || "No elaboration available."}</Markdown>
                      </AccordionBody>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabPane>
              <TabPane tabId="3">
                <H5>Prompting</H5>
                <Accordion open={openAccordion} toggle={toggleAccordion}>
                  {pointsDiscussion.map((point, index) => (
                    <AccordionItem key={index}>
                      <AccordionHeader targetId={`p${index}`}>{point.point_of_discussion}</AccordionHeader>
                      <AccordionBody accordionId={`p${index}`}>
                        <Markdown>
                            {point.prompting || "No prompting available."}
                          </Markdown>
                      </AccordionBody>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabPane>
              <TabPane tabId="4">
                <H5>Output Content</H5>
                <Accordion open={openAccordion} toggle={toggleAccordion}>
                  {pointsDiscussion.map((point, index) => (
                    <AccordionItem key={index}>
                      <AccordionHeader targetId={`h${index}`}>{point.point_of_discussion}</AccordionHeader>
                      <AccordionBody accordionId={`h${index}`}>
                        <Markdown>
                          {point.handout || "No handout content available."}
                        </Markdown>
                      </AccordionBody>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabPane>

              <TabPane tabId="5">
                <H5>Output Content</H5>
                <Accordion open={openAccordion} toggle={toggleAccordion}>
                  {pointsDiscussion.map((point, index) => (
                    <AccordionItem key={index}>
                      <AccordionHeader targetId={`h${index}`}>{point.point_of_discussion}</AccordionHeader>
                      <AccordionBody accordionId={`h${index}`}>
                        <Markdown>
                          {point.learn_objective || "No learn_objective content available."}
                        </Markdown>
                      </AccordionBody>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabPane>
              <TabPane tabId="6">
                <H5>Output Content</H5>
                <Accordion open={openAccordion} toggle={toggleAccordion}>
                  {pointsDiscussion.map((point, index) => (
                    <AccordionItem key={index}>
                      <AccordionHeader targetId={`h${index}`}>{point.point_of_discussion}</AccordionHeader>
                      <AccordionBody accordionId={`h${index}`}>
                        <Markdown>
                          {point.assessment || "No assessment content available."}
                        </Markdown>
                      </AccordionBody>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabPane>
              <TabPane tabId="7">
                <H5>Output Content</H5>
                <Accordion open={openAccordion} toggle={toggleAccordion}>
                  {pointsDiscussion.map((point, index) => (
                    <AccordionItem key={index}>
                      <AccordionHeader targetId={`h${index}`}>{point.point_of_discussion}</AccordionHeader>
                      <AccordionBody accordionId={`h${index}`}>
                        <Markdown>
                          {point.method || "No method content available."}
                        </Markdown>
                      </AccordionBody>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabPane>
              <TabPane tabId="8">
                      <H5>Output Content</H5>
                      <Accordion open={openAccordion} toggle={toggleAccordion}>
                        {pointsDiscussion.map((point, index) => (
                          <AccordionItem key={index}>
                            <AccordionHeader targetId={`h${index}`}>{point.point_of_discussion}</AccordionHeader>
                            <AccordionBody accordionId={`h${index}`}>
                              <Markdown>
                                {point.quiz || "No quiz content available."}
                              </Markdown>
                            </AccordionBody>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </TabPane>
              <TabPane tabId="9">
                    <H5>Output Content</H5>
                    <Accordion open={openAccordion} toggle={toggleAccordion}>
                      {pointsDiscussion.map((point, index) => (
                        <AccordionItem key={index}>
                          <AccordionHeader targetId={`h${index}`}>{point.point_of_discussion}</AccordionHeader>
                          <AccordionBody accordionId={`h${index}`}>
                            <Markdown>
                              {point.casestudy || "No casestudy content available."}
                            </Markdown>
                          </AccordionBody>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabPane>
              <TabPane tabId="10">
                    <H5>Output Content</H5>
                    <Accordion open={openAccordion} toggle={toggleAccordion}>
                      {pointsDiscussion.map((point, index) => (
                        <AccordionItem key={index}>
                          <AccordionHeader targetId={`h${index}`}>{point.point_of_discussion}</AccordionHeader>
                          <AccordionBody accordionId={`h${index}`}>
                            <Markdown>
                              {point.discussion || "No discussion content available."}
                            </Markdown>
                          </AccordionBody>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabPane>
              <TabPane tabId="11">
                    <H5>Output Content</H5>
                    <Accordion open={openAccordion} toggle={toggleAccordion}>
                      {pointsDiscussion.map((point, index) => (
                        <AccordionItem key={index}>
                          <AccordionHeader targetId={`h${index}`}>{point.point_of_discussion}</AccordionHeader>
                          <AccordionBody accordionId={`h${index}`}>
                            <Markdown>
                              {point.outline || "No outline content available."}
                            </Markdown>
                          </AccordionBody>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabPane>
              <TabPane tabId="12">
                    <H5>Output Content</H5>
                    <Accordion open={openAccordion} toggle={toggleAccordion}>
                      {pointsDiscussion.map((point, index) => (
                        <AccordionItem key={index}>
                          <AccordionHeader targetId={`h${index}`}>{point.point_of_discussion}</AccordionHeader>
                          <AccordionBody accordionId={`h${index}`}>
                            <Markdown>
                              {point.script || "No script available."}
                            </Markdown>
                          </AccordionBody>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabPane>                  

              <TabPane tabId="13">
                <Button color="primary" className="mb-2 w-100" onClick={handleElaborate} disabled={loading || elaborated}>
                  {loading ? 'Elaborating...' : elaborated ? 'Elaborated' : 'Elaborate'}
                </Button>
                <Button color="secondary" className="mb-2 w-100" onClick={handlePrompting} disabled={promptingLoading}>
                  {promptingLoading ? 'Generating...' : 'Prompting'}
                </Button>
                <Button color="info" className="mb-2 w-100" onClick={handleContent} disabled={contentLoading}>
                  {contentLoading ? 'Generating...' : 'Content'}
                </Button>
                <Button color="warning" className="mb-2 w-100">Evaluation</Button>
                <Button color="success" className="mb-2 w-100">Outline</Button>
                <Button color="primary" className="mb-2 w-100">Quiz</Button>
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
    </Card>
  );
};

export default TopicCardTab;