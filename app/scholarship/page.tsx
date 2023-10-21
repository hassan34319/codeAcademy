import Image from "next/image";
import ListItem from "../(UIcomponents)/ListItem";
import Schedule from "../(UIcomponents)/schedule";
import { client } from "../utils/client";
import Form from "./(ScholarshipComponents)/Form";
import ArrowSuccess from "./../(UIcomponents)/ArrowSuccess";
import HeroContent from "./../(UIcomponents)/HeroContent";
import HeroImage from "./../(UIcomponents)/HeroImage";
import RedBanner from "./../(UIcomponents)/RedBanner";
import { Arrow, Play } from "./../(UIcomponents)/Vectors";

interface Foundation {
  _id: string;
  _type: "course";
  title: string;
  description: string;
  module_num: number;
  // Add other fields from the schema if needed
}

export const revalidate = 60;

export default async function TechBootcamp() {


  return (
    <main className="h-max bg-black pb-10 text-white ">
      {/* Hero Section */}
      <div className="bg-white  h-[80vh] md:h-[75vh] lg:h-[100vh] w-full rounded-b-[60px] text-black">
        {/* Header */}
        <h1 className="md:pt-[10vh] pt-[6vh] font-extrabold text-2xl md:text-4xl lg:text-5xl text-center w-[95%] md:w-[90%] mx-auto ">
          Empowering Future Leaders
        </h1>
        <h1 className=" text-center w-[90%] mx-auto lg:mt-[3vh]  font-extrabold text-xl md:text-4xl lg:text-5xl">
        {" "}<span className="text-[#ECEAE0] bg-[#313132] rounded-[2rem] px-4">
            Scholarships
          </span>{" "}
          for Excellence
        </h1>
        {/* Main Content */}
        <div className="bg-white flex justify-between items-center mt-[5vh] w-[90%] mx-auto">
          <RedBanner num="04" text="page9.png" />
          <ArrowSuccess />
          <HeroContent
            title="Scholarship"
            content="Scholarships are a vital catalyst for transforming dreams into reality. They represent more than just financial support; they symbolize an investment in potential and a commitment to nurturing talent."
          />
        </div>
      </div>
      {/* Hero Image */}
      <HeroImage />
      {/* Daily Schedule */}
      <div className="bg-black h-max  w-[90%] text-white mx-auto">
        <h1 className="font-medium text-base md:text-xl lg:text-3xl mt-[2vh]">
           Scholarship Type
        </h1>
        <Form/>
      </div>
    </main>
  );
}
