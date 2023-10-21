import Image from "next/image";
import React from "react";
import { Play } from "./Vectors";

type Props = {
    num : string,
    text : string
};

function RedBanner({num,text}: Props) {
  return (
    <div className="lg:w-[6%] md:w-[9%] relative w-[12%] md:h-[40vh] h-[30vh] flex flex-col justify-between rounded-[60px]">
      <Image src={`/${text}`} fill className="object-contain" alt="home"/>
    </div>
  );
}

export default RedBanner;
