import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  height : number
  width: number
};

function Logo({
  height,
  width
}: Props) {
  return (
    <Link className={`relative lg:h-[${height}vh] relative lg:w-[${width}%] hidden lg:flex h-10 w-20 cursor-pointer my-auto`} href="/">
      <Image src="/logo2.png" alt="logo" fill className="object-contain" />
    </Link>
  );
}

export default Logo;
