import Wrapper from "@/components/common/Wrapper";
import React from "react";

function Page() {
  return (
    <>
      <section className="flex size-full flex-col items-center justify-center !scroll-smooth bg-[url(/images/singleBg.png)] bg-cover bg-center bg-no-repeat px-4 pt-[200px] text-white tablet:px-0 tablet:pt-[100px]">
        <Wrapper>
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white-300 drop-shadow-md">Amazon Wholesale Solutions</h1>
          </div>

          {/* Introduction Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Introduction:</h2>
            <p className="text-lg leading-relaxed text-white">
              Maximize your profits by leveraging Xtreme Digitonix’s Amazon Wholesale solutions. We help businesses grow by tapping into established brands and selling high-demand products at scale on Amazon’s vast marketplace.
            </p>
          </div>

          {/* Why Choose Amazon Wholesale Section */}
          <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Why Choose Amazon Wholesale?</h2>
            <p className="text-lg leading-relaxed text-white">
              With Amazon Wholesale, you can sell well-known products without the challenges of product development. Xtreme Digitonix will help you identify the right products, negotiate with suppliers, and manage your Amazon business to drive growth and increase brand recognition.
            </p>
          </div>

          {/* Our Approach Section */}
          <div className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Our Approach:</h2>
            <p className="text-lg leading-relaxed text-white">
              We streamline your wholesale operations by focusing on efficient product sourcing, competitive pricing, and advanced Amazon seller strategies.
            </p>
          </div>

          {/* Key Services Section */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Key Services:</h2>
            <ul className="list-disc list-inside text-lg leading-relaxed text-white space-y-2 text-left px-6">
              <li>Supplier Negotiation: We connect you with trusted wholesalers and negotiate favorable terms.</li>
              <li>Product Listing Optimization: Ensure your listings stand out with optimized titles, descriptions, and images.</li>
              <li>Inventory Management: Maintain optimal stock levels and avoid costly delays or overstock issues.</li>
              <li>Account Management: Our team manages every aspect of your Amazon account to maximize profits.</li>
            </ul>
          </div>

          {/* Why Partner with Us Section */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg p-8 mb-8 max-w-3xl text-center shadow-lg">
            <h2 className="text-4xl font-semibold text-white mb-4">Why Partner with Us?</h2>
            <p className="text-lg leading-relaxed text-white">
              Our expertise in Amazon Wholesale allows us to implement proven strategies that enhance your business growth while establishing a reputation for reliability and excellence.
            </p>
          </div>
        </Wrapper>
      </section>
    </>
  );
}

export default Page;
