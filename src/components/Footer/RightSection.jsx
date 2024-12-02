import { FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";
import { useState, useEffect } from "react";


const RightSection = () => {
    const [rightFooterSection, setRightFooterSection] = useState({});

    useEffect(() => {
      const fetchRightFooterSection = async () => {
          try {
              const response = await fetch('http://localhost:5000/api/footer/right');
              const data = await response.json();
              setRightFooterSection(data);
          } catch (error) {
              console.error('Error fetching ad images:', error);
          }
      };

      fetchRightFooterSection();
  }, []);
      return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Mail Us and Address */}
        {["Mail Us", "Registered Office Address"].map((section) => (
          <div key={section} className="space-y-2">
            <h3 className="font-semibold text-sm text-gray-400">{section}:</h3>
            <p className="text-gray-300 text-sm">
              {Array.isArray(rightFooterSection[section]) && rightFooterSection[section].map((line, index) => (
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