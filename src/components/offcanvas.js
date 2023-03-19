import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const OffCanvas = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const subtituloStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  return (
    <>
      <div className="my-4">
        <Button variant="primary" onClick={handleShow} style={{ marginLeft: '10px', marginTop: '-20px'}}>
          Resumen
        </Button>

        <Offcanvas show={show} onHide={handleClose} style={{ marginLeft: '0px' }}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Soluciones Legacy:</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <h3 style={subtituloStyle}>Ingeniería Civil</h3>
            <ul>
              <li>Calculo de casas</li>
              <li>Caluclo naves Industriales</li>
              <li>Planimetria de proyectos</li>
            </ul>
            <h3 style={subtituloStyle}>Arquitectura</h3>
            <ul>
              <li>Diseños personalizados</li>
              <li>Maquetas 3D</li>
              <li>Planos de arquitectura</li>
              <li>Tramites municipales</li>
            </ul>
            <h3 style={subtituloStyle}>Especialidades</h3>
            <ul>
              <li>Proyectos Electricos</li>
              <li>Proyectos Sanitarios</li>
              <li>Presupuestos y cubicaciones</li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}


  

