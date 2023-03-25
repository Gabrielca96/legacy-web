import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export const MoviePlayer = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch("https://api.movies.com/movies")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error(error));
  }, []);

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <Container>
      <Row>
        {movies.map((movie) => (
          <Col md={3} key={movie.id}>
            <Card>
              <Card.Img variant="top" src={movie.poster} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Button onClick={() => handleMovieSelection(movie)}>
                  Play
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedMovie && (
        <video controls>
          <source src={selectedMovie.videoUrl} type="video/mp4" />
        </video>
      )}
    </Container>
  );
}

//export default MoviePlayer;
