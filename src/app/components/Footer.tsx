import React from 'react';
import Image from 'next/image';

export const Footer = () => {
  return (
    
<div className='w-[1500px] h-[689px] relative bg-[#F0F0F0] '>
  
<div className=" relative ml-10  w-[1410px] h-[180] bg-black rounded-[20px] px-[64px] py-[36px] flex items-center">
      {/* Parent Container */}

      {/* Heading */}
      <h1 className="text-white absolute text-5xl font-extrabold">
        STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
      </h1>

      {/* Buttons Container */}
      <div className="flex flex-col items-center space-y-4 ml-[800px]">
        {/* First Button with Image */}
        <button className=" mb-10 w-[470px] h-[75px] text-gray-300 rounded-[62px] text-2xl bg-[#FFFFFF] font-semibold flex items-center justify-center space-x-4">
          <div className="w-[50px] h-[40px]">
            <Image 
              src="/Mail.png" 
              alt="pic" 
              width={50} // Corrected width to match the container size
              height={40} // Corrected height to match the container size
            />
          </div>
          <span>Enter your email address</span>
        </button>

        {/* Second Button */}
        <button className=" mb-10 w-[470px] h-[75px] outline outline-2 outline-gray text-black rounded-[62px] text-2xl bg-[#FFFFFF] font-semibold flex items-center justify-center space-x-4">
          <span>Subscribe to Newsletter</span>
        </button>
        
      </div>
      
    </div>
    
 <div className='flex justify-items-center gap-[26px]'>
      <div>
       <Image 
       src="/Frame 51.png"
        alt='pic'
        width={248}
         height={177}
         className='mt-8 ml-24 gap-[26px]'
         />
      </div>

      <div>
       <Image 
       src="/Frame 47.png"
        alt='pic'
        width={104}
         height={177}
         className='mt-8 ml-24 gap-[26px]'
         />
      </div>

      <div>
       <Image 
       src="/Frame 48 (1).png"
        alt='pic'
        width={136}
         height={177}
         className='mt-8 ml-24 gap-[26px]'
         />
      </div>
      
      <div>
       <Image 
       src="/Frame 52 (1).png"
        alt='pic'
        width={149}
         height={177}
         className='mt-8 ml-24 gap-[26px]'
         />
      </div>

      <div>
       <Image 
       src="/Frame 49.png"
        alt='pic'
        width={149}
         height={177}
         className='mt-8 ml-24 gap-[26px]'
         />
      </div>

  </div>
      <hr className='mt-10 w-[110] ml-32 mr-24 mx-auto border-t-9 border-gray-300' />
      
      <br/>
  
  
  <div className='flex justify-items ml-10'>

      <h1 className='ml-24 text-gray-500'>Shop.co © 2000-2023, All Rights Reserved</h1>
         
          
          <div className=' mr-24 ml-auto '>
           <Image 
            src="/Frame 53.png"
            alt='pic'
            width={300}
            height={44}
            />
           </div>


           

      

      </div>




</div>
   
 
 );
};

export default Footer;
