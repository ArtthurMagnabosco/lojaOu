import React from 'react'
import Slider from 'react-slick'
import styles from './sass/styles.css'
export const SliderHeader = props => {
  //  console.log(props)
  const container = props.container

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    arrows: false,
  }

  

  return (
    
    <section>
         <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <Slider className={styles.sliderHeader} {...settings}>
            {container &&
              container?.map((e, idx) => {
                return (
                  <div className={styles.headerSliderBenefitsLine}>
                    
                      <p className={styles.sliderHeaderText}key={idx}>
                        {e.text}
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                      <circle cx="2" cy="2" r="2" fill="#C8C8C8"/>
                      </svg>          
                  </div>
                )
              })}
          </Slider>
        </section>
    
   
  )
}
SliderHeader.schema = {
  type: 'object',
  name: 'Slider Header',
  title: 'Slider Header',
  properties: {
    container: {
      type: 'array',
      title: 'Adicionar Frase',
      name: 'Adicionar Frase',
      items: {
        type: 'object',
        properties: {
          text: {
            type: 'string',
            title: 'Texto',
          },
        },
      },
    },
  },
}

