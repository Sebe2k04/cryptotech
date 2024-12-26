import { RiRestaurant2Fill } from "react-icons/ri";
import { RiDrinksFill } from "react-icons/ri";
import { IoMdCart } from "react-icons/io";
import { FaLongArrowAltUp } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const OrderStat = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl p-3 min-w-[200px]">
      <div className="flex justify-between items-center">
        <h5 className="text-xl font-semibold">{data.title}</h5>
        <div className="">
          {data.status === "profit" ? (
            <div className="flex text-green-500">
              <div className="pt-1">
                <FaLongArrowAltUp className="" />
              </div>
              {data.percentage}
            </div>
          ) : (
            <div className="flex text-red-500">
              <div className="pt-1 rotate-180 ">
                <FaLongArrowAltUp className="" />
              </div>
              {data.percentage}
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-3 items-center pt-3">
      <div className="">
        {data.title === "Revenue" ? (
          <div className="text-orange-400 text-3xl">
            <BsArrowUpRightCircleFill />
          </div>
        ) : data.title === "Orders" ? (
          <div className="text-white text-md p-2 bg-green-500 w-fit rounded-full">
            <IoMdCart />
          </div>
        ) : data.title === "Dine in" ? (
          <div className="text-white text-md p-2 bg-red-500 w-fit rounded-full">
            <RiRestaurant2Fill />
          </div>
        ) : (
          <div className=" text-white text-md p-2 bg-orange-500 w-fit rounded-full">
            <RiDrinksFill />
          </div>
        )}
      </div>
      <h1 className="font-bold text-xl">{data.data}</h1>
      </div>
    </div>
  );
};

export default OrderStat;
