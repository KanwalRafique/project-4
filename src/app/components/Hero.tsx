import React from 'react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className='bg-[#F2F0F1] w-full h-[763px]'>
      {/* Flex container for horizontal alignment */}
      <div className='flex items-center justify-center gap-10 p-5 mt-5'>
        
        {/* Text Container */}
        <div className='flex flex-col justify-start gap-5 text-left mb-60 mt-20'>
          <h1 className='font-integral-CF text-[90px] font-extrabold leading-[80px] ml-6'>
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>
          <p className='text-base md:text-[18px] w-full ml-6 mt-6'>
            Browse through our diverse range of meticulously crafted garments,<br /> designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className=' bg-black w-[210px] h-[52px] rounded-[62px] text-white px-[54px] py-[16] gap-12 ml-4'>
            Shop Now
          </button>

          {/* Info Container */}
          <div className="flex items-center justify-center gap-10 mt-10 mr-20">
            <div className="text-center">
              <h1 className="text-[40px] font-semibold">200+</h1>
              <p>International Brands</p>
            </div>
            <span className="text-4xl text-gray-500">|</span> {/* Separator */}
            <div className="text-center">
              <h1 className="text-[40px] font-semibold">2000+</h1>
              <p>High Quality Products</p>
            </div>
            <span className="text-4xl text-gray-500">|</span> {/* Separator */}
            <div className="text-center">
              <h1 className="text-[40px] font-semibold">30,000+</h1>
              <p>Happy Customers</p>
            </div>
          </div>

        </div>

 {/* ----------Image Container MAIN PIC---------- */}
        <div className='relative flex justify-center'>
          <Image 
            src="/pic.png"  
            alt="Jacket" 
            width={610} 
            height={560}
            className="rounded-lg mb-40 "
          />

     {/* Left Star Image */}
        
        
        <Image
         className="absolute animate-spin-slow mr-96 mt-64 ml-7 cursor-pointer"
         src="/Vector (5).png"
         alt="Left Star"
         height={46}
          width={46}
           />

    {/* Right Star Image */}
           <Image
           className="absolute animate-spin-slow ml-96 mt-28 cursor-pointe"
            src="/Vector (4).png"
             alt="Left Star"
             height={104}
             width={104}
             />


        </div>
      </div>
    </div>
  );
};
