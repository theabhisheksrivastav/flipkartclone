import PropTypes from 'prop-types';

const ProductCard = ({ image, title, subtitle }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-[260px] h-full my-4 flex flex-col items-center justify-evenly">
            <div className="overflow-hidden w-full">
                <img
                    src={image}
                    alt={title}
                    className="h-48 w-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
            </div>
            <div className="p-4 flex flex-col items-center justify-center">
                <h3 className="text-lg font-semibold text-center">{title}</h3>
                <p className="text-gray-600 text-center">{subtitle}</p>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default ProductCard;
