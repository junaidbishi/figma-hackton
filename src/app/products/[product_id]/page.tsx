"use client";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { useParams } from "next/navigation";
import { Check, Minus, Plus } from "lucide-react";
import All_review from "@/app/components/all_review";
import More_product from "@/app/components/more_product";
import { BreadcrumbDemo } from "@/app/components/breadcrumb";
let rating = [<FaStar />, <FaStar />, <FaStar />, <FaStar />];

interface Iproduct {
  title: string;
  price: string;
  id: number;
  old_price?: string;
  img_url: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
}

let product: Iproduct[] = [
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    id: 1,
    price: "$120",
    img_url: "/product-one.png",
    img1: "/product-one.png",
    img2: "/product-two.png",
    img3: "/product-three.png",
    img4: "/product-one.png",
  },

  {
    title: "SKINNY FIT JEANS",
    id: 2,
    price: "$120",
    img_url: "/product-two.png",
    old_price: "$260",
    img1: "/product-one.png",
    img2: "/product-two.png",
    img3: "/product-three.png",
    img4: "/product-one.png",
  },

  {
    title: "CHECKERED SHIRT",
    id: 3,
    price: "$120",
    img_url: "/product-three.png",
    old_price: "$260",
    img1: "/product-one.png",
    img2: "/product-two.png",
    img3: "/product-three.png",
    img4: "/product-one.png",
  },

  {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 4,
    price: "$120",
    img_url: "/product-four.png",
    img1: "/product-one.png",
    img2: "/product-two.png",
    img3: "/product-three.png",
    img4: "/product-one.png",
  },
];

export default function Product_detail() {

  const params = useParams();
  const id = params.product_id;
  const item = product.find((item) => item.id === Number(id));
  if (!item) {
    return <h1>product not found</h1>;
  }

  return (
    <>
    <BreadcrumbDemo/>
    <div className="flex flex-col md:flex-row justify-center sm:justify-evenly sm:mt-10 p-6 sm:p-0 max-w-screen-2xl mx-auto">
      {/* left */}
      <div className="flex sm:flex-col justify-between items-center  sm:w-[152px] order-2 sm:order-1">
        {/* images */}
        <Image src={item.img1} className="w-[100px] sm:w-full smh-[100px] sm:h-[150px] " alt="product-discription" width={100} height={100}></Image>
        <Image src={item.img2} className="w-[100px] sm:w-full smh-[100px] sm:h-[150px] sm:mt-3" alt="product-discription" width={100} height={100}></Image>
        <Image src={item.img3} className="w-[100px] sm:w-full smh-[100px] sm:h-[150px] sm:mt-3" alt="product-discription" width={100} height={100}></Image>
        
      </div>
      {/* mid-div */}
      <div className="w-[90%] sm:w-[444px] h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
        <Image
             src={item.img_url}
          alt="product-discription"
          width={100}
          height={100}
          className="w-full h-[95%]"
        ></Image>
      </div>

      {/*  right div */}
      <div className="w-full sm:w-[600px] h-[500px] mt-3 order-3 ">
        <h1 className="text-2xl md:text-3xl font-bold">One Life Graphic T-shirt</h1>
        <div className="flex text-yellow-500">{rating}</div>
        <p className="font-bold mt-1">
          {item.price} <span>{item.old_price}</span>{" "}
        </p>
        <p>
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
{/* select color */}
        <div className=" mt-5">
          <p className="text-gray-400">select color</p>
          <div className="flex space-x-3 mt-2">
          <div className="w-[80px] h-[80px] bg-[#4F4631] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
          <div className="w-[80px] h-[80px] bg-[#314F4A] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>
          <div className="w-[80px] h-[80px] bg-[#314F4A] rounded-full flex justify-center items-center"><Check className="text-white opacity-0 hover:opacity-100 cursor-pointer"/></div>



          </div>
        
        </div>
        {/* choose size */}

        <div className="mt-4">
        <p className="text-gray-400">choose size</p>
        <div className="flex space-x-3 mt-2">
        <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400  ">smal</div>
        <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">medium</div>
        <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">large</div>
        <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">x-large</div>
        </div>
        </div>
      {/*  */}
      <div className="flex justify-start items-center mt-7 space-x-4">
      <div className="w-[100px] h-[40px] flex justify-between p-3  items-center rounded-[64px] bg-[#F0F0F0] text-gray-400 ">
        <Minus/>
        1
        <Plus/>
      </div>
      <button className="bg-black text-white w-[3000px]">Add to Cart</button>

      </div>
      </div>
    </div>
    <All_review/>
    <More_product/>
    </>
  );
}
