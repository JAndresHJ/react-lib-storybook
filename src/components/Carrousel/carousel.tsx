// Based on David Khourshid's codesandbox example:
// https://codesandbox.io/s/funny-wind-p59ei?file=/src/index.js
// Adapted to use TS
import React, { useState } from "react";
import "./carousel.css";

export interface CarouselProps {
  slides: string[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
  const [index, setIndex] = useState(0);

  return (
    <section
      data-testid="carousel-container"
      className="carousel-container"
      onClick={() => setIndex((index + 1) % slides.length)}
    >
      {slides.map((screen, i) => (
        <article
          className="carousel-slide"
          key={i}
          hidden={i !== index || undefined}
        >
          {screen}
        </article>
      ))}
    </section>
  );
};

export default Carousel;
