import Wrapper from "@/components/common/Wrapper";
import React from "react";

function Page() {
  return (
    <>
      <section className="flex size-full flex-col items-center justify-center !scroll-smooth bg-[url(/images/singleBg.png)] bg-cover bg-center bg-no-repeat px-4 pt-[200px] text-white tablet:px-0 tablet:pt-[100px]">
        <Wrapper>
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white-300 drop-shadow-md">Build Your Brand with Expert Shopify White Label Solutions</h1>
          </div>

          {/* Introduction Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Introduction:</h2>
            <p className="text-lg leading-relaxed text-white">
              Unlock the potential of your ecommerce business with Xtreme Digitonix's specialized Shopify White Label solutions. As a Shopify merchant, establishing your brand identity is essential for long-term success. With our expertise in Shopify White Label, we empower you to create a unique brand experience for your customers and stand out in the competitive ecommerce landscape.
            </p>
          </div>

          {/* Why Choose Shopify White Label Section */}
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Why Choose Shopify White Label?</h2>
            <p className="text-lg leading-relaxed text-white">
              Shopify White Label enables you to sell products under your own brand name, offering a seamless and cohesive brand experience to your customers. By leveraging Shopify's robust platform and customization options, you can create a personalized storefront that reflects your brand identity and values. With Xtreme Digitonix's expertise in Shopify White Label, you can elevate your brand and establish a strong presence in the ecommerce market.
            </p>
          </div>

          {/* Our Approach Section */}
          <div className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Our Approach:</h2>
            <p className="text-lg leading-relaxed text-white">
              At Xtreme Digitonix, we take a strategic approach to Shopify White Label, focusing on product customization, branding, and marketing strategies. Our experienced team works closely with you to understand your brand vision and goals, and we tailor our solutions to align with your unique requirements. From product sourcing to storefront design, we ensure that every aspect of your Shopify store reflects your brand identity and resonates with your target audience.
            </p>
          </div>

          {/* Key Services Section */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Key Services:</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed text-white space-y-2 text-left px-6">
              <li>Product Research: We conduct thorough market research to identify high-demand products suitable for white labeling, ensuring that your product offerings align with your brand and target market.</li>
              <li>Private Label Product Development: We work with trusted suppliers to develop custom-branded products tailored to your specifications, allowing you to differentiate yourself in the market and build brand loyalty.</li>
              <li>Storefront Customization: We design and customize your Shopify storefront to reflect your brand identity, incorporating branded elements such as logos, colors, and imagery to create a cohesive and memorable brand experience for your customers.</li>
              <li>Marketing and Promotion: We develop tailored marketing strategies to promote your white label products and drive traffic to your Shopify store. From social media campaigns to email marketing, we help you maximize visibility and reach your target audience effectively.</li>
              <li>Order Fulfillment and Customer Support: We handle order fulfillment and provide dedicated customer support to ensure a seamless shopping experience for your customers. From order processing to shipping and returns, we manage every aspect of the customer journey to maintain high levels of satisfaction and loyalty.</li>
            </ul>
          </div>

          {/* Why Partner with Us Section */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Why Partner with Us?</h2>
            <p className="text-lg leading-relaxed text-white">
              Expertise: Our team brings extensive experience in Shopify White Label solutions, enabling us to deliver results that exceed your expectations.
            </p>
            <p className="text-lg leading-relaxed text-white">
              Customized Solutions: We understand that every brand is unique, which is why we offer personalized solutions tailored to your specific needs and objectives.
            </p>
            <p className="text-lg leading-relaxed text-white">
              Dedicated Support: We are committed to your success and provide ongoing support and guidance to help you achieve your ecommerce goals.
            </p>
          </div>

          {/* Book Your Appointment Section */}
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Book Your Appointment:</h2>
            <p className="text-lg leading-relaxed text-white">
              Ready to build your brand and elevate your ecommerce business with Shopify White Label? Partner with Xtreme Digitonix and benefit from our unparalleled expertise in creating custom-branded storefronts. With our comprehensive suite of services and unwavering commitment to your success, the sky's the limit for your Shopify business. Feel free to book your free appointment with Xtreme Digitonix, where one of our account managers will provide you with detailed insights and guidance tailored to your specific needs.
            </p>
          </div>
        </Wrapper>
      </section>
    </>
  );
}

export default Page;
