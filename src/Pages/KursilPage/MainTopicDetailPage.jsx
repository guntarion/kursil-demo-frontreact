// src/Components/Pages/KursilPage/MainTopicDetailPageTwo.jsx
import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TopicCardTab from '../../Component/Kursil/TopicCardTab';

const MainTopicDetailPage = () => {
  const { id } = useParams();
  const [mainTopic, setMainTopic] = useState(null);
  const [listTopics, setListTopics] = useState([]);

  useEffect(() => {
    const fetchMainTopicDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/main-topics/${id}`);
        setMainTopic(response.data.main_topic);
        setListTopics(response.data.list_topics);
      } catch (error) {
        console.error('Error fetching main topic details:', error);
      }
    };

    if (id) {
      fetchMainTopicDetails();
    }
  }, [id]);

  if (!mainTopic) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <Breadcrumbs mainTitle="Kurikulum Silabus" parent="Kurikulum Silabus" title={mainTopic.main_topic} />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <p><strong>Cost:</strong> {mainTopic.cost.toFixed(2)} IDR</p>
                <p><strong>Objective:</strong> {mainTopic.main_topic_objective}</p>
                <h4 className="mt-4 mb-3">List of Topics:</h4>
                {listTopics.map((topic, index) => (
                  <TopicCardTab key={topic._id || index} topic={topic} />
                ))}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default MainTopicDetailPage;