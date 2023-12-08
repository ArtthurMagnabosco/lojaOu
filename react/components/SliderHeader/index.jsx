import React from "react";
import Slider from "react-slick";

export const SliderHeader = () => {

    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1
    // };
    
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>Enviamos para todo o Brasil</h3>
          </div>
          <div>
            <h3>Ganhe 5% de desconto no PIX </h3>
          </div>
          <div>
            <h3>Ganhe 10% OFF na sua primeira compra aqui</h3>
          </div>         
        </Slider>
      </div>
    );
  }
