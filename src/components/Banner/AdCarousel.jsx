import { useState, useRef, useEffect } from 'react';

const AdCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [adImages, setAdImages] = useState([]);
    const visibleCount = 1;
    const carouselRef = useRef(null);

    useEffect(() => {
        const fetchAdImages = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/ad-images');
                if (!response.ok) throw new Error('Failed to fetch right footer section');
                const data = await response.json();
                setAdImages(data);
            } catch (error) {
                console.error('Error fetching ad images:', error);
            }
        };

        fetchAdImages();
    }, []);

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
