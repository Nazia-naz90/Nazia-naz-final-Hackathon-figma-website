import Navbar from "../components/navbar"
import Image from "next/image";
const Shop = () => {
    return(
        <>
<div>
      <Navbar/>
      <div className='lg:flex max-w-7xl sm:max-w-7xl
       md:max-w-7xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl
       mx-auto sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto container  items-center justify-center hidden'>
        <h1 className='
      text-pink-600 text-[10vmin] font-serif
       font-extrabold lg:mt-10 drop-shadow-md'>
        DIGITAL PRINTED SHIRTS</h1>
        </div>
      <section className='lg:flex flex-col max-w-7xl sm:max-w-7xl
       md:max-w-7xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl
       mx-auto sm:mx-auto md:mx-60 lg:mx-auto xl:mx-auto 
       items-center sm:items-center md:items-center lg:items-center
       xl-items-center xl2:items-center 
       justify=center sm:justify-center md:justify-center lg:justify-center
       xl:justify-center xl2:justify-center
       container
       p-10  '>
        <div className='flex lg:flex items-center 
        justify-center gap-y-16'>
        <h1 className=' lg:hidden
      text-pink-600 text-[5vmin] font-serif
       font-extrabold mt-16 mb-10 drop-shadow-md'>
        DIGITAL PRINTED SHIRTS</h1>
        </div>

        <div className="lg:mt-10 lg:mx-auto lg:grid grid-cols-3 justify-items-center lg:gap-24 lg:text-2xl items-center lg:p-3 
        font-semibold text-center mx-auto ">
        <div className='flex flex-col shadow-xl'>
        <Image
        src={"/fashion/fashion1.jpg"}
        alt="image"
        width={280}
        height={350}
        className='w-[280px] h-[350px]
        rounded-lg shadow-xl'>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div className="flex flex-col">
       <Image
        src={"/fashion/fashion2.jpg"}
        alt="image"
        width={280}
        height={350}
        className='w-[280px] h-[350px]
        rounded-lg shadow-xl'>
        </Image>
        <h6 className='flex text-[18px] text-black 
        space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div className="flex flex-col shadow-xl">
       <Image
        src={"/fashion/fashion3.jpg"}
        alt="image"
        width={280}
        height={350}
        className='w-[280px] h-[350px]
        rounded-lg shadow-xl'>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div className="flex flex-col shadow-xl">
       <Image
        src={"/fashion/fashion4.jpg"}
        alt="image"
        width={280}
        height={350}
        className='w-[280px] h-[350px]
        rounded-lg shadow-xl'>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div className="flex flex-col shadow-xl">
       <Image
        src={"/fashion/fashion5.jpg"}
        alt="image"
        width={280}
        height={350}
        className='w-[280px] h-[350px]
        rounded-lg shadow-xl'>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs
        </del> <ins>2500/=Rs</ins >ONLY</h6>
        </div>
        <div className="flex flex-col shadow-xl">
       <Image
        src={"/fashion/fashion6.jpg"}
        alt="image"
        width={280}
        height={350}
        className='w-[280px] h-[350px]
        rounded-lg shadow-xl'>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div className="flex flex-col shadow-xl">
       <Image
        src={"/fashion/fashion7.jpg"}
        alt="image"
        width={280}
        height={350}
        className='w-[280px] h-[350px]
        rounded-lg shadow-xl'>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div className="flex flex-col shadow-xl">
       <Image
        src={"/fashion/fashion8.jpg"}
        alt="image"
        width={280}
        height={350}
        className='w-[280px] h-[350px]
        rounded-lg shadow-xl'>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
       <div className="flex flex-col shadow-xl">
       <Image
        src={"/fashion/fashion9.jpg"}
        alt="image"
        width={280}
        height={350}
        className='w-[280px] h-[350px]
        rounded-lg shadow-xl'>
        </Image>
        <h6 className='flex text-[18px] text-black space-x-3'> <del className='text-red-600'>
          3000/=Rs</del> <ins>2500/=Rs</ins >ONLY</h6>
       </div>
        </div>
             </section>
    
    </div>
        </>
                
            )
}

export default Shop ;