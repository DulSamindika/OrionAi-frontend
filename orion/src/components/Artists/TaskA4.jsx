import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './TaskA.css';

const TaskA4 = () => {
  const [prompt, setPrompt] = useState('');
  const [output, setOutput] = useState('');
  const [improvedPrompt, setImprovedPrompt] = useState('');

  const handleGenerate = () => {
    // Simulating the AI response
    const aiResponse = `AI Response to: "${prompt}"`;
    setOutput(aiResponse);

    // Improve the prompt logic here if needed
    const improved = `Improved prompt based on: "${prompt}"`;
    setImprovedPrompt(improved);
  };

  return (
    <div style={{backgroundColor:"#121212"}}>
    <Container className="mt-5">
      <Row>
        <Col>
          <h2 className="task-title">Task 4</h2> {/* Updated styling class */}
          <h4 className="text-secondary">Design a Basic Character.</h4>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={8}>
          <Card className='card'>
            <Card.Body className='card-body'>
              <Card.Title style={{color:"white"}}>Task Description</Card.Title>
              <Card.Text style={{color:"white"}}>
              In the Hall of Simplicity, even the most common objects take on artistic significance. As a budding illustrator, your next challenge is to illustrate a basic object from the everyday world. Queen Sophia believes that through simplicity, profound beauty can be uncovered, and she invites you to showcase your ability to transform the ordinary into the extraordinary.
               </Card.Text>
              <Card.Title style={{color:"white"}}>Objective</Card.Title>
              <Card.Text style={{color:"white"}}>
              Illustrate a common object, such as a cup, tree, or book, with attention to detail and form. The goal is to highlight the object’s simplicity while capturing its aesthetic essence, in line with the minimalistic style of the Kingdom of Artists.
            </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <h5>Model</h5>
          <Button variant="dark" className="mb-3">Leonardo AI</Button>
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
          <Button variant="warning" className="mt-3" onClick={handleGenerate}>Generate</Button>
        </Col>
        <Col md={6}>
          <h5>Output</h5>
    
          <div className="image-row">
            <img src="/path_to_image1" alt="a" />
            <img src="/path_to_image2" alt="b" />
            <img src="/path_to_image3" alt="c" />
          </div>
          
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
        <Button variant="outline-light" style={{margin:"20px", justifyContent:"flex-start"}}onClick={() => window.location.href='/TaskA3'}>Back</Button>
        </Col>
        <Col md={8}>
        <h5>Level 1</h5>
        <ProgressBar animated now={80} />
        </Col>
        <Col md={2}>
        <Button variant="light" style={{margin:"20px"}} onClick={() => window.location.href='/TaskA5'}>Next Task</Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default TaskA4;
