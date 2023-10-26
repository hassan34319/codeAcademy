import { client } from "@/app/utils/client";
import { urlFor } from "@/app/utils/UrlImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Form from "../(EventComponents)/Form";

type Props = {};

async function page({ params }: { params: { slug: string } }) {
  const query = `*[_type == "event" && slug.current == $slug]`;
  const { slug } = params;
  console.log(slug);
  const event = await client.fetch(query, { slug });
  return (
    <main className="h-max bg-black pb-10 ">
      {/* Hero Section */}
      <div className="bg-white  h-max pb-8 md:pb-8 lg:pb-16 w-full rounded-b-[60px]">
        {/* Header */}
        <h1 className="md:pt-[6vh] pt-[4vh] font-extrabold text-2xl md:text-4xl lg:text-5xl text-start w-[95%] md:w-[90%] mx-auto ">
          {event[0].title}
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-start w-[95%] md:w-[90%] mx-auto mt-1 md:mt-2 lg:mt-4">
          {event[0].description}
        </p>
        <div className="mt-2 md:mt-4 lg:mt-8 w-full lg:w-[90%] lg:flex lg:flex-row lg:justify-between lg:mx-auto ">
          <div className="relative md:w-[90%] w-[95%] mx-auto lg:h-[75vh] xl:h-[75vh] md:h-[35vh] h-[40vh]  lg:w-[60%]">
            <Image
              alt="event1"
              src={urlFor(event[0].image).url()}
              fill
              className="rounded-2xl md:rounded-xl lg:rounded-3xl object-cover"
            />
          </div>
          <div className="mt-2 md:mt-4 lg:mt-0 relative md:w-[90%] w-[95%] mx-auto  xl:h-[75vh] md:h-max h-[50vh]  lg:w-[38%] px-4 py-4 rounded-2xl md:rounded-xl lg:rounded-3xl bg-black text-white">
            <h1 className="font-extrabold text-xl md:text-2xl lg:text-3xl">
              {event[0].title}
            </h1>
            <p className="text-sm md:text-base lg:text-base mt-1 md:mt-2 lg:mt-4 text-gray-500">
              {event[0].longDescription}
            </p>
            <div className="mt-1 md:mt-2 lg:mt-4">
              <p className="text-base md:text-lg lg:text-xl flex flex-row font-extrabold">
                Date & Time
              </p>
              <p className="text-sm md:text-base lg:text-lg gap-x-1 flex flex-row text-gray-500 items-center">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 3C9.735 3 3 9.735 3 18C3 26.265 9.735 33 18 33C26.265 33 33 26.265 33 18C33 9.735 26.265 3 18 3ZM24.525 23.355C24.315 23.715 23.94 23.91 23.55 23.91C23.355 23.91 23.16 23.865 22.98 23.745L18.33 20.97C17.175 20.28 16.32 18.765 16.32 17.43V11.28C16.32 10.665 16.83 10.155 17.445 10.155C18.06 10.155 18.57 10.665 18.57 11.28V17.43C18.57 17.97 19.02 18.765 19.485 19.035L24.135 21.81C24.675 22.125 24.855 22.815 24.525 23.355Z"
                    fill="white"
                  />
                </svg>
                {event[0].dateTime}
              </p>
            </div>
            <div className="mt-1 md:mt-2 lg:mt-4">
              <p className="text-base md:text-lg lg:text-xl font-extrabold">
                Location
              </p>
              <p className="text-sm md:text-base lg:text-lg gap-x-1 flex flex-row text-gray-500 items-center">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M30.9301 13.05C29.3701 6.105 23.3101 3 18.0001 3C18.0001 3 18.0001 3 17.9851 3C12.6901 3 6.64511 6.105 5.07011 13.035C3.30011 20.775 8.04011 27.33 12.3301 31.47C13.9201 33 15.9601 33.765 18.0001 33.765C20.0401 33.765 22.0801 33 23.6551 31.47C27.9451 27.33 32.6851 20.79 30.9301 13.05ZM22.1251 17.625H19.1251V20.625C19.1251 21.24 18.6151 21.75 18.0001 21.75C17.3851 21.75 16.8751 21.24 16.8751 20.625V17.625H13.8751C13.2601 17.625 12.7501 17.115 12.7501 16.5C12.7501 15.885 13.2601 15.375 13.8751 15.375H16.8751V12.375C16.8751 11.76 17.3851 11.25 18.0001 11.25C18.6151 11.25 19.1251 11.76 19.1251 12.375V15.375H22.1251C22.7401 15.375 23.2501 15.885 23.2501 16.5C23.2501 17.115 22.7401 17.625 22.1251 17.625Z"
                    fill="white"
                  />
                </svg>
                {event[0].location}
              </p>
            </div>
            <div className="mt-1 md:mt-2 lg:mt-4">
              <p className="text-base md:text-lg lg:text-xl font-extrabold">
                Cost To Attend
              </p>
              <p className="text-sm md:text-base lg:text-lg gap-x-1 flex flex-row text-gray-500 items-center">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.125 23.88H20.1C21.075 23.88 21.885 23.01 21.885 21.96C21.885 20.655 21.42 20.4 20.655 20.13L19.14 19.605V23.88H19.125Z"
                    fill="white"
                  />
                  <path
                    d="M17.9551 2.85C9.6751 2.88 2.9701 9.615 3.0001 17.895C3.0301 26.175 9.7651 32.88 18.0451 32.85C26.3251 32.82 33.0301 26.085 33.0001 17.805C32.9701 9.525 26.2351 2.835 17.9551 2.85ZM21.3901 18C22.5601 18.405 24.1351 19.275 24.1351 21.96C24.1351 24.27 22.3201 26.13 20.1001 26.13H19.1251V27C19.1251 27.615 18.6151 28.125 18.0001 28.125C17.3851 28.125 16.8751 27.615 16.8751 27V26.13H16.3351C13.8751 26.13 11.8801 24.06 11.8801 21.51C11.8801 20.895 12.3901 20.385 13.0051 20.385C13.6201 20.385 14.1301 20.895 14.1301 21.51C14.1301 22.815 15.1201 23.88 16.3351 23.88H16.8751V18.81L14.6101 18C13.4401 17.595 11.8651 16.725 11.8651 14.04C11.8651 11.73 13.6801 9.87 15.9001 9.87H16.8751V9C16.8751 8.385 17.3851 7.875 18.0001 7.875C18.6151 7.875 19.1251 8.385 19.1251 9V9.87H19.6651C22.1251 9.87 24.1201 11.94 24.1201 14.49C24.1201 15.105 23.6101 15.615 22.9951 15.615C22.3801 15.615 21.8701 15.105 21.8701 14.49C21.8701 13.185 20.8801 12.12 19.6651 12.12H19.1251V17.19L21.3901 18Z"
                    fill="white"
                  />
                  <path
                    d="M14.1299 14.055C14.1299 15.36 14.5949 15.615 15.3599 15.885L16.8749 16.41V12.12H15.8999C14.9249 12.12 14.1299 12.99 14.1299 14.055Z"
                    fill="white"
                  />
                </svg>
                {event[0].price}
              </p>
            </div>
            <Link href="#form2" className=" border-white border-2 mt-4 md:mt-4 lg:mt-4 w-[95%] text-base md:text-lg lg:text-xl mx-auto bg-[#ED1F04] h-[5vh] rounded-2xl md:rounded-2xl lg:rounded-3xl lg:h-[6vh] flex items-center justify-center">
              Book Now
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-black h-max  w-[90%] text-white mx-auto">
        <h1 className="font-medium text-base md:text-xl lg:text-3xl mt-[2vh]">
          Event Booking
        </h1>
        <Form
          eventName={event[0].title}
          eventPrice={event[0].price}
          eventDate={event[0].dateTime}
          eventImage={urlFor(event[0].image).url()}
        />
      </div>
    </main>
  );
}

export default page;
