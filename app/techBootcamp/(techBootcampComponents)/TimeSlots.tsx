import React from "react";

type Props = {
    lesson : string,
    time : string
};

function TimeSlots({time,lesson}: Props) {
  return (
    <div className="flex flex-row w-full mx-auto space-x-2">
      <div className="w-[49%] bg-white text-black flex items-center md:text-2xl text-xs font-semibold md:px-6 px-2 py-3 border-b-2 border-black border-opacity-60">
        {time}
      </div>
      <div className="w-[50%] bg-white text-black flex items-center md:text-2xl text-xs font-semibold rounded-[30px] md:rounded-[60px] md:px-6 px-2 py-3 my-1">
        {lesson}
      </div>
    </div>
  );
}

export default TimeSlots;
