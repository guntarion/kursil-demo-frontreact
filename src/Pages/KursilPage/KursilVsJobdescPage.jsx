// src/Component/Kursil/KursilVsJobdesc.jsx
import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, ListGroup, ListGroupItem, Collapse, Card, CardBody } from 'reactstrap';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './KursilVsJobdesc.css';

const API_URL = process.env.REACT_APP_API_URL;

const KursilVsJobdesc = () => {
  const [mainTopics, setMainTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [pointsOfDiscussion, setPointsOfDiscussion] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPointsVisible, setIsPointsVisible] = useState(false);
  const [namaJabatan, setNamaJabatan] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [analysisResult, setAnalysisResult] = useState('');

  useEffect(() => {
    fetchMainTopics();
  }, []);

  const fetchMainTopics = async () => {
    try {
      const response = await axios.get(`${API_URL}/main-topics/`);
      setMainTopics(response.data);
    } catch (error) {
      console.error('Error fetching main topics:', error);
    }
  };

  const handleTopicChange = (e) => {
    setSelectedTopic(e.target.value);
  };

  const handleListOut = async () => {
    if (!selectedTopic) return;

    setIsLoading(true);
    try {
      const response = await axios.get(`${API_URL}/all-points-of-discussion/${selectedTopic}`);
      setPointsOfDiscussion(response.data.points_of_discussion);
      setIsPointsVisible(true);
    } catch (error) {
      console.error('Error fetching points of discussion:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePoints = () => {
    setIsPointsVisible(!isPointsVisible);
  };

  const handleAnalisisKebutuhan = async () => {
    if (!selectedTopic || !namaJabatan || !jobDescription) return;

    setIsLoading(true);
    try {
      const response = await axios.post(`${API_URL}/analisis-kebutuhan`, {
        main_topic_id: selectedTopic,
        nama_jabatan: namaJabatan,
        job_description: jobDescription,
        points_of_discussion: pointsOfDiscussion
      });
      setAnalysisResult(response.data.result);
    } catch (error) {
      console.error('Error performing analysis:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="mainTopicSelect">Select Main Topic</Label>
          <Input
            type="select"
            name="mainTopic"
            id="mainTopicSelect"
            value={selectedTopic}
            onChange={handleTopicChange}
          >
            <option value="">Select a topic...</option>
            {mainTopics.map((topic) => (
              <option key={topic._id} value={topic._id}>
                {topic.main_topic}
              </option>
            ))}
          </Input>
        </FormGroup>
        <Button color="primary" onClick={handleListOut} disabled={!selectedTopic || isLoading} className="mb-3">
          {isLoading ? 'Loading...' : 'List Out'}
        </Button>
        {pointsOfDiscussion.length > 0 && (
          <Button color="secondary" onClick={togglePoints} className="mb-3 ml-2">
            {isPointsVisible ? 'Hide Points' : 'Show Points'}
          </Button>
        )}
      </Form>
      <Collapse isOpen={isPointsVisible}>
        <Card>
          <CardBody>
            <h3>Points of Discussion:</h3>
            <ListGroup>
              {pointsOfDiscussion.map((point, index) => (
                <ListGroupItem key={index}>{point}</ListGroupItem>
              ))}
            </ListGroup>
          </CardBody>
        </Card>
      </Collapse>
      <Form className="mt-4">
        <FormGroup>
          <Label for="namaJabatan">Nama Jabatan</Label>
          <Input
            type="text"
            name="namaJabatan"
            id="namaJabatan"
            value={namaJabatan}
            onChange={(e) => setNamaJabatan(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="jobDescription">Job Description</Label>
          <Input
            type="textarea"
            name="jobDescription"
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            rows="5"
          />
        </FormGroup>
        <Button color="primary" onClick={handleAnalisisKebutuhan} disabled={isLoading || !selectedTopic || !namaJabatan || !jobDescription}>
          {isLoading ? 'Analyzing...' : 'Analisis Kebutuhan'}
        </Button>
      </Form>
      {analysisResult && (
        <Card className="mt-4">
          <CardBody>
            <h3>Analysis Result:</h3>
            <ReactMarkdown className="markdown-content">{analysisResult}</ReactMarkdown>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default KursilVsJobdesc;