import React from 'react'
import Image from 'next/image'

export const Happycustomer = () => {
  return (
          
          <div>
            <div> 
                <h1 className="text-black text-6xl font-extrabold mt-16 ml-32">OUR HAPPY CUSTOMERS</h1>
            </div>

             <div className='flex justify-center gap-1'>
                <div>
                <Image
                src="/Frame 22.png"
                alt='Reviews'
                width={500}
                height={240}
                className=' ml-14 rounded-[20px] border-1 py-[28px] px-[32px]'
                />
                </div>


                <div>
                <Image
                src="/Frame 22.png"
                alt='Reviews'
                width={500}
                height={240}
                className='ml-14 rounded-[20px] border-1 py-[28px] px-[32px]'
                />
                </div>


                <div>
                <Image
                src="/Frame 22.png"
                alt='Reviews'
                width={500}
                height={240}
                className=' mr-9 rounded-[20px] border-1 py-[28px] px-[32px]'
                />
                </div>

             </div>

    </div>
  )
}
export default (Happycustomer)
