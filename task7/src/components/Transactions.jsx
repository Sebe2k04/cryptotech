import React from "react";
import Card from "./Card";

const Transactions = () => {
  const data = [
    {
      name: "Aokiji",
      status: "Received",
      price: "$13.00",
      date: "28 Feb 2023",
      time: "06:23 PM",
      image: "/p1.jpg",
    },
    {
      name: "Kizaru",
      status: "Outgoing",
      price: "$9.00",
      date: "28 Feb 2023",
      time: "06:23 PM",
      image: "/p2.jpg",
    },
    {
      name: "Akainu",
      status: "Received",
      price: "$20.00",
      date: "28 Feb 2023",
      time: "06:23 PM",
      image: "/p3.jpg",
    },
  ];

  return (
    <div className="bg-gray-200 p-20 min-h-[100vh]">
      <div className="flex justify-between text-xl">
        <h1>Last Transactions</h1>
        <h1 className="text-gray-500">See All</h1>
      </div>
      <div className="p-5 grid gap-5">
        {data.map((data, i) => {
          return (
            <div key={i} className="">
              <Card data={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Transactions;
