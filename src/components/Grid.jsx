import React, { useState } from "react";
import './Grid.css';

import art1 from '../assets/art1.jpg';
import art2 from '../assets/art2.jpg';
import art3 from '../assets/art3.jpg';
import art4 from '../assets/art4.jpg';
import art5 from '../assets/art5.jpg';

const images = [
  { src: art1, name: 'Untitled by Tanaka Atsuko' },
  { src: art2, name: "Blue and Green Music by Georgia O'Keefe" },
  { src: art3, name: 'Starry Night and the Astronauts by Alma Thomas' },
  { src: art4, name: 'The Great Wave by Hokusai' },
  { src: art5, name: 'Water Lillies by Monet' },
];

const Grid = () => {
    const [selectedImageName, setSelectedImageName] = useState('');

const handleImageClick = (name) => {
  setSelectedImageName(name);
};

  return (
    <div className="container mt-4">
      <div className="box">
        <h1 className="selected-image-name">{selectedImageName}</h1>
      </div>
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img src={image.src} className="card-img-top" alt={`Art ${index + 1}`}
              onClick={() => handleImageClick(image.name)}
              style={{ cursor: 'pointer'}}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
