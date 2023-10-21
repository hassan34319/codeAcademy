import React from "react";
import { Arrow } from "./Vectors";

type Props = {};

function ArrowSuccess({}: Props) {
  return (
    <div className="flex flex-col items-center  md:h-[30vh] lg:h-[40vh] h-[25vh] justify-center ">
      <div className="bg-white border-black border-2 border-dashed md:h-36 md:w-36 h-20 w-20 rounded-full flex items-center justify-center">
        <Arrow />
      </div>
      {/* Review Percentage */}
      <div className="text-center mx-auto lg:my-auto my-2">
        <h1 className="font-bold md:text-5xl text-2xl md:mt-[3vh]">98%</h1>
        <p className="font-semibold md:text-2xl text-base">Positive Review</p>
      </div>
    </div>
  );
}

export default ArrowSuccess;
