import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Task.css';

const Task4 = () => {
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
          <h2 className="text-primary">Task 4</h2>
          <h4 className="text-secondary">Crafting Blog Post</h4>
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
              In the Kingdom of Writers, storytelling is at the heart of every word crafted. As the kingdom evolves, it's vital to remind its citizens of the enduring power of stories. Your task is to write a blog post that explores the art of storytelling, highlighting its role in shaping culture, inspiring change, and connecting people across generations. Discuss how storytelling can be used as a tool for expression, creativity, and influencing the world around us. Your post should encourage readers to embrace storytelling in their writing and daily interactions, sparking their imagination and creativity.
              </Card.Text>
              <Card.Title style={{color:"white"}}>Objective</Card.Title>
              <Card.Text style={{color:"white"}}>
              Write a blog post that inspires the citizens of the Kingdom of Writers to embrace the art of storytelling and use it as a powerful tool for expression, creativity, and cultural influence.
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
        <Button variant="outline-light" style={{margin:"20px", justifyContent:"flex-start"}}>Back</Button>
        </Col>
        <Col md={8}>
        <h5>Level 1</h5>
        <ProgressBar animated now={80} />
        </Col>
        <Col md={2}>
        <Button variant="light" style={{margin:"20px", alignContent:"flex-end", justifyContent:"left"}}>Next Task</Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Task4;
