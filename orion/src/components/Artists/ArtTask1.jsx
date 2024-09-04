import React from 'react';
import './ArtTask.css';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import { useState } from 'react';
import Image from 'react-bootstrap/Image';


const ArtTask1 = () => {

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
          <h2 className="text-primary" style={{color:"#c4b211"}}>Task 1</h2>
          <h4 className="text-secondary">Simple Email Writing and reply.</h4>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={8}>
          <Card className='card'>
            <Card.Body className='card-body'>
              <Card.Title style={{color:"white"}}>Task Description</Card.Title>
              <Card.Text style={{color:"white"}}>
                In the heart of the Acropolis of Code, an ancient Oracle has awakened, foretelling a coming storm that threatens the harmony between man and machine. Queen Sophia, wise and just, has summoned the most skilled promptsmiths to her court.
                As a Promptian, your first task is to craft a simple yet powerful prompt that can guide the Oracle to reveal more about this impending danger. The prompt must be clear and precise, as the Oracle's response will shape the kingdom's next steps.
              </Card.Text>
              <Card.Title style={{color:"white"}}>Objective</Card.Title>
              <Card.Text style={{color:"white"}}>
                Create a prompt that will ask the Oracle to describe the nature of the threat posed by the Silencers and suggest ways to safeguard the kingdom. Keep it concise, ensuring the Oracle understands and responds with valuable insights.
              </Card.Text>
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
        <Col md={6}>
          <h5>Output</h5>
          <Card>
            <Card.Body>{output}</Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
      <Col xs={6} md={3}>
          <Image src="./Images/artOutput1.jpg" style={{maxHeight:"900px" , maxWidth: "300px", marginTop: "30px"}} rounded />
      </Col>
        <Col xs={6} md={3}>
          <Image src="./Images/artOutput2.jpg" style={{maxHeight:"900px" , maxWidth: "300px", marginTop: "30px"}} rounded />
        </Col>
        <Col xs={6} md={3}>
          <Image src="./Images/artOutput3.jpg" style={{maxHeight:"900px" , maxWidth: "300px", marginTop: "30px"}} rounded />
        </Col>
        <Col xs={6} md={3}>
          <Image src="./Images/artOutput4.jpg"style={{maxHeight:"900px" , maxWidth: "300px", marginTop: "30px"}} rounded />
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
        <ProgressBar animated now={40} />
        </Col>
        <Col md={2}>
        <Button variant="light" style={{margin:"20px", alignContent:"flex-end", justifyContent:"left"}}>Next Task</Button>
        </Col>
      </Row>
    </Container>
    </div>
    );
}

export default ArtTask1;
