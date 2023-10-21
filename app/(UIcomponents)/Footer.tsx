"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import { nunito } from "../utils/nunito";
import { Facebook, Instagram, Twitter } from "./Vectors";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import {client} from "../utils/client"
type Props = {};

function Footer({}: Props) {
  const [email, setEmail] = useState("");
  const handleEmailSubmit = async () => {
    if (!email) {
      return;
    }
    console.log(email,client)
    try {
  
      // Define the email data according to your schema
      const emailData = {
        _type: 'subscribedEmail',
        userEmail: email,
      };
  
      // Send the POST request to add the email
      const response = await client.create(emailData);
  
      // If the request is successful, the email has been added
      console.log('Email added successfully:', response);
      return response;
    } catch (error) {
      // Handle any errors that occur during the request
      console.error('Error adding email:', error);
      throw error;
    }

  };
  return (
    <section className="bg-black w-full lg:h-[65vh] h-max">
    {/* Footer Banner */}
    <div className="bg-white lg:h-[50vh] xl:h-[40vh] h-max flex items-center justify-center w-full lg:w-[95%] px-1 py-1 lg:px-0 lg:py-0 mx-auto">
      {/* Inner rectangle with black border */}
      <div className="bg-white rounded-2xl border-black border-8 w-[97%] xl:h-[36vh] lg:h-[45vh] mx-auto h-max grid grid-cols-1 lg:grid-cols-3 lg:space-x-8 px-4 py-4 text-center lg:text-start space-y-8 lg:space-y-0">
        {/* Content Boxes */}
        <div className="col-span-1 row-span-1 flex flex-col">
          <h1 className="font-semibold text-3xl">
            Become a Software Engineer in 6 Months
          </h1>
          <p className="mt-4 font-normal text-sm leading-7">
            Learn from industry professionals the skills it takes to land a
            high paying role in the tech industry as a software engineer by
            earning a certification as a Full Stack Web Developer.
          </p>
        </div>
        <div className="col-span-1 row-span-1 flex flex-col">
          <h1 className="font-semibold text-3xl">
            Pay No Tuition Until You're Hired
          </h1>
          <p className="mt-4 font-normal text-sm leading-7">
            We're invested into your success and want to ensure you that you
            will be receiving the best training to land your dream job in the
            tech industry.
          </p>
        </div>
        <div className="col-span-1 row-span-1 flex flex-col">
          <h1 className="font-semibold text-3xl">
            Learn How to Code in Hawaii
          </h1>
          <p className="mt-4 font-normal text-sm leading-7">
            Learn how to code in one of the most relaxing environments in the
            world. Function Academy is located near some of the best beaches
            for surfing, local dining, hiking, biking, and more.
          </p>
        </div>
      </div>
    </div>
    {/* Logo And Details. */}
    <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row px-14 lg:h-[16vh] h-max items-center border-y-[1px] border-white border-opacity-20 mt-4">
      {/* Logo */}
      <Logo height={14} width={8} />
      {/* Other Details */}
      <div
        className={`flex flex-col lg:flex-row space-y-10 py-10 lg:py-0 lg:space-y-0 justify-between ${nunito.className} text-white lg:ml-[18%] flex-1`}
      >
        {/* Contact */}
        <div className="text-center lg:text-start">
          <h1 className="font-bold">Contact Us</h1>
          <p className="font-medium text-sm mt-2">
            Get in touch with us via email:
          </p>
          <p className="font-bold text-sm">Mail@gmail.com</p>
        </div>
        {/* Socials */}
        <div className="flex flex-col mb-1 justify-between text-center lg:text-start">
          <h1 className="font-bold mb-4 lg:mb-0">Follow Us</h1>
          <div className="flex flex-row space-x-3 justify-center">
            <Twitter />
            <Facebook />
            <Instagram />
          </div>
        </div>
        {/* Apply */}
        <div className="hidden lg:block">
          <h1 className="font-bold">Apply Now</h1>
          <div className="bg-white bg-opacity-25 h-[6vh] w-80 rounded-md mt-2 flex flex-row items-center">
            <input
              className="ml-4 bg-transparent font-medium text-sm outline-none w-[66%]"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={handleEmailSubmit}
              className="w-[33%] bg-black h-[95%] mr-[0.1rem] rounded-md flex flex-row justify-center items-center"
            >
              <p className="font-medium text-sm">Apply Now</p>
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* copyright */}
    <div
      className={`${nunito.className} text-white font-medium text-sm flex items-center justify-center h-[7vh] bg-black`}
    >
      <AiOutlineCopyrightCircle
        className="text-white mr-1"
        height={15}
        width={15}
      />
      2023 Function Academy
    </div>
  </section>
  );
}

export default Footer;
