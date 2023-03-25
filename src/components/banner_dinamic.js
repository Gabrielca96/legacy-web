import React from "react";
import { Container } from "react-bootstrap";
import { Parallax } from 'react-parallax';
import { useLocation } from 'react-router-dom';

export const Banner_dinamic = () => {
  const { pathname } = useLocation();

  let bgImage = '';
  let content = '';

  switch(pathname) {
    case '/':
      bgImage = 'https://cymelectro.com/wp-content/uploads/2020/12/banner-servicios-ingenieria-civil.png';
      content = 'Contenido del banner de la página de inicio';
      break;
    case '/estructuras_services':
      bgImage = 'https://scontent.fscl13-2.fna.fbcdn.net/v/t31.18172-8/21753359_1907617345921647_4572085937034550538_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHwYAnb5O5k0tb-1Wet2yrqq6CYSFGuqWSroJhIUa6pZPE6Ve9PhFjrcN1hM9RA-8M&_nc_ohc=pLexVDYLNBkAX-C4FYV&_nc_ht=scontent.fscl13-2.fna&oh=00_AfBD1aGJh0fcrGFPa4b2E2u6vtfa_XXCT7rBgqbBIUg37g&oe=643DA87F';
      content = 'Contenido del banner de la página de nosotros';
      break;
    case '/sanitario_services':
      bgImage = 'https://scontent.fscl13-2.fna.fbcdn.net/v/t31.18172-8/21753359_1907617345921647_4572085937034550538_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHwYAnb5O5k0tb-1Wet2yrqq6CYSFGuqWSroJhIUa6pZPE6Ve9PhFjrcN1hM9RA-8M&_nc_ohc=pLexVDYLNBkAX-C4FYV&_nc_ht=scontent.fscl13-2.fna&oh=00_AfBD1aGJh0fcrGFPa4b2E2u6vtfa_XXCT7rBgqbBIUg37g&oe=643DA87F';
      content = 'Contenido del banner de la página de contacto';
      break;
    case '/arquitectura_services':
      bgImage = 'https://scontent.fscl13-2.fna.fbcdn.net/v/t31.18172-8/21753359_1907617345921647_4572085937034550538_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHwYAnb5O5k0tb-1Wet2yrqq6CYSFGuqWSroJhIUa6pZPE6Ve9PhFjrcN1hM9RA-8M&_nc_ohc=pLexVDYLNBkAX-C4FYV&_nc_ht=scontent.fscl13-2.fna&oh=00_AfBD1aGJh0fcrGFPa4b2E2u6vtfa_XXCT7rBgqbBIUg37g&oe=643DA87F';
      content = 'Contenido del banner de la página de contacto';
      break;
    case '/tecnica_services':
      bgImage = 'https://scontent.fscl13-2.fna.fbcdn.net/v/t31.18172-8/21753359_1907617345921647_4572085937034550538_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHwYAnb5O5k0tb-1Wet2yrqq6CYSFGuqWSroJhIUa6pZPE6Ve9PhFjrcN1hM9RA-8M&_nc_ohc=pLexVDYLNBkAX-C4FYV&_nc_ht=scontent.fscl13-2.fna&oh=00_AfBD1aGJh0fcrGFPa4b2E2u6vtfa_XXCT7rBgqbBIUg37g&oe=643DA87F';
      content = 'Contenido del banner de la página de contacto';
      break;
    case '/estructuras_project':
      bgImage = 'https://scontent.fscl13-2.fna.fbcdn.net/v/t39.30808-6/307274860_515135850614987_1075981866073457323_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeH3ydY2xI1UOSAJxEd1JIwlsseyJUpedoyyx7IlSl52jAmwQxaGcwp33HFsc3KfeTg&_nc_ohc=_cN7D_JyKM0AX-eaYES&_nc_zt=23&_nc_ht=scontent.fscl13-2.fna&oh=00_AfCNESd-Cf1AeGacVloPwAbrIT0nzfm57P7H0VJuDT__Zw&oe=641EF0B0';
      content = 'Contenido del banner de la página de contacto';
      break;
    case '/sanitaria_project':
      bgImage = 'http://pichilemusur.cl/wp-content/uploads/2018/08/proyectos-domiciliarios_1.jpg';
      content = 'Contenido del banner de la página de contacto';
      break;
    case '/arquitectura_project':
      bgImage = 'https://www.arquitecturaydiseno.es/medio/2020/07/29/la-vivienda-de-formas-aerodinamicas-lleva-su-relacion-con-el-agua-a-otro-nivel-de-la-mano-del-arquitecto-frances-david-tajchman-43692def-1500x871_87fab854_1200x630.jpg';
      content = 'Contenido del banner de la página de contacto';
      break;
    case '/otros_project':
      bgImage = 'https://www.grupopuentes.com/wp-content/uploads/2021/04/web1_pontevedra-1920x1082.jpg';
      content = 'Contenido del banner de la página de contacto';
      break;
    default:
      bgImage = 'https://example.com/default-image.jpg';
      content = 'Contenido del banner de la página por defecto';
  }

  return (
    <Parallax bgImage={bgImage} strength={500}>
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Container>
          <h1>{content}</h1>
        </Container>
      </div>
    </Parallax>
  );
};




