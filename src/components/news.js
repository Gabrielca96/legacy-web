import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

let token = "ad2652e5d94a4f66ab187f6a61efd77f"

export const News = () => {
  const [news, setNews] = useState([]);

  const cardImageStyle = {
    height: "12rem",
    objectFit: "cover",
  };

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://newsapi.org/v2/everything?q=tecnologia%20chile&sortBy=publishedAt&apiKey=ad2652e5d94a4f66ab187f6a61efd77f');
      const data = await response.json();
      setNews(data.articles);
    }
    fetchData();
  }, []);

  return (
    <Container className="mt-5 mb-5">
      <h2>Noticias de construcción</h2>
      <Row>
        {news.slice(0,6).map((article, index) => (
          <Col key={index} className="mt-4 mb-5">
            <Card>
              <Card.Img variant="top" src={article.urlToImage} style= {cardImageStyle}/>
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
                <Button variant="primary" href={article.url}>Leer más</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

  