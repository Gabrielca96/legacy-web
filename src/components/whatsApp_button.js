import React from "react";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace with the phone number and message you want to send
    const phoneNumber = "952182691";
    const message = "Hola, necesito asesoría para proyectos de ingeniería!";

    // Open the WhatsApp app with the phone number and message pre-filled
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
  };

  return (
    <div style={{ position: "relative" }}>
      <Button
        variant="success"
        onClick={handleWhatsAppClick}
        style={{ position: "absolute", bottom: "20px", right: "20px" }}
      >
        <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: "5px" }} />{" "}
        Conversemos
      </Button>
    </div>
  );
};

