import PopupMenu from "../Navbar/Popup";
import { useState, useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const ProductCategories = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [categories, setCategories] = useState([]);
    const [expandedCategory, setExpandedCategory] = useState(null);

    useEffect(() => {
        const fetchCategory = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/categories');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching ad images:', error);
            }
        };

        fetchCategory();
    }, []);
    

    const handleCategoryHover = (index) => {
        setExpandedCategory(expandedCategory === index ? null : index);
    };

    return (
        <div className="flex justify-evenly my-2 bg-white">
            {categories.map((category, index) => (
                <div
                    className="w-1/2 md:w-1/4 lg:w-1/6 p-2 relative"
                    key={index}
                    onMouseEnter={() => setHoveredCategory(index)}
                    onMouseLeave={() => setHoveredCategory(null)}
                >
                    <div className="">
                        <div className="">
                            <img src={category.image} alt={category.title} />
                        </div>
                        <div className="flex items-center font-semibold">{category.title} {category.subCategories.length > 0 && (
                                <div className="ml-2">
                                    {hoveredCategory === index || expandedCategory === index ? (
                                        <FaAngleUp />
                                    ) : (
                                        <FaAngleDown />
                                    )}
                                </div>
                            )}</div>
                        

                        {hoveredCategory === index && category.subCategories.length > 0 && (
                            <div className="absolute top-full left-0 w-full">
                                <PopupMenu items={category.subCategories} />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCategories;
