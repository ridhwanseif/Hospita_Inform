import React from "react";
import {Carousel} from "react-bootstrap";
import Img1 from "./w1.jpg";
import Img2 from "./3.jpg";
import Img3 from "./ict.jpg";
import './carousel.css';

function ControlledCarousel() {
    return(
      <div className="carousel">
          <Carousel variant="dark" fade={true}>
  <Carousel.Item>
    <img
      className="d-block w-100"
    src={Img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Img3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>
    );
  }
  
  export default ControlledCarousel;
