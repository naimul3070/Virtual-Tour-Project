import React from "react";

// Global Component
import Footer from "../components/footer";
import Header from "../components/header";

// Services Component
import ServicesSection from "../components/services/servicesSection";
import HootsuiteFeaturesSection from "../components/services/hootsuiteFeaturesSection";
import TheyTrustUsSection from "../components/services/theyTrustUsSection";
import FrequentlyQuestionSection from "../components/services/frequentlyQuestionSection";
import InlineMenu from "../components/inlineMenu";

function Services() {
  return (
    <>
      <div className="firstBackground wp-block-cover-image w-full bg-gray-900">
        <Header />
        <InlineMenu />
      </div>
      <div className="mt-8 pb-8 lg:mt-0 lg:py-16 w-full h-full">
        <ServicesSection />
      </div>
      <div className="firstBackground wp-block-cover-image mt-8 lg:mt-0 pt-8 lg:pt-16 w-full">
        <HootsuiteFeaturesSection />
      </div>
      <div className="mt-8 pb-8 lg:mt-0 lg:py-16 w-full h-full">
        <TheyTrustUsSection />
      </div>
      <div className="pb-8 w-full h-full">
        <FrequentlyQuestionSection />
      </div>
      <div className="firstBackground wp-block-cover-image mt-8 lg:mt-0 pt-8 lg:pt-16 w-full">
        <Footer />
      </div>
    </>
  );
}

export default Services;
