import React from "react";

// Global Component
import Footer from "../components/footer";
import Header from "../components/header";
import InlineMenu from "../components/inlineMenu";

// Contactus Component
import FromMapSection from "../components/contactus/fromMapSection";

function Contactus() {
  return (
    <>
      <div className="firstBackground wp-block-cover-image w-full bg-gray-900">
        <Header />
        <InlineMenu />
      </div>
      <div className="mt-8 pb-8 lg:mt-0 lg:py-16 w-full">
        <FromMapSection />
      </div>
      <div className="firstBackground wp-block-cover-image mt-8 lg:mt-0 pt-8 lg:pt-16 w-full">
        <Footer />
      </div>
    </>
  );
}

export default Contactus;
