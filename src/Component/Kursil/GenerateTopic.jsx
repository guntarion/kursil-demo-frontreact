// src/Components/Kursil/GenerateTopic.jsx
import React, { useState } from 'react';
import { Input, Button, Form, FormGroup, Label, Card, CardBody, CardTitle } from 'reactstrap';
import axios from 'axios';
import './GenerateTopic.css'; // Make sure to create this CSS file

const API_URL = process.env.REACT_APP_API_URL;

const GenerateTopic = () => {
  const [topic, setTopic] = useState('');
  const [generatedContent, setGeneratedContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cost, setCost] = useState(null);
  const [summary, setSummary] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setGeneratedContent([]);
    setCost(null);
    setSummary('');

    try {
      const response = await axios.post(`${API_URL}/list-of-topics/`, { topic });
      // const response = await axios.post('http://localhost:8000/api/list-of-topics/', { topic });
      if (response.data && response.data.generated_content) {
        setGeneratedContent(response.data.generated_content);
        setCost(response.data.cost);
        setSummary(response.data.main_topic_objective);
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error generating topics:', error);
      setGeneratedContent([{ topic_name: 'Error generating topics. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="topicInput">Enter a topic:</Label>
          <Input
            type="text"
            id="topicInput"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Python Programming"
          />
        </FormGroup>
        <Button color="primary" type="submit" disabled={isLoading}>
          {isLoading ? 'Generating...' : 'Generate Topics'}
        </Button>
      </Form>
      {isLoading && <div className="loader mt-4"></div>}
      {summary && (
        <Card className="mt-4">
          <CardBody>
            <CardTitle tag="h5">Summary of Learning Objectives</CardTitle>
            <p>{summary}</p>
          </CardBody>
        </Card>
      )}
      {generatedContent.length > 0 && (
        <div className="mt-4">
          <h3>Generated Topics:</h3>
          {generatedContent.map((item, index) => (
            <Card key={index} className="mb-3">
              <CardBody>
                <CardTitle tag="h5">{item.topic_name}</CardTitle>
                <p><strong>Objective:</strong> {item.objective}</p>
                <p><strong>Key Concepts:</strong> {item.key_concepts}</p>
                <p><strong>Skills to be Mastered:</strong> {item.skills_to_be_mastered}</p>
                {item.point_of_discussion && item.point_of_discussion.length > 0 && (
                  <>
                    <p><strong>Points of Discussion:</strong></p>
                    <ul>
                      {item.point_of_discussion.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </>
                )}
              </CardBody>
            </Card>
          ))}
        </div>
      )}
      {cost !== null && (
        <div className="mt-2">
          <p>Cost: {cost.toFixed(2)} IDR</p>
        </div>
      )}
    </div>
  );
};

export default GenerateTopic;