"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image"; 
import Herosection from "./components/herosection";
import Fonts from "./components/fonts";
import Top_selling from "./products/sells";
import Dress_style from "./components/dress";
import CustomerCarousel from "@/components/ui/corouel";
import { getAllProducts, IProduct } from "@/sanity/lib/queries";

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts = await getAllProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  function handleAddToCart(product: IProduct): void {
    console.log("Added to cart:", product.name);
    // Add to cart logic here (e.g., updating global state or API call)
  }

  return (
    <>
      <Herosection />
      <Fonts />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="p-4 border rounded-lg">
              {product.image_Url && (
                <Image
                  src={Array.isArray(product.image_Url) ? product.image_Url[0] : product.image_Url}
                  alt="Product image"
                  width={300}
                  height={300}
                  className="w-[150px] h-[150px] object-cover"
                  priority
                />
              )}
              <p className="text-lg font-bold">${product.price}</p>
              <p className="text-lg font-bold">{product.name}</p>
              <p className="text-gray-500">{product.tags}</p>
              <p className="text-gray-500">{product.title}</p>
              <p className="text-gray-500">{product.discountpercentage}% Off</p>
              <p className="text-gray-500">{product.description}</p>

              <button
                onClick={() => handleAddToCart(product)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>

      <Top_selling />
      <Dress_style />
      <CustomerCarousel />
    </>
  );
}
