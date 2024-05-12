// src/components/ImageGallery.jsx
import { useState } from 'react';
import { images } from '../data/images';
import './Gallery.css';
import Hero from './Hero';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredImages =
    selectedCategory === 'all'
      ? images
      : images.filter((image) => image.category === selectedCategory);

  const filterImages = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Hero
        cName="hero-mid"
        heroVid="/videos/gallery.mp4"
        title="Our Gallery"
        subtitle="Check out our amazing gallery!"
        btnClass="hide"
      />
      <div className="gallery-container">
        <div className="filter-buttons">
          <button
            className={selectedCategory === 'all' ? 'active' : ''}
            onClick={() => filterImages('all')}
          >
            Show all
          </button>
          <button
            className={selectedCategory === 'mainEvents' ? 'active' : ''}
            onClick={() => filterImages('mainEvents')}
          >
            Main Events
          </button>
          <button
            className={selectedCategory === 'communityEvents' ? 'active' : ''}
            onClick={() => filterImages('communityEvents')}
          >
            Community Events
          </button>
        </div>

        {/* Images */}
        <div className="filterable_cards">
          {filteredImages.map((image) => (
            <div key={image.id} className="card">
              <img
                src={image.src}
                alt="Gallery Image"
                className="gallery-image"
              />
              <div className="card_body">
                <h6 className="card_title">{image.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
