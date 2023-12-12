import React, { useState } from 'react'
import styles from './sass/styles.css'

export const Formas_de_pagamento = props => {
   
  const items = props?.items

  const component = items && items?.map((e, index) => { 
      return (       
            <img className={styles.image_forma_pagamento} src={e.image} alt="" />
      )})

  return (
    <div className={styles.containerMasterFormas_de_pagamento}> {component} </div>
  )
}


Formas_de_pagamento.schema = {
  type: 'object',
  name: 'Formas de pagamento',
  title: 'Formas de pagamento',
  properties: {
    items: {
      type: 'array',
      title: 'Adicionar Forma de pagamento',
      name: 'Adicionar Forma de pagamento',
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
