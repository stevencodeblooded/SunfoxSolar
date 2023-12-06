"use client"
import { useState } from "react";
import { TfiWrite } from "react-icons/tfi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"
import Image from "next/image";

const GoSolar = () => {
  const [showDetails1, setShowDetails1] = useState(true);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);
  const [showDetails4, setShowDetails4] = useState(false);
  
  return (
    <div className="px-4 py-8 bg-red-100 lg:flex gap-6 lg:w-full lg:px-6 ">
      <section className="text-center lg:text-left lg:w-1/2">
        <h1 className="mb-5 text-3xl font-semibold">Ready To Go Solar?</h1>
        <p className="font-semibold mb-6">When you decide you re ready, we can connect you with local solar installers</p>
        <section className="w-full">
          <Image src={'/man-worker-firld-by-solar-panels.jpg'} alt="Man Beside Solar Panel" className="w-full rounded-md h-96"  width={500} height={300}/>
        </section>
      </section>
      <div className="flex flex-col gap-6 lg:w-1/2">
        <section className="bg-white p-3 rounded-lg">
          <div className="flex justify-between">
            <div className="flex items-center gap-4 ">
              <div className="text-4xl bg-red-500 text-white p-2 rounded">
                <TfiWrite />
              </div>
              <h3 className=" text-lg font-semibold">Get Real Quotes</h3>
            </div>
            <div className="text-3xl cursor-pointer" onClick={() => setShowDetails1(!showDetails1)}>
              {showDetails1 ?  <MdKeyboardArrowUp /> : <MdKeyboardArrowDown /> }
            </div>
          </div>
          { showDetails1 && (
            <p className="mt-3">Our financial models are just estimates
            based on preliminary information. If you
            decide to go solar, we ll connect you with
            one of our installation partners in your area
            who will give you a quote estimating what it
            will cost for them to install your project</p>
          )
          }
        </section>
        <section className="bg-white p-3 rounded-lg">
          <div className="flex justify-between">
            <div className="flex items-center gap-4 ">
              <div className="text-4xl bg-red-500 text-white p-2 rounded">
                <TfiWrite />
              </div>
              <h3 className=" text-lg font-semibold">Learn About Available Incentives</h3>
            </div>
            <div className="text-3xl cursor-pointer" onClick={() => setShowDetails2(!showDetails2)}>
              {showDetails2 ?  <MdKeyboardArrowUp /> : <MdKeyboardArrowDown /> }
            </div>
          </div>
          { showDetails2 && (
            <p className="mt-3">Our financial models are just estimates
            based on preliminary information. If you
            decide to go solar, we ll connect you with
            one of our installation partners in your area
            who will give you a quote estimating what it
            will cost for them to install your project</p>
          )
          }
        </section>
        <section className="bg-white p-3 rounded-lg">
          <div className="flex justify-between">
            <div className="flex items-center gap-4 ">
              <div className="text-4xl bg-red-500 text-white p-2 rounded">
                <TfiWrite />
              </div>
              <h3 className=" text-lg font-semibold">Compare Offers</h3>
            </div>
            <div className="text-3xl cursor-pointer" onClick={() => setShowDetails3(!showDetails3)}>
              {showDetails3 ?  <MdKeyboardArrowUp /> : <MdKeyboardArrowDown /> }
            </div>
          </div>
          { showDetails3 && (
            <p className="mt-3">Our financial models are just estimates
            based on preliminary information. If you
            decide to go solar, we ll connect you with
            one of our installation partners in your area
            who will give you a quote estimating what it
            will cost for them to install your project</p>
          )
          }
        </section>
        <section className="bg-white p-3 rounded-lg">
          <div className="flex justify-between">
            <div className="flex items-center gap-4 ">
              <div className="text-4xl bg-red-500 text-white p-2 rounded">
                <TfiWrite />
              </div>
              <h3 className=" text-lg font-semibold">Referral Fee</h3>
            </div>
            <div className="text-3xl cursor-pointer" onClick={() => setShowDetails4(!showDetails4)}>
              {showDetails4 ?  <MdKeyboardArrowUp /> : <MdKeyboardArrowDown /> }
            </div>
          </div>
          { showDetails4 && (
            <p className="mt-3">Our financial models are just estimates
            based on preliminary information. If you
            decide to go solar, we ll connect you with
            one of our installation partners in your area
            who will give you a quote estimating what it
            will cost for them to install your project</p>
          )
          }
        </section>
        <section className="w-full lg:hidden">
          <Image src={'/man-worker-firld-by-solar-panels.jpg'} alt="Man Beside Solar Panel" className="w-full rounded-md"  width={500} height={300}/>
        </section>
      </div>

    </div>
  )
}

export default GoSolar