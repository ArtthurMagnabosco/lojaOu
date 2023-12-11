import React from 'react'
import Slider from 'react-slick'
import styles from './sass/styles.css'
export const SliderHeader = props => {
  
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
                      <img className={styles.headerSliderImage}src={e.image}/>
                      <p className={styles.sliderHeaderText}key={idx}>
                        {e.text}
                      </p>
                           
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
          image: {
            title: 'Logo Junto ao texto(opcional)',
            type: 'string',
            widget: {
              'ui:widget': 'image-uploader',
            },
        },
      },
    },
  },
}
}
