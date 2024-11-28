// import {
//   LeftSection, RightSection, BottomSection, TextSection
// } from "./index"
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import BottomSection from './BottomSection';
import TextSection from './TextSection';
import TopStories from './TopStories';

const Footer = () => {



  return (
    <>
      <TopStories />
      <div className="hidden md:block border-b border-gray-700 px-6"></div>
      <TextSection />
      <div className="hidden md:block border-b border-gray-700 px-6"></div>
      <footer className="bg-gray-800 text-white py-10 px-6">



        <div className="flex justify-between ">
          <LeftSection />
          {/* divider */}
          <div className="hidden md:block border-l border-gray-700 p-6"></div>
          <RightSection />

        </div>
        <BottomSection />

      </footer>
    </>
  );
};

export default Footer;
