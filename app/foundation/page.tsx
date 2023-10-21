import Image from "next/image";
import ListItem from "../(UIcomponents)/ListItem";
import Schedule from "../(UIcomponents)/schedule";
import { client } from "../utils/client";
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
  const query = `*[_type == "foundation"] | order(module_num asc)`;

  // Send the GROQ query to fetch the courses
  const foundation = await client.fetch(query);

  return (
    <main className="h-max bg-black pb-10 ">
      {/* Hero Section */}
      <div className="bg-white  h-[80vh] md:h-[75vh] lg:h-[100vh] w-full rounded-b-[60px]">
        {/* Header */}
        <h1 className="md:pt-[10vh] pt-[6vh] font-extrabold text-2xl md:text-4xl lg:text-5xl text-center w-[95%] md:w-[90%] mx-auto ">
          Building the
          {" "}<span className="text-[#ECEAE0] bg-[#313132] rounded-[2rem] px-4">
            Foundation
          </span>{" "}
          for Your Future
        </h1>
        <h1 className=" text-center w-[90%] mx-auto lg:mt-[3vh]  font-extrabold text-xl md:text-4xl lg:text-5xl">
          at Function Academy
        </h1>
        {/* Main Content */}
        <div className="bg-white flex justify-between items-center mt-[5vh] w-[90%] mx-auto">
          <RedBanner num="04" text="page6.png" />
          <ArrowSuccess />
          <HeroContent
            title="Foundation"
            content="In the heart of the Pacific, where the sun kisses the shores of Honolulu, a new chapter is about to unfold. Welcome to Function Academy, where dreams become code and ambition transforms into reality. Our mission is clear: to empower individuals with the skills, knowledge, and discipline needed to thrive in the dynamic world of software engineering."
          />
        </div>
      </div>
      {/* Hero Image */}
      <HeroImage />
      {/* Daily Schedule */}
      <div className="bg-black h-max  w-[90%] text-white mx-auto">
        <h1 className="font-medium text-3xl mt-[2vh]">
           Building the Foundation for Your Future at Function Academy
        </h1>
        <div className="mt-[4vh]">
          {foundation.map((f: Foundation) => {
            return (
              <ListItem
                number={f.module_num}
                title={f.title}
                description={f.description}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
