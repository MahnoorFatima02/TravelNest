import React from 'react';
import Mountains from '../assets/Mountains.jpg';
import Desert from '../assets/Desert.jpg';
import Water from '../assets/sea-water.jpg';
import Airplane from '../assets/airplane-trip.jpg';

function ImageGrid() {
    const images = [Mountains, Desert, Water, Airplane];

  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image} alt={`Travel destination ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
