import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Obj_mision = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://via.placeholder.com/50"
                alt="icono mision"
                style={{ marginRight: "10px" }}
              />
              <h3>Misión</h3>
            </div>
            <p>Ser una empresa confiable por profesionalismo, responsabilidad y valores en cada proyecto con buena asesoría y soluciones optimizadas a las necesidades de cada empresa.</p>
          </Row>
          <Row>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://via.placeholder.com/50"
                alt="icono vision"
                style={{ marginRight: "10px" }}
              />
              <h3>Visión</h3>
            </div>
            <p>Mantener el liderazgo en la región de Ñuble y ser reconocidos en el centro sur de Chile, apoyando el crecimiento multisectorial de las Pymes.</p>
          </Row>
          <Row>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://via.placeholder.com/50"
                alt="icono valores"
                style={{ marginRight: "10px" }}
              />
              <h3>Valores</h3>
            </div>
            <p>Detalle de los valores</p>
          </Row>
        </Col>
        <Col>
          <h3>Objetivos</h3>
          <ul>
            <li>Objetivo 1</li>
            <p>Detalle del objetivo 1</p>
            <li>Objetivo 2</li>
            <p>Detalle del objetivo 2</p>
            <li>Objetivo 3</li>
            <p>Detalle del objetivo 3</p>
            <li>Objetivo 4</li>
            <p>Detalle del objetivo 4</p>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};


//export default EjemploComponente;
