import Carousel from "react-bootstrap/Carousel";

export const Banner = () => {
  
  const zoomIn = (event) => {
    event.target.style.transform = "scale(1.1)";
    event.target.style.transition = "transform 0.5s";
  };

  const zoomOut = (event) => {
    event.target.style.transform = "scale(1)";
    event.target.style.transition = "transform 0.5s";
  };

  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '500px', objectFit: 'cover', transform: 'scale(1)', transition: 'transform 0.5s' }}
          src="https://thumbs.dreamstime.com/b/banner-mujer-ingeniero-empresario-trabajador-de-la-industria-construcci%C3%B3n-panor%C3%A1mico-trabajo-refiner%C3%ADa-planta-petrolera-aceite-218661919.jpg"
          alt="First slide"
          onMouseOver={zoomIn}
          onMouseOut={zoomOut}
        />
        <Carousel.Caption style={{ color: "black" }}>
          <h3 style={{ color: "black" }}>First slide label</h3>
          <p style={{ color: "black" }}>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '500px', objectFit: 'cover', transform: 'scale(1)', transition: 'transform 0.5s' }}
          src="https://scontent.fscl13-2.fna.fbcdn.net/v/t31.18172-8/21753359_1907617345921647_4572085937034550538_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHwYAnb5O5k0tb-1Wet2yrqq6CYSFGuqWSroJhIUa6pZPE6Ve9PhFjrcN1hM9RA-8M&_nc_ohc=pLexVDYLNBkAX-C4FYV&_nc_ht=scontent.fscl13-2.fna&oh=00_AfBD1aGJh0fcrGFPa4b2E2u6vtfa_XXCT7rBgqbBIUg37g&oe=643DA87F"
          alt="Second slide"
          onMouseOver={zoomIn}
          onMouseOut={zoomOut}
        />

        <Carousel.Caption style={{ color: "black" }}>
          <h3 style={{ color: "black" }}>Second slide label</h3>
          <p style={{ color: "black" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: '500px', objectFit: 'cover', transform: 'scale(1)', transition: 'transform 0.5s' }}
          src="https://scontent.fscl13-2.fna.fbcdn.net/v/t31.18172-8/21753359_1907617345921647_4572085937034550538_o.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHwYAnb5O5k0tb-1Wet2yrqq6CYSFGuqWSroJhIUa6pZPE6Ve9PhFjrcN1hM9RA-8M&_nc_ohc=pLexVDYLNBkAX-C4FYV&_nc_ht=scontent.fscl13-2.fna&oh=00_AfBD1aGJh0fcrGFPa4b2E2u6vtfa_XXCT7rBgqbBIUg37g&oe=643DA87F"
          alt="Third slide"
          onMouseOver={zoomIn}
          onMouseOut={zoomOut}
        />

        <Carousel.Caption style={{ color: "black" }}>
          <h3 style={{ color: "black" }}>Third slide label</h3>
          <p style={{ color: "black" }}>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
