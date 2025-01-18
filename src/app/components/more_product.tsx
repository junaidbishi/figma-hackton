import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";

interface Iproduct {
  title: string;
  price: string;
  id: number;
  
  old_price?: string;
  img_url: string;
}

let product: Iproduct[] = [
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    id: 1,
    price: "$120",
    img_url: "/product-one.png",
  },

  {
    title: "SKINNY FIT JEANS",
    id: 2,
    price: "$120",
    img_url: "/product-two.png",
    old_price: "$260",
  },

  {
    title: "CHECKERED SHIRT",
    id: 3,
    price: "$120",
    img_url: "/product-three.png",
    old_price: "$260",
  },

  {
    title: "SLEEVE STRIPED T-SHIRT",
    id: 4,
    price: "$120",
    img_url: "/product-four.png",
  },
];

let rating = [<FaStar />, <FaStar />, <FaStar />, <FaStar />];

export default function More_product() {
  return (
    <div className="w-full h-full sm:h-[500px] mt-7 max-w-screen-2xl mx-auto">
      <h1 className="text-5xl md:text-4xl font-extrabold text-center">
      YOU MIGHT ALSO LIKE
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between px-8 mt-10">
        {product.map((data) => {
          return (
            <div key={data.id}>
              <Link href={`/products/${data.id}`}>
              <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px]">
                <Image
                  src={data.img_url}
                  alt={data.title}
                  width={100}
                  height={100}
                  className="w-full h-full rounded-[20px]"
                ></Image>
              </div>
              
              
              
              
              </Link>
              <div>
                <p className="text-1xl mt-2 font-bold">{data.title}</p>
                <p className="flex text-yellow-300">{rating}</p>
                <p className="font-bold mt-1">
                  {data.price}{" "}
                  <span className="text-gray-400 line-through font-bold">
                    {data.old_price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
