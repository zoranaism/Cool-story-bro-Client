import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function StoryCarousel(props) {
  return (
    <Carousel className="mt-5 mb-5">
      {props.homepage.stories.map(story => {
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
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}