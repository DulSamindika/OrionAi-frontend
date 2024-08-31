import React from 'react'
import './home.css';

//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import {  Button } from 'react-bootstrap';
import './home.css';
//import Image from 'react-bootstrap/Image'
import {Link} from 'react-router-dom';

const  Home = () => {

 
  return (
    <div style={{backgroundColor:"#000000"}}>
        <div class="head-section">
        <div className="dark-overlay">
        <img src="./Images/hero.png" alt="Hero" class="head-image"/>
        </div>
        <div class="head-overlay">
            <h1 class="head-title">Orion AI</h1>
            <p class="head-text">A Magical Window to the Future</p>
            <a href="/writer" class="head-button">Join Us</a>
        </div>
       </div>






       <Carousel className="custom-carousel" >
      <Carousel.Item>
        <div className="carousel-content" style={{"background-color":"#0C0B45"}}>
          <div className="carousel-text" style={{"color":"white"}}>
            <h3>A kingdom of</h3>
            <h1><b><i>Writers</i></b></h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Link to='/wri'>
            <Button variant="light">Play Now</Button>
            </Link>
          </div>
          <div className="carousel-image">
            <img
              src="./Images/wri.png"
              alt="First slide"
              className="img-fluid"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-content" style={{"background-color":"#3A2104"}}>
          <div className="carousel-text" style={{"color":"white"}}>
            <h3>A kingdom of</h3>
            <h1><b><i>Artists</i></b></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Link to='/artists'>
            <Button variant="light">Play Now</Button>
            </Link>
          </div>
          <div className="carousel-image">
            <img
              src="./Images/artist.png"
              alt="Second slide"
              className="img-fluid"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-content" style={{"background-color":"#38054A"}}>
          <div className="carousel-text" style={{"color":"white"}}>
            <h3>A kindom of</h3>
            <h1><b><i>Musicians</i></b></h1>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <Link to='/musician'>
            <Button variant="light">Play Now</Button>
            </Link>
          </div>
          <div className="carousel-image">
            <img
              src="./Images/music.png"
              alt="Third slide"
              className="img-fluid"
            />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-content" style={{"background-color":"#0D2108"}}>
          <div className="carousel-text" style={{"color":"white"}}>
            <h3>A Kingdom of</h3>
            <h1><b><i>Programmers</i></b></h1>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            <Link to='/coders'>
            <Button variant="light">Play Now</Button>
            </Link>
          </div>
          <div className="carousel-image">
            <img
              src="./Images/program.png"
              alt="Third slide"
              className="img-fluid" 
            />
          </div>
        </div>
      </Carousel.Item>
    </Carousel>



      

    </div>
  )
}

export default Home