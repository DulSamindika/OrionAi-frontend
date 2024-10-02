import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './TaskA.css';

const TaskA5 = () => {
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
          <h2 className="task-title">Task 5</h2> {/* Updated styling class */}
          <h4 className="text-secondary">Design a Basic Character.</h4>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={8}>
          <Card className='card'>
            <Card.Body className='card-body'>
              <Card.Title style={{color:"white"}}>Task Description</Card.Title>
              <Card.Text style={{color:"white"}}>
              In the Prism Chamber of the Kingdom of Artists, the art of transformation through filters is held in high regard. Your task is to apply basic filters to an image, altering its appearance while maintaining its original essence. The Queen believes that even the simplest changes can bring forth new perspectives, enhancing the artwork's emotional and visual impact.
                 </Card.Text>
              <Card.Title style={{color:"white"}}>Objective</Card.Title>
              <Card.Text style={{color:"white"}}>
              Apply basic filters such as grayscale, sepia, or blur to enhance or change the mood of an image. The goal is to manipulate the image while ensuring that the underlying artistic elements remain clear, symbolizing the transformative power of filters within the Kingdom of Artists.
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
        <Button variant="outline-light" style={{margin:"20px", justifyContent:"flex-start"}}onClick={() => window.location.href='/TaskA4'}>Back</Button>
        </Col>
        <Col md={8}>
        <h5>Level 1</h5>
        <ProgressBar animated now={100} />
        </Col>
        <Col md={2}>
        <Button variant="light" style={{margin:"20px"}} onClick={() => window.location.href=''}>Next Challenge</Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default TaskA5;
