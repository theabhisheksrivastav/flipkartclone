


import PropTypes from 'prop-types';

function PopupMenu({ items }) {
  return (
    <div className="relative inline-block text-left z-50">
      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1">
        {items.map((item, index) => (
          <a
          key={index}
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
          <i className="fa fa-user mr-2"></i>
          {item}
          </a>
          ))}
        </div>
      </div>
    </div>
    );
}

PopupMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PopupMenu;