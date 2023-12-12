import React, { useState } from 'react'
import styles from './sass/styles.css'

export const Redes_sociais_footer = props => {
  
  const items = props?.items

  const component = items && items?.map((e, index) => { 
      return (       
            <a className={styles.imageRede_social} href={e.link}><img src={e.image} alt="" /></a>
      )})

  return (
    <div className={styles.containerMasterRedes_sociais}> {component} </div>
  )
}


Redes_sociais_footer.schema = {
  type: 'object',
  name: 'Redes sociais',
  title: 'Redes sociais',
  properties: {
    items: {
      type: 'array',
      title: 'Adicionar Redes sociais',
      name: 'Adicionar Redes sociais',
      items: {
        type: 'object',
        properties: {
          link: {
            type: 'string',
            title: 'Link',
          },
          image: {
            title: 'Imagem',
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
