"use client";
import { client } from "@/app/utils/client";
import React, { useState } from "react";
import { ChevronDown } from "react-feather";
import { BsGraphDownArrow } from "react-icons/bs";

type Props = {};

function Form({}: Props) {
  const [scholarshipType, setScholarshipType] = useState("Select Your Scholarship")
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    phone: "",
    age: "",
    graduate: "",
    email: "",
    address: "",
    essay: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const scholarshipTypes = [
    "Scholarship Type 1",
    "Scholarship Type 2",
    "Scholarship Type 3",
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const selectScholarship = (type: string) => {
    setFormData({
      ...formData,
      type,
    });
    setIsDropdownOpen(false);
    setScholarshipType(type);
  };
  // Handle input changes and update the state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = async () => {
    try {
      // Send a POST request to Sanity
      const response = await client.create({
        ...formData,
        _type: "scholarship", // Set the document type to match your schema
      });

      // Handle the response, e.g., show a success message to the user
      console.log("Form submitted successfully:", response);

      // Reset the form
      setFormData({
        type: "",
        name: "",
        phone: "",
        age: "",
        graduate: "",
        email: "",
        address: "",
        essay: "",
      });
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="mt-2 md:mt-4 lg:mt-8 w-full">
      <div className="relative">
        <div
          className="bg-white bg-opacity-[25%] w-[95%] rounded-sm md:rounded-md lg:rounded-xl mx-auto border-white border-[0.5px] flex flex-row px-2 md:px-4 lg:px-8 items-center justify-between h-6 md:h-12 lg:h-16"
          onClick={toggleDropdown}
        >
          <p className="text-xs md:text-base lg:text-lg">{scholarshipType}</p>
          <ChevronDown />
        </div>
        {isDropdownOpen && (
          <div className="absolute bg-white bg-opacity-100 rounded-md mt-2 w-full">
            {scholarshipTypes.map((type) => (
              <div
                key={type}
                className="cursor-pointer p-2 hover:bg-gray-200 text-black border-[1px] border-black border-opacity-40"
                onClick={() => selectScholarship(type)}
              >
                {type}
              </div>
            ))}
          </div>
        )}
      </div>
      <h1 className="text-xs md:text-base lg:text-xl mt-2 md:mt-4 lg:mt-8 mb-2 md:mb-4 lg:mb-6">
        Enter Information
      </h1>
      <div className="flex flex-row justify-between w-[95%] mx-auto mb-2 md:mb-4 lg:mb-8">
        <div className="w-[49%] text-xxss md:text-sm lg:text-base">
          Name
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            className="bg-white bg-opacity-[10%] w-full rounded-sm md:rounded-md lg:rounded-xl h-4 md:h-8 lg:h-12 mt-[2px] md:mt-1 lg:mt-2 px-1 md:px-2 lg:px-4"
          />
        </div>
        <div className="w-[49%] text-xxss md:text-sm lg:text-base">
          Phone
          <input
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleInputChange}
            className="bg-white bg-opacity-[10%] w-full rounded-sm md:rounded-md lg:rounded-xl h-4 md:h-8 lg:h-12 mt-[2px] md:mt-1 lg:mt-2 px-1 md:px-2 lg:px-4"
          />
        </div>
      </div>

      <div className="flex flex-row justify-between w-[95%] mx-auto mb-2 md:mb-4 lg:mb-8">
        <div className="w-[49%] text-xxss md:text-sm lg:text-base">
          Email
          <input
            name="email"
            type="text"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-white bg-opacity-[10%] w-full rounded-sm md:rounded-md lg:rounded-xl h-4 md:h-8 lg:h-12 mt-[2px] md:mt-1 lg:mt-2 px-1 md:px-2 lg:px-4"
          />
        </div>
        <div className="w-[49%] text-xxss md:text-sm lg:text-base">
          Address
          <input
            name="address"
            type="text"
            value={formData.address}
            onChange={handleInputChange}
            className="bg-white bg-opacity-[10%] w-full rounded-sm md:rounded-md lg:rounded-xl h-4 md:h-8 lg:h-12 mt-[2px] md:mt-1 lg:mt-2 px-1 md:px-2 lg:px-4"
          />
        </div>
      </div>

      <div className="flex flex-row justify-between w-[95%] mx-auto mb-2 md:mb-4 lg:mb-8">
        <div className="w-[49%] text-xxss md:text-sm lg:text-base">
          Are you 18 years or older?
          <input
            name="age"
            type="text"
            value={formData.age}
            onChange={handleInputChange}
            className="bg-white bg-opacity-[10%] w-full rounded-sm md:rounded-md lg:rounded-xl h-4 md:h-8 lg:h-12 mt-[2px] md:mt-1 lg:mt-2 px-1 md:px-2 lg:px-4"
          />
        </div>
        <div className="w-[49%] text-xxss md:text-sm lg:text-base">
          Are you a high school graduate or have a GED?
          <input
            name="graduate"
            type="text"
            value={formData.graduate}
            onChange={handleInputChange}
            className="bg-white bg-opacity-[10%] w-full rounded-sm md:rounded-md lg:rounded-xl h-4 md:h-8 lg:h-12 mt-[2px] md:mt-1 lg:mt-2 px-1 md:px-2 lg:px-4"
          />
        </div>
      </div>

      <div className="flex flex-row justify-between w-[95%] mx-auto mb-2 md:mb-4 lg:mb-8">
        <div className="w-full text-xxss md:text-sm lg:text-base">
          Write a 500-word essay of the importance of attending code school adds
          to your life and the purpose of applying for your specific
          scholarship.
          <input
            name="essay"
            type="text"
            value={formData.essay}
            onChange={handleInputChange}
            className="bg-white bg-opacity-[10%] w-full rounded-sm md:rounded-md lg:rounded-xl h-12 md:h-24 lg:h-36 mt-[2px] md:mt-1 lg:mt-2 px-1 md:px-2 lg:px-4"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mt-[8vh]">
        <button
          className="px-6 py-3 bg-white rounded-[60px] text-black lg:w-[20%] md:w-[40%] w-[60%] font-semibold text-2xl"
          onClick={submitForm}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default Form;
