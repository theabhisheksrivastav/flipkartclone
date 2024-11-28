const TopStories = () => {
    const topStoriesData = {
        brandDirectory: "Brand Directory",
        mostSearched: [
          "iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max", "Whoop Band", "OPPO Find X8", 
          "Flipkart Minutes", "Flipkart Exchange", "Flipkart Reset", "Nothing Phone 2a Plus", "Sarees", "CMF by Nothing Phone 1", 
          "Pocket Bazaar", "Xiaomi 14 CIVI", "Infinix Note 40 Pro 5G", "iPhone 15", "Infinix Note 40 5G", "iPhone 15 Plus", 
          "vivo X Fold3 Pro", "Motorola g04s", "Vivo x 100", "OnePlus Nord CE 3 Lite 5G", "Spoyl Store", "SAMSUNG Flip5", 
          "SAMSUNG Fold5", "Flipkart Axis Bank Super Elite Credit card", "5G Mobile Phones", "Primebook Laptops", 
          "Moto Edge 40", "Grievance Redressal", "OPPO Reno7 Pro 5G", "Help Centre", "Track Orders", "Manage Orders", 
          "Return Orders", "Gift Cards Store", "Flipkart Axis Bank Credit Card", "Pay Later"
        ],
        categories: {
          mobiles: [
            "OPPO Reno 12", "Motorola Edge 50 Fusion", "REDMI 12 5G", "REDMI Note 13 5G", "Realme 12+ 5G", "POCO C65", 
            "Motorola G84", "Realme C53", "Infinix Smart 8", "Samsung Galaxy S23 5G", "Samsung Galaxy S21 FE 5G Qualcomm", 
            "vivo V30", "Samsung Galaxy S24 5G", "Samsung Galaxy S24+ 5G", "iPhone 12 64GB", "iPhone 12 Pro 512GB", 
            "iPhone 12 128GB", "Vivo Y15", "SAMSUNG Galaxy S21 FE 5G", "Infinix HOT 30i", "Realme 10 Pro 5G", "MOTOROLA G62 5G", 
            "Nothing Phone", "REDMI Note 12 Pro 5G", "Infinix SMART 7", "Vivo Y12", "Oppo A12", "Motorola 5g Phone", 
            "Realme 5g Smartphone", "Apple 5g Phone", "Iqoo 5g Phones", "Oneplus 5g Phones", "Vivo 5g Phones", "Oppo 5g Smart Phones", 
            "Oppo F15", "Oppo A31", "Samsung A71", "Samsung A51", "Samsung A31", "4G Mobile", "Nokia Mobile", "Samsung Mobile", 
            "iPhone", "Oppo Mobile", "Vivo Mobile"
          ],
          cameras: ["GoPro Action Camera", "Nikon Camera", "Canon Camera", "Sony Camera", "Canon DSLR", "Nikon DSLR"],
          laptops: [
            "Asus ROG Ally", "MacBook Pro M2", "Premium Laptop", "ASUS ROG Strix SCAR 16 (2023) Core i9 13th Gen", 
            "ASUS ROG Zephyrus M16 (2023) Core i9 13th Gen", "ASUS Zenbook 14 OLED (2022)", "Realme Book Prime Core i5 11th Gen", 
            "Microsoft Surface Go Pentium 128GB", "Apple Laptops", "Acer Laptops", "Lenovo Laptops", "Dell Laptops", 
            "Asus Laptops", "HP Laptops", "Gaming Laptops", "2 in 1 Laptops", "Laptops Dell latest laptops 2022", 
            "HP latest laptops 2022", "Infinix INBook Y1 Plus", "SAMSUNG Galaxy Book3", "12th Gen Intel Core Laptops"
          ],
          tvs: [
            "Nokia TV", "Panasonic TV", "Thomson TV", "Mi X Pro", "Realme TV", "Motorola TV", "OnePlus TVs", "LG TV", 
            "TV Sony TV", "Samsung TV", "Android Television", "Iffalcon Tv", "Mi TV"
          ],
          largeAppliances: [
            "Television", "Washing Machines", "Refrigerators", "Air Conditioners", "Electric Cookers", "Electric Jug(Heater)", 
            "Induction Cooktops", "Inverters / stabilizer", "Irons / Iron Box", "Mixer Grinder Juicer", "Wet Grinders", 
            "Chimneys", "Microwave Ovens", "Vacuum Cleaners", "Water Purifier", "Fan"
          ],
          clothing: [
            "Sarees", "Green bridal lehenga", "Tops", "Apron for Doctors", "Shoes", "Sunglasses", "Bridal Blouse", 
            "Half saree blouse designs", "Designer blouses", "Blouse designs", "Shirts", "Cotton saree blouse designs", 
            "Tshirts", "Jeans", "Dresses", "One pieces", "Groom wedding sherwani", "Designer Salwar Suits", "Bra", 
            "Cotton simple blouse designs", "Banarasi saree blouse designs", "Stylish blouse astin design", "Track Pant", 
            "Blouse neck designs", "Kurtas", "Party Dresses", "Palazzo Suits", "Anarkali", "Gowns", "Cut out dress", 
            "Salwar Suits", "Kurtis", "Designer Sarees", "Leggings", "Shorts", "Georgette Sarees", "Ethnic Wear", 
            "uppada pattu sarees", "Blouse back design", "Jodhpur pants"
          ],
          footwear: [
            "Adidas Shoes", "Reebok Shoes", "Nike Shoes", "Puma Shoes", "Boots", "Bata Shoes", "Woodland Shoes", 
            "Skechers Shoes", "Sneakers", "Womens Boots", "Sports Shoes", "Loafers", "Sandals", "Lotto Sports Shoes", 
            "Casual Shoes", "Womens Skechers Shoes", "Asics Sports Shoes", "Formal Shoes", "School Shoes"
          ],
          groceries: [
            "PhonePe Grocery Voucher", "Hand Wash", "Soap", "Cashew Nuts", "Sunflower Oil", "Eggs", "Toilet Cleaner", 
            "Harpic Toilet Cleaner", "Dettol Soap", "Mustard Oil", "Biscuits", "Cheese", "Patanjali Atta", "Fortune Oil", 
            "Aashirvaad Atta", "Tea"
          ],
          bestSelling: [
            "Headphones", "Best Gas Geyser", "Kitchen Geyser", "Nutri Blenders", "Portable Air Cooler", "Best Air Cooler", 
            "Bags", "Hitachi Refrigerator 3 Door", "Books", "Toys", "Candles", "Helmets", "Wall Clocks", "Baby Food", 
            "Chocolates", "Cycles", "Calculators", "Lipsticks", "Mask", "Vertiv UPS", "Fastrack Watches", "Wallets", 
            "Earrings", "Gold Coins", "Realme Pad Mini", "Handbags", "conekt SW2 Smartwatch", "Mivi DuoPods a350", "Speaker Cleaner"
          ],
          furniture: [
            "Furniture", "Sofas", "Beds", "Dining sets", "Wardrobes", "Mattresses", "TV Units", "Tables", "Chairs", "Shelves", 
            "Bean Bags", "Office Chairs", "Computer Table", "Office Tables", "Red Sofa", "Wakefit Beds", "White Sofa", 
            "Wakefit Mattress", "Green Sofa", "Black Sofa", "Brown Sofa"
          ],
          bgmh: [
            "Shampoo", "Whey Protein", "Homeopathy", "Cricket", "Cycles", "Footballs", "Treadmills", "Christmas Gifts", 
            "Fitness Accessories", "Online Guitar", "Books Store", "Musical Instrument Store", "Dabur Chyawanprash", 
            "Baidyanath Chyawanprash", "Energy Drinks", "Toys", "Milk Drink Mixes", "Chyawanprash", "Indian Flag", 
            "Protein Supplements"
          ]
        }
      };
      

    return (
        <div className="hidden md:block border-l border-gray-900 p-6">
            <div className="mb-6">
                <h3 className="text-gray-700 text-lg font-semibold mb-2">Top Stories : {topStoriesData.brandDirectory}</h3>
            </div>
            <div className="mb-6">
                <h3 className="text-gray-700 text-lg font-semibold mb-2">Most Searched</h3>
                <p className="text-gray-500">{topStoriesData.mostSearched.join(" | ")}</p>
            </div>
            {Object.keys(topStoriesData.categories).map((category, index) => (
                <div key={index} className="mb-6">
                    <h3 className="text-gray-700 text-lg font-semibold mb-2">{category}</h3>
                    <p className="text-gray-500">{topStoriesData.categories[category].join(" | ")}</p>
                </div>
            ))}
        </div>
    );
};

export default TopStories;