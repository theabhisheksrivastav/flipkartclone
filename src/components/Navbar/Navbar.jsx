import { useState } from 'react';
import Popup from './Popup';

function Navbar() {

  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMoreDropdown = () => {
    setIsMoreDropdownOpen(!isMoreDropdownOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/path/to/flipkart-logo.png" alt="Flipkart Logo" className="w-20 h-8" />
          <input type="text" placeholder="Search for products, brands and more" className="w-80 h-10 border border-gray-300 rounded-md pl-4 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
        </div>

        <div className="flex items-center">
          <button onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Login</button>
          {isDropdownOpen && (
            <Popup items={["Sign Up", "My Profile", "Flipkart Plus Zone", "Orders", "Wishlist", "Rewards"]}/>
          )}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">Become a Seller</button>
          <button onMouseEnter={toggleMoreDropdown} onMouseLeave={toggleMoreDropdown} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">More</button>
          {isMoreDropdownOpen && (
             <Popup items={["Notification Preference", "24/7 Support", "Advertise", "Download App"]}/>
          )}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Cart</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;