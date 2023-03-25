import React from "react";
import { AppNavbar } from "../components/navbar";
import { Banner } from "../components/banner";
import { KitchenSink } from "../components/kitchen_sink";
import { Footer } from "../components/footer";
import { OffCanvas } from "../components/offcanvas";
import { WhatsAppButton } from "../components/whatsApp_button";
import { Nosotros } from "../components/nosotros";
import { ContactForm } from "../components/contact-form";
import { Contact_Job_Form } from "../components/job-format";
import { News } from "../components/news";
import { Obj_mision } from "../components/objetivos-mision";
import { Banner_dinamic } from "../components/banner_dinamic";
import { Services } from "../components/servicios";
import { Kitchen_sink_project } from "../components/projects";
import { MoviePlayer } from "../components/movies";
import { Blog } from "../components/blog";
import { Publicacion } from "../components/publicacion"

function Route01() {
  return (
    <div>
      <AppNavbar />
      <Banner />
      <p>
        <br />
        <br />
      </p>
      <Banner_dinamic />
      <KitchenSink />
      <Obj_mision />
      <p>
        <br />
        <br />
      </p>
      <OffCanvas />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

function Route02() {
  return (
    <div>
      <AppNavbar />
      <p>
        <br />
        <br />
        <br />
      </p>
      <Nosotros />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

function Route03() {
  return (
    <div>
      <AppNavbar />
      <p>
        <br />
      </p>
      <ContactForm />
      <p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </p>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

function Route04() {
  return (
    <div>
      <AppNavbar />
      <p>
        <br />
      </p>
      <Contact_Job_Form />
      <p>
        <br />
        <br />
        <br />
        <br />
      </p>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

function Route05() {
  return (
    <div>
      <AppNavbar />
      <p>
        <br />
        <br />
        <br />
      </p>
      <Blog />
      <p>
        <br />
        <br />
      </p>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

function Service_estructural() {
  return (
    <div>
      <AppNavbar />
      <p>
        <br />
      </p>
      <Banner_dinamic />
      <Services />
      <p>
        <br />
        <br />
      </p>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

function Service_sanitario() {
  return (
    <div>
      <AppNavbar />
      <p>
        <br />
      </p>
      <Banner_dinamic />
      <Services />
      <p>
        <br />
        <br />
      </p>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

function Service_tecnica() {
  return (
    <div>
      <AppNavbar />
      <p>
        <br />
      </p>
      <Banner_dinamic />
      <Services />
      <p>
        <br />
        <br />
      </p>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

function Service_arquitectura() {
  return (
    <div>
      <AppNavbar />
      <p>
        <br />
      </p>
      <Banner_dinamic />
      <Services />
      <p>
        <br />
        <br />
      </p>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

function Project_estructura() {
  return (
    <div>
      <AppNavbar />
      <p>
        <br />
      </p>
      <Banner_dinamic />
      <Kitchen_sink_project />
      <p>
        <br />
        <br />
      </p>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

function Project_sanitaria() {
  return (
    <div>
      <AppNavbar />
      <p>
        <br />
      </p>
      <Banner_dinamic />
      <Kitchen_sink_project />
      <p>
        <br />
        <br />
      </p>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

function Project_arquitectura() {
  return (
    <div>
      <AppNavbar />
      <p>
        <br />
      </p>
      <Banner_dinamic />
      <Kitchen_sink_project />
      <p>
        <br />
        <br />
      </p>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

function Project_otros() {
  return (
    <div>
      <AppNavbar />
      <p>
        <br />
      </p>
      <Banner_dinamic />
      <Kitchen_sink_project />
      <p>
        <br />
        <br />
      </p>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

function Publicaciones() {
  return (
    <div>
      <AppNavbar />
      <p>
        <br />
        <br />
        <br />
      </p>
      <Publicacion />
      <p>
        <br />
        <br />
        <br />
      </p>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}


export { Route01, Route02, Route03, Route04, Route05, 
  Service_estructural, Service_sanitario, Service_arquitectura, Service_tecnica, 
  Project_estructura, Project_sanitaria, Project_arquitectura, Project_otros, 
  Publicaciones};
