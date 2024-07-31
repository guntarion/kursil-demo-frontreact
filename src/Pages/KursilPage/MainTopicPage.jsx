// src/Components/Pages/KursilPage/MainTopicPage.jsx
import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Badge } from 'reactstrap';
import { Breadcrumbs } from '../../AbstractElements';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MainTopicPage = () => {
  const [mainTopics, setMainTopics] = useState([]);

  useEffect(() => {
    const fetchMainTopics = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/main-topics/');
        setMainTopics(response.data);
      } catch (error) {
        console.error('Error fetching main topics:', error);
      }
    };

    fetchMainTopics();
  }, []);

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Kurikulum Silabus" parent="Kurikulum Silabus" title="Main Topic" />
      <Container fluid={true} className="py-4">
        <Row className="g-4">
          {mainTopics.map((topic) => (
            <Col key={topic._id} sm="6" md="4" lg="3">
              <Card className="h-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardBody className="d-flex flex-column">
                  <CardTitle tag="h5" className="mb-3">
                    <span className="me-2">📚</span> {/* Unicode book emoji */}
                    {topic.main_topic}
                  </CardTitle>
                  <CardText className="text-muted mb-3">
                    <span className="me-1">💰</span> {/* Unicode money bag emoji */}
                    Cost: {topic.cost.toFixed(2)} IDR
                  </CardText>
                  <Link 
                    to={`/zeta/kursil/main-topic/${topic._id}`}
                    className="btn btn-primary mt-auto"
                  >
                    View Details
                  </Link>
                </CardBody>
                <Badge 
                  color="info" 
                  className="position-absolute top-0 end-0 m-2"
                >
                  Topic
                </Badge>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default MainTopicPage;