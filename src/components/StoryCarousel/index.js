import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { deleteStory, likeStory } from "../../store/user/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";

import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";

export default function StoryCarousel(props) {
  const dispatch = useDispatch();

  const onDelete = storyId => {
    // console.log("deleting story!", id);
    dispatch(deleteStory(storyId));
  };

  const onLike = storyId => {
    // console.log("deleting story!", id);
    dispatch(likeStory(storyId));
  };

  if (props.homepage.stories === undefined) return <h1>Loading</h1>;

  return (
    <Carousel className="mt-5 mb-5">
      {props.homepage.stories.map(story => {
        const numLikes = story.users.length;
        return (
          <Carousel.Item key={story.id}>
            {story.imageUrl ? (
              <img
                className="d-block w-100"
                src={story.imageUrl}
                alt={story.name}
              />
            ) : null}
            <Carousel.Caption
              style={{
                backgroundColor: `${props.homepage.backgroundColor}99`,
                color: props.homepage.color
              }}
              className="p-5"
            >
              <h3>{story.name}</h3>
              <p>{story.content}</p>
              <FontAwesomeIcon
                icon={faHeartRegular}
                // icon={faHeartSolid}
                size="3x"
                onClick={() => onLike(story.id)}
              />
              <h5>
                {numLikes === 1 ? numLikes + " Like" : numLikes + " Likes"}{" "}
              </h5>
              {numLikes === 0 ? (
                ""
              ) : (
                <h6>Liked by {story.users.map(user => user.name)}</h6>
              )}

              <Button
                variant="danger"
                type="submit"
                onClick={() => onDelete(story.id)}
              >
                Delete Story
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
