import React from "react";
import Card from "../Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Movie from "../../interfaces";
import { Container } from "./styles";

interface Props {
  list: Movie[];
}

const CardCarousel: React.FC<Props> = ({ list }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5,
      partialVisibilityGutter: 20,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
      partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container>
      <Carousel responsive={responsive} partialVisible infinite>
        {list.map((item: Movie, index: number) => {
          return <Card item={item} key={index} />;
        })}
      </Carousel>
    </Container>
  );
};

export default CardCarousel;
