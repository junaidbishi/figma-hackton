import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";

interface Iproducts{
  title:string,
  price:string,
  id:number
  rating?:string,
  old_price?:string
  img_url:string
  img1:string,
  img2:string,
  img3:string,
}

const product:Iproducts[] = [
  {
    title:"T-SHIRT WITH TAPE DETAILS",
    id:1,
    price:"$140",
    img_url:"/product-one.png",
   img1:"/detail1.png",
    img2:"/detail2.png",
   img3:"/product1.png",
  
  },
  {
   title:"SKINNY FIT JEANS",
   id:2,
   price:"$120",
   img_url:"/product-two.png",
   old_price:"$200",
   img1:"/product2.png",
   img2:"/detail2.png",
   img3:"/product2.png",
  
  },
  {
   title:"CHECKERED SHIRT",
   id:3,
   price:"$120",
   img_url:"/product-three.png",
   img1:"/detail1.png",
   img2:"/detail2.png",
   img3:"/product3.png",
  
  },
  {
   title:"SLEEVE STRIPED T-SHIRT",
   id:4,
   price:"$120",
   img_url:"/product-four.png",
   old_price:"$200",
   img1:"/detail1.png",
   img2:"/detail2.png",
   img3:"/product4.png",

  },
  {
    title:"SLEEVE STRIPED T-SHIRT",
    id:5,
    price:"$120",
    img_url:"/sell1.png",
    old_price:"$200",
    img1:"/detail1.png",
    img2:"/detail2.png",
    img3:"/sell1.png",
 
   },
   {
    title:"T-SHIRT WITH TAPE DETAILS",
    id:1,
    price:"$140",
    img_url:"/product-one.png",
   img1:"/detail1.png",
    img2:"/detail2.png",
   img3:"/product1.png",
  
  },
  {
   title:"SKINNY FIT JEANS",
   id:2,
   price:"$120",
   img_url:"/product-two.png",
   old_price:"$200",
   img1:"/product2.png",
   img2:"/detail2.png",
   img3:"/product2.png",
  
  },
  {
   title:"CHECKERED SHIRT",
   id:3,
   price:"$120",
   img_url:"/product-three.png",
   img1:"/detail1.png",
   img2:"/detail2.png",
   img3:"/product3.png",
  
  },
  {
   title:"SLEEVE STRIPED T-SHIRT",
   id:4,
   price:"$120",
   img_url:"/product-four.png",
   old_price:"$200",
   img1:"/detail1.png",
   img2:"/detail2.png",
   img3:"/product4.png",

  },
   
];

const star = [
  <FaStar key={1} />,
  <FaStar key={2} />,
  <FaStar key={3} />,
  <FaStar key={4} />,
  <FaStar key={5} />,
];


export default function casual_shirts() {
  return (
    <div className="w-full sm:h-[500px] mt-7 max-w-screen-2xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        NEW ARRIVALS
      </h1>
      <div className="flex flex-wrap flex-col md:flex-row items-center justify-between px-8 mt-10">
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
                    <p className="text-lg mt-2 font-bold">{data.title}</p>
                    <div className="flex text-yellow-400">
                    {star.map((icon, index) => (
                    <span key={index}>{icon}</span>
   ))}
              </div>

                <p className="font-bold mt-1">
                  {data.price}
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
