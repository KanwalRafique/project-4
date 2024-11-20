import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full h-[48px] px-[100px] py-[12px] flex items-center justify-between mt-6">
      {/* Shop.co Logo */}
      <Image 
        src="/shop.co.png" 
        alt="Shop.co" 
        width={160} 
        height={22} 
      />
      
      {/* Navigation Links */}
      <ul className="flex space-x-7">
        <li>Shop</li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
      </ul>

      

      {/* Search Button */}
      <button className="w-[577px] h-[48px] border rounded-full bg-[#F0F0F0] flex items-center pl-4">
        <Image src="/Frame.png" alt="Search" width={24} height={24} />
      </button>

<div className="flex">


      <Image 
      src="/Frame (2).png" 
      alt="Search" 
      width={24} 
      height={24}
      className="mr-4" />

      <Image 
      src="/Frame (3).png" 
      alt="Search" 
      width={24} 
      height={24} />
      

      </div>
        
    </nav>
  );
}





