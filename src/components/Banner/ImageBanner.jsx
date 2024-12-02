import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const ImageBanner = ({ images = [], height = 200 }) => {
    const [defaultImages, setDefaultImages] = useState([]);
    const imagesToUse = images.length > 0 ? images : defaultImages.slice(0, 3);

    useEffect(() => {
      const fetchDefaultImages = async () => {
          try {
              const response = await fetch('http://localhost:5000/api/default-image');
              const data = await response.json();
              setDefaultImages(data);
          } catch (error) {
              console.error('Error fetching ad images:', error);
          }
      };

      fetchDefaultImages();
  }, []);
  
    return (
      <div style={{ height: `${height}px` }} className="flex">
        {imagesToUse.map((image, index) => (
          <div
            key={index}
            className={`flex-1 border-r border-gray-200 ${
              index === imagesToUse.length - 1 ? '' : ''
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: image ? 'transparent' : 'gray',
            }}
          ></div>
        ))}
      </div>
    );
  };

  export default ImageBanner;
  
  ImageBanner.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
    height: PropTypes.number,
  };
  