"use client"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoIosArrowRoundForward, IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [showLinks, setshowLinks] = useState(false);
  
  return (
    <div className="w-full py-6 px-4 bg-red-100">
      <div className="flex items-center justify-between">
        <Link href={'/'}>
          <Image src={'/SunfoxLogo.png'} alt="Sunfox Logo" width={100} height={40} className="cursor-pointer"/>
        </Link>

        <div className="text-3xl cursor-pointer sm:hidden" onClick={() => setshowLinks(!showLinks)}>
          { !showLinks ? <IoMenu /> : <IoIosClose />}
        </div>

        <ul className="hidden sm:flex items-center gap-8">
          <li><Link href={'/Developers'} className=" hover:text-red-500 hover:font-semibold transition-all">Developers</Link></li>
          <li><Link href={'/Calculator'}  className=" hover:text-red-500 hover:font-semibold transition-all">Calculator</Link></li>
          <li><Link href={'/Blog'}  className=" hover:text-red-500 hover:font-semibold transition-all">Blog</Link></li>
          <li>
            <Link href={'/Contact'} className="flex items-center gap-1 justify-between bg-red-500 rounded-3xl px-6 py-2 text-white font-semibold w-fit hover:scale-105 transition-all">Contact Us<span><IoIosArrowRoundForward /></span></Link>
          </li>
        </ul>
      </div>

      { showLinks && (
        <ul className="flex flex-col items-center gap-1 mt-2 sm:hidden">
          <li><Link href={'/Developers'} onClick={() => setshowLinks(!showLinks)}>Developers</Link></li>
          <li><Link href={'/Calculator'} onClick={() => setshowLinks(!showLinks)}>Calculator</Link></li>
          <li className="mb-3"><Link href={'/Blog'} onClick={() => setshowLinks(!showLinks)}>Blog</Link></li>
          <li>
            <Link href={'/Contact'} onClick={() => setshowLinks(!showLinks)} className="flex items-center gap-1 justify-between bg-red-500 rounded-3xl px-6 py-2 text-white font-semibold w-fit">Contact Us<span><IoIosArrowRoundForward /></span></Link>
          </li>
        </ul>
      ) }
    </div>

  )
}

export default Navbar