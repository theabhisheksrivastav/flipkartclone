import { useState } from 'react';
import Popup from './Popup';
import LoginDropdown from './LoginDropdown';
import SearchBar from './SearchBar';
import { FaCartArrowDown, FaEllipsisV, FaStoreAlt } from 'react-icons/fa';

function Navbar() {

  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  const toggleMoreDropdown = () => {
    setIsMoreDropdownOpen(!isMoreDropdownOpen);
  };
  return (
    <nav className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">

        <div className="flex items-center">
          <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="Flipkart Logo" className="w-56 h-24" />
        </div>

        <SearchBar />

        <div className="flex items-center text-2xl font-normal pl-10">

          <LoginDropdown />

          <button className="flex items-center gap-2  text-2xl font-semibold  focus:outline-none bg-white text-black py-2 px-4 rounded"> <FaCartArrowDown /> Cart</button>

          <button className="flex items-center gap-2  text-2xl font-semibold  focus:outline-none bg-white text-black py-2 px-4 rounded mr-4"><FaStoreAlt /> Become a Seller</button>

          <div onMouseEnter={toggleMoreDropdown} onMouseLeave={toggleMoreDropdown} className="relative">

            <button className="bg-white text-black py-2 px-4 rounded mr-4"><FaEllipsisV /></button>
            {isMoreDropdownOpen && (
              <Popup items={["Notification Preference", "24/7 Support", "Advertise", "Download App"]} />
            )}

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;