import Carousel from "./Carousel";
import { FaArrowRight } from "react-icons/fa";
import PropTypes from "prop-types";

const WrappedCarousel = ({ text, images }) => {
    return (
        <div className=" relative w-full min-h-[300px] bg-white my-3 rounded-lg shadow-md overflow-hidden">
            <div className="absolute top-2 left-2  text-gray-800 text-lg font-semibold px-4 py-2 z-50">
                {text}
            </div>

            <button
                className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full z-50 hover:bg-gray-600 focus:outline-none"
                onClick={() => alert("Arrow clicked!")} 
            >
                <FaArrowRight size={20} />
            </button>

            {/* Carousel */}
            <div className="mt-8">
                <Carousel components={images} />
            </div>
        </div>
    );
};

WrappedCarousel.propTypes = {
    text: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default WrappedCarousel;
