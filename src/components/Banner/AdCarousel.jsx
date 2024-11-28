import { useState, useRef } from 'react';

const AdCarousel = () => {
    const adImages = [
        'https://via.placeholder.com/1920x600?text=Ad+1',
        'https://via.placeholder.com/1920x600?text=Ad+2',
        'https://via.placeholder.com/1920x600?text=Ad+3',
        'https://via.placeholder.com/1920x600?text=Ad+4',
        'https://via.placeholder.com/1920x600?text=Ad+5',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleCount = 1; // Only show one image per slide
    const carouselRef = useRef(null);

    const prevSlide = () => {
        const maxIndex = Math.max(adImages.length - visibleCount, 0);
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
    };

    const nextSlide = () => {
        const maxIndex = Math.max(adImages.length - visibleCount, 0);
        setCurrentIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
    };

    return (
        <div
            className="relative w-full h-[180px] overflow-hidden flex items-center justify-center"
            ref={carouselRef}
        >
            <div
                className="flex transition-transform duration-300"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {adImages.map((image, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full px-2"
                    >
                        <img
                            src={image}
                            alt={`Ad ${index + 1}`}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full z-10"
            >
                &#10095;
            </button>
        </div>
    );
};

export default AdCarousel;
