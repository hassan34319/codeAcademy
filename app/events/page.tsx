import Image from "next/image";
import React from "react";
import { client } from "../utils/client";
import { Image as ImageType } from "sanity";
import EventCard from "./(EventComponents)/EventCard";
import { urlFor } from "../utils/UrlImage";
import Link from "next/link";


type Event = {
  title: string;
  description: string;
  image: ImageType;
  date: string;
  id: string;
  price: number;
  slug: {
    current: string;
  };
};

type Props = {};

export const revalidate = 60;

async function Events({}: Props) {
  const query = `*[_type == "event"]`;
  const events = await client.fetch(query);
  console.log(events);
  return (
    <main className="h-max bg-black pb-10 ">
      {/* Hero Section */}
      <div className="bg-white  h-max pb-8 md:pb-8 lg:pb-16 w-full rounded-b-[60px]">
        {/* Header */}
        <h1 className="md:pt-[10vh] pt-[6vh] font-extrabold text-2xl md:text-4xl lg:text-5xl text-center w-[95%] md:w-[90%] mx-auto ">
          EVENTS
        </h1>
        <div className="relative md:w-[90%] w-[95%] mx-auto lg:h-[65vh] md:h-[35vh] h-[40vh]  mt-4 md:mt-8 lg:mt-16">
          <div className=" text-white"> Hello</div>
          <Image
            alt="event1"
            src={urlFor(events[0].image).url()}
            fill
            className="rounded-2xl md:rounded-xl lg:rounded-3xl object-cover"
          />
          <div className="text-white ml-[5%]  mt-[20vh] md:mt-[20vh] lg:mt-[40vh]  z-50  relative bg-transparent bg-opacity-0 opacity-100">
            <p className="text-xs md:text-sm lg:text-base">Advertisement</p>
            <p className="font-bold text-lg md:text-2xl lg:text-4xl mt-1 md:mt-1 lg:mt-2">
              {events[0].title}
            </p>
            <div className="flex flex-row gap-x-2 md:gap-x-4 lg:gap-x-6 text-center ">
              <Link href={`/events/${events[0].slug.current}`}
                  className="mt-3 md:mt-3 lg:mt-6 md:px-6 md:py-2 px-2 py-1 bg-white rounded-[60px] text-black lg:w-[20%] md:w-[35%] w-[60%] font-semibold lg:text-2xl text-lg"
                  // onClick={submitForm}
                >
                  See Details
              </Link>
            </div>
          </div>
        </div>
        <h1 className="mt-4 md:mt-8 lg:mt-12 text-base lg:text-4xl md:text-2xl text-black font-bold mx-auto text-center w-full">
          Upcoming Events
        </h1>
        <div className="flex flex-row flex-wrap w-[95%] mx-auto mt-4 md:mt-8 lg:mt-12 md:justify-between justify-center gap-y-4 ">
          {events.map((inst: Event) => {
            return (
              <EventCard
                id={inst.slug.current}
                description={inst.description}
                title={inst.title}
                image={inst.image}
                price={inst.price}
                date={inst.date}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Events;
