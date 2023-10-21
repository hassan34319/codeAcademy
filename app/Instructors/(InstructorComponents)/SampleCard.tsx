import {
  FacebookBlack,
  InstaBlack,
  TwitterBlack,
} from "@/app/(UIcomponents)/Vectors";
import { urlFor } from "@/app/utils/UrlImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Image as ImageType } from "sanity";

type Props = {
  title: string;
  description: string;
  image: ImageType;
  facebook: string;
  twitter: string;
  instagram: string;
  index: number;
};

function SampleCard({
  title,
  description,
  image,
  facebook,
  twitter,
  instagram,
  index,
}: Props) {
  return (
    <div
      className={`lg:h-[44vh] h-[40vh] md:h-[36vh]  bg-white rounded-3xl pt-[2vh] pb-[2vh] lg:w-[24%] md:w-[48%] w-[90%] drop-shadow-lg border-black border-[0.5px] border-opacity-30`}
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
        <p className="font-normal text-base md:text-base lg:text-xl">{title}</p>
        <p className="mt-4 md:mt-2 lg:mt-4 text-xs md:text-xs lg:text-base">
          {description}
        </p>
        <div className="mt-4 md:mt-2 lg:mt-4 flex flex-row space-x-2">
          <Link href={facebook}>
            <FacebookBlack />
          </Link>
          <Link href={instagram}>
            <InstaBlack />
          </Link>
          <Link href={twitter}>
            <TwitterBlack />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SampleCard;
