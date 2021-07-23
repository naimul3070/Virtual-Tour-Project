import React from "react";

// Global Component
import Footer from "../components/footer";
import Header from "../components/header";

// Home Component
import FirstInteractiveSection from "../components/home/firstInteractiveSection";
import AboutTheProjectSection from "../components/home/aboutTheProjectSection";
import OurBenifitsSection from "../components/home/ourBenifitsSection";
import BestPriceSection from "../components/home/bestPriceSection";
import OurWorksSection from "../components/home/ourWorksSection";

function Home() {
  return (
    <>
      <div className="firstBackground wp-block-cover-image pb-12 lg:pb-16 w-full bg-gray-900">
        <Header />
        <FirstInteractiveSection />
      </div>
      <div className="mt-8 pb-8 lg:mt-0 lg:py-16 w-full">
        <AboutTheProjectSection />
      </div>
      <div className="firstBackground wp-block-cover-image mt-8 pb-8 lg:mt-0 lg:py-16 w-full">
        <OurBenifitsSection />
      </div>
      <div className="mt-8 pb-8 lg:mt-0 lg:py-16 w-full">
        <BestPriceSection />
      </div>
      <div className="firstBackground wp-block-cover-image mt-8 lg:mt-0 lg:pt-16 w-full">
        <OurWorksSection />
      </div>
      <div className="firstBackground wp-block-cover-image mt-8 lg:mt-0 pt-8 lg:pt-16 w-full">
        <Footer />
      </div>
    </>
  );
}

export default Home;
