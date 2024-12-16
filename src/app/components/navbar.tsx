import React from "react";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
export default function navbar() {
  return (
   <main className="bg-[#000] w-full h-[38px] flex justify-center items-center relative">
    <div className="flex justify-center items-center">
    
         <h3 className="text-white text-xs sm:text-sm">Sign up and get 20% off to your first order.</h3> 
         <Link href="#" className="text-white underline font-medium ml-3  text-xs sm:text-sm">
            Sign Up Now
          </Link>
         
    </div>
    <FaPlus className="text-white absolute right-[50px] hidden sm:block"/>


   </main>

  )
};
