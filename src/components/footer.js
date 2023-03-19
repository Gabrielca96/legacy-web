import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => {

  const style = {
      //position: 'absolute',
      bottom: '0',
      width: '100%'
  };

  return (
    <Navbar bg="dark" variant="dark" style={style}>
      <Container>
        <Navbar.Brand>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mx-1"><FaLinkedinIn /></a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="mx-1"><FaFacebookF /></a>
          <a href="https://www.instagram.com/legacy_ing/" target="_blank" rel="noopener noreferrer" className="mx-1"><FaInstagram /></a>
        </Navbar.Brand>
        <Navbar.Text className="text-muted">
          © {new Date().getFullYear()} Legacy Ingeniería. Todos los derechos reservados.
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}
