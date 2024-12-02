import ProductCard from "../Card/ProductCard";
import Carousel from "../Carousels/Carousel";
import { useState, useEffect } from "react";

const ProductCarousel = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching ad images:', error);
            }
        };
  
        fetchProducts();
    }, []);
    

    return (
        <Carousel
            components={products.map((product) => (
                <ProductCard
                    key={product.id}
                    image={product.image}
                    title={product.name}
                    subtitle={`$${product.price}`}
                />
            ))}
        />
    );
};

export default ProductCarousel;
