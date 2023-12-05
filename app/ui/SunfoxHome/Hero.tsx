import Image from "next/image"
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <h1 className="text-3xl font-semibold text-center text-red-500">Solar Calculator</h1>
      <p className="text-center">A customizable tool to learn the true value of going solar</p>
      <Image src={'/SolarHero.png'} alt="" width={500} height={300} />
      <p className="text-center">Get started by entering your email address and the address of the property so we can generate a financial model.</p>
      <form action="" className="flex flex-col gap-4 w-full">
          <input 
            type="text" 
            name="" 
            id="" 
            placeholder="Enter an address"
            className=" border-2 rounded-3xl py-2 px-4 outline-none focus:border-red-400"
          />

          <input 
            type="email" 
            name="" 
            id="" 
            placeholder="youremail@gmail.com"
            className=" border-2 rounded-3xl py-2 px-4 outline-none focus:border-red-400"
          />
          <button type="submit" className="bg-red-500 rounded-3xl px-6 py-2 text-white font-semibold flex items-center justify-between">
            Build Model <span><IoIosArrowRoundForward /></span>
          </button>

          <p className="text-center"><span className="underline"><a href="/learn-more">Learn more</a></span> about this app</p>
      </form>
    </div>
  )
}

export default Hero