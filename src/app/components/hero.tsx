import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="flex  items-center justify-center
    max-w-[90rem] relative mx-auto"
    >
      <section
        className="max-w-[90rem]  h-[716px] bg-gray-100 mx-auto 
    sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto 2xl:mx-auto 
     container"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 
           "
        >
          <Image
            src="/images/hero-image.jpg"
            alt="Hero image"
            width={1440}
            height={716}
            objectFit="cover"
            className="w-[100vw] sm:w-[90rem] 
                    md:w-[90rem] lg:w-[90rem] h-[750px]  "
          />
          <div className="absolute inset-0 bg-black opacity-10"></div>{" "}
          {/* Overlay */}
        </div>

        {/* Hero Content */}
        <div
          className="relative container mx-auto sm:mx-auto
      md:mx-auto lg:mx-auto xl:mx-auto
      py-10 md:py-20 flex flex-col items-start justify-start pt-40 md:pt-60 lg:pt-72 "
        >
          <p className="text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl">
            SUMMER 2020
          </p>
          <h1 className="text-white text-[6vmin] md:text-[7vmin] lg:text-[8vmin] xl:text-[9vmin] font-extrabold text-start">
            NEW COLLECTION
          </h1>
          <div className="w-full max-w-xs mt-3 md:mt-5">
            <p className="text-white font-semibold text-[1.5vmin] md:text-[2vmin] lg:text-[2.5vmin] xl:text-[3vmin]">
              We know how large objects will act, but things on a small scale.
            </p>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex space-x-2 md:space-x-4">
            <Link
              href="/shop"
              className="w-[100px]sm:w-[150px] md:w-[150px] lg:w-[200px] 
            h-[35px] md:h-[45px] bg-green-500 hover:bg-green-600 text-white font-bold 
            mt-3 md:mt-5 rounded-md flex items-center  
            text-[4vmin] justify-center"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// const Hero = () => {
//     return (
//         <section className="max-w-[90rem] h-[700px] relative bg-gray-100 mx-auto">
//             {/* Background Image */}
//             <div className="absolute inset-0 ">
//                 <Image src={"/images/hero-image.jpg"}
//                 alt="Hero-image"
//                 width={1112}
//                 height={700}
//                 className="w-full h-full object-cover"
//                 ></Image>

//             <div className="absolute inset-0 bg-black opacity-10"></div> {/* Overlay */}
//             </div>

//             {/* Hero Content */}
//             <div className="relative container mx-auto py-20 flex flex-col items-start text-start justify-start pt-60">
//             <p className="text-white font-bold text-start">
//               SUMMER 2020</p>
//            <h1 className="text-white text-[7vmin] font-extrabold] text-start">NEW COLLECTION</h1>
//          <div className="w-[300px] mt-5">
//         <p className="text-white font-semibold text-[2vmin] text-balance">We know how large objects will act,
//         but things on a small scale.
//         </p>
//        </div>

//       {/* Call-to-Action Buttons */}
//       <div className="flex space-x-4">
//       <Link href="/shop" >

//       <button className="w-[228px] h-[45px] bg-green-500  hover:bg-green-500
//       text-white font-bold mt-5 rounded-md">
//       SHOP NOW</button>
//       </Link>
//       </div>
//             </div>
//       </section>
//     );
// };

// export default Hero;
