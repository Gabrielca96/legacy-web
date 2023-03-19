import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const KitchenSinkExample = () => {
  const cardImageStyle = {
    height: "12rem",
    objectFit: "cover",
  };

  return (
    <Row className="mt-5 mb-5">
      <Col>
        <Card className="mx-auto my-3" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://posgrado.fceia.unr.edu.ar/images/fotos/carreras/esp_estructural.jpg"
            style={cardImageStyle}
          />
          <Card.Body>
            <Card.Title>Ingenieria estructural</Card.Title>
            <Card.Text>
            Diseño y análisis de estructuras, como edificios y puentes.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Diseño de estructuras</ListGroup.Item>
            <ListGroup.Item>Análisis estructural</ListGroup.Item>
            <ListGroup.Item>Inspección de estructuras</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Proyectos</Card.Link>
            <Card.Link href="#">Servicios</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mx-auto my-3" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.eluniverso.com/resizer/_eGTH7EHtOkeCGylDCZAL8gceYQ=/1004x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/WWQO3ZFJQVGXBMQ74TZGCFKB2Q.jpg"
            style={cardImageStyle}
          />
          <Card.Body>
            <Card.Title>Proyectos sanitarios</Card.Title>
            <Card.Text>
            Planificación y diseño de sistemas de agua potable y alcantarillado.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
            Sistemas de tratamiento de agua
            </ListGroup.Item>
            <ListGroup.Item>
            Sistemas de alcantarillado
            </ListGroup.Item>
            <ListGroup.Item>
              Tramites seremi
            </ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Proyectos</Card.Link>
            <Card.Link href="#">Servicios</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mx-auto my-3" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://proyectosanitario.cl/wp-content/uploads/2018/07/proyecto-sanitario-1.jpg"
            style={cardImageStyle}
          />
          <Card.Body>
            <Card.Title>Arquitectura</Card.Title>
            <Card.Text>
            Diseño y planificación de edificios y espacios públicos.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Diseño de edificios</ListGroup.Item>
            <ListGroup.Item>Planificación urbana</ListGroup.Item>
            <ListGroup.Item>Tramitaciones y regularizaciones</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Proyectos</Card.Link>
            <Card.Link href="#">Servicios</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mx-auto my-3" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://micarrerauniversitaria.com/wp-content/uploads/2018/01/construction.jpg"
            style={cardImageStyle}
          />
          <Card.Body>
            <Card.Title>Oficina técnica</Card.Title>
            <Card.Text>
            Servicios de apoyo técnico para empresas.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cubicación y presupuestos</ListGroup.Item>
            <ListGroup.Item>Consultoría técnica</ListGroup.Item>
            <ListGroup.Item>Asesoramiento en normativas.</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Proyectos</Card.Link>
            <Card.Link href="#">Servicios</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
