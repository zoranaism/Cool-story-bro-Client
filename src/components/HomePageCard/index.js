import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function HomePageCard(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {props.title}
        </Card.Title>
        <p>{props.description}</p>
        <p>{props.userId}</p>
        <Link to={`/homepages/${props.id}`}>
          <Button variant="primary">Visit Page</Button>
        </Link>
        
      </Card.Body>
    </Card>
  );
}