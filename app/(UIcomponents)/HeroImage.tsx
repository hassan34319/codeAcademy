import Image from "next/image";
import React from "react";

type Props = {};

function HeroImage({}: Props) {
  return (
    <div className="relative md:w-[90%] w-[95%] mx-auto lg:h-[65vh] md:h-[40vh] h-[30vh] lg:mt-[-24vh] mt-[-18vh]">
      <Image
        alt="heroSectionImage"
        src="/Main.png"
        fill
        className="md:object-contain"
      />
    </div>
  );
}

export default HeroImage;
