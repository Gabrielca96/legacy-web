import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router-dom";

export const Blog = () => {
  const { pathname } = useLocation();
  const cardImageStyle = {
    height: "12rem",
    objectFit: "cover",
  };

  let url_image_01 = "";
  let url_image_02 = "";
  let url_image_03 = "";
  let url_image_04 = "";
  let tittle_01 = "";
  let tittle_02 = "";
  let tittle_03 = "";
  let tittle_04 = "";
  let content_01 = "";
  let content_02 = "";
  let content_03 = "";
  let content_04 = "";

  switch (pathname) {
    case "/news":
      url_image_01 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_02 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_03 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_04 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      tittle_01 = "tittle_01";
      tittle_02 = "tittle_02";
      tittle_03 = "tittle_03";
      tittle_04 = "tittle_04";
      content_01 = "content_01";
      content_02 = "content_02";
      content_03 = "content_03";
      content_04 = "content_04";
      break;
    case "/sanitaria_project":
      url_image_01 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_02 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_03 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_04 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      tittle_01 = "";
      tittle_02 = "";
      tittle_03 = "";
      tittle_04 = "";
      content_01 = "Contenido del banner de la página de inicio";
      content_02 = "Contenido del banner de la página de inicio";
      content_03 = "Contenido del banner de la página de inicio";
      content_04 = "Contenido del banner de la página de inicio";
      break;
    case "/otros_project":
      url_image_01 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_02 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_03 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_04 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      tittle_01 = "";
      tittle_02 = "";
      tittle_03 = "";
      tittle_04 = "";
      content_01 = "Contenido del banner de la página de inicio";
      content_02 = "Contenido del banner de la página de inicio";
      content_03 = "Contenido del banner de la página de inicio";
      content_04 = "Contenido del banner de la página de inicio";
      break;
    case "/arquitectura_project":
      url_image_01 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_02 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_03 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_04 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      tittle_01 = "";
      tittle_02 = "";
      tittle_03 = "";
      tittle_04 = "";
      content_01 = "Contenido del banner de la página de inicio";
      content_02 = "Contenido del banner de la página de inicio";
      content_03 = "Contenido del banner de la página de inicio";
      content_04 = "Contenido del banner de la página de inicio";
      break;
    case "/tecnica_services":
      url_image_01 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_02 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_03 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_04 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      tittle_01 = "";
      tittle_02 = "";
      tittle_03 = "";
      tittle_04 = "";
      content_01 = "Contenido del banner de la página de inicio";
      content_02 = "Contenido del banner de la página de inicio";
      content_03 = "Contenido del banner de la página de inicio";
      content_04 = "Contenido del banner de la página de inicio";
      break;
    default:
      url_image_01 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_02 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_03 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_04 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      tittle_01 = "";
      tittle_02 = "";
      tittle_03 = "";
      tittle_04 = "";
      content_01 = "Contenido del banner de la página de inicio";
      content_02 = "Contenido del banner de la página de inicio";
      content_03 = "Contenido del banner de la página de inicio";
      content_04 = "Contenido del banner de la página de inicio";
  }

  return (
    <Row className="mt-5 mb-5 mx-auto my-3">
      <h2 className="mb-4">Publicaciones Legacy</h2>
      <Col>
        <Card className="mx-auto my-3" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            //src="https://posgrado.fceia.unr.edu.ar/images/fotos/carreras/esp_estructural.jpg"
            src={url_image_01}
            style={cardImageStyle}
          />
          <Card.Body>
            <Card.Title>{tittle_01}</Card.Title>
            <Card.Text>{content_01}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="/publicaciones">Leer más</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mx-auto my-3" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={url_image_02} style={cardImageStyle} />
          <Card.Body>
            <Card.Title>{tittle_02}</Card.Title>
            <Card.Text>{content_02}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="/publicaciones">Leer más</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mx-auto my-3" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={url_image_03} style={cardImageStyle} />
          <Card.Body>
            <Card.Title>{tittle_03}</Card.Title>
            <Card.Text>{content_03}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="/publicaciones">Leer más</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="mx-auto my-3" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={url_image_04} style={cardImageStyle} />
          <Card.Body>
            <Card.Title>{tittle_04}</Card.Title>
            <Card.Text>{content_04}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="//publicaciones">Leer más</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Card.Footer  className="mx-3 my-3">
      <p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </p>
        <small className="text-muted">
          Por {content_04} el {content_04}
        </small>
      </Card.Footer>
    </Row>
  );
};
