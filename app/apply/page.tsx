import Image from "next/image";
import Form from "./(ApplyComponents)/Form";
import ArrowSuccess from "./../(UIcomponents)/ArrowSuccess";
import HeroContent from "./../(UIcomponents)/HeroContent";
import HeroImage from "./../(UIcomponents)/HeroImage";
import RedBanner from "./../(UIcomponents)/RedBanner";
import { Arrow, Play } from "./../(UIcomponents)/Vectors";

export default function Apply() {
  return (
    <main className="h-max bg-black pb-10">
      {/* Hero Section */}
      <div className="bg-white h-[140rem] md:h-[220vh]  lg:h-[320vh] w-full rounded-b-[60px]">
        {/* Header */}
        <h1 className="md:pt-[10vh] pt-[6vh] font-extrabold text-2xl md:text-5xl lg:text-5xl text-center w-[95%] md:w-[90%] mx-auto ">
          Apply
        </h1>
        {/* Main Content */}
        <div className="bg-white flex justify-between items-center mt-[5vh] w-[90%] mx-auto">
          <RedBanner
            num="24"
            text="page3.png"
          />
          <ArrowSuccess />
          <HeroContent
            title="Apply"
            content="Apply to our Full Stack Web Development Expert Courses."
            apply={true}
          />
        </div>
        <Form />
      </div>
      {/* Hero Image */}
      <HeroImage />
    </main>
  );
}
