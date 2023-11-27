import React, { } from "react";

const Css = (props) => {


  const { cssAdd } = props;
  const CssAdd =
    cssAdd &&
    cssAdd.map((unico, index_unico) => {

      return (
        <style key={index_unico}>
          {unico.cssTag}
        </style>
      )
    });

  return (
    <>
      {CssAdd}

    </>
  );

}


Css.schema = {
  type: "object",
  name: "Css Adicional",
  title: "Css Adicional",
  properties: {
    cssAdd: {
      type: "array",
      title: "Adicionar Css",
      name: "Adicionar Css",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
            title: "referencia",
          },
          cssTag: {
            type: "string",
            title: "CSS",
          }
        },
      },
    },
  },
};


export default Css;