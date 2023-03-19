import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // aquí podrías hacer una solicitud a tu servidor para enviar el formulario
    console.log(`Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="mt-1 mb-5"
      style={{ padding: "30px" }}
    >
      <h2 className="mb-4">Formulario de contacto</h2>
      <Form.Group controlId="formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formEmail" className="mt-2">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formMessage" className="mt-2">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Escribe tu mensaje aquí"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-5 mb-5">
        Enviar
      </Button>
    </Form>
  );
};

//export default ContactForm;
