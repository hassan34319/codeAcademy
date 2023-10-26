"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import Logo from "./Logo";
import Link from "next/link";
import Search from "./Search";
import { Menu, X } from "react-feather"; // Import the Menu icon
import Image from "next/image";

type Props = {};

const Iowan = localFont({
  src: [
    {
      path: "../../public/2131-font.otf",
      weight: "700",
    },
  ],
  variable: "--font-iowan",
});

function Navbar({}: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <section className="rounded-full w-[90%] flex flew-row lg:justify-start justify-between mx-auto bg-black lg:mt-[8vh] mt-[4vh] h-[8vh] lg:h-[10vh]">
      <button className="lg:hidden text-white ml-4" onClick={toggleMobileMenu}>
        <Menu /> {/* Use the Menu icon */}
      </button>
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 w-[60%] h-full bg-black opacity-90 z-50 md:text-xl">
          <button
            className="text-white my-2 mt-4 ml-4 "
            onClick={closeMobileMenu}
          >
            <X />
          </button>
          <div className="flex flex-col items-center pt-16 lg:hidden">
            <Link className="text-white my-2" href="/techBootcamp">
              Tech Bootcamp
            </Link>
            <Link className="text-white my-2" href="/bootcampPrep">
              Bootcamp Prep
            </Link>
            <Link className="text-white my-2" href="/tuition">
              Tuition
            </Link>
            <Link className="text-white my-2" href="/apply">
              Apply
            </Link>
            <Link className="text-white my-2" href="/instructor">
              Instructors
            </Link>
            <Link className="text-white my-2" href="/events">
              Events
            </Link>
            <Link className="text-white my-2" href="/workshops">
              Workshops
            </Link>
            <Link className="text-white my-2" href="/scholarship">
              Scholarship
            </Link>
            <Link className="text-white my-2" href="/foundation">
              Foundation
            </Link>
          </div>
        </div>
      )}
      <Logo height={10} width={6} />
      {/* Function Academy Text */}
      <Link
        className={`${Iowan.className} font-bold md:text-2xl lg:text-xl text-lg flex flex-col justify-center lg:ml-1 cursor-pointer lg:mr-1`}
        href="/"
      >
        <p className="text-[#ED1F04] w-max">FUNCTION</p>
        <p className="text-white mt-[-1vh] w-max">ACADEMY</p>
      </Link>
      {/* Desktop Nav links */}
      <div className="flex-row justify-between xl:w-max w-max items-center font-normal text-sm mx-auto hidden lg:flex flex-1 ml-4 mr-4">
        <Link className="hidden lg:flex text-white" href="/techBootcamp">
          Tech Bootcamp
        </Link>
        <Link className="hidden lg:flex text-white" href="/bootcampPrep">
          Bootcamp Prep
        </Link>
        <Link className="hidden lg:flex text-white" href="/tuition">
          Tuition
        </Link>
        <Link className="hidden lg:flex text-white" href="/apply">
          Apply
        </Link>
        <Link className="text-white" href="/instructor">
          Instructors
        </Link>
        <Link className="text-white" href="/events">
          Events
        </Link>
        <Link className="text-white" href="/workshops">
          Workshops
        </Link>
        <Link className="text-white" href="/scholarship">
          Scholarship
        </Link>
        <Link className="text-white" href="/foundation">
          Foundation
        </Link>
      </div>

      {/* Search Bar */}
      <Link
        className={`relative lg:h-[10vh] relative lg:w-[6%] flex h-10 w-20 cursor-pointer my-auto lg:hidden`}
        href="/"
      >
        <Image src="/logo2.png" alt="logo" fill className="object-contain" />
      </Link>
    </section>
  );
}

export default Navbar;
