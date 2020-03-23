import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getHomePagesThunk } from '../../store/homepages/actions'

import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function HomePagesList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomePagesThunk())
  }, [dispatch]);

  return (
    <div>

    <Jumbotron>
    <h1>Homepages</h1>
  </Jumbotron>
  <Container>
    <h2>Homepages cards</h2>
  </Container>
    </div>
  )
}
