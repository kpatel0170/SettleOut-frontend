import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black body-font mt-auto">
      <div className="container mx-auto py-8 px-5 flex flex-wrap flex-col sm:flex-row">
        <div className="flex-grow flex flex-wrap">
          <div className="w-full mb-10 md:mb-0">
            <h2 className="text-2xl font-bold text-black mb-3">
              Settle<span className="text-indigo-500">Out</span>
            </h2>
            <p className="leading-relaxed text-gray-600">
              At SettleOut, we are committed to providing top-quality services
              to our valued customers. Our team of agents is dedicated to
              ensuring that you receive the highest level of service. Thank you
              for choosing SettleOut, and we look forward to serving you!
            </p>
            <p className="mt-4 text-gray-700">© 2023 SettleOut</p>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full md:pl-10 md:py-6">
            <h2 className="text-xl font-bold text-black mb-3">Links</h2>
            <nav className="list-none">
              <li className="mb-2">
                <a href="/" className="text-black hover:text-indigo-500">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/blog" className="text-black hover:text-indigo-500">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="/aboutus" className="text-black hover:text-indigo-500">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/contactus"
                  className="text-black hover:text-indigo-500"
                >
                  Contact Us
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
