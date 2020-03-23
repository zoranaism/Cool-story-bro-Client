import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomePagesThunk } from "../../store/homepages/actions";
import HomePageCard from "../../components/HomePageCard/index";

import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { selectHomePages } from "../../store/homepages/selectors";

export default function HomePagesList() {
  const dispatch = useDispatch();
  const homepages = useSelector(selectHomePages);

  useEffect(() => {
    dispatch(getHomePagesThunk());
  }, [dispatch]);

  return (
    <div>
      <Jumbotron>
        <h1>Homepages</h1>
      </Jumbotron>
      <Container>
        {homepages.map(homepage => {
          return (
            <HomePageCard
              key={homepage.id}
              id={homepage.id}
              title={homepage.title}
              description={homepage.description}
              backgroundColor={homepage.backgroundColor}
              color={homepage.color}
              description={homepage.description}
              userId={homepage.userId}
            />
          );
        })}
      </Container>
    </div>
  );
}
