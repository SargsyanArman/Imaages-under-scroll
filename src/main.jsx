import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

function App() {

  const images = [
    'https://cdn.kimkim.com/files/a/content_articles/featured_photos/0e6ff459939c095e91c6f32be8b77671cf3d9f14/big-0f20b3176412a8cb3688ba14f5f547d8.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlxBA24ga0Ye0ILvsr7i_YSY1F0n-MQcDRzA&s',
    'https://www.ciee.org/sites/default/files/images/2023-04/paris-tower-river-skyline_0.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYhAS4y029IUQ9z3dUe_haXgzU6G1k_FlMow&s',
    'https://content.api.news/v3/images/bin/b2e381df69b53a82e1d92d962dba55a1',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDIxOoGh3eaGJXEpIhO6xqiek1EyDI5DvP2w&s',
    'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/102000/102616-St-Isaacs-Cathedral.jpg',
    'https://deih43ym53wif.cloudfront.net/large_shutterstock_648869059_9d84ee4b08.jpeg',
    'https://russiatrek.org/blog/wp-content/uploads/2016/01/saint-petersburg-at-night-from-above-russia-8.jpg'
  ];


  return (
    <div className='slider'>
      <div className='slider__images'>
        {images.map((image, index) => (
          <img key={index} src={image}className='slider__image'/>
        ))}
      </div>
    </div>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
