import { SheetSide } from "@/components/sheet";

import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosContact } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { NavigationMenuDemo } from "./navigationmenu";
import Link from "next/link";



export default function Header() {
  return (
// left
   <header className="w-full  h-[60px] bg-slate-50 flex justify-between items-center max-w-screen-2xl mx-auto">

    <div className="flex justify-center items-center">
   < SheetSide />
    <h1 className="text-xl sm:text-3xl font-bold mr-3">SHOP.CO</h1>

    </div>
    {/* navbar */}
    <ul className="hidden md:block">
    <li className="space-x-5 flex items-center">

        <Link href={""}> <NavigationMenuDemo/></Link>
        <Link href={"/"}>On sale</Link>
        <Link href={"products"}>New arrival</Link>
        <Link href={"/"}>Brands</Link>
    </li>

    </ul>

{/* SEARCH ICON */}

<div className="hidden md:block">
    <div className="flex  justify-start items-center w-[300px] h-[40px] rounded-[62px] bg-[#f0f0f0]  ">
    <IoSearch className="text-xl ml-2"/>
    <input  placeholder="search for product" className="w-full  outline-none ml-2 h-full rounded-[62px] bg-[#f0f0f0] "  />

</div>
</div>
{/* cart */}
<div className="flex items-center mr-5 space-x-3">
  <IoSearch className=" text -xl ml-2 md:hidden"/>
<Link href={"/cart"}>
<FiShoppingCart className="text-xl"/>
</Link>

<IoIosContact className="text-xl"/>

</div>


   </header>
  );
}
