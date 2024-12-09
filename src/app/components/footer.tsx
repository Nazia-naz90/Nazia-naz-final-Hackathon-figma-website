import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="max-w-[90rem] sm:max-w-7xl mt-10
   md:max-w-7xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl 
   mx-auto ">
        <div
          className=" lg:flex items-center justify-between 
        max-w-[65.625rem] mx-auto  
        mt-0 bg-[#FFFFFF] container"
        >
          {/* md:pl-24 */}

          {/*footer panel 1st*/}
        <div
        className="max-w-7xl 
         mx-auto  container
         lg:flex  items-center justify-center lg:space-x-10 
        "
          >
            <div
              className="flex justify-center items-center 
          py-10 mt-10"
            >
              <div
                className="lg:flex flex-col lg:flex-grow 
            leading-7 "
              >
                <h1
                  className=" text-[3vmin] font-bold
                 text-black text-balance"
                >
                  Company Info
                </h1>
                <p className="text-gray-400 text-[2vmin] ">About Us</p>
                <p className="text-gray-400 text-[2vmin] ">About Us</p>
                <p className="text-gray-400 text-[2vmin] ">About Us</p>
                <p className="text-gray-400 text-[2vmin]">Carrier</p>
                <p className="text-gray-400 text-[2vmin]">We are hiring</p>
                <p className="text-gray-400 text-[2vmin]">Blog</p>
              </div>
            </div>
            {/* footer-pannel-2 */}
            {/* Company */}
            <div
              className="lg:flex
          flex-grow  lg:justify-between md:justify-between
           mx-aut0 "
            >
              {/* space-x-20 sm:space-x-10 md:space-x-24 lg:space-x-20 xl:space-x-20 */}
              <div
                className="flex flex-col md:items-center md:justify-center
          height-[300px] text-black"
              >
                <ul
                  className="flex flex-col text-gray-400 
            gap-3"
                >
                  <h6
                    className="text-[3vmin] font-bold
                 text-black text-balance"
                  >
                    Legal
                  </h6>
                  <p className="text-gray-400 text-[2vmin]">About Us</p>
                  <p className="text-gray-400 text-[2vmin]">Carrier</p>
                  <p className="text-gray-400 text-[2vmin]">We are hiring</p>
                  <p className="text-gray-400 text-[2vmin]">Blog</p>
                </ul>
              </div>
              {/*======Footer panel-3  Features ========*/}
              <div
                className="flex flex-col 
            text-white md:items-center md:justify-center"
              >
                <ul className="flex flex-col text-gray-400 gap-3">
                  <h6
                    className="text-[3vmin] font-bold
                 text-black text-balance"
                  >
                    Features
                  </h6>
                  <p className="text-gray-400 text-[2vmin]">Business Marketing</p>
                  <p className="text-gray-400 text-[2vmin]">User Analytic</p>
                  <p className="text-gray-400 text-[2vmin]">Live Chat</p>
                  <p className="text-gray-400 text-[2vmin]">Unlimited Support</p>
                </ul>
              </div>
              {/*========Footer panel-4*/}
              <div
                className="flex flex-col height-[300px]
            text-white md:items-center md:justify-center"
              >
                <ul className="flex flex-col text-gray-400 gap-3">
                  <h6
                    className="text-[3vmin] font-bold
                 text-black text-balance"
                  >
                    Resources
                  </h6>
                  <p className="text-gray-400 text-[2vmin]">IOS & Android</p>
                  <p className="text-gray-400 text-[2vmin]">IOS & Android</p>
                  <p className="text-gray-400 text-[2vmin]">Customers</p>
                  <p className="text-gray-400 text-[2vmin]">API</p>
                </ul>
              </div>

              {/* =====Footer pane-5====== */}
              <div
                className="flex justify-center items-center 
          py-10 mb-12"
              >
                <div
                  className="lg:flex flex-col lg:flex-grow 
            leading-8 "
                >
                  <h1
                    className=" text-[3vmin] font-bold
                 text-black text-balance"
                  >
                    Get In Touch
                  </h1>
                  <form className="flex items-center space-x-0">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Subscribe
                    </button>{" "}
                  </form>
                  <p className="text-gray-400 text-[2vmin]">Lore imp sum dolor Amit</p>
                </div>
              </div>
            </div>

            {/* © 2024 shope, Inc. */}
           
          </div>
        </div>
        <div className="flex items-start justify-start ml-32">
              <p className="text-gray-400 text-[3vmin] font-semibold">Made With Love By Finland All Right Reserved </p>
            </div>
      </footer>
    </>
  );
};

export default Footer;
