import PropTypes from 'prop-types';

const ImageBanner = ({ images = [], height = 200 }) => {
    const defaultImages = [
      'https://via.placeholder.com/300x200',
      'https://via.placeholder.com/300x200',
      'https://via.placeholder.com/300x200',
    ];
    const imagesToUse = images.length > 0 ? images : defaultImages.slice(0, 3);
  
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
  