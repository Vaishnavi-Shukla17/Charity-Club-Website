import React, { useState } from "react";
import "./EventCarousel.css";

const eventImages = [
  {
    src: "/images/event1.jpg",
    caption: "Winter Clothes Distribution Drive",
  },
  {
    src: "/images/event2.jpg",
    caption: "Evening Study Support Session",
  },
  {
    src: "/images/event3.jpg",
    caption: "Community Clean-Up Initiative",
  },
];

const EventCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = eventImages.length;

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const { src, caption } = eventImages[current];

  return (
    <section className="events-carousel">
      <h2>Latest Event Highlights</h2>
      <div className="carousel-frame">
        <button className="carousel-btn left" onClick={goPrev}>
          ‹
        </button>

        <div className="carousel-slide">
          <img src={src} alt={caption} />
          <p className="carousel-caption">{caption}</p>
        </div>

        <button className="carousel-btn right" onClick={goNext}>
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {eventImages.map((_, index) => (
          <span
            key={index}
            className={
              index === current ? "dot dot-active" : "dot"
            }
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default EventCarousel;
