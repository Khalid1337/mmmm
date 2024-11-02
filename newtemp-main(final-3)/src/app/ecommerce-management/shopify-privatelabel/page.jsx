import Wrapper from "@/components/common/Wrapper";
import React from "react";

function Page() {
  return (
    <>
      <section className="flex size-full flex-col items-center justify-center !scroll-smooth bg-[url(/images/singleBg.png)] bg-cover bg-center bg-no-repeat px-4 pt-[200px] text-white tablet:px-0 tablet:pt-[100px]">
        <Wrapper>
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white-300 drop-shadow-md">Shopify Drop Shipping</h1>
          </div>

          {/* Introduction Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Introduction:</h2>
            <p className="text-lg leading-relaxed text-white">
              Xtreme Digitonix provides comprehensive Shopify Drop Shipping solutions that allow you to focus on scaling your business without the need for inventory management. Build a distinct brand while we handle the logistics.
            </p>
          </div>

          {/* Why Choose Shopify Drop Shipping Section */}
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Why Choose Shopify Drop Shipping?</h2>
            <p className="text-lg leading-relaxed text-white">
              With drop shipping, you can sell products without holding inventory, giving you the flexibility to focus on branding and customer experience. We enable you to build a branded storefront that aligns with your vision and resonates with your customers.
            </p>
          </div>

          {/* Our Approach Section */}
          <div className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Our Approach:</h2>
            <p className="text-lg leading-relaxed text-white">
              We handle everything from sourcing and listing products to optimizing your Shopify store for conversions, ensuring that your brand stands out.
            </p>
          </div>

          {/* Key Services Section */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Key Services:</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed text-white space-y-2 text-left px-6">
              <li>Product Sourcing: Find top-rated suppliers and products to sell under your brand.</li>
              <li>Storefront Customization: Tailor your Shopify store to reflect your unique brand identity.</li>
              <li>Order Fulfillment: Seamless fulfillment through trusted partners to ensure customer satisfaction.</li>
              <li>Marketing & Scaling: Implement marketing strategies that drive traffic and conversions.</li>
            </ul>
          </div>

          {/* Why Partner with Us Section */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Why Partner with Us?</h2>
            <p className="text-lg leading-relaxed text-white">
              Our experience in Shopify Drop Shipping ensures a smooth process from product selection to scaling your store.
            </p>
          </div>
        </Wrapper>
      </section>
    </>
  );
}

export default Page;
