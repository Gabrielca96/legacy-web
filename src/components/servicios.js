import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export const Services = () => {
  const { pathname } = useLocation();

  const style = {
    textAlign: "justify",
    textJustify: "inter-word", // Esto ayuda a evitar espacios demasiado grandes entre palabras
  };

  let title = "";
  let paragraph = "";
  let imageSrc = "";

  switch (pathname) {
    case "/estructuras_services":
      title = "Ingenieria de Estructuras";
      paragraph =
        "La ingeniería estructural o cálculo estructural en Chile se enfoca en el diseño, análisis y evaluación de estructuras y sistemas constructivos para diversas edificaciones, incluyendo casas, naves industriales, edificios de oficinas, centros comerciales, entre otros.En el caso de las casas, la ingeniería estructural se encarga de diseñar y calcular los elementos que conforman la estructura de la vivienda, tales como los cimientos, muros, vigas, columnas, entre otros, para garantizar su resistencia y seguridad ante cargas externas como el viento, la lluvia, sismos, etc. En el caso de las naves industriales y edificaciones similares, la ingeniería estructural se enfoca en el diseño y análisis de sistemas constructivos más complejos, que deben cumplir con normativas y estándares específicos de seguridad y resistencia. En general, la ingeniería estructural en Chile tiene como objetivo principal garantizar la estabilidad y seguridad de las estructuras y edificaciones, mediante la aplicación de conocimientos técnicos y herramientas de análisis avanzadas. Además, los ingenieros estructurales en Chile deben estar actualizados y capacitados para trabajar con las regulaciones y normativas locales y nacionales que rigen la construcción y el diseño de edificios y estructuras.";
      imageSrc =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      break;

    case "/sanitario_services":
      title = "Título de la página 2";
      paragraph = "Texto de la página 2";
      imageSrc =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      break;

    case "/arquitectura_services":
      title = "Título de la página 2";
      paragraph = "Texto de la página 2";
      imageSrc =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      break;
      
    case "/tecnica_services":
      title = "Título de la página 2";
      paragraph = "Texto de la página 2";
      imageSrc =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      break;

    default:
      title = "Título por defecto";
      paragraph = "Texto por defecto";
      imageSrc = "https://imagenpordefecto.com";
      break;
  }

  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col md={4}>
          <h2>{title}</h2>
        </Col>
      </Row>
      <Row className="mt-3 mb-5">
        <Col>
          <p style={style}>{paragraph}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={imageSrc} alt="Imagen" className="img-fluid" />
        </Col>
      </Row>
    </Container>
  );
};
