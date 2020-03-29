import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserWithStoredToken } from "../../store/user/actions";
import { selectUser, selectMyHomepage } from "../../store/user/selectors";
import { useHistory } from "react-router-dom";
import Loading from "../../components/Loading";
import StoryCarousel from "../../components/StoryCarousel";
import HomePageForm from "./HomePageForm";
import StoryForm from "./StoryForm";

import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";
import Collapse from "react-bootstrap/Collapse";

export default function MyPage() {
  const { token, homepage, id } = useSelector(selectUser);
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [openStory, setOpenStory] = useState(false);

  if (token === null) {
    history.push("/");
  }

  if (homepage === null) {
    return <Loading />;
  }

  return (
    <div>
      <Jumbotron style={{
          color: homepage.color,
          backgroundColor: homepage.backgroundColor
        }}>
        <h2>{homepage.title}</h2>
        <h5>{homepage.description}</h5>
      </Jumbotron>

      <Container className="mb-5 pb-5">
        <Row className="justify-content-center">
          <ButtonGroup>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="edit-homepage"
              aria-expanded={open}
            >
              Edit my profile
            </Button>
            <Button onClick={() => setOpenStory(!openStory)}
              aria-controls="add-story"
              aria-expanded={openStory}>
                Post a cool story bro
            </Button>
          </ButtonGroup>
        </Row>
        <Collapse in={open}>
          <div id="edit-homepage">
            <HomePageForm />
          </div>  
        </Collapse>

        <Collapse in={openStory}>
          <div id="add-story">
            <StoryForm /> 
          </div>  
        </Collapse>

        <StoryCarousel homepage={homepage} />
      </Container>
    </div>
  );
}
