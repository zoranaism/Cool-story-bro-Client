import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithStoredToken } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";

import { Jumbotron } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export default function MyPage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  // const homepage = user.user.homepage;
  // const story = user.user.homepage.story;

  console.log("THIS IS THE USER MY PAGE", user);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  // if (!user.user) return <h1>Loading</h1>;

  return (
    <div>
      <Jumbotron>
        {/* <h2>{user.user.homepage.title}</h2>
        <h5>{user.user.homepage}</h5> */}
      </Jumbotron>
      <Container>

      </Container>
    </div>
  )
}
