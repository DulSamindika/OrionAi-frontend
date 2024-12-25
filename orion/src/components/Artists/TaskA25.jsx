import React from 'react';
import './TaskA.css';
import { Container, Row, Col, Button, Card, Form, ProgressBar } from 'react-bootstrap'; // Added ProgressBar
import { useState } from 'react';
import Image from 'react-bootstrap/Image';



const TaskA25 = () => {

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
        <Col>
        <h2 className="task-title">Task 5</h2>
          <h4 className="text-secondary">Apply Advanced Color Gradients to an Image</h4>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={8}>
          <Card className='card'>
            <Card.Body className='card-body'>
              <Card.Title style={{color:"white"}}>Task Description</Card.Title>
              <Card.Text style={{color:"white"}}>
              At the Gallery of Light, the kingdom’s finest colorists are experimenting with gradients to add depth and vibrancy to their work. The Artisan Council calls on you to apply advanced color gradients to enhance an existing image, bringing it to life with stunning visual effects. </Card.Text>
              <Card.Title style={{color:"white"}}>Objective</Card.Title>
              <Card.Text style={{color:"white"}}>
              Write a prompt to transform an image with seamless gradients, focusing on blending complementary colors to create depth and evoke a specific mood (e.g., serene twilight or energetic dawn).   </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <h5>Model</h5>
          <Button 
          variant="dark"
          className={`mb-3 ${selectedModel === 'Dall-E' ? 'btn-selected' : ''}`}
          onClick={() => handleSelect('Dall-E')}>Dall-E</Button>
          
          <Button 
          variant="dark"
          className={`mb-3 ${selectedModel === 'Leanardo AI' ? 'btn-selected' : ''}`}
          onClick={() => handleSelect('Leanardo AI')}>Leanardo AI</Button>

          <Button 
          variant="dark"
          className={`mb-3 ${selectedModel === 'Midjourney' ? 'btn-selected' : ''}`}
          onClick={() => handleSelect('Midjourney')}>Midjourney</Button>

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
          <Button variant="warning" className="mt-3 btn-primary" onClick={handleGenerate}>Generate</Button>
        </Col>
        
      </Row>
      <Row>
      <Col xs={6} md={3}>
          <Image src="" style={{maxHeight:"900px" , maxWidth: "300px", marginTop: "30px"}} rounded />
      </Col>
        <Col xs={6} md={3}>
          <Image src="" style={{maxHeight:"900px" , maxWidth: "300px", marginTop: "30px"}} rounded />
        </Col>
        <Col xs={6} md={3}>
          <Image src="" style={{maxHeight:"900px" , maxWidth: "300px", marginTop: "30px"}} rounded />
        </Col>
        <Col xs={6} md={3}>
          <Image src=""style={{maxHeight:"900px" , maxWidth: "300px", marginTop: "30px"}} rounded />
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
        <Button variant="outline-light" style={{margin:"20px", justifyContent:"flex-start"}}onClick={() => window.location.href='/TaskA24'}>Back</Button>
        </Col>
        <Col md={8}>
        <h5>Level 5</h5>
        <ProgressBar animated now={100} className="custom-progress-bar" />

        </Col>
        <Col md={2}>
        <Button variant="light" style={{margin:"20px"}} onClick={() => window.location.href='/ArtistLvl3'}>Next Level</Button>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default TaskA25;