import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    return (
      <div className="mx-auto px-7">
        <div className="relative min-w-[520px] w-full flex items-center justify-between h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div className="grid place-items-center h-full text-2xl w-12 text-gray-300">
            <FaSearch />
          </div>
          <input
            className="peer h-full w-full outline-none text-2xl text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search for Products, Brands and More"
          />
        </div>
      </div>
    );
  };
  
  export default SearchBar;
  