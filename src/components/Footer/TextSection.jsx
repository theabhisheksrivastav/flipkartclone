import { useEffect, useState } from 'react';

const TextSection = () => {
    const [footerText, setFooterText] = useState([]);

    useEffect(() => {
      const fetchFooterText = async () => {
          try {
              const response = await fetch('http://localhost:5000/api/footer/text');
              const data = await response.json();
              setFooterText(data);
          } catch (error) {
              console.error('Error fetching ad images:', error);
          }
      };

      fetchFooterText();
  }, []);

    return (
        <div className="hidden md:block border-l border-gray-900 p-6">
            {footerText.map((section, index) => (
                <div key={index} className="mb-6">
                    <h3 className="text-gray-700 text-lg font-semibold mb-2">{section.title}</h3>
                    <p className="text-gray-500">{section.content.join(" ")}</p>
                </div>
            ))}
        </div>
    );
}

export default TextSection;