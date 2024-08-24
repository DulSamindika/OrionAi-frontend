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
            <a href="/wri" class="head-button">Join Us</a>
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
            <Button variant="light">Play Now</Button>
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
            <Button variant="light">Play Now</Button>
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
            <Button variant="light">Play Now</Button>
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



      
{/*<div class="blog-slider">
       <Swiper
        modules={[Mousewheel, Pagination, EffectFade]}
        spaceBetween={30}
        effect="fade"
        loop={true}
        mousewheel={{ invert: false }}
        pagination={{ clickable: true, el: '.blog-slider__pagination' }}
      >


  <div className="blog-slider__wrp swiper-wrapper">
  <Container>
  <SwiperSlide>
  <Row>
    <div className="blog-slider__item swiper-slide">
    <Col>
      <div className="blog-slider__img">
        
        <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt="home" />
      </div>
    </Col>
    <Col>
      <div className="blog-slider__content">
        <span className="blog-slider__code">26 December 2019</span>
        <div className="blog-slider__title">Lorem Ipsum Dolor</div>
        <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
        <a href="yhbb" className="blog-slider__button">READ MORE</a>
      </div>
      </Col>
    </div>
    </Row>
    </SwiperSlide>
    </Container>

    <SwiperSlide>
        <div className="blog-slider__item swiper-slide">
          <div className="blog-slider__img">
            <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt="home" />
          </div>
          <div className="blog-slider__content">
            <span className="blog-slider__code">26 December 2019</span>
            <div className="blog-slider__title">Lorem Ipsum Dolor</div>
            <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
            <a href="yhbb" className="blog-slider__button">READ MORE</a>
          </div>
        </div>
      </SwiperSlide>

    <SwiperSlide>
    <div className="blog-slider__item swiper-slide">
      <div className="blog-slider__img">
        <img src="hero.png" alt=""/>
      </div>
      <div className="blog-slider__content">
        <span className="blog-slider__code">26 December 2019</span>
        <div className="blog-slider__title">Lorem Ipsum Dolor2</div>
        <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
        <a href="ghhv" className="blog-slider__button">READ MORE</a>
      </div>
    </div>
    </SwiperSlide>

    <SwiperSlide>
    <div className="blog-slider__item swiper-slide">
      <div className="blog-slider__img">
        <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp" alt="" />
      </div>
      <div className="blog-slider__content">
        <span className="blog-slider__code">26 December 2019</span>
        <div className="blog-slider__title">Lorem Ipsum Dolor</div>
        <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
        <a href="hgf" className="blog-slider__button">READ MORE</a>
      </div>
    </div>
    </SwiperSlide>
  </div>
  <div class="blog-slider__pagination"></div>


  </Swiper>
</div>*/}
    </div>
  )
}

export default Home