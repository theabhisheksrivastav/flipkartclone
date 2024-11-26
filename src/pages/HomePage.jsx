import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import FullWidthBanner from "../components/FullWidthBanner";
import ImageBanner from "../components/ImageBanner";


const HomePage = () => {
    return (
        <>
        <Navbar />
        <FullWidthBanner
            height={240}
            image="https://via.placeholder.com/1920x500"
        />
        <FullWidthBanner
            height={140}
            image="https://via.placeholder.com/1920x500"
        />
        <FullWidthBanner
            height={90}
            image="https://via.placeholder.com/1920x500"
        />
        <FullWidthBanner
            height={180}
            image="https://via.placeholder.com/1920x500"
        />
        <ImageBanner
            images={[
                'https://via.placeholder.com/300x200',
                'https://via.placeholder.com/300x200',
                'https://via.placeholder.com/300x200',
            ]}
            height={240}
        />
        <FullWidthBanner
            height={180}
            image="https://via.placeholder.com/1920x500"
        />
        <FullWidthBanner
            height={280}
            image="https://via.placeholder.com/1920x500"
        />
        <ImageBanner
            images={[
                'https://via.placeholder.com/300x200',
                'https://via.placeholder.com/300x200',
                'https://via.placeholder.com/300x200',
            ]}
            height={240}
        />
        <Footer />
        </>
    );
    };

export default HomePage;