import { Container, Button, Row, Col } from "react-bootstrap";

export const TituloConTexto = () => {
  return (
    <Container
      className="bg-transparent py-3"
      style={{
        color: "#000000",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        marginTop: "20px",
        marginBottom: "200px",
      }}
    >
      <Row>
        <Col md={6}>
          <h2>¿Quienes somos?</h2>
          <p>
            Bienvenidos a nuestra empresa de ingeniería y arquitectura especializada
            en cálculo estructural. Nuestro equipo de expertos está comprometido en
            proporcionar servicios de alta calidad para asegurar que sus proyectos
            de construcción se ejecuten de manera segura y efectiva. Nos apasiona la
            innovación y nos enfocamos en aplicar las últimas tecnologías y técnicas
            para resolver los desafíos más complejos. Nos aseguramos de que cada
            proyecto sea único y personalizado para satisfacer las necesidades
            específicas de cada cliente. Ya sea que esté buscando un diseño
            estructural para una casa nueva o una renovación completa de un edificio
            existente, nuestro equipo está aquí para ayudarlo. Trabajamos
            estrechamente con nuestros clientes para garantizar que todos los
            proyectos se completen de manera oportuna y dentro del presupuesto.
            Nuestra experiencia y habilidades nos permiten manejar proyectos de
            cualquier tamaño y complejidad. Desde estructuras residenciales hasta
            grandes edificios comerciales, estamos comprometidos en proporcionar
            soluciones creativas y eficientes para satisfacer sus necesidades.
            Gracias por considerar a nuestra empresa para sus necesidades de
            ingeniería y arquitectura. Estamos ansiosos por trabajar con usted en su
            próximo proyecto.
          </p>
          <Button variant="primary" size="lg" className="mt-3">
            Ver más
          </Button>
        </Col>
        <Col md={6}>
          <img
            src="https://cdn.forbes.com.mx/2017/02/destinos-naturaleza-copia.jpg"
            alt="Imagen de fondo"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

