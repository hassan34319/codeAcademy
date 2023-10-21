import { urlFor } from "@/app/utils/UrlImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Image as ImageType } from "sanity";

type Props = {
  title: string;
  description: string;
  image: ImageType;
  date: string;
  id: string;
  price: number;
};

function EventCard({
  title,
  description,
  image,
  price,
  date,
  id
}: Props) {
  return (
    <div
      className={`lg:h-[44vh] h-[40vh] md:h-[36vh]  bg-black text-white rounded-3xl pt-[2vh] pb-[2vh] lg:w-[24%] md:w-[48%] w-[90%] drop-shadow-lg border-black border-[0.5px] border-opacity-30`}
    >
      <div className="h-[16vh] w-[90%] relative mx-[5%] ">
        <Image
          src={urlFor(image).url()}
          alt={title}
          className="object-cover rounded-xl"
          fill
        />
      </div>
      <div
        className={`flex flex-col justify-between  mt-[1vh] mx-[5%] h-[20vh] lg:h-[20vh] md:h-[16vh]`}
      >
        <div className="flex flex-row justify-between">
          <p className="font-normal text-base md:text-lg lg:text-xl">
            {title}
          </p>
          <p className="font-normal text-xs md:text-sm lg:text-base text-red-600">{date}</p>
        </div>
        <p className="mt-4 md:mt-2 lg:mt-4 text-xs md:text-xs lg:text-base">
          {description}
        </p>
        <div className="mt-4 md:mt-2 lg:mt-4 flex flex-row justify-between items-end">
          <p className="font-normal text-base md:text-base lg:text-xl">
            ${price}
          </p>
          <Link href={`/workshops/${id}`} className="font-normal text-base md:text-base lg:text-xl px-4 py-2 rounded-2xl bg-black text-white border-white border-rounded-xl lg:border-rounded-3xl border-[1px]">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
