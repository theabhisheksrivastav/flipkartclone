import { useState, useEffect } from "react";

const LeftSection = () => {
    const [leftFooterSection, setLeftFooterSection] = useState({});

    useEffect(() => {
        const fetchLeftFooterSection = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/footer/left');
                const data = await response.json();
                setLeftFooterSection(data);
            } catch (error) {
                console.error('Error fetching ad images:', error);
            }
        };

        fetchLeftFooterSection();
    }, []);

    return (
        < div className = "container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4" >
        {
            Object.keys(leftFooterSection).map((section) => (
                <div key={section} className="space-y-4">
                    <h3 className="font-thin text-sm">{section}</h3>
                    <ul>
                        {leftFooterSection[section].map((item) => (
                            <li key={item}>
                                <a href="#" className="block font-bold hover:underline">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))
        }
    </div >
      );
};

export default LeftSection;