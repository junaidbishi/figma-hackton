import React from "react";
import Herosection from "./components/herosection";
import Fonts from "./components/fonts";
import Products from "./products/page";
import Top_selling from "./products/sells";

export default function Home() {
  return (

      <>
     <Herosection/>
     <Fonts/>
     <Products/>
     <Top_selling/>
      </>


  );    
}
