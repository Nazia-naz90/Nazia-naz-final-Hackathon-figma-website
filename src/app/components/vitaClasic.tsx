import React from 'react';
import Link from "next/link";
import Image from 'next/image';

const VitaClasic = () => {
  return (
    <>
    <div className="flex  items-center justify-center
    max-w-[90rem] relative mt-[50px] 
    mx-auto">
    <section className='max-w-[90rem] mt-[400vmin] mx-auto'>
   <div className='flex items-center justify-around
    h-[550px] w-[1124px] mx-auto bg-green-700'>
    
            {/*Text Section */}
            <div className="relative container mx-auto py-20 flex flex-col items-start text-start ml-40 justify-start pt-32">
            <p className="text-white font-bold text-start">
              SUMMER 2020</p>
              <div className="w-[500px] mt-5">
              <h1 className="text-white text-[10vmin] font-bold text-start
              text-balance">
              Vita Classic 
              </h1>
              <h1 className="text-white text-[10vmin] font-bold text-start
              text-balance">
              Product
              </h1>
              </div>
        
         <div className="w-[300px] mt-5">
        <p className="text-white font-semibold text-[2vmin] text-balance">We know how large objects will act,
        but things on a small scale. 
        </p>
       </div>

      {/* Call-to-Action Buttons */}
      <div className="flex items-start justify-start container">
      <Link href="/shop" className='flex items-center justify-center space-x-4'>
      <p className='text-white font-semibold mt-4'>
        $16.48</p>                 
      <button className="w-[160px] h-[45px] bg-green-500  hover:bg-green-500 tracking-widest
      text-white font-bold mt-5 rounded-md">
      Add to cart</button>
      </Link>
      </div>
      </div>

      {/* Image Section */}
      <div className='mr-40 mt-10'>
        <Image src={"/images/vitaclasic-img.png"}
        alt="image"
        width={500}
        height={685}
        className='w-[500px] h-[500px]'>
        </Image>
      </div>


</div>    
</section>
    </div>

    </>
  )
}

export default VitaClasic;
