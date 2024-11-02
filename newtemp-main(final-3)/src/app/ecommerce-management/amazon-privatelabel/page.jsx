import Wrapper from "@/components/common/Wrapper";
import React from "react";

function Page() {
  return (
    <>
      <section className="flex size-full flex-col items-center justify-center !scroll-smooth bg-[url(/images/singleBg.png)] bg-cover bg-center bg-no-repeat px-4 pt-[200px] text-white tablet:px-0 tablet:pt-[100px]">
        <Wrapper>
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white-300 drop-shadow-md">Amazon Private Label Solutions</h1>
          </div>

          {/* Introduction Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Introduction:</h2>
            <p className="text-lg leading-relaxed text-white">
              Elevate your ecommerce business with Xtreme Digitonix's expert Amazon Private Label solutions. Building a recognizable brand on Amazon is key to success, and with our tailored services, we empower you to create custom-branded products that set you apart from the competition.
            </p>
          </div>

          {/* Why Choose Amazon Private Label Section */}
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Why Choose Amazon Private Label?</h2>
            <p className="text-lg leading-relaxed text-white">
              Amazon Private Label allows you to develop products under your own brand name, offering a unique brand experience. By partnering with Xtreme Digitonix, you’ll tap into our expertise to create high-demand products that align with your brand’s vision, driving both business growth and brand loyalty.
            </p>
          </div>

          {/* Our Approach Section */}
          <div className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Our Approach:</h2>
            <p className="text-lg leading-relaxed text-white">
              We focus on product differentiation, brand development, and market positioning. Our team collaborates closely with you to build a custom product line that reflects your brand identity while meeting the needs of your target audience.
            </p>
          </div>

          {/* Key Services Section */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Key Services:</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed text-white space-y-2 text-left px-6">
              <li>Product Sourcing & Research: We identify profitable product niches and secure reliable suppliers.</li>
              <li>Private Label Development: Create custom-branded products that stand out on Amazon.</li>
              <li>Branding: Tailor product packaging and branding to reflect your unique identity.</li>
              <li>Marketing & Launch Strategy: Leverage Amazon's tools to promote and scale your products.</li>
              <li>Inventory & Fulfillment: Manage fulfillment through Amazon FBA for a seamless customer experience.</li>
            </ul>
          </div>

          {/* Why Partner with Us Section */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Why Partner with Us?</h2>
            <p className="text-lg leading-relaxed text-white">
              With Xtreme Digitonix, you gain access to a team of Amazon specialists who provide ongoing support in optimizing and growing your private label business.
            </p>
          </div>
        </Wrapper>
      </section>
    </>
  );
}

export default Page;
