import React from "react";
import Image from "next/image";

const FeaturedPost = () => {
  return (
    <div
      className="flex  items-center justify-center
    max-w-[90rem] relative mt-[500px] 
    mb-[500px] mx-auto"
    >
      <div
        className="max-w-[65.625rem] absolute  
        flex justify-center items-center mx-auto"
      >
        <div
          className="w-[1124px] py-[80px] flex flex-col 
          gap-[80px]"
        >
          {/* Text Section */}
          <div className="w-full flex flex-col gap-[10px] justify-center items-center">
            <h4 className="font-Montserrat font-normal text-[20px] leading-[30px] text-[#737373]">
              Practice Advice
            </h4>
            <h3 className="font-Montserrat font-bold text-[24px] leading-[32px] text-[#252B42]">
              Featured Posts
            </h3>
            <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373]">
              Problems trying to resolve the conflict between
            </p>
            <p className="font-Montserrat font-normal text-[14px] leading-[20px] text-[#737373]">
              the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>

          {/* Card Section */}
          <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[10px] mx-auto">
            {/* image-1 */}
            <div className="w-[238px] h-[615px] mx-auto">
              <div className="w-full h-full">
                <div className="w-[239px] h-[427px]">
                  <Image
                    src={"/images/featuredProduct-1.png"}
                    alt="image"
                    width={348}
                    height={300}
                    className="w-[348px] h-[300px]"
                  ></Image>
                </div>
                {/* Bottom Text */}
                <div
                  className="flex flex-col leading-[30px]
                  border-2 border-gray-100 drop-shadow-md px-4
                  ">
                  <div className="flex">
                    <ul className="flex items-center justify-between space-x-3">
                      <li className="text-blue-500 text-[17px]">Google</li>
                      <li className="text-[#737373] text-[17px]">Trending</li>
                      <li className="text-[#737373] text-[17px]">New</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-black text-[3vmin]
                    font-bold">Loudest&apos;a la Madison {"#1"}</h3>
                    <h3 className="text-[#737373] font-semibold">
                    {"(L'integral)"}</h3>
                  </div>
                  <div>
                    <p className="text-[#737373] font-semibold">We focus on ergonomics and meeting</p>
                    <p className="text-[#737373] font-semibold">
                    you where you work. It&apos;s only a </p>
                    <p className="text-[#737373] font-semibold">
                      keystroke away</p>
                  </div>
                  <div className="flex items-center justify-between space-x-6">
                    <div className="flex">
                      <Image
                        src={"/images/featured-clock-1.png"}
                        alt="clock-icon"
                        width={20}
                        height={20}
                        className="w-[20px]
                        h-[20px]"
                      ></Image>
                      <p>22 April 2021</p>
                    </div>
                    <div className="flex">
                      <Image
                        src={"/images/f-p-2.png"}
                        alt="icon"
                        width={20}
                        height={20}
                        className="w-[20px]
                         h-[20px]"
                      ></Image>
                      <p>10 comments</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start
                  space-x-4">
                    <h1>Learn More</h1>
                    <Image
                      src={"/images/f-p-icon arrow-next.png"}
                      alt="arrow-icon"
                      width={16}
                      height={16}
                      className="w-[16px]
                        h-[16px]"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            {/* image-2 */}
            <div className="w-[238px] h-[615px] mx-auto">
              <div className="w-full h-full">
                <div className="w-[239px] h-[427px]">
                  <Image
                    src={"/images/featuredPrdt-2.jpg"}
                    alt="image"
                    width={348}
                    height={300}
                    className="w-[348px] h-[300px]"
                  ></Image>
                </div>
                {/* Bottom Text */}
                <div
                  className="flex flex-col leading-[30px] border-2 
                  border-gray-100 drop-shadow-md px-4">
                  <div className="flex">
                    <ul className="flex items-center justify-between space-x-3">
                      <li className="text-blue-500 text-[17px]">Google</li>
                      <li className="text-[#737373] text-[17px]">Trending</li>
                      <li className="text-[#737373] text-[17px]">New</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-black text-[3vmin]
                    font-bold">Loudest&apos;a la Madison {"#1"}</h3>
                    <h3 className="text-[#737373] font-semibold">
                    {"(L'integral)"}</h3>
                  </div>
                  <div>
                    <p className="text-[#737373] font-semibold">
                      We focus on ergonomics and meeting</p>
                    <p className="text-[#737373] font-semibold">
                      you where you work.It&apos;s only a </p>
                    <p className="text-[#737373] font-semibold">keystroke away</p>
                  </div>
                  <div className="flex items-center justify-between space-x-6">
                    <div className="flex">
                      <Image
                        src={"/images/featured-clock-1.png"}
                        alt="clock-icon"
                        width={20}
                        height={20}
                        className="w-[20px]
                        h-[20px]"
                      ></Image>
                      <p>22 April 2021</p>
                    </div>
                    <div className="flex">
                      <Image
                        src={"/images/f-p-2.png"}
                        alt="icon"
                        width={20}
                        height={20}
                        className="w-[20px]
                         h-[20px]"
                      ></Image>
                      <p>10 comments</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start
                  space-x-4">
                    <h1>Learn More</h1>
                    <Image
                      src={"/images/f-p-icon arrow-next.png"}
                      alt="arrow-icon"
                      width={16}
                      height={16}
                      className="w-[16px]
                        h-[16px]"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
            {/* image-3 */}
            <div className="w-[238px] h-[615px] mx-auto">
              <div className="w-full h-full">
                <div className="w-[239px] h-[427px]">
                  <Image
                    src={"/images/featuredPrdt-3.jpg"}
                    alt="image"
                    width={348}
                    height={300}
                    className="w-[348px] h-[300px]"
                  ></Image>
                </div>
                {/* Bottom Text */}
                <div
                  className="flex flex-col leading-[30px] border-2 
                  border-gray-100 drop-shadow-md px-4">
                  <div className="flex">
                    <ul className="flex items-center justify-between space-x-3">
                      <li className="text-blue-500 text-[17px]">Google</li>
                      <li className="text-[#737373] text-[17px]">Trending</li>
                      <li className="text-[#737373] text-[17px]">New</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-black text-[3vmin]
                    font-bold">Loudest&apos;a la Madison   {"#1"}</h3>
                    <h3 className="text-[#737373] font-semibold">
                      {"(L'integral)"}</h3>
                  </div>
                  <div>
                    <p className="text-[#737373] font-semibold">
                      We focus on ergonomics and meeting</p>
                    <p className="text-[#737373] font-semibold">
                      you where you work. It&apos;s only a </p>
                    <p className="text-[#737373] font-semibold">keystroke away</p>
                  </div>
                  <div className="flex items-center justify-between space-x-6">
                    <div className="flex">
                      <Image
                        src={"/images/featured-clock-1.png"}
                        alt="clock-icon"
                        width={20}
                        height={20}
                        className="w-[20px]
                        h-[20px]"
                      ></Image>
                      <p>22 April 2021</p>
                    </div>
                    <div className="flex">
                      <Image
                        src={"/images/f-p-2.png"}
                        alt="icon"
                        width={20}
                        height={20}
                        className="w-[20px]
                         h-[20px]"
                      ></Image>
                      <p>10 comments</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-start
                  space-x-4">
                    <h1>Learn More</h1>
                    <Image
                      src={"/images/f-p-icon arrow-next.png"}
                      alt="arrow-icon"
                      width={16}
                      height={16}
                      className="w-[16px]
                        h-[16px]"
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
