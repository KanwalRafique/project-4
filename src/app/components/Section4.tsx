import React from 'react';
import Image from 'next/image';

export const Section4 = () => {
  return (
    <div className='bg-[#F0F0F0] w-[1239px] h-[866px] ml-32 rounded-[40px] mt-16 mx-auto'>
      {/* Container for the image with overlay text */}
      <div className="relative w-[680px] h-[40px] mx-auto">
        {/* Overlay text with increased margin-top */}
        <div className="absolute inset-0 flex items-center justify-center mt-28"> {/* Increased mt-10 for more spacing */}
          <h1 className="text-black text-5xl font-extrabold">BROWSE BY DRESS STYLES</h1>
        </div>
      </div>

{/* =================Inserting Images DIV-1============= */}
  <div className='flex justify-center gap-8'>
      {/* Image # 1 */}
      <div>
      <Image 
      src="/Frame 61.png"
      alt='Pic'
      width={407}
      height={289}
      className='mt-40 ml-7 mr-auto rounded-[20px]'
      />
      </div>


      {/* Image # 2 */}
      <div>
      <Image 
      src="/Frame 62.png"
      alt='Pic'
      width={690}
      height={289}
      className='mt-40 mr-6ml-5 rounded-[20px] '
      />
      </div>
  </div>

{/* =================Inserting Images DIV-2============= */}


  <div className='flex justify-center gap-8'>
      {/* Image # 3 */}
        <div>
        <Image 
        src="/Frame 64.png"
        alt='Pic'
        width={684}
         height={289}
        className='mt-5 ml-16 rounded-[20px]'
         />
          </div>


      {/* Image # 4 */}
      <div>
      <Image 
      src="/Frame 63.png"
      alt='Pic'
      width={407}
      height={289}
      className='mt-5 ml-5 mr-12 rounded-[20px]'
      />
      </div>

  </div>

    </div>
  );
}

export default Section4;
