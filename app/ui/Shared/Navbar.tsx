import Image from "next/image"
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full py-6 px-4">
      <Image src={'/SunfoxLogo.png'} alt="Sunfox Logo" width={100} height={40} className="cursor-pointer"/>

      <div className="text-3xl cursor-pointer">
        <IoMenu />
      </div>
    </div>
  )
}

export default Navbar