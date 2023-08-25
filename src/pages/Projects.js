import React from 'react';
import planet from '../img/planet.png';
import phone from '../img/phone.jpg';
import './Projects.css';

const Projects = () => {
  const slides = [
    {
      id: 1,
      title: 'TravelledApp',
      img: planet,
      color: '#fee2e3'
    },
    {
      id: 2,
      title: 'FlexApp',
      img: phone,
      color: '#51e2f5'
    },
    {
      id: 3,
      title: 'FlexApp1',
      img: phone,
      color: '#6495ed'
    },
  ];

  return (
    <div className='Projects'>
      {slides.map((slide) => (
        <section
          key={slide.id}
          className='slide'
          style={{ background: slide.color }}
        >
          {slide.title}
        </section>
      ))}
    </div>
  );
};

export default Projects;