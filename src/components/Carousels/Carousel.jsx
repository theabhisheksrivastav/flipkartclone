import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ components }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(1);
    const carouselRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (carouselRef.current) {
                const carouselWidth = carouselRef.current.offsetWidth;
                const itemWidth = 240;
                setVisibleCount(Math.floor(carouselWidth / itemWidth));
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const prevSlide = () => {
        const maxIndex = Math.max(components.length - visibleCount, 0);
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
    };

    const nextSlide = () => {
        const maxIndex = Math.max(components.length - visibleCount, 0);
        setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full min-h-[300px] overflow-hidden bg-white" ref={carouselRef}>
            <div
                className="flex transition-transform duration-300 justify-evenly px-6"
                style={{
                    transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
                    width: `${(components.length * 100) / visibleCount}%`,
                }}
            >
                {components.map((Component, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0"
                        style={{ width: `${100 / visibleCount}%` }}
                    >
                        {Component}
                    </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
            >
                &#10095;
            </button>
        </div>
    );
};

Carousel.propTypes = {
    components: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default Carousel;
