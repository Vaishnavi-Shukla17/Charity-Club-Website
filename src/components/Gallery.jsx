import React from "react";

const Gallery = () => {
  const images = [
    { src: "/images/gallery1.jpg", alt: "Clothes distribution drive" },
    { src: "/images/gallery2.jpg", alt: "Evening study session" },
    { src: "/images/gallery3.jpg", alt: "Community clean-up event" },
    { src: "/images/gallery4.jpg", alt: "Food distribution camp" },
    { src: "/images/gallery5.jpg", alt: "Volunteer group photo" },
    { src: "/images/gallery6.jpg", alt: "Awareness campaign" },
  ];

  return (
    <section>
      <h2>Gallery</h2>
      <p>
        {/* Short line: photos from our recent events */}
      </p>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <figure key={index} className="gallery-item">
            <img src={img.src} alt={img.alt} />
            <figcaption>{img.alt}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
