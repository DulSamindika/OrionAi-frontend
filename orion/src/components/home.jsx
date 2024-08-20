import React from 'react'
import './home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import  { Mousewheel, Pagination, EffectFade } from 'swiper/modules';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const  Home = () => {

 
  return (
    <div>
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


      
      <div class="blog-slider">
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
</div>
    </div>
  )
}

export default Home