import Image from "next/image";
import Benefit from "./(HomePageComponents)/Benefit";
import ArrowSuccess from "./(UIcomponents)/ArrowSuccess";
import HeroContent from "./(UIcomponents)/HeroContent";
import HeroImage from "./(UIcomponents)/HeroImage";
import ListItem from "./(UIcomponents)/ListItem";
import RedBanner from "./(UIcomponents)/RedBanner";
import { Arrow, Play } from "./(UIcomponents)/Vectors";

export default function Home() {
  return (
    <main className="h-max bg-black pb-[6vh] border-0 w-full">
      {/* Hero Section */}
      <div className="bg-white  h-[80vh] md:h-[75vh] lg:h-[100vh] w-full rounded-b-[60px]">
        {/* Header */}
        <h1 className="md:pt-[10vh] pt-[6vh] font-extrabold text-2xl md:text-4xl lg:text-5xl text-center w-[95%] md:w-[90%] mx-auto ">
          ACCELERATE YOUR CAREER,
        </h1>
        <h1 className=" text-center w-[90%] mx-auto lg:mt-[3vh]  font-extrabold text-2xl md:text-4xl telg:text-5xl">
          BECOME A{" "}
          <span className="text-[#ECEAE0] bg-[#313132] rounded-[2rem] px-4">
            SOFTWARE
          </span>{" "}
          ENGINEER
        </h1>
        {/* Main Content */}
        <div className="bg-white flex justify-between items-center mt-[5vh] w-[95%] md:w-[90%] mx-auto">
          <RedBanner
            num="14+"
            text="page1.png"
          />
          <ArrowSuccess />
          <HeroContent
            title="
No prior experience necessary. Get trained, get hired."
            content="Take control of your life by learning on of the most in demand and highest paying careers in the job market. According to Bureau of Labor and Statistics in 2021 the average software engineer made 110k per year. Learn the skills you need to take your life to the next level by applying today."
          />
        </div>
      </div>
      {/* Hero Image */}
      <HeroImage />
      {/* Provided Benefits */}
      <div className="bg-black h-max lg:pb-[4vh] w-[90%] text-white mx-auto">
        <h1 className="font-medium text-3xl mt-[4vh]">What We Provided</h1>
        <div className="flex flex-col md:flex-row justify-between mt-[4vh] mb-[4vh]">
          <Benefit
            title="Small Class Sizes"
            description="              Classes are capped at 25 students to ensure quality training
              instruction."
          />
          <Benefit
            title="Project Based Learning"
            description="                         After graduating this course you will have a diverse portfolio of
            real world projects to include a personal site, a game, full stack
            web applications and several mini-projects."
          />
          <Benefit
            title="Job Placement Services"
            description="                                   After graduation you will be guided on how to build a successful
            resume, job search assistance and referrals. Our goal number one
            goal is to get our students hired as quickly as possible."
          />
        </div>
        {/* List of materials */}
        <ListItem
          number={1}
          title="Apply"
          description="You must apply the for the next cohort as soon as possible. Due to limited cohort sizes only 25 applications can be accepted class."
        />
        <ListItem
          number={2}
          title="Assessments"
          description="There will be 3 Assessments per week."
        />
        <ListItem
          number={3}
          title="Pre-Course Work"
          description="You can follow these guidelines to prepare for the course."
        />
        <div className="flex flex-col items-center justify-center mt-[8vh]">
          <button className="px-6 py-3 bg-white rounded-[60px] text-black lg:w-[20%] md:w-[40%] w-[60%] font-semibold text-2xl">
            Apply Now
          </button>
          <p className="text-white text-lg font-light mt-[6vh] text-center">
            Accelerate your career, become a software engineer. Apply today.
          </p>
        </div>
      </div>
    </main>
  );
}
