"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

interface Iproduct {
  title: string;
  name:string;
  price: string;
  id: number;
  old_price?: string;
  img_url: string;
}

const product: Iproduct[] = [
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    name:"polo",
    id: 1,
    price: "$120",
    img_url: "/product-one.png",
  },
  {
    title: "SKINNY FIT JEANS",
    name:"polo",
    id: 2,
    price: "$120",
    img_url: "/product-two.png",
    old_price: "$260",
  },
  {
    title: "CHECKERED SHIRT",
    name:"polo",
    id: 3,
    price: "$120",
    img_url: "/product-three.png",
    old_price: "$260",
  },
  {
    title: "SLEEVE STRIPED T-SHIRT",
    name:"polo",
    id: 4,
    price: "$120",
    img_url: "/product-four.png",
  },
];

const rating = [<FaStar key={1} />, <FaStar key={2} />, <FaStar key={3} />, <FaStar key={4} />];

export default function Products() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/product");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Iproduct[] = await response.json();
        console.log("Fetched products:", data);
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        console.error("Error fetching items:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="w-full sm:h-[500px] mt-7 max-w-screen-2xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center">NEW ARRIVALS</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="flex flex-col md:flex-row items-center justify-between px-8 mt-10">
        {product.map((data) => (
          <div key={data.id}>
            <Link href={`/products/${data.id}`}>
              <div className="w-[290px] h-[290px] md:w-[190px] md:h-[190px] bg-[#F0EEED] rounded-[20px]">
                <Image
                  src={data.img_url}
                  alt={data.title}
                  width={190}
                  height={190}
                  className="w-full h-full rounded-[20px]"
                />
              </div>
            </Link>
            <div>
              <p className="text-1xl mt-2 font-bold">{data.title}</p>
              

              <p className="flex text-yellow-300">{rating}</p>
              <p className="font-bold mt-1">
                {data.price}{" "}
                {data.old_price && (
                  <span className="text-gray-400 line-through font-bold">
                    {data.old_price}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
