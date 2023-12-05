import Image from "next/image";
import Link from "next/link"
import { IoIosArrowRoundForward } from "react-icons/io";

const ProudMembers = () => {
  return (
    <div className="px-4 py-8 flex flex-col gap-5 text-center">
      <h1 className="text-3xl font-semibold">We re proud to be members of the California Solar + Storage Association.</h1>
      <p>Fellow CALSSA members are eligible for discounted rates as part of our Solar Developer Network. Click below to learn more</p>
      <Link href={'/'} className="flex items-center justify-between bg-red-500 rounded-3xl px-6 py-2 text-white font-semibold">Learn More<span><IoIosArrowRoundForward /></span></Link>
      <div className="w-full">
        <Image src={'/man-worker-firld-by-solar-panels.jpg'} alt="" width={500} height={450} className="w-full rounded-md"/>
      </div>
    </div>
  )
}

export default ProudMembers