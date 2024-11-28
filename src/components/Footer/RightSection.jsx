import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";


const RightSection = () => {
    const rightFooterSection = {
        "Mail Us": [
          "Flipkart Internet Private Limited,",
          "Buildings Alyssa, Begonia &",
          "Clove Embassy Tech Village,",
          "Outer Ring Road, Devarabeesanahalli Village,",
          "Bengaluru, 560103,",
          "Karnataka, India",
        ],
        "Registered Office Address": [
          "Flipkart Internet Private Limited,",
          "Buildings Alyssa, Begonia &",
          "Clove Embassy Tech Village,",
          "Outer Ring Road, Devarabeesanahalli Village,",
          "Bengaluru, 560103,",
          "Karnataka, India",
          "CIN : U51109KA2012PTC066107",
          "Telephone: 044-45614700 / 044-67415800",
        ],
      };
      return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Mail Us and Address */}
        {["Mail Us", "Registered Office Address"].map((section) => (
          <div key={section} className="space-y-2">
            <h3 className="font-semibold text-sm text-gray-400">{section}:</h3>
            <p className="text-gray-300 text-sm">
              {rightFooterSection[section].map((line, index) => (
                <span key={index} className="block">
                  {line}
                </span>
              ))}
            </p>
          </div>
        ))}

        {/* Social Section */}
        <div className="space-y-2">
          <h3 className="font-semibold text-sm text-gray-400">Social:</h3>
          <div className="flex space-x-4">
            <button className="text-gray-300 hover:text-gray-200"  ><FaFacebook size={30} /></button>
            <button className="text-gray-300 hover:text-gray-200"  ><FaTwitter size={30} /></button>
            <button className="text-gray-300 hover:text-gray-200"  ><FaYoutube size={30} /></button>
          </div>
        </div>
      </div>
      );
};

export default RightSection;