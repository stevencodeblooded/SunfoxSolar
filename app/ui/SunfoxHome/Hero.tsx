import Image from "next/image"
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="md:flex items-center justify-between gap-16 w-full bg-red-100 px-4 py-20">
      <div className="flex flex-col gap-6 items-center md:px-6 md:w-1/2 md:items-start ">
        <h1 className="text-3xl font-semibold text-center text-red-500 sm:text-5xl">Solar Calculator</h1>
        <p className="text-center font-semibold md:text-left">A customizable tool to learn the true value of going solar</p>
        <Image src={'/SolarHero.png'} alt="solar hero" width={500} height={300} className="md:hidden" />
        <p className="text-center md:text-left">Get started by entering your email address and the address of the property so we can generate a financial model.</p>
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
            <button type="submit" className="bg-red-500 rounded-3xl px-6 py-2 text-white font-semibold flex items-center justify-between hover:scale-105 transition-all">
              Build Model <span><IoIosArrowRoundForward /></span>
            </button>

            <p className="text-center"><span className="underline"><a href="/learn-more">Learn more</a></span> about this app</p>
        </form>
      </div>

      <div className="w-1/2">
        <Image src='/SolarHero.png' alt="solar hero" width={500} height={300} className="hidden md:block w-full h-full"  />
      </div>
      
    </div>

  )
}

export default Hero