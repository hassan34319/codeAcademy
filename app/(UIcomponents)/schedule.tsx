"use client";

import React, { useState } from "react";
import { BsArrowRight, BsArrowDownRight } from "react-icons/bs";
import TimeSlots from "../techBootcamp/(techBootcampComponents)/TimeSlots";
type timeSlot = {
  lesson: string;
  time: string;
};

type Props = {
  number: number;
  title: string;
  timeSlots: timeSlot[];
};

function Schedule({ number, title, timeSlots }: Props) {
  const [openDesc, setOpenDesc] = useState(false);

  function toggleDesc() {
    setOpenDesc(!openDesc);
  }
  return (
    <div className="border-b border-white border-opacity-50 py-6">
      <div className=" flex flex-row items-center">
        <div className="h-6 w-6 border-white border-opacity-50 border-[1px] rounded-full text-center text-opacity-50">
          <span className="text-opacity-50 opacity-50 my-auto text-sm flex items-center justify-center">
            {number}
          </span>
        </div>
        <div className="flex flex-row justify-between w-full">
          <h1 className="font-medium ml-4 text-lg">{title}</h1>
          <div
            onClick={toggleDesc}
            className="h-8 w-8 opacity-80 border-white border-2 rounded-full border-opacity-50 border-dotted flex items-center justify-center"
          >
            {!openDesc && (
              <BsArrowRight height={4} width={4} className="text-white" />
            )}
            {openDesc && (
              <BsArrowDownRight height={4} width={4} className="text-white" />
            )}
          </div>
        </div>
      </div>
      {openDesc && timeSlots &&  (
        <div className="mt-[4vh]">
          {timeSlots.map((timeSlot) => (
            <TimeSlots
              key={timeSlot.lesson}
              lesson={timeSlot.lesson}
              time={timeSlot.time}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Schedule;
