"use client";

import navItem from "../constant";
import Link from "next/link";
import Image from "next/image";
import useToggle from "../hooks/hooks";

export default function Navbar() {
  
  const  {toggle, handleMenuClick } = useToggle();
  
  return (
    <header className="h-[58px] bg-[#FFFFFF]
    max-w-[90rem] sm:max-w-7xl 
   md:max-w-7xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl
   mx-auto  fixed container lg:relative">

  <div className="flex items-center justify-between space-x-20 h-full px-4 sm:px-6 md:px-8 lg:mx-auto xl:px-4 container">
        <div className="flex 
        items-center justify-center
        sm:flex-row ">
          <h1 className="font-bold text-[24px] font-serif ">Bandage</h1>
          </div>

        <nav className="lg:h-[44.54px] ">
          <ul
            className="hidden lg:flex h-full w-full items-center 
          justify-between gap-[20px] text-[#737373]
          text-[17px] font-medium ">
            {navItem.map((item, id) => (
              <Link href={item.link} 
              key={id}
          className="transition transform hover:-translate-y-1 
          motion-reduce:transition-none 
          motion-reduce:hover:transform-none">
                <li key={id}>{item.title}</li>
              </Link>
              
            ))}
            
        <div
          className="text-[17px]
         hidden lg:flex justify-center items-center
         text-blue-500 ml-72
         transition transform hover:-translate-y-1 
         motion-reduce:transition-none 
         motion-reduce:hover:transform-none"
        >
          <Link href={""} className="flex items-center justify-center space-x-3">
          <Image src={"/images/login-icon.png"}
          alt="icon"
          width={15}
          height={15}
          className="h-[15px] w-[15px]"
          ></Image>
          <p className="text-[14px] text-[#23A6F0] font-bold space-x-3">{"Login/Register"}</p>
          <Image src={"/images/search-icon.png"}
          alt="search-icon"
          width={50}
          height={50}
          className="h-[50px] w-[50px]">
          </Image>
          <Image src={"/images/cart-icon.png"}
          alt="cart-icon"
          width={50}
          height={50}
          className="h-[50px] w-[50px]">
          </Image>
          <Image src={"/images/heart-icon.png"}
          alt="heart-icon"
          width={50}
          height={50}
          className="h-[50px] w-[50px]">
          </Image>
          </Link>
        </div>
          </ul>
        </nav>

        {/*SEARCH ,CART ICONS, & HAMBURGER BUTTON FOR MOBILE */}
        <div className="flex items-center justify-center lg:hidden">
          {/* SEARCH ICON */}
          <Link href={""} className="flex items-center justify-center space-x-3">
          <Image src={"/images/search-icon-for-mobile.png"}
          alt="search-icon"
          width={24}
          height={24}
          className="h-[24px] w-[24px]">
          </Image>
          <Image src={"/images/cart-icon-for-mobile.png"}
          alt="cart-icon"
          width={23}
          height={17.6}
          className="h-[23px] w-[20px]">
          </Image>
          </Link>
          <div className="flex flex-col justify-between  
           mx-4 gap-y-1  " onClick = {handleMenuClick}>
            <div className="w-[25px] bg-black 
            h-[4px] mt-5px mb-5px ml-3px mr-3px"></div>
            <div className="w-[17px] bg-black
            h-[4px] mt-5px mb-5px ml-3px mr-3px"></div>
            <div className="w-[13px] bg-black 
            h-[4px] mt-5px mb-5px ml-3px mr-3px"></div>
          </div>
                    {/* media query on navbar */}
          {toggle && (
        <div className="absolute right-0 w-[12rem] h-[100vh] bg-[#ffff] text-[#737373] mt-96 p-4 
        rounded-md ">
        <div className="flex flex-col justify-center items-center">
        <nav className="h-[5.5675vh]">
        <ul
         className=" flex flex-col h-full w-full items-center 
         justify-between space-y-4 text-[#737373]
         text-[20px] font-medium"
                  >
                    {navItem.map((item, id) => (
                      <Link href={item.link}
                      key={id}
                      className="transition transform hover:-translate-y-1 
                      motion-reduce:transition-none 
                      motion-reduce:hover:transform-none"
                       >
                        <li key={id}>{item.title}</li>
                      </Link>
                    ))}
          <Link href={""} className="flex flex-col items-center justify-center space-x-3">
          <Image src={"/images/login-icon.png"}
          alt="icon"
          width={15}
          height={15}
          className="h-[15px] w-[15px]"
          ></Image>
          <p className="text-[14px] text-[#23A6F0] font-bold space-x-3">{"Login/Register"}</p>
          <Image src={"/images/search-icon.png"}
          alt="search-icon"
          width={50}
          height={50}
          className="h-[50px] w-[50px]">
          </Image>
          <Image src={"/images/cart-icon.png"}
          alt="cart-icon"
          width={50}
          height={50}
          className="h-[50px] w-[50px]">
          </Image>
          <Image src={"/images/heart-icon.png"}
          alt="heart-icon"
          width={50}
          height={50}
          className="h-[50px] w-[50px]">
          </Image>
          </Link>
                  </ul>
                </nav>
                <div className="flex flex-col mt-48 
                space-y-2">
                          <div
          className="text-[17px]
         hidden lg:flex justify-center items-center
         text-blue-500
         transition transform hover:-translate-y-1 
         motion-reduce:transition-none 
         motion-reduce:hover:transform-none"
        >
          <Link href={""} className="flex items-center justify-center space-x-3">
          <Image src={"/images/login-icon.png"}
          alt="icon"
          width={15}
          height={15}
          className="h-[15px] w-[15px]"
          ></Image>
          <p className="text-[14px] text-[#23A6F0] font-bold space-x-3">{"Login/Register"}</p>
          <Image src={"/images/search-icon.png"}
          alt="search-icon"
          width={50}
          height={50}
          className="h-[50px] w-[50px]">
          </Image>
          <Image src={"/images/cart-icon.png"}
          alt="cart-icon"
          width={50}
          height={50}
          className="h-[50px] w-[50px]">
          </Image>
          <Image src={"/images/heart-icon.png"}
          alt="heart-icon"
          width={50}
          height={50}
          className="h-[50px] w-[50px]">
          </Image>
          </Link>
        </div>
                </div>
              </div>
            </div>
          )}
          {/* toggle-end */}
        </div>
      </div>
    </header>
  );
}
