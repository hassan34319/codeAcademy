import { Image } from "sanity";
import { client } from "../utils/client";
import SampleCard from "./(InstructorComponents)/SampleCard";
import ArrowSuccess from "../(UIcomponents)/ArrowSuccess";
import HeroContent from "../(UIcomponents)/HeroContent";
import HeroImage from "../(UIcomponents)/HeroImage";
import RedBanner from "../(UIcomponents)/RedBanner";
import { Arrow, Play } from "../(UIcomponents)/Vectors";

type Instructor = {
  name: string;
  description: string;
  facebook: string;
  instagram: string;
  twitter: string;
  image: Image;
};

export const revalidate = 60;

export default async function Instructors() {
  const query = `*[_type == "instructor"]`;
  const instructors = await client.fetch(query);
  console.log(instructors);
  return (
    <main className="h-max min-h-[100vh] bg-black pb-10">
      {/* Hero Section */}
      <div className="bg-white  h-[80vh] md:h-[75vh] lg:h-[100vh] w-full rounded-b-[60px]">
        {/* Header */}
        <h1 className="md:pt-[10vh] pt-[6vh] font-extrabold text-2xl md:text-5xl lg:text-5xl text-center w-[95%] md:w-[90%] mx-auto ">
          Instructors
        </h1>
        {/* Main Content */}
        <div className="bg-white flex justify-between items-center mt-[5vh] w-[90%] mx-auto">
          <RedBanner num="100" text="page10.png" />
          <ArrowSuccess />
          <HeroContent content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever" />
        </div>
      </div>
      {/* Hero Image */}
      <HeroImage />
      <h1 className="mt-4 md:mt-8 lg:mt-12 text-base lg:text-4xl md:text-2xl text-white font-bold mx-auto text-center w-full">
        LIST OF INSTRUCTORS
      </h1>
      <div className="flex flex-row flex-wrap w-[95%] mx-auto mt-4 md:mt-8 lg:mt-12 md:justify-between justify-center gap-y-4 ">
        {instructors.map((inst: Instructor, index: number) => {
          return (
            <SampleCard
              instagram={inst.instagram}
              facebook={inst.facebook}
              twitter={inst.twitter}
              description={inst.description}
              title={inst.name}
              image={inst.image}
              index={index}
            />
          );
        })}
      </div>
    </main>
  );
}
