import React from "react";
import { useParams } from "react-router";

// Global Component
import Footer from "../components/footer";
import Header from "../components/header";
import InlineMenu from "../components/inlineMenu";
import BlogDescriptionSection from "../components/singleBlog/blogDescriptionSection";

function SingleBlog() {
  const { title } = useParams();
  return (
    <>
      <div className="firstBackground wp-block-cover-image w-full bg-gray-900">
        <Header />
        <InlineMenu />
      </div>
      <div className="mt-8 pb-8 lg:mt-0 lg:py-16 w-full flex justify-center">
        {/* <AllBlogSection /> */}
        <BlogDescriptionSection title={title} />
      </div>
      <div className="firstBackground wp-block-cover-image mt-8 lg:mt-0 pt-8 lg:pt-16 w-full">
        <Footer />
      </div>
    </>
  );
}

export default SingleBlog;
