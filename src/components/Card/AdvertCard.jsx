import PropTypes from 'prop-types';

const AdvertCard = ({ image }) => {
    return (
        <div className="py-8 h-full w-[340px]">
            <img src={image} alt="Advert" className="h-full w-full object-cover" />
        </div>
    );
};
AdvertCard.propTypes = {
    image: PropTypes.string.isRequired,
};

export default AdvertCard;