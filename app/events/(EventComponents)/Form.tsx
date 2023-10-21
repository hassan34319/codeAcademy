"use client";
import { fetchPostJSON } from "@/app/utils/api-helpers";
import { client } from "@/app/utils/client";
import getStripe from "@/app/utils/getStripe";
import React, { useState } from "react";
import { ChevronDown } from "react-feather";
import { BsGraphDownArrow } from "react-icons/bs";
import Stripe from "stripe";

type Props = {
    eventName : string
    eventDate : string,
    eventPrice : string,
    eventImage : string
};

function Form({eventName,eventPrice,eventDate,eventImage}: Props) {
  const [scholarshipType, setScholarshipType] = useState("Select Your Scholarship")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const scholarshipTypes = [
// //     "Scholarship Type 1",
// //     "Scholarship Type 2",
// //     "Scholarship Type 3",
// //   ];

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

  const selectScholarship = (type: string) => {
    setFormData({
      ...formData,
    });
    // setIsDropdownOpen(false);
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
const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON(
        "/api/checkoutSession",
        {
          items : [{
            title : eventName,
            price : eventPrice,
            image : eventImage,
          }],
          user : JSON.stringify({
            _type : "eventApplicant",
            eventName : eventName,
            date : eventDate,
            ...formData
          })
        }
      );


      // Internal Server Error
      if ((checkoutSession as any).statusCode === 500) {
        console.error((checkoutSession as any).message);
        return;
      }

      // Redirect to checkout
      const stripe = await getStripe();
      const { error } = await stripe!.redirectToCheckout({
        // Make the id field from the Checkout Session creation API response
        // available to this file, so you can provide it as parameter here
        // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
        sessionId: checkoutSession?.id, //This is is used as the query parameter to the success page.
      });

      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `error.message`.
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `error.message`.
      console.warn(error.message);

      // Reset the form
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
      });
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="mt-2 md:mt-4 lg:mt-8 w-full" id="form2">
      {/* <div className="relative">
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
      </div> */}
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
