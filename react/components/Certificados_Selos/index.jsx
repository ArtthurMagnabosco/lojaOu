import React, { useState } from 'react'
import styles from './sass/styles.css'

export const Certificados_Selos = props => {
   
  const items = props?.items

  const component = items && items?.map((e, index) => { 
      return (       
            <img className={styles.image_certificados_Selos} src={e.image} alt="" />
      )})

  return (
    <div className={styles.containerMasterCertificados_Selos}> {component} </div>
  )
}


Certificados_Selos.schema = {
  type: 'object',
  name: 'Certificados Selos',
  title: 'Certificados Selos',
  properties: {
    items: {
      type: 'array',
      title: 'Adicionar Certificados ou Selos',
      name: 'Adicionar Certificados ou Selos',
      items: {
        type: 'object',
        properties: {
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
