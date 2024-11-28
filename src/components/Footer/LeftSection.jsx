const LeftSection = () => {
    const leftFooterSection = {
        "ABOUT": [
            "Contact Us",
            "About Us",
            "Careers",
            "Flipkart Stories",
            "Press",
            "Corporate Information"
        ],
        "GROUP COMPANIES": [
            "Myntra",
            "Cleartrip",
            "Shopsy"
        ],
        "HELP": [
            "Payments",
            "Shipping",
            "Cancellation & Returns",
            "FAQ"
        ],
        "CONSUMER POLICY": [
            "Cancellation & Returns",
            "Terms Of Use",
            "Security",
            "Privacy",
            "Sitemap",
            "Grievance Redressal",
            "EPR Compliance"
        ]
    };
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