import React from 'react'
import Image from 'next/image'
import Link from "next/link";
const PartOfNatural = () => {
  return (
    <>
    <section className='max-w-[90rem] mt-[10vmin] mx-auto'>
<div className='flex items-center justify-center
h-[550px] w-[1124px] mx-auto bg-gray-200
'>
    
      <div className='flex items-center justify-between gap-x-40'>
        {/* Image Section */}
      <div className='ml-40 mt-32'>
        <Image src={"/images/partOfNatural-Universe-couple.png"}
        alt="image"
        width={700}
        height={400}
        className='w-[700px] h-[400px]'>
        </Image>
      </div>

      {/*Text Section */}
      <div className="relative container mx-auto 
      w-[650px] h-[326px]
      mb-40 mr-40 flex flex-col items-start text-start justify-start pt-32">
    <p className="text-black font-semibold text-start">
    SUMMER 2020
    </p>
    <div className="w-[400px] ">
              <h1 className="text-black text-[7vmin] font-bold text-start
              text-balance">
              Part of the Neural 
             
              </h1>
              <h1 className="text-black text-[7vmin] font-bold text-start
              text-balance">
               Universe
              </h1>
              </div>
        
         <div className="w-[300px] mt-5">
        <p className="text-gray-500 font-semibold text-[2vmin] text-balance">
        We know how large objects will act, 
        but things on a small scale. 
        </p>
       </div>

      {/* Call-to-Action Buttons */}
      <div className="flex items-start justify-start container">
      <Link href="/shop" className='flex items-center justify-center space-x-4'>
      <button className="w-[160px] h-[45px] bg-green-500  hover:bg-green-500
      text-white font-bold mt-5 rounded-md">
      BUY NOW</button>
      <button className="w-[160px] h-[45px] bg-white  hover:bg-gray-300
      text-green-500 font-bold mt-5 rounded-md">
      BUY NOW</button>
                      
      </Link>
      </div>
      </div>
      </div>


</div>    
</section>

    </>
  )
}

export default PartOfNatural
