import React from 'react';
import Image from 'next/image';

export const Section2 = () => {
  return (
    
    <div className='bg-black w-[1440px] h-[102px] relative'>
      <div className='flex justify-start items-center'>
        <Image 
          src="/Vector (1).png"  
          alt="Versace" 
          width={166.68} 
          height={33.16}
          className="ml-20 relative top-[44px] mb-10"
        />
        <Image 
          src="/zara-logo-1 1.png"  
          alt="Zara" 
          width={91} 
          height={33}
          className="ml-20 relative top-[42px] mb-10"
        />
        <Image 
          src="/Vector (2).png"  
          alt="Gucci" 
          width={166.68} 
          height={33.16}
          className="ml-20 relative top-[43px] mb-10"
        />
        <Image 
          src="/prada-logo-1 1.png"  
          alt="Prada" 
          width={194} 
          height={33}
          className="ml-20 relative top-[44px] mb-10"
        />
        <Image 
          src="/Vector.png"  
          alt="Calvin Klein" 
          width={280} 
          height={39}
          className="ml-20 relative top-[44px] mb-10"
        />
      </div>

       </div>
       


  );
};
