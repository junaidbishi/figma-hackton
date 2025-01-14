import React from "react";
import Herosection from "./components/herosection";
import Fonts from "./components/fonts";
import Products from "./products/page";
import Top_selling from "./products/sells";
import Dress_style from "./components/dress";
import CustomerCarousel from "@/components/ui/corouel";





export default function Home() {
  return (

      <>
     <Herosection/>
     <Fonts/>
     <Products/>
     <Top_selling/>
     <Dress_style/>
     <CustomerCarousel/>
     
      </>


  );    
}
