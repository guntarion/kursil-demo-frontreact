// src/Component/Kursil/RagComponent.jsx
import React, { useState, useEffect } from 'react';
import { Table, Button, Input, Form, FormGroup, Label, Alert } from 'reactstrap';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const RagComponent = () => {
  const [mainTopics, setMainTopics] = useState([]);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');
  const [alert, setAlert] = useState({ visible: false, message: '', color: 'success' });

  useEffect(() => {
    fetchMainTopics();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMainTopics = async () => {
    try {
      const response = await axios.get(`${API_URL}/main-topics/`);
      setMainTopics(response.data);
    } catch (error) {
      console.error('Error fetching main topics:', error);
      showAlert('Error fetching main topics', 'danger');
    }
  };

  const handleIngest = async (mainTopicId) => {
    try {
      const response = await axios.post(`${API_URL}/ingest`, { main_topic_id: mainTopicId });
      showAlert(response.data.message, 'success');
    } catch (error) {
      console.error('Error ingesting data:', error);
      showAlert('Error ingesting data', 'danger');
    }
  };

  const handleQuery = async (e) => {
    e.preventDefault();
    if (!selectedTopic) {
      showAlert('Please select a topic first', 'warning');
      return;
    }
    try {
      const response = await axios.post(`${API_URL}/query`, { main_topic_id: selectedTopic, query });
      setResponse(response.data.response);
    } catch (error) {
      console.error('Error querying data:', error);
      showAlert('Error querying data', 'danger');
    }
  };

  const showAlert = (message, color) => {
    setAlert({ visible: true, message, color });
    setTimeout(() => setAlert({ visible: false, message: '', color: 'success' }), 5000);
  };

  return (
    <div>
      <h3>Main Topics</h3>
      <Table striped>
        <thead>
          <tr>
            <th>Action</th>
            <th>Main Topic</th>
          </tr>
        </thead>
        <tbody>
          {mainTopics.map((topic) => (
            <tr key={topic._id}>
              <td>
                <Button color="primary" onClick={() => handleIngest(topic._id)}>Ingest</Button>
              </td>
              <td>{topic.main_topic}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h3 className="mt-4">Query</h3>
      <Form onSubmit={handleQuery}>
        <FormGroup>
          <Label for="topicSelect">Select Topic</Label>
          <Input 
            type="select" 
            id="topicSelect" 
            value={selectedTopic} 
            onChange={(e) => setSelectedTopic(e.target.value)}
          >
            <option value="">Select a topic...</option>
            {mainTopics.map((topic) => (
              <option key={topic._id} value={topic._id}>{topic.main_topic}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="queryInput">Your Question</Label>
          <Input
            type="text"
            id="queryInput"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask your question here"
          />
        </FormGroup>
        <Button color="primary" type="submit">Submit Query</Button>
      </Form>

      {response && (
        <div className="mt-4">
          <h4>Response:</h4>
          <p>{response}</p>
        </div>
      )}

      {alert.visible && (
        <Alert color={alert.color} className="mt-3">
          {alert.message}
        </Alert>
      )}
    </div>
  );
};

export default RagComponent;