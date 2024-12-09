import Image from 'next/image'
import React from 'react'

const FooterFirst = () => {
  return (
    <>
   <div className="h-[138px] bg-[#FFFFFF]
   max-w-[90rem] sm:max-w-7xl
   md:max-w-7xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl
   mt-0 sm:mt-[600px] 
   drop-shadow-[0px_0px_3px_gray] border-2
   mx-auto container">
   <div className='flex items-center justify-between sm:justify-between
   md:justify-between lg:justify-between xl:justify-between
   xl2:justify-between
   sm:items-center md:items-center lg:items-center xl:items-center
   xl2:items-center 
   max-w-[65.625rem] h-[138px]
  text-black mx-auto 
   '>
        <div className="flex 
        items-center justify-center
        sm:flex-row ">
          <h1 className="font-bold text-[24px] font-serif ">Bandage</h1>
          </div>
          <div className='flex items-center justify-center space-x-4'>
            <Image src={"/images/facebook.png"}
            alt="fb-icon"
            width={24}
            height={24}
            className="w-[24px] h-[24px]"
            ></Image>
            <Image src={"/images/instagram.png"}
            alt="fb-icon"
            width={24}
            height={24}
            className="w-[24px] h-[24px]"
            ></Image>
            <Image src={"/images/tweeter.png"}
            alt="fb-icon"
            width={24}
            height={24}
            className="w-[24px] h-[24px]"
            ></Image>
          </div>
    </div>
   </div>
    </>
  )
}

export default FooterFirst
