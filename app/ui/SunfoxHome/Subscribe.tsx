import Link from "next/link"
import { IoIosArrowRoundForward } from "react-icons/io";

const Subscribe = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <div className="px-4 py-8 bg-red-100 flex flex-col gap-5 text-center md:text-left md:px-10 rounded-b-2xl border-2 border-transparent">
        <h1 className=" text-3xl font-semibold">How Much Can You Save With Solar?</h1>
        <p>When you decide you re ready, we can connect you with local solar installers.</p>
        <Link href={'/'} className="md:mt-10 lg:mt-0 lg:w-2/3 flex items-center justify-between bg-red-500 rounded-3xl px-6 py-2 text-white font-semibold hover:scale-105 transition-all">Click Here To Start <span><IoIosArrowRoundForward /></span></Link>
      </div>

      <div className="px-4 py-8 bg-red-100 flex flex-col gap-5 text-center md:text-left md:px-10 rounded-b-2xl border-2 border-transparent">
        <h1 className="text-3xl font-semibold">Join Our Supporter Mailing List.</h1>
        <p>We re building in public and invite you to follow along and learn more.</p>
        <div className="flex flex-col gap-4 lg:flex-row">
          <input type="email" name="email" placeholder="Your Email Address Here" className="w-full px-6 py-2 rounded-3xl border-transparent border-2 outline-none focus:border-red-400"/>
          <button className=" w-full flex items-center justify-between bg-red-500 rounded-3xl px-6 py-2 text-white font-semibold hover:scale-105 transition-all">Sign Up <span><IoIosArrowRoundForward /></span></button>
        </div>
      </div>
    </div>

  )
}

export default Subscribe