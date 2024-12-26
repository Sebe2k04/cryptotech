import React from "react";
import { BsStack } from "react-icons/bs";
import { IoIosCode } from "react-icons/io";
import { FaQrcode } from "react-icons/fa6";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaTable } from "react-icons/fa6";

const CourseApp = () => {
  const data = [
    {
      title: "Basic Algorithm",
      lessons: 25,
      completed: 10,
      percentage: "48%",
      duration: "14h 38m 56s",
      icon: <BsStack />,
      color: "text-violet-500",
      bgcolor: "bg-violet-100",
      sdate: "27 Jan 2023",
    },
    {
      title: "Web Development",
      lessons: 45,
      completed: 40,
      percentage: "97%",
      duration: "36h 30m 00s",
      icon: <IoIosCode />,
      color: "text-blue-500",
      bgcolor: "bg-blue-100",
      sdate: "23 Feb 2023",
    },
    {
      title: "Basic Data Science",
      lessons: 37,
      completed: 9,
      percentage: "40%",
      duration: "37h 00m 00s",
      icon: <FaQrcode />,
      color: "text-orange-500",
      bgcolor: "bg-orange-100",
      sdate: "14 Jan 2023",
    },
    {
      title: "UI/UX Design",
      lessons: 32,
      completed: 26,
      percentage: "84%",
      duration: "16h 40m 50s",
      icon: <HiOutlineDesktopComputer />,
      color: "text-green-500",
      bgcolor: "bg-green-100",
      sdate: "19 Feb 2023",
    },
    {
      title: "Project Management",
      lessons: 19,
      completed: 14,
      percentage: "89%",
      duration: "13h 20m 00s",
      icon: <FaTable />,
      color: "text-red-500",
      bgcolor: "bg-red-100",
      sdate: "27 Jan 2023",
    },
  ];
  return (
    <div className="p-1">
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl">My Courses</h1>
        <h3 className="text-gray-400">View All</h3>
      </div>
      <div className="grid grid-cols-5 w-full text-start pt-10">
        <div className="col-span-2">
          <h1 className="text-gray-400 text-xl">Course Name</h1>
        </div>
        <div className="col-span-1">
          <h1 className="text-gray-400 text-xl">Start Date</h1>
        </div>
        <div className="col-span-1">
          <h1 className="text-gray-400 text-xl">Lesson completed</h1>
        </div>
        <div className="col-span-1">
          <h1 className="text-gray-400 text-xl">Duration</h1>
        </div>
      </div>
      <div className="pt-5">
        {data.map((data, i) => {
          return (
            <div key={i} className="grid grid-cols-5 py-4 text-start">
              <div className="col-span-2 flex gap-2">
                <div
                  className={`p-3 ${data.color} flex items-center justify-center text-xl rounded-lg  ${data.bgcolor}`}
                >
                  {data.icon}
                </div>
                <div className="text-start">
                  <h1 className=" text-xl">{data.title}</h1>
                  <p className="text-sm text-gray-400">
                    {data.lessons} Lessons
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <h1 className="text-xl">{data.sdate}</h1>
              </div>
              <div className="col-span-1 text-xl">
                <span>
                  {data.completed}/
                </span>
                <span className="text-gray-400">{data.lessons}</span>
                <span>({data.percentage})</span>
              </div>{" "}
              <div className="col-span-1 text-xl">
                {data.duration}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseApp;
