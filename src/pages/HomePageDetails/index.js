import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomePageById } from "../../store/homepageDetails/actions";
import { selectHomePageDetails } from "../../store/homepageDetails/selectors";
import StoryCarousel from "../../components/StoryCarousel";

import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
// import { Link } from "react-router-dom";
// import { FaGithub } from "react-icons/fa";

export default function HomePageDetails() {
  const { id } = useParams();
  const homepage = useSelector(selectHomePageDetails);
  const dispatch = useDispatch();

  // console.log("homepage ID", id);
  // console.log("homepage", homepage);

  useEffect(() => {
    dispatch(fetchHomePageById(id));
  }, [dispatch, id]);

  if (!homepage.title) return <h1>Loading</h1>;

  return (
    <div>
      <Jumbotron
        style={{
          color: homepage.color,
          backgroundColor: homepage.backgroundColor
        }}
      >
        <h2>{homepage.title}</h2>
        <h4>{homepage.description}</h4>
      </Jumbotron>
      <Container className="mb-5 pb-5">
        <StoryCarousel homepage={homepage} />
      </Container>
    </div>
  );
}
