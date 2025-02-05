"use client";
import React, { useEffect, useState } from "react";
import SanityClient from "@sanity/client";
import Image from "next/image";

const sanity = SanityClient({
  projectId: "bv4auy6e",
  dataset: "production",
  apiVersion: "2025-01-16",
  useCdn: true,
});

interface Product {
  _id: string;
  name: string;
  price: number;
  title: string;
  description: string;
  discountpercentage: number;
  imageUrl: string;
  productImage: string;
  tags: string[];
}

const ProductCards: React.FC = () => {
  const [Products, setProducts] = useState<Product[]>([]);
  const [carts, setCart] = useState<Product[]>([]);

  const fetchProducts = async () => {
    try {
      const query = `
            *[_type == "Products"]{
            
            _id,
            name,
            title,
            price,
            description,
            discountpercentage,
            "image_Url":productImage.assest->url,
            tags,
            
            }
            `;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const addTOCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.title} has been added to your cart!`);
  };

  const truncateDescription = (description : string) =>{
    return description.length > 100 ? description.substring(0,100) + "...":description;
  };

  useEffect(() => {
    fetchProducts();
  }, []);

 

  return (
    // main-div
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-2">
        Products From API&apos; Data
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Products.map((product) => (
          <div
            key={product._id}
            className=" bg-black shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />

            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.title}</h2>
              <p className="text-slate">
                {truncateDescription(product.description)}
              </p>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-slate-600 font-bold">${product.price}</p>
                  {product.discountpercentage > 0 && (
                    <p className="text-sm text-green-600">
                      {product.discountpercentage} % OFF
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-2 flex flex-wrap gap-2">
                {product.tags.map((tag,index) => (
                  <span
                    key={index}
                    className="text-xs bg-slate-400 text-black px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* add to cart functionalty */}
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                onClick={() => addTOCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* summary */}
      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-black text-red-900">Cart Summary</h2>
        {
            carts.length > 0 ?(
                <ul className="space-y-4">
                    {carts.map((item,index) =>(
                        <li key={index}
                        className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md">
                            
                        <div>
                        <p className="font-medium text-slate-900">{item.title}</p>
                        <p className="text-sm text-blue-900">${item.price.toFixed(2)} </p>

                        </div>
                        <Image
                        src={item.imageUrl}
                        alt={item.title}
                        width={50}
                        height={50}
                        className="rounded-md"/>
                        </li>
                    ))}
                </ul>
            ):(
                <p className="text-black text-center">Your Cart Is Empty Please Add Product</p>
            )

        }
      </div>
    </div>
  );
};
export default ProductCards; 
