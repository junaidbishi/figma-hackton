import Image from "next/image";

export default function Herosection() {
  return (
    <main className="w-full h-{500px} max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between item-start bg-[#F2F0F1]">
      {/* leftside */}
      <div className="w-{500px} mt-3 md:mt-10 ml-10 ">
        <h1 className="text-2xl md:text-5xl font-extrabold">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
        <p className="text-lg mt-3">
          Browse through our diverse range of meticulously crafted garments,
          <br/>
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
          <button className ="bg-black py-2 px-8 rounded-[14px] mt-4 text-sm text-white">
            Shop Now
          </button>
      </div>

      {/* right */}

      <div>
        <Image
          src="/pic-one.png"
          className="w-[500px]  mr-4"
          width={1440}
          height={663}
          alt="pic-one"
          
        ></Image>
  
        {/* {star-one} */}
<Image
          src="/big-star.png"
          className="w-[100px] absolute  top-[100px]  rght-[200px] left-[1250px] "
          width={104}
          height={104}
          alt=""
          
        ></Image>

<Image
          src="/images/small-star.png"
          className="w-[56px] h-[56px] absolute  top-[250px]  rght-[60px] "
          width={89}
          height={77}
          alt="big-star">
       </Image>

</div>
    </main>
  );
}
