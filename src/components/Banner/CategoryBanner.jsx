import PopupMenu from "../Navbar/Popup";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const ProductCategories = () => {
    const [hoveredCategory, setHoveredCategory] = useState(null);

    const [expandedCategory, setExpandedCategory] = useState(null);

    const categories = [
        { title: "Grocery", subCategories: [], image: "https://rukminim2.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100" },
        { title: "Electronics", subCategories: ["Computers", "Laptops", "Cameras", "Televisions", "Speakers"], image: "https://rukminim2.flixcart.com/flap/96/96/image/69c6589653afdb9a.png?q=100" },
        { title: "Fashion", subCategories: ["Men's Clothing", "Women's Clothing", "Kid's Clothing", "Footwear", "Accessories"], image: "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/0d75b34f7d8fbcb3.png?q=100" },
        { title: "Beauty, Toys & More", subCategories: ["Beauty Products", "Toys", "Baby Care", "Sports", "Stationery"], image: "https://rukminim2.flixcart.com/flap/96/96/image/dff3f7adcf3a90c6.png?q=100" },
        { title: "Mobiles", subCategories: [], image: "https://rukminim2.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100" },
        { title: "Home & Furniture", subCategories: [], image: "https://rukminim2.flixcart.com/flap/96/96/image/ab7e2b022a4587dd.jpg?q=100" },
        { title: "Appliances", subCategories: ["Refrigerators", "Washing Machines", "Kitchen Appliances", "Air Conditioners", "Microwave Ovens"], image: "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/0139228b2f7eb413.jpg?q=100" },
        { title: "Two Wheelers", subCategories: ["Scooters", "Motorcycles", "Electric Vehicles", "Accessories", "Helmets"], image: "https://rukminim2.flixcart.com/fk-p-flap/96/96/image/05d708653beff580.png?q=100" },
        { title: "Flight Booking", subCategories: [], image: "https://rukminim2.flixcart.com/flap/96/96/image/71050627a56b4693.png?q=100" },
    ];

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
