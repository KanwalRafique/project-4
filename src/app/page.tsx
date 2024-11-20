import FrameOne from "./components/Frameone";
import Homepage from "./components/Frameone";
import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import {Section2} from "@/app/components/Section2";
import Middle from "./components/Middle";
import Section4 from "./components/Section4";
import Happycustomer from "./components/Happycustomer";
import Footer from "./components/Footer";

{/*Adding all */}


export default function ResposnsivePage() {
return (
      <div className=" mt-30 mb-56 w-[1500px] h-[4960px] bg-white px[-5290px] py-[-1777px]" >
          <FrameOne/>
           <Navbar/>
           <Hero/>
           <Section2 />
           <Middle />
           <Section4 />
           <Happycustomer />
           <Footer />
      </div>
)








}

