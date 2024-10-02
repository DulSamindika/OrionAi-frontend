import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Task.css';

const Task5 = () => {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [improvedPrompt, setImprovedPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState(null);

  const handleGenerate = () => {
    // Simulating the Oracle's response
    const oracleResponse = `Oracle Response to: "${prompt}"`;
    setOutput(oracleResponse);

    // Improve the prompt logic here if needed
    const improved = `Improved prompt based on: "${prompt}"`;
    setImprovedPrompt(improved);
  };



  const handleSelect = (model) => {
    setSelectedModel(model);
  };


  return (
    <div style={{backgroundColor:"#121212"}}>
    <Container className="mt-5">
      <Row>
        <Col md={8}>
          <h2 className="text-primary">Task 5</h2>
          <h4 className="text-secondary">Text Summary</h4>
        </Col>
        <Col md={4}>
        <div className="scoreboard">
          <img src="path_to_your_image.png" alt="Scoreboard" />
          <h4>Score</h4>
        </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={8}>
          <Card className='card'>
            <Card.Body className='card-body'>
              <Card.Title style={{color:"white"}}>Task Description</Card.Title>
              <Card.Text style={{color:"white"}}>
              In the Kingdom of Writers, the ability to distill information into its most essential form is a crucial skill. Your task is to summarize a provided text, focusing on its main ideas and themes. The goal is to reduce the text to its core message while maintaining the integrity and intent of the original content. This summary should be clear, concise, and easy to understand, allowing readers to grasp the essential points without needing to read the entire passage.
              </Card.Text>
              <Card.Title style={{color:"white"}}>Objective</Card.Title>
              <Card.Text style={{color:"white"}}>
              Create a summary of the provided text that captures the key points and main ideas, preserving the original message in a concise and clear format.
              </Card.Text>
              <Card.Title style={{color:"white"}}>Example Text</Card.Title>
              <Card.Text style={{color:"white"}}>
              "In the Kingdom of Writers, every word carries weight. The citizens, known as Wordsmiths, have honed the craft of writing over generations, using their skills to weave narratives that inspire, educate, and entertain. The kingdom thrives on the creativity of its people, who work tirelessly to ensure that the written word remains a powerful tool for communication and expression. However, with the rise of new technologies, the Wordsmiths face the challenge of adapting their traditional craft to modern platforms without losing the essence of their art. This transition is critical for the survival of their cultural heritage and the continued relevance of their stories in a rapidly changing world."
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <h5>Model</h5>
          <Button
              variant="dark"
              className={`mb-3 ${selectedModel === 'GPT-3' ? 'btn-selected' : ''}`}
              onClick={() => handleSelect('GPT-3')}
            >
              GPT-3
            </Button>

            <Button
              variant="dark"
              className={`mb-3 ${selectedModel === 'GPT-4' ? 'btn-selected' : ''}`}
              onClick={() => handleSelect('GPT-4')}
            >
              GPT-4
            </Button>

            <Button
              variant="dark"
              className={`mb-3 ${selectedModel === 'Gimini' ? 'btn-selected' : ''}`}
              onClick={() => handleSelect('Gimini')}
            >
              Gimini
            </Button>

          <h5>Tutorials</h5>
          <Button variant="secondary" className="mb-2">Tutorial 1</Button>
          <Button variant="secondary" className="mb-2">Tutorial 2</Button>
          <Button variant="secondary" className="mb-2">Tutorial 3</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h5>Your Prompt</h5>
          <Form.Control 
            as="textarea" 
            rows={3} 
            value={prompt} 
            onChange={(e) => setPrompt(e.target.value)} 
            className="Formarea"
          />
          <Button variant="primary" className="mt-3" onClick={handleGenerate}>Generate</Button>
        </Col>
        <Col md={6}>
          <h5>Output</h5>
          <Card>
            <Card.Body>{output}</Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h5>Improved Prompt</h5>
          <Card>
            <Card.Body>{improvedPrompt}</Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{margin:"50px"}}>
        <Col md={2}>
        <Button variant="outline-light" style={{margin:"20px", justifyContent:"flex-start"}}onClick={() => window.location.href='/Task4'}>Back</Button>
        </Col>
        <Col md={8}>
        <h5>Level 1</h5>
        <ProgressBar animated now={100} />
        </Col>
        <Col md={2}>
        <Button variant="light" style={{margin:"20px", alignContent:"flex-end", justifyContent:"left"}}>Next Level</Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Task5;