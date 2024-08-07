// src/Components/Pages/KursilPage/MainTopicPage.jsx

import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Badge, CardImg } from 'reactstrap';
import { Breadcrumbs } from '../../AbstractElements';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DEFAULT_IMAGE = 'https://bucket-titianbakat-ai-project.sgp1.cdn.digitaloceanspaces.com/kursil/webresources/icon_20240804_221729.png';

const MainTopicPage = () => {
  const [mainTopics, setMainTopics] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL || 'https://powerspeak.id/api';

  useEffect(() => {
    const fetchMainTopics = async () => {
      console.log("API URL:", API_URL);
      try {
        const url = `${API_URL}/main-topics/`;
        console.log("Fetching from:", url);
        const response = await axios.get(url);
        console.log("Response:", response.data);
        setMainTopics(response.data);
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

  const formatCurrency = (amount) => {
    return `Rp ${amount.toLocaleString('id-ID')}`;
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
                  {formatCurrency(topic.total_cost || 0)}
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