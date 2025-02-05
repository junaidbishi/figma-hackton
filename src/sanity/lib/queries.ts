
import { client } from "@/sanity/lib/client";

// types.ts
export interface IProduct {
    _id: string,
    name:string,
    price: number;
    description: string;
    discountpercentage: number | null;
    image_Url: string;
    tags: string | null;
    title: string | null;
  }
  

            export const getAllProducts = async () =>{
                try{

                    const queryAllProducts =`*[_type == "products"]{
            
                    title,
                    _id,
                    name,
                    price,
                    description,
                    discountpercentage,
                    "image_Url":image.asset->url,
                    tags,
                    
                    }`

                    const products= await client.fetch(queryAllProducts);
                    return products;

                }
                catch(error)
                {
                    console.log(error);
                    
                }
         
                
            }