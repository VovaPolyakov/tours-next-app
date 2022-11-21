import { Tours } from "@prisma/client";
import React from "react";

const ListOfTours = (props:any) => {
  return (
    <ul className=" text-left">
      {props.tours.map((tour:any) => {
        return <div key={tour.id} className=" p-4"><li className="text-white font-bold " key={tour.id}>Tour to: {tour.name}, Time: {tour.time}</li></div>;
      })}
    </ul>
  );
};

export default ListOfTours;