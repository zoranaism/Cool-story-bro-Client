import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getHomePagesThunk } from '../../store/homepages/actions'

import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { selectHomePages } from '../../store/homepages/selectors';

export default function HomePagesList() {
  const dispatch = useDispatch();
  const homepages = useSelector(selectHomePages);


  useEffect(() => {
    dispatch(getHomePagesThunk())
  }, [dispatch]);

  return (
    <div>

    <Jumbotron>
    <h1>Homepages</h1>
  </Jumbotron>
  <Container>
    {homepages.map(homepage => {
      return <div key={homepage.id}>
        <h2>{homepage.title}</h2>
        <h2>{homepage.description}</h2>
        <h2>{homepage.backgroundColor}</h2>
        <h2>{homepage.color}</h2>
      </div>
    })} 
  </Container>
    </div>
  )
}
