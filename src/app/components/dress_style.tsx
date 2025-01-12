import Image from "next/image";

export default function Dress_style(){

return(
    <div className="w-full h-full sm:h-[500px] bg-[#F0F0F0] mt-8 sm:mt-0 flex flex-col justify-start items-center p-8 max-w-screen-2xl mx-auto">
     {/* top div */}
        <div  className="mt-1">
            <h1 className="text-3xl font-extrabold pl-6 sm:pl-0">BROWSE BY DRESS STYLE</h1>

        </div>
        {/* bottom div */}
        <div className=" w-[90%] h-full sm:h-[600px] mt-2 flex flex-row justify-center items-center">
            <div className="w-[400px] h-[200px] m-1 relative"> 
                <Image src={"/dress-style-1.png"} alt="casual" className="w-full h-full rounded-[20px]" width={100} height={100}></Image>
                <span className="absolute top-10 left-5 font-bold text-xl">Casual</span>
                </div>
            <div className="w-[600px] h-[200px] m-1 relative">
            <Image src={"/dress-style-2.png"} alt="casual" className="w-full h-full rounded-[20px]" width={100} height={100}></Image>
            <span className="absolute top-10 left-5 font-bold text-xl">Formal</span>
                </div>
            <div className="w-[600px] h-[200px] m-1 relative ">
            <Image src={"/dress-style-3.png"} alt="casual" className="w-full h-full rounded-[20px]" width={100} height={100}></Image>
            <span className="absolute top-10 left-5 font-bold text-xl">Party</span>
                </div>
            <div className="w-[400px] h-[200px] m-1 relative"> 
            <Image src={"/dress-style-4.png"} alt="casual" className="w-full h-full rounded-[20px]" width={100} height={100}></Image>
            <span className="absolute top-10 left-5 font-bold text-xl">Gym</span>
            </div>
            
        </div>

    </div>


)

}