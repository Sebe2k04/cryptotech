import React from "react";
import { BiSolidCircleHalf } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { IoIosStar } from "react-icons/io";

const ResponsivePage = () => {
  return (
    <div className="p-10">
      {/* nav */}
      <div className="flex justify-between text-2xl">
        <div className="">
          <BiSolidCircleHalf />
        </div>
        <div className="flex gap-5">
          <IoSearch />
          <RiMenu3Fill />
        </div>
      </div>
      {/* landing page */}
      <div className="pt-10">
        <div className="bg-blue-500 w-fit py-1.5 px-3 font-semibold rounded-full text-white">
          <h1>#Top</h1>
        </div>
        <h1 className="text-4xl font-bold leading-[50px]">
          A Responsibly As Tech Leading, Global Compnay
        </h1>
        <h5 className="font-semibold py-5">
          Creating Superior Products & Services
        </h5>
        {/* rating */}
        <div className="flex gap-3">
          <div className="p-3 text-2xl rounded-xl bg-black text-white">
            <IoIosStar />
          </div>
          <div className="">
            <h1 className="font-semibold">Trust Pilot</h1>
            <p className="text-gray-500">
              Rated Best <span className="font-semibold text-black">12.6K</span>{" "}
              Reviews
            </p>
          </div>{" "}
        </div>
        <div className=" grid grid-cols-4 pt-10 gap-3">
          <div className="col-span-3 w-full flex justify-center h-[150px] rounded-xl items-center bg">
            <h1 className="p-5 rounded-full backdrop-blur-md bg-white/20 text-white">
              Play
            </h1>
          </div>
          <div className="h-full rounded-xl font-semibold bg-blue-500 text-white text-center">
            <div className="h-[100px] flex justify-center items-center">
              <h1 className="text-white ">72%</h1>
            </div>{" "}
            <div className="h-[50px] bg-black rounded-xl text-white flex items-center justify-center">
                <h1 className="text-white">32%</h1>
            </div>
          </div>
        </div>
        <div className="grid gap-2 pt-10">
            <div className="border-2 border-black w-full py-2 text-center rounded-lg">
                <h1 className="font-semibold">Signup to Get 50% OFF</h1>
            </div>
            <div className="border-2 bg-black w-full py-2 text-center rounded-lg">
                <h1 className="font-semibold text-white">Explore New Products</h1>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsivePage;
