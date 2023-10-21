import Form from "./(bootcampPrepComponents)/Form";
import ArrowSuccess from "./../(UIcomponents)/ArrowSuccess";
import HeroContent from "./../(UIcomponents)/HeroContent";
import HeroImage from "./../(UIcomponents)/HeroImage";
import RedBanner from "./../(UIcomponents)/RedBanner";
import { Arrow, Play } from "./../(UIcomponents)/Vectors";

export default function BootcampPrep() {
  return (
    <main className="h-max min-h-[100vh] bg-black pb-10">
      {/* Hero Section */}
      <div className="bg-white  h-[80vh] md:h-[75vh] lg:h-[100vh] w-full rounded-b-[60px]">
        {/* Header */}
        <h1 className="md:pt-[10vh] pt-[6vh] font-extrabold text-2xl md:text-5xl lg:text-5xl text-center w-[95%] md:w-[90%] mx-auto ">
          Bootcamp
          <span className="text-[#ECEAE0] bg-[#313132] rounded-[2rem] px-4">
            Prep
          </span>{" "}
        </h1>
        {/* Main Content */}
        <div className="bg-white flex justify-between items-center mt-[5vh] w-[90%] mx-auto">
          <RedBanner num="04" text="page6.png" />
          <ArrowSuccess />
          <HeroContent
            content="Function Academy offers a 4 week intensive training bootcamp designed to get you 
accepted in Function Academy or any of the top coding bootcamps in the country. 
This course covers the fundamentals of web development, programming and problem 
solving in JavaScript."
          />
        </div>
      </div>
      {/* Hero Image */}
      <HeroImage />
      <div className="bg-black h-max  w-[90%] text-white mx-auto">
        <h1 className="font-medium text-base md:text-xl lg:text-3xl mt-[2vh]">
          bootcamp Preperation Form
        </h1>
        <Form
        />
      </div>
    </main>
  );
}
