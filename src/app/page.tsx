import React from "react";
import Herosection from "./components/herosection";
import Fonts from "./components/fonts";
import Products from "./products/page";
import Top_selling from "./products/sells";
import Dress_style from "./components/dress";
import CustomerCarousel from "@/components/ui/corouel";
import ProductCards from "./productcard/page";

export default function Home() {
  return (

      <>
     <Herosection/>
     <Fonts/>
     <Products/>
     < ProductCards/>
     <Top_selling/>
     <Dress_style/>
    
     <CustomerCarousel/>
     
      </>


  );    
 }
// 'use client';
// import { useEffect, useState } from "react"
// import { Products } from "../../types/product"
// import { client } from "@/sanity/lib/client"
// import { allProducts, four } from "@/sanity/lib/querries"


// const Home =()=>{
//   const [Products,setProducts]= useState<Products[]>([])
//   useEffect(()=>{
//     async function fetchproducts(){
//       const fetchproducts:Products[] = await client.fetch(four)
//       setProducts(fetchproducts)
//     }

// fetchproducts()

//   },[]);

// return (
//   <div>
// {Products.map((products)=>(
//   <div key={products._id}>
//   {products.name}
  
//   </div>
// )


// )}
// </div>

// );

// };
