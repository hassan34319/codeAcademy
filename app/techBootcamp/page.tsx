import Image from "next/image";
import ListItem from "../(UIcomponents)/ListItem";
import Schedule from "../(UIcomponents)/schedule";
import { client } from "../utils/client";
import TimeSlots from "./(techBootcampComponents)/TimeSlots";
import ArrowSuccess from "./../(UIcomponents)/ArrowSuccess";
import HeroContent from "./../(UIcomponents)/HeroContent";
import HeroImage from "./../(UIcomponents)/HeroImage";
import RedBanner from "./../(UIcomponents)/RedBanner";
import { Arrow, Play } from "./../(UIcomponents)/Vectors";

interface Course {
  _id: string;
  _type: 'course';
  title: string;
  description: string;
  module_num: number;
  // Add other fields from the schema if needed
}

export const revalidate = 60

export default async function TechBootcamp() {
  const query = `*[_type == "course"] | order(module_num asc)`;
  const mondayQuery = `*[_type == "mondaySchedule"]`;
  const tuesdayQuery = `*[_type == "tuesdaySchedule"]`;
  const wednesdayQuery = `*[_type == "wednesdaySchedule"]`;
  const thursdayQuery = `*[_type == "thursdaySchedule"]`;
  const fridayQuery = `*[_type == "fridaySchedule"]`;

  // Send the GROQ query to fetch the courses
  const courses = await client.fetch(query);
  const mondaySchedule = await client.fetch(mondayQuery);
  const tuesdaySchedule = await client.fetch(tuesdayQuery);
  const wednesdaySchedule = await client.fetch(wednesdayQuery);
  const thursdaySchedule = await client.fetch(thursdayQuery);
  const fridaySchedule = await client.fetch(fridayQuery);

  console.log(mondaySchedule)

  return (
    <main className="h-max bg-black pb-10 ">
      {/* Hero Section */}
      <div className="bg-white  h-[80vh] md:h-[75vh] lg:h-[100vh] w-full rounded-b-[60px]">
        {/* Header */}
        <h1 className="md:pt-[10vh] pt-[6vh] font-extrabold text-2xl md:text-4xl lg:text-5xl text-center w-[95%] md:w-[90%] mx-auto ">
          Full Stack Web{" "}
          <span className="text-[#ECEAE0] bg-[#313132] rounded-[2rem] px-4">
            Development
          </span>{" "}
        </h1>
        <h1 className=" text-center w-[90%] mx-auto lg:mt-[3vh]  font-extrabold text-xl md:text-4xl lg:text-5xl">
          Certification
        </h1>
        {/* Main Content */}
        <div className="bg-white flex justify-between items-center mt-[5vh] w-[90%] mx-auto">
          <RedBanner
            num="24"
            text="page7.png"
          />
          <ArrowSuccess />
          <HeroContent
            content="24 Week project based learning curriculum designed to prepare students to begin 
a career as professional software engineer and start-up entrepreneur."
          />
        </div>
      </div>
      {/* Hero Image */}
      <HeroImage />
      {/* Daily Schedule */}
      <div className="bg-black h-max pb-[4vh] md:w-[90%] w-[95%] text-white mx-auto">
        <h1 className="font-medium text-xl md:text-3xl mt-[4vh]">Daily Schedule</h1>
          <Schedule number={1} title="Monday" timeSlots={mondaySchedule[0] && mondaySchedule[0].timeSlots} />
          <Schedule number={2} title="Tuesday" timeSlots={tuesdaySchedule[0] && tuesdaySchedule[0].timeSlots} />
          <Schedule number={3} title="Wednesday" timeSlots={wednesdaySchedule[0] && wednesdaySchedule[0].timeSlots} />
          <Schedule number={4} title="Thursday" timeSlots={thursdaySchedule[0] && thursdaySchedule[0].timeSlots} />
          <Schedule number={5} title="Friday" timeSlots={fridaySchedule[0] && fridaySchedule[0].timeSlots} />
      </div>
      <div className="bg-black h-max  w-[90%] text-white mx-auto">
        <h1 className="font-medium text-3xl mt-[2vh]">Curriculum</h1>
        <div className="mt-[4vh]">
          {courses.map((course : Course)=> {
            return (
              <ListItem number={course.module_num} title={course.title} description={course.description} />
            )
          })}
        </div>
      </div>
    </main>
  );
}
