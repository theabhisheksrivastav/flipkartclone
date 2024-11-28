import PropTypes from "prop-types";
import { FaArrowRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

const ProductCardGrid = ({ text, products }) => {
    return (
        <div className="relative w-full bg-gray-100 rounded-lg shadow-md p-4">
            {/* Top Left Text */}
            <div className="absolute top-2 left-2 bg-blue-500 text-white text-lg font-semibold px-4 py-2 rounded-lg shadow">
                {text}
            </div>

            {/* Top Right Arrow */}
            <button
                className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 focus:outline-none"
                onClick={() => alert("Arrow clicked!")} // Replace with desired action
            >
                <FaArrowRight size={20} />
            </button>

            {/* Product Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
                {products.map((product) => (
                    <ProductCard
                        key={product.key}
                        image={product.image}
                        title={product.title}
                        subtitle={product.subtitle}
                    />
                ))}
            </div>
        </div>
    );
};

ProductCardGrid.propTypes = {
    text: PropTypes.string.isRequired,
    products: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            image: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ProductCardGrid;
