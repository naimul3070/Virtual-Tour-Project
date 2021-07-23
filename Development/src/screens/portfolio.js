import React from "react";

// Global Component
import Footer from "../components/footer";
import Header from "../components/header";
import InlineMenu from "../components/inlineMenu";

// Portfolio Component
import VirtualTourSection from "../components/portfolio/virtualTourSection";
import GellarySection from "../components/portfolio/gellarySection";

function Portfolio() {
  return (
    <>
      <div className="firstBackground wp-block-cover-image w-full bg-gray-900">
        <Header />
        <InlineMenu children={<VirtualTourSection />} />
      </div>
      <div className="mt-8 pb-8 lg:mt-0 lg:py-16 w-full">
        <GellarySection />
      </div>
      <div className="firstBackground wp-block-cover-image mt-8 lg:mt-0 pt-8 lg:pt-16 w-full">
        <Footer />
      </div>
    </>
  );
}

export default Portfolio;
