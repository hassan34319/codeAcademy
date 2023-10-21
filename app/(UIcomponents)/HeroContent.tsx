import React from "react";

type Props = {
  title?: string;
  content: string;
  apply?: boolean;
};

function HeroContent({ title, content,apply }: Props) {
  return (
    <div className="w-[50%] flex flex-row">
      {/* Blue Banner */}
      <div className="w-[7.5%] bg-[#0F9E94] h-[30vh]"></div>
      {/* Written Content */}
      <div
        className={`h-[25vh] text-start flex flex-col  my-auto ml-[-3.75%] md:ml-[-3.25%] w-[95%] md:w-[90%] ${
          title? "md:justify-center justify-center" : "md:justify-center justify-center"
        }`}
      >
        {title && <h1 className="font-semibold md:text-2xl text-base mb-2">{title}</h1>}
        <p className="text-[0.6rem] md:text-base">{content}</p>
      </div>
    </div>
  );
}

export default HeroContent;
