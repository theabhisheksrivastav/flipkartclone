


import PropTypes from 'prop-types';

function PopupMenu({ items }) {
  return (
      <div className="absolute right-0 pt-2 w-56 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
        <ul className="py-2">
        {items.map((item, index) => (
          <button
          key={index}
          href="#"
          className="px-4 py-2 hover:bg-gray-100 flex text-lg items-center gap-2 w-full"
          >
          {item}
          </button>
          ))}
        </ul>
      </div>
    );
}

PopupMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PopupMenu;