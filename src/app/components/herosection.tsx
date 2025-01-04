
import Image from "next/image"


export default function Herosection(){
return(
<main className="w-full h-{500px} flex justify-betweennitem-start bg-{#f2f0f1}">
        {/* leftside */}
<div className="w-{500px}">
        <h1 className="text-2xl md:text-5xl font-extrabold"> FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
       <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>

       <div>
            <button className="w-full md:w-52 mb-5 md:mb-12 inline-block text-center bg-black hover:bg-black/80 transition-all text-white px-14 py-4 rounded-full">
              Shop Now
            </button>
          </div>


</div>

{/* right */}

<div>
<Image src= "/pic-one.png"
 width= {200} 
 height= {200}
 alt= "pic-one">
  </Image>


</div>


        
</main>




)





};