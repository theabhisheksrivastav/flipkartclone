import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CategoryBanner from "../components/Banner/CategoryBanner";
import ProductCarousel from "../components/Banner/ProductCarousel";
import AdvertCard from "../components/Card/AdvertCard";
import AdCarousel from "../components/Banner/AdCarousel";
import WrapperCarousel from "../components/Carousels/WrappedCarousel";
import ProductCard from "../components/Card/ProductCard";



const HomePage = () => {

    const products = [
        {
            id: 1,
            name: "Product 1",
            price: 100,
            image: "https://via.placeholder.com/300",
        },
        {
            id: 2,
            name: "Product 2",
            price: 200,
            image: "https://via.placeholder.com/300",
        },
        {
            id: 4,
            name: "Product 4",
            price: 400,
            image: "https://via.placeholder.com/300",
        },
        {
            id: 5,
            name: "Product 5",
            price: 500,
            image: "https://via.placeholder.com/300",
        },
        {
            id: 3,
            name: "Product 3",
            price: 300,
            image: "https://via.placeholder.com/300",
        },
        {
            id: 4,
            name: "Product 4",
            price: 400,
            image: "https://via.placeholder.com/300",
        },
        {
            id: 5,
            name: "Product 5",
            price: 500,
            image: "https://via.placeholder.com/300",
        },
    ];
    return (
        <>
            <Navbar />
            <CategoryBanner />

            <AdCarousel />
            <div className="flex justify-start">

                <ProductCarousel />

                <AdvertCard image={"https://via.placeholder.com/300"} />
            </div>

            <WrapperCarousel text="Featured Products" images={products.map((product) => (
                <ProductCard
                    key={product.id}
                    image={product.image}
                    title={product.name}
                    subtitle={`$${product.price}`}
                />))} />

            <WrapperCarousel text="Sports & Health Care" images={products.map((product) => (
                <ProductCard
                    key={product.id}
                    image={product.image}
                    title={product.name}
                    subtitle={`$${product.price}`}
                />))} />
            


            <Footer />
        </>
    );
};

export default HomePage;