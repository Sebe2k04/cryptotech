import { FaCircle } from "react-icons/fa";

const Card = ({ data }) => {
  return (
    <div className="bg-white rounded-xl p-3 flex justify-between">
      <div className="flex gap-3">
        <img
          src={data.image}
          alt=""
          className="w-[70px] h-[70px] rounded-full object-cover"
        />
        <div className="text-start">
          <h1 className="text-2xl font-semibold">{data.name}</h1>
          <div className="text-gray-500 flex pt-1"> 
            <span>{data.date} </span>
            <span className="text-[8px] flex items-center px-1">
              <FaCircle />
            </span>
            <span> {data.time}</span>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className={`${data.status!=="Outgoing" ? "text-green-500" : "text-red-500"} font-semibold text-2xl`}>{data.status!=="Outgoing" ? "+" : "-"  }{data.price}</h1>
        <h1 className="text-xl ">{data.status}</h1>
      </div>
    </div>
  );
};

export default Card;
