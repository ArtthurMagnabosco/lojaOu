import React, { useState } from 'react'
import styles from './sass/styles.css'

export const SobreNos_Duvidas = props => {

  const component = props?.component

  const items =
    component &&
    component?.map((el, index) => {
      const [open, setOpen] = useState(true)
  
      const title = el.name

      let isMobile = window.innerWidth <= 1024 ? true : false

      return (
        <div className={styles.containerSobreNos_Duvidas}>
          {isMobile ? (
            <div
              className={styles.containerTitulo}
              onClick={() => setOpen(!open)}
            >
              <h3 key={index} className={styles.titleSection}>
                {title}
              </h3>
              <span className={styles.arrows}>
                {open ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none">
                  <path d="M4.40591 1.27551C4.35279 1.22324 4.2896 1.18176 4.21997 1.15345C4.15034 1.12514 4.07565 1.11056 4.00022 1.11056C3.92479 1.11056 3.85011 1.12514 3.78048 1.15345C3.71085 1.18176 3.64765 1.22324 3.59453 1.27551L0.977539 3.83505C0.92442 3.88732 0.861223 3.9288 0.791593 3.95711C0.721963 3.98542 0.647279 4 0.571848 4C0.496417 4 0.421732 3.98542 0.352102 3.95711C0.282472 3.9288 0.219276 3.88732 0.166157 3.83505C0.059734 3.73057 -5.84761e-07 3.58924 -5.6076e-07 3.44192C-5.36759e-07 3.2946 0.059734 3.15327 0.166157 3.04879L2.78886 0.489245C3.11027 0.175965 3.54596 -3.75964e-07 4.00022 -3.01956e-07C4.45448 -2.27947e-07 4.89017 0.175966 5.21158 0.489246L7.83428 3.04879C7.93985 3.15265 7.99936 3.29284 7.99999 3.43913C8.00042 3.51252 7.98601 3.58527 7.95758 3.65321C7.92914 3.72115 7.88724 3.78295 7.83428 3.83505C7.78117 3.88732 7.71797 3.9288 7.64834 3.95711C7.57871 3.98543 7.50402 4 7.42859 4C7.35316 4 7.27848 3.98542 7.20885 3.95711C7.13922 3.9288 7.07602 3.88732 7.0229 3.83505L4.40591 1.27551Z" fill="white"/>
                </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none">
                    <path d="M4.40591 2.72452C4.35279 2.77679 4.2896 2.81827 4.21997 2.84658C4.15034 2.87489 4.07565 2.88947 4.00022 2.88947C3.92479 2.88947 3.85011 2.87489 3.78048 2.84658C3.71085 2.81827 3.64765 2.77679 3.59453 2.72452L0.977539 0.164978C0.92442 0.112712 0.861223 0.0712262 0.791593 0.0429159C0.721963 0.0146056 0.647279 3.04121e-05 0.571848 3.04244e-05C0.496417 3.04367e-05 0.421732 0.0146057 0.352102 0.042916C0.282472 0.0712263 0.219276 0.112712 0.166157 0.164978C0.059734 0.269458 -5.84761e-07 0.410791 -5.6076e-07 0.55811C-5.36759e-07 0.705429 0.059734 0.846763 0.166157 0.951242L2.78886 3.51078C3.11027 3.82406 3.54596 4.00003 4.00022 4.00003C4.45448 4.00003 4.89017 3.82406 5.21158 3.51078L7.83428 0.951241C7.93985 0.847376 7.99936 0.707187 7.99999 0.560897C8.00042 0.487509 7.98601 0.414758 7.95758 0.346817C7.92914 0.278876 7.88724 0.217082 7.83428 0.164977C7.78117 0.11271 7.71797 0.0712251 7.64834 0.0429148C7.57871 0.0146045 7.50402 2.9295e-05 7.42859 2.93073e-05C7.35316 2.93196e-05 7.27848 0.0146046 7.20885 0.0429149C7.13922 0.0712252 7.07602 0.112711 7.0229 0.164977L4.40591 2.72452Z" fill="white"/>
                  </svg>
                )}
              </span>
            </div>
          ) : (
            <div className={styles.containerInstitucionalDesk}>
              <div className={styles.colContainerDesk}>
                <h3 key={index} className={styles.titleSection}>
                  {title}
                </h3>

                <ul className={styles.containerLinksLista}>
                  {el.links?.map((link, linkIndex) => (
                    <li key={linkIndex} className={styles.containerLinkItem}>
                      <a
                        className={styles.containerLink}
                        href={link.link}
                        target={link.target_blank ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {open && (
            <ul className={styles.containerLinksLista}>
              {el.links?.map((link, linkIndex) => (
                <li className={styles.containerLinkItem} key={linkIndex}>
                  <a
                    className={styles.containerLink}
                    href={link.link}
                    target={link.target_blank ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )
    })

  return (
    <div className={styles.containerMasterSobreNos_Duvidas}>{items}</div>
  )
}

SobreNos_Duvidas.schema = {
  type: 'object',
  name: 'Menu Institucional',
  title: 'Menu Institucional',
  properties: {
    component: {
      type: 'array',
      title: 'Adicionar Título',
      name: 'Adicionar Título',
      items: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
            title: 'Título do bloco',
          },
          links: {
            type: 'array',
            title: 'Adicionar Link',
            name: 'Adicionar Link',
            items: {
              type: 'object',
              properties: {
                name: {
                  type: 'string',
                  title: 'Texto',
                },
                link: {
                  type: 'string',
                  title: 'Link',
                },
                target_blank: {
                  type: 'boolean',
                  title: 'Abrir em nova aba',
                },
              },
            },
          },
        },
      },
    },
  },
}
