// src/Component/Kursil/KursilVsJobdesc.jsx
import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, ListGroup, ListGroupItem } from 'reactstrap';
import axios from 'axios';


const API_URL = process.env.REACT_APP_API_URL;

const KursilVsJobdesc = () => {
  const [mainTopics, setMainTopics] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('');
  const [pointsOfDiscussion, setPointsOfDiscussion] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    } catch (error) {
      console.error('Error fetching points of discussion:', error);
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
        <Button color="primary" onClick={handleListOut} disabled={!selectedTopic || isLoading}>
          {isLoading ? 'Loading...' : 'List Out'}
        </Button>
      </Form>
      {pointsOfDiscussion.length > 0 && (
        <div className="mt-4">
          <h3>Points of Discussion:</h3>
          <ListGroup>
            {pointsOfDiscussion.map((point, index) => (
              <ListGroupItem key={index}>{point}</ListGroupItem>
            ))}
          </ListGroup>
        </div>
      )}
    </div>
  );
};

export default KursilVsJobdesc;