import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import { useTranslation } from 'react-i18next';

import enTranslations from '../locales/en.json';
import esTranslations from '../locales/es.json';

//import logo from 'bootstrap-icons/icons/bootstrap.svg';
import logo from './../L.png';

import chileFlag from './../Logo-ch.jpg';
import usaFlag from './../Logo-eeuu.jpg';

export const AppNavbar = () => {

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  i18n.addResourceBundle('en', 'translation', enTranslations, true, false);
  i18n.addResourceBundle('es', 'translation', esTranslations, true, false);

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="100"
            height="70"
            className="d-inline-block align-top"
            alt="Bootstrap logo"
          />{' '}          
        </Navbar.Brand>
        <Navbar.Brand href="/">Legacy Ingeniería</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">{t("Inicio")}</Nav.Link>
            <Nav.Link href="/nosotros">{t("Nosotros")}</Nav.Link>
            <NavDropdown title={t("Servicios")} id="basic-nav-dropdown">
              <NavDropdown.Item href="/estructuras_services">
                Cálculo Estructural
              </NavDropdown.Item>
              <NavDropdown.Item href="/sanitario_services">
                Ingeniería Sanitaria
              </NavDropdown.Item>
              <NavDropdown.Item href="/tecnica_services">
                Dibujo Técnico
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/arquitectura_services">Arquitectura</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("Proyectos")} id="basic-nav-dropdown">
              <NavDropdown.Item href="estructuras_project">Cálculo estructural</NavDropdown.Item>
              <NavDropdown.Item href="sanitaria_project">
                Diseño Sanitario
              </NavDropdown.Item>
              <NavDropdown.Item href="arquitectura_project">Arquitectura</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="otros_project">Otros</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/news">{t("Publicaciones")}</Nav.Link>
            <Nav.Link href="/contacto">{t("Contacto")}</Nav.Link>
            <Nav.Link href="/job">{t("Trabaja con Nosotros!")}</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title={<span><FontAwesomeIcon icon={faGlobe} /> {t("Idioma")}</span>}  id="basic-nav-dropdown">
              <NavDropdown.Item active={i18n.language === 'es'} onClick={() => changeLanguage('es')}><Image src={chileFlag} width={24} /> {t("Español")}</NavDropdown.Item>
              <NavDropdown.Item active={i18n.language === 'en'} onClick={() => changeLanguage('en')}><Image src={usaFlag} width={24} /> {t("Inglés")}</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};





