import React from 'react'
import styles from './sass/styles.css'

export const BeneficiosFooter = ({items}) => {
    const arrayBeneficios = items;

    const ArrayBeneficiosMap = () => {
        return (
    
            <div className={styles.beneficios}>        
                {arrayBeneficios && arrayBeneficios?.map((e, idx) => {
                        return (
                          <div className={styles.beneficio}>
                              <img className={styles.imageBeneficio}src={e.image}/>
                              <p className={styles.textBeneficio}key={idx}>
                                {e.text}
                              </p>
                                   
                          </div>
                        )
                })}
                 
            </div> 
          )
    }
    return <div className={styles.todos_beneficios}><ArrayBeneficiosMap /></div>

    
  
}
BeneficiosFooter.schema = {
  type: 'object',
  name: 'Beneficios',
  title: 'Beneficios',
  properties: {
    items: {
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
            title: 'Logo Junto ao texto',
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
