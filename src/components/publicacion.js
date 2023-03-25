import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";

export const Publicacion = () => {
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
    case "/publicaciones":
      url_image_01 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_02 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_03 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      url_image_04 =
        "https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png";
      tittle_01 = "tittle_01";
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
    <Card className="mb-4">
      <Card.Title className="mt-4 mb-4 mx-auto my-3" style={{ fontSize: "3rem", color: "black", fontFamily: "Arial" }}>{tittle_01}</Card.Title>
      <Card.Img variant="top" src={url_image_01} className="mx-auto my-3" style={{ maxWidth: "80%", border: "1px solid #ccc", borderRadius: "5px" }}/>
      <Card.Body>
        <Card.Title>{tittle_01}</Card.Title>
        <Card.Text>{content_01}</Card.Text>
        <Button variant="primary" href="/contacto">
          Contacto
        </Button>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          Por {content_04} el {content_04}
        </small>
      </Card.Footer>
    </Card>
  );
};
