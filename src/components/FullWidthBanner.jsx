import PropTypes from 'prop-types';

const FullWidthBanner = ({ height, image }) => {
return (
    <div
        className={`w-full border-white border-2 relative overflow-hidden ${image ? 'bg-cover bg-center' : 'bg-blue-500'}`}
        style={{
            height: `${height}px`,
            backgroundImage: image ? `url(${image})` : 'none'
        }}
    >
        
    </div>
);
};
FullWidthBanner.propTypes = {
  height: PropTypes.number.isRequired,
  image: PropTypes.string
};

export default FullWidthBanner;