import React, { useState, useEffect } from 'react';
import job from './job.jpg'
import job1 from './job1.jpg'
import job2 from './job2.jpg'
import job3 from './job3.jpg'

const Slider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [job, job1, job2, job3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentImage, images]);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-image ${index === currentImage ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${image})`
          }}
        />
      ))}
    </div>
  );
};

export default Slider;