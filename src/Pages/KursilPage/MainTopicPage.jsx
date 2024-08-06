import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Badge, CardImg } from 'reactstrap';
import { Breadcrumbs } from '../../AbstractElements';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DEFAULT_IMAGE = 'https://bucket-titianbakat-ai-project.sgp1.cdn.digitaloceanspaces.com/kursil/webresources/icon_20240804_221729.png';

const MainTopicPage = () => {
  const [mainTopics, setMainTopics] = useState([]);

  useEffect(() => {
    console.log('REACT_APP_API_URL:', process.env.REACT_APP_API_URL);

    const fetchMainTopics = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/main-topics/`);
        setMainTopics(response.data);
        
        response.data.forEach(topic => {
          console.log(`Topic: ${topic.main_topic}, Image Link: ${topic.link_image_icon}, Total Cost: ${topic.total_cost}`);
        });
      } catch (error) {
        console.error('Error fetching main topics:', error);
      }
    };

    fetchMainTopics();
  }, []);

  const handleImageError = (e, topicName) => {
    console.error(`Error loading image for topic: ${topicName}`);
    e.target.src = DEFAULT_IMAGE;
  };

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Kurikulum Silabus" parent="Kurikulum Silabus" title="Main Topic" />
      <Container fluid={true} className="py-4">
        <Row className="g-4">
          {mainTopics.map((topic) => (
            <Col key={topic._id} sm="6" md="4" lg="3">
              <Card className="h-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardImg 
                  top 
                  width="100%" 
                  src={topic.link_image_icon || DEFAULT_IMAGE} 
                  alt={`Icon for ${topic.main_topic}`}
                  style={{ height: '200px', objectFit: 'cover' }}
                  onError={(e) => handleImageError(e, topic.main_topic)}
                />
                <CardBody className="d-flex flex-column">
                  <CardTitle tag="h5" className="mb-3">
                    <span className="me-2">📚</span>
                    {topic.main_topic}
                  </CardTitle>
                  <CardText className="text-muted mb-3">
                    <span className="me-1">💰</span>
                    Total Cost: {topic.total_cost ? topic.total_cost.toFixed(2) : '0.00'} IDR
                  </CardText>
                  <Link 
                    to={`/kursil/main-topic/${topic._id}`}
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