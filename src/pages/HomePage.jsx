import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CategoryBanner from "../components/Banner/CategoryBanner";
import ProductCarousel from "../components/Banner/ProductCarousel";
import AdvertCard from "../components/Card/AdvertCard";
import AdCarousel from "../components/Banner/AdCarousel";
import WrapperCarousel from "../components/Carousels/WrappedCarousel";
import ProductCard from "../components/Card/ProductCard";
import ProductCardGrid from "../components/Card/ProductCardGrid";



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
    const products2 = [
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
        }
    ];
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
            <div className="grid grid-cols-2 gap-4 p-6">
                <ProductCardGrid text="Electronics" products={products2.map((product2) => ({
                    key: product2.id,
                    image: product2.image,
                    title: product2.name,
                    subtitle: `$${product2.price}`,
                }))} />
                <ProductCardGrid text="Health" products={products2.map((product2) => ({
                    key: product2.id,
                    image: product2.image,
                    title: product2.name,
                    subtitle: `$${product2.price}`,
                }))} />
            </div>
            <div className="grid grid-cols-2 gap-4 p-6">
                <ProductCardGrid text="Books" products={products2.map((product2) => ({
                    key: product2.id,
                    image: product2.image,
                    title: product2.name,
                    subtitle: `$${product2.price}`,
                }))} />
                <ProductCardGrid text="Exercise" products={products2.map((product2) => ({
                    key: product2.id,
                    image: product2.image,
                    title: product2.name,
                    subtitle: `$${product2.price}`,
                }))} />
            </div>


            <Footer />
        </>
    );
};

export default HomePage;