import { FaGift, FaStore, FaQuestionCircle, FaAd } from "react-icons/fa"

const BottomSection = () => {

    const leftList = [
        { icon: <FaGift />, label: "Gift Card" },
        { icon: <FaStore />, label: "Become a Seller" },
        { icon: <FaQuestionCircle />, label: "Help Centre" },
        { icon: <FaAd />, label: "Advertise" }
    ]

    return (
        <div className="flex flex-col-reverse mt-10 justify-evenly text-center md:flex-row md:items-center">
            
            <div>
                <ul className="flex w-full space-x-14">
                    {leftList.map((item, index) => (
                        <li key={index} className="flex items-center space-x-2 text-yellow-300">
                            {item.icon}
                            <button className="text-gray-400 hover:text-gray-300">
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            
            <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                    © 2024 FlipkartClone.com
                </a>
            </div>

            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg" alt="Payment" />
        </div>
    );
};

export default BottomSection;