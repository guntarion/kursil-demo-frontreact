// src/Components/Pages/KursilPage/MainTopicDetailPageTwo.jsx
import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardBody, Button, Alert } from 'reactstrap';
import Breadcrumbs from '../../CommonElements/Breadcrumbs';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import TopicCardTab from '../../Component/Kursil/TopicCardTab';

const MainTopicDetailPage = () => {
  const { id } = useParams();
  const [mainTopic, setMainTopic] = useState(null);
  const [listTopics, setListTopics] = useState([]);
  const [generating, setGenerating] = useState({ kursil: false, handout: false, powerpoint: false });
  const [alert, setAlert] = useState({ visible: false, message: '', color: 'success' });

  useEffect(() => {
    fetchMainTopicDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchMainTopicDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/main-topics/${id}`);
      setMainTopic(response.data.main_topic);
      setListTopics(response.data.list_topics);
    } catch (error) {
      console.error('Error fetching main topic details:', error);
      showAlert('Error fetching main topic details', 'danger');
    }
  };

  const generateDocument = async (type) => {
    setGenerating({ ...generating, [type]: true });
    try {
      const response = await axios.post(`http://localhost:8000/api/generate-${type}-document`, { main_topic_id: id });
      if (response.status === 200) {
        showAlert(`${type.charAt(0).toUpperCase() + type.slice(1)} document generated successfully`, 'success');
        fetchMainTopicDetails();  // Refresh main topic details to get updated document paths
      }
    } catch (error) {
      console.error(`Error generating ${type} document:`, error);
      showAlert(`Error generating ${type} document`, 'danger');
    }
    setGenerating({ ...generating, [type]: false });
  };

  const downloadDocument = (type) => {
    let documentType = type;
    if (type === 'powerpoint') {
      documentType = 'presentation';  // Assuming the backend uses 'presentation' for PowerPoint documents
    }
    window.open(`http://localhost:8000/api/download-document/${id}/${documentType}`, '_blank');
  };

  const showAlert = (message, color) => {
    setAlert({ visible: true, message, color });
    setTimeout(() => setAlert({ ...alert, visible: false }), 5000); // Hide alert after 5 seconds
  };

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
                {alert.visible && (
                  <Alert color={alert.color} isOpen={alert.visible} toggle={() => setAlert({ ...alert, visible: false })}>
                    {alert.message}
                  </Alert>
                )}
                <p><strong>Cost:</strong> {mainTopic.cost.toFixed(2)} IDR</p>
                <p><strong>Objective:</strong> {mainTopic.main_topic_objective}</p>
                <div className="mt-4 mb-3">
                  <Row>
                    <Col md={4} className="mb-2">
                      <Button color="primary" onClick={() => generateDocument('kursil')} disabled={generating.kursil} className="w-100 mb-2">
                        {generating.kursil ? 'Generating...' : 'Generate Kursil'}
                      </Button>
                      <Button color="secondary" onClick={() => downloadDocument('kursil')} disabled={!mainTopic.latest_kursil_document} className="w-100">
                        Download Kursil
                      </Button>
                    </Col>
                    <Col md={4} className="mb-2">
                      <Button color="primary" onClick={() => generateDocument('handout')} disabled={generating.handout} className="w-100 mb-2">
                        {generating.handout ? 'Generating...' : 'Generate Handout'}
                      </Button>
                      <Button color="secondary" onClick={() => downloadDocument('handout')} disabled={!mainTopic.latest_handout_document} className="w-100">
                        Download Handout
                      </Button>
                    </Col>
                    <Col md={4} className="mb-2">
                      <Button color="primary" onClick={() => generateDocument('powerpoint')} disabled={generating.powerpoint} className="w-100 mb-2">
                        {generating.powerpoint ? 'Generating...' : 'Generate PowerPoint'}
                      </Button>
                      <Button color="secondary" onClick={() => downloadDocument('powerpoint')} disabled={!mainTopic.latest_powerpoint_document} className="w-100">
                        Download PowerPoint
                      </Button>
                    </Col>
                  </Row>
                </div>
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