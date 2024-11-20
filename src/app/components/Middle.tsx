import React from 'react'
import Image from 'next/image'

export const Middle = () => {
  return (
    <div className='pb-20'>
        <div className='text-black text-center mt-36 ml-2w-[1056px] h-[58px] font-extrabold text-5xl'>
        NEW ARRIVALS
      </div>

            {/* -----------------Updated section2 with horizontal layout---------------------- */}
      <div className="flex justify-start gap-8 mt-10 items-center">
       
       {/* Image 1 (Shirt) */}
       <div className='text-center'>
         <Image 
           src="/image 7.png"  
           alt="shirt" 
           width={296} 
           height={444}
           className="w-[450px] h-[400px] rounded-[20px] ml-10"
         />
         <h1 className='mt-4 text-2xl font-bold text-black ml-6'>T-Shirt with Tape Details</h1>
         <Image 
           src="/Frame 35.png" 
           alt='Stars'  
           width={243}
           height={100} 
           className='ml-8'  
         />
         <Image 
           src="/Frame 58.png" 
           alt='Stars'  
           width={75}
           height={43} 
           className='ml-10'  
         />
       </div>


       {/* Image 2 (Jeans) */}
       <div className='text-center'>
         <Image 
           src="/Frame 33.png"  
           alt="Jeans" 
           width={296} 
           height={444}
           className="w-[450px] h-[400px] rounded-[20px] ml-10"
         />
         <h1 className='mt-4 text-2xl font-bold text-black ml-10 mr-20'>Skinny Fit Jeans</h1>
         <Image 
           src="/Frame 39.png" 
           alt='Stars'  
           width={243}
           height={100} 
           className='ml-10'  
         />
         <Image 
           src="/Frame 59.png" 
           alt='Stars'  
           width={243}
           height={100} 
           className='ml-10'  
         />

       </div>


       {/* Image 3 (Checked Shirt) */}
       <div className='text-center'>
         <Image 
           src="/Frame 34.png"  
           alt="Checked T-Shirt" 
           width={296} 
           height={444}
           className="w-[550px] h-[400px] rounded-[20px] ml-10"
         />
         <h1 className='mt-4 text-2xl font-bold text-black  mr-24'>Checked Shirt</h1>
         <Image 
           src="/Frame 35.png" 
           alt='Stars'  
           width={243}
           height={100} 
           className='ml-12'  
         />
           <Image 
           src="/$180.png" 
           alt='pic'  
           width={75}
           height={43} 
           className='ml-14'  
         />

       </div>

       {/* Image 4 (Sleeve Striped T-Shirt) */}
       <div className='text-center'>
         <Image 
           src="/Frame 38.png"  
           alt="Striped T-Shirt" 
           width={296} 
           height={444}
           className="w-[550px] h-[400px] rounded-[20px] ml-10"
         />
         <h1 className='mt-4 text-xl font-bold text-black ml-1 mr-9'>Sleeve Striped T-Shirt</h1>
         <Image 
           src="/Frame 35.png" 
           alt='Stars'  
           width={243}
           height={100} 
           className='ml-14'  
         />
           <Image 
           src="/Frame 44.png" 
           alt='pic'  
           width={270}
           height={53} 
           className='ml-14'  
         />

       </div>

     </div>
     <div className='flex justify-center'>
       <button className='rounded-full mt-10 ml-96 mr-96 text-black py-[16px] px-[54px] top-[1548px] left-[611px] border border-gray-200 font-bold'>
              View All
       </button>

      </div>
      <hr className='mt-10 w-[110] ml-32 mr-24 mx-auto border-t-9 border-gray-300' />
 
      <div className='flex justify-center mt-16'>
   
       <Image 
       src="/selling.png"
       alt='selling'
       width={346}
       height={58}
       className='mx-auto'
       />
    </div>


      {/*--------------------Updated section3 with horizontal layout--------------------- */}
      <div className="flex justify-start gap-8 mt-10 items-center">
      
      {/* ----Image 1 (Shirt)---- */}
      <div className='text-center'>
        <Image 
          src="/Frame 32.png"  
          alt="shirt" 
          width={296} 
          height={444}
          className="w-[450px] h-[400px] rounded-[20px] ml-10"
        />
        <h1 className='mt-4 text-2xl font-bold text-black ml-6'>Vertical Striped Shirt</h1>
        <Image 
          src="/Frame 35 (1).png" 
          alt='Stars'  
          width={243}
          height={100} 
          className='ml-8'  
        />
        
        <div className='flex items-center space-x-4 font-extrabold'>
           <h1 className='ml-16 mr-3 text-4xl font-bold'>$212</h1>
           <h1 className='line-through text-gray-400 text-4xl'>$232</h1>
           <Image 
           src="/Frame 42 (1).png"
           alt='discount'
           width={58}
           height={28}
           />
       </div>
      </div>





      {/* ---- Image 2 (Shirt)---- */}
      <div className='text-center'>
        <Image 
          src="/Frame 33 (1).png"  
          alt="shirt" 
          width={296} 
          height={444}
          className="w-[450px] h-[400px] rounded-[20px] ml-10"
        />
        <h1 className='mt-4 text-2xl font-bold text-black ml-6'>Courage Graphic T-shirt</h1>
        <Image 
          src="/Frame 39 (2).png" 
          alt='Stars'  
          width={243}
          height={100} 
          className='ml-8'  
        />
        
        <div className='flex items-center space-x-4 font-extrabold'>
          <h1 className='ml-10 text-4xl font-bold'>$145</h1>
       </div>
      </div>





      {/* ----Image 3 (Shirt)---- */}
      <div className='text-center'>
        <Image 
          src="/Frame 34 (1).png"  
          alt="shirt" 
          width={296} 
          height={444}
          className="w-[450px] h-[400px] rounded-[20px] ml-10"
        />
        <h1 className='mt-4 text-2xl font-bold text-black ml-10'>Loose Fit Bermuda Short</h1>
        <Image 
          src="/Frame 40 (1).png" 
          alt='Stars'  
          width={210}
          height={100} 
          className='ml-16'  
        />
        
        <div className='flex items-center space-x-4 font-extrabold'>
           <h1 className='ml-16 mr-1 text-4xl font-bold'>$180</h1>
       </div>
      </div>





      {/* ---Image 4 (Shirt)----- */}
      <div className='text-center'>
        <Image 
          src="/Frame 38 (1).png"  
          alt="shirt" 
          width={296} 
          height={444}
          className="w-[450px] h-[400px] rounded-[20px] ml-10"
        />
        <h1 className='mt-4 text-2xl font-bold text-black ml-6'>Faded Skinny Jeans</h1>
        <Image 
          src="/Frame 35.png" 
          alt='Stars'  
          width={243}
          height={100} 
          className='ml-16'  
        />
        
        <div className='flex items-center space-x-4 font-extrabold'>
           <h1 className='ml-20 mr-1 text-4xl font-bold'>$210</h1>
       </div>
      </div>
    </div>
    <div className='flex justify-center'>
       <button className='rounded-full mt-10 ml-96 mr-96 text-black py-[16px] px-[54px] top-[1548px] left-[611px] border border-gray-200 font-bold'>
              View All
       </button>

      </div>
      <div className='mt-16'></div>

      
    </div>
    
  )
}
export default (Middle)
