const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-4">
          <h3 className="font-bold text-lg">ABOUT</h3>
          <ul>
            <li>
              <a href="#" className="block hover:text-gray-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-400">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-400">
                Flipkart Stories
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg">GROUP COMPANIES</h3>
          <ul>
            <li>
              <a href="#" className="block hover:text-gray-400">
                Myntra
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-400">
                Cleartrip
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-400">
                Shopsy
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg">HELP</h3>
          <ul>
            <li>
              <a href="#" className="block hover:text-gray-400">
                Payments
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-400">
                Shipping
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-400">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-400">
                Cancellation & Returns
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-lg">POLICY</h3>
          <ul>
            <li>
              <a href="#" className="block hover:text-gray-400">
                Return Policy
              </a>
            </li>
            <li>
              <a href="#" className="block hover:text-gray-400">
                Terms Of Use
              </a>
            </li>
          </ul>
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-gray-400">
              Social
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              Twitter
            </a>
            <a href="#" className="text-white hover:text-gray-400"> 1 
              YouTube
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse mt-10 justify-between text-center md:flex-row md:items-center md:justify-center md:space-x-4">
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-gray-300">
            © 2024 FlipkartClone.com
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            Visa
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            MasterCard
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Rupay
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            Cash on Delivery
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;