import { useState } from "react";
import { FaRegUserCircle, FaAngleDown, FaPlus, FaBook, FaList, FaGift, FaRegCreditCard } from "react-icons/fa";

const LoginDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
            className="relative inline-block text-left">
            <button
                // onClick=
                // {() => window.location.href = '/login'}
                className={`flex items-center gap-2 px-4 py-2 text-2xl font-semibold text-black rounded-xl focus:outline-none ${isOpen ? 'bg-blue-700 text-white' : ''}`}
            >
                <FaRegUserCircle />
                Login
                <FaAngleDown />
            </button>
            {isOpen && (
                <div className="absolute left-0 pt-2 w-72 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div className="p-4">
                        <p className="text-xl font-medium">
                            New customer?{" "}
                            <a
                                href="#"
                                className="text-blue-500 font-bold right-0 absolute px-3"
                            >
                                Sign Up
                            </a>
                        </p>
                    </div>
                    <div className="border-t border-gray-200">
                        <ul className="py-2">
                            <button className="px-4 py-2 text-xl w-full h-full hover:bg-gray-100 flex items-center gap-2">
                                <FaRegUserCircle />
                                My Profile
                            </button>
                            <button className="px-4 py-2 text-xl w-full h-full hover:bg-gray-100 flex items-center gap-2">
                                <FaPlus />
                                Flipkart Plus Zone
                            </button>
                            <button className="px-4 py-2 text-xl w-full h-full hover:bg-gray-100 flex items-center gap-2">
                                <FaBook />
                                Orders
                            </button>
                            <button className="px-4 py-2 text-xl w-full h-full hover:bg-gray-100 flex items-center gap-2">
                                <FaList />
                                Wishlist
                            </button>
                            <button className="px-4 py-2 text-xl w-full h-full hover:bg-gray-100 flex items-center gap-2">
                                <FaGift />
                                Rewards
                            </button>
                            <button className="px-4 py-2 text-xl w-full h-full hover:bg-gray-100 flex items-center gap-2">
                                <FaRegCreditCard />
                                Gift Cards
                            </button>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginDropdown;
