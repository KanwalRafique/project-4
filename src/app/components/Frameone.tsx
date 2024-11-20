import Link from "next/link"; // Correct the import to use a capital "L"
import Image from 'next/image'; // Import Image component

export default function FrameOne() {
    return (
        <div className="bg-black w-[1440px] h-[38px] text-white text-center flex justify-center items-center relative mx-auto">
            <span className="mr-4">
                Sign up and get 20% off your first order.{" "}
                <Link href="/signup">
                    <span className="underline cursor-pointer">Sign Up Now</span>
                </Link>
            </span>

           <button className="absolute right-0 top-0 m-4"> <Image 
            src={"/Cross.png"}
            alt="Logo"
            width={13}
            height={20}
            />
            </button>
        </div>
    );
}

