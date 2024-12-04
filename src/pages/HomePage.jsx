import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CategoryBanner from "../components/Banner/CategoryBanner";
import ProductCarousel from "../components/Banner/ProductCarousel";
import AdvertCard from "../components/Card/AdvertCard";
import AdCarousel from "../components/Banner/AdCarousel";
import WrapperCarousel from "../components/Carousels/WrappedCarousel";
import ProductCard from "../components/Card/ProductCard";
import { useState, useEffect } from "react";
import ProductCardGrid from "../components/Card/ProductCardGrid";



const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [products2, setProducts2] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products');
                const data = await response.json();
                setProducts(data);
                setProducts2(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
  
        fetchProducts();
    }, []);
    
    return (
        <>
            <Navbar />
            <CategoryBanner />

            <AdCarousel />
            <div className="flex justify-start my-4">

                <ProductCarousel />

                <AdvertCard image={"https://via.placeholder.com/300"} />
            </div>

            <WrapperCarousel text="Featured Products" images={products.map((product) => (
                <ProductCard
                    key={product?.image}
                    image={product?.imageLink}
                    title={product?.name}
                    subtitle={`$${product?.price}`}
                />))} />

            <WrapperCarousel text="Sports & Health Care" images={products.map((product) => (
                <ProductCard
                key={product?.image}
                image={product?.imageLink}
                    title={product.name}
                    subtitle={`$${product.price}`}
                />))} />
            <div className="grid grid-cols-2 gap-4 p-6">
                <ProductCardGrid text="Electronics" products={products2.map((product2) => ({
                    image: product2?.imageLink,
                    title: product2?.name,
                    subtitle: `$${product2?.price}`,
                }))} key="electronics" />
                <ProductCardGrid text="Health" products={products2.map((product2) => ({
                    image: product2.imageLink,
                    title: product2.name,
                    subtitle: `$${product2.price}`,
                }))} key="health" />
            </div>
            <div className="grid grid-cols-2 gap-4 p-6">
                <ProductCardGrid text="Books" products={products2.map((product2) => ({
                    image: product2.imageLink,
                    title: product2.name,
                    subtitle: `$${product2.price}`,
                }))} key="books" />
                <ProductCardGrid text="Exercise" products={products2.map((product2) => ({
                    image: product2.imageLink,
                    title: product2.name,
                    subtitle: `$${product2.price}`,
                }))} key="exercise" />
            </div>

            <Footer />
        </>
    );
};

export default HomePage;