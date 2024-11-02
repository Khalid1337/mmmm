import Wrapper from "@/components/common/Wrapper";
import React from "react";

function Page() {
  return (
    <>
      <section className="flex size-full flex-col items-center justify-center !scroll-smooth bg-[url(/images/singleBg.png)] bg-cover bg-center bg-no-repeat px-4 pt-[200px] text-white tablet:px-0 tablet:pt-[100px]">
        <Wrapper>
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white-300 drop-shadow-md">TikTok Shop Solutions</h1>
          </div>

          {/* Introduction Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Introduction:</h2>
            <p className="text-lg leading-relaxed text-white">
              Xtreme Digitonix is here to help you capitalize on the rapidly growing TikTok Shop platform. With our tailored TikTok Shop solutions, we focus on building a brand presence that resonates with TikTok’s vast and diverse audience.
            </p>
          </div>

          {/* Why Choose TikTok Shop Section */}
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Why Choose TikTok Shop?</h2>
            <p className="text-lg leading-relaxed text-white">
              TikTok Shop offers unique opportunities for businesses to showcase their products through engaging and creative content. With our strategic approach, we help you harness the platform’s viral potential to drive sales and expand your brand’s reach.
            </p>
          </div>

          {/* Our Approach Section */}
          <div className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Our Approach:</h2>
            <p className="text-lg leading-relaxed text-white">
              We integrate content creation with product promotion to create an immersive brand experience that aligns with TikTok’s dynamic culture.
            </p>
          </div>

          {/* Key Services Section */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Key Services:</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed text-white space-y-2 text-left px-6">
              <li>Account Setup & Optimization: We help set up and optimize your TikTok Shop for maximum visibility.</li>
              <li>Content Creation: We create engaging video content that promotes your products organically.</li>
              <li>Influencer Partnerships: Collaborate with influencers to boost product visibility and engagement.</li>
              <li>Marketing & Promotion: Leverage TikTok’s algorithm and advertising tools to drive traffic.</li>
            </ul>
          </div>

          {/* Why Partner with Us Section */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Why Partner with Us?</h2>
            <p className="text-lg leading-relaxed text-white">
              Xtreme Digitonix brings a data-driven approach to TikTok, ensuring your brand’s growth in both followers and revenue.
            </p>
          </div>
        </Wrapper>
      </section>
    </>
  );
}

export default Page;
