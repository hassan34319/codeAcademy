"use client";
import { fetchPostJSON } from "@/app/utils/api-helpers";
import { client } from "@/app/utils/client";
import getStripe from "@/app/utils/getStripe";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Stripe from "stripe";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  email: string;
  codingExperience: string;
  careerPath: string;
  goals: string;
  interviewTime: string[];
}

const Form: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    email: "",
    codingExperience: "",
    careerPath: "",
    goals: "",
    interviewTime: [],
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData((prevData) => ({
        ...prevData,
        interviewTime: [...prevData.interviewTime, value],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        interviewTime: prevData.interviewTime.filter((time) => time !== value),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      // Send a POST request to Sanity
      const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON(
        "/api/checkoutSession",
        {
          items: [{
            title: "Application for Bootcamp",
            price: 40,
            image:
              "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }],
          user: JSON.stringify({
            _type: "application",
            ...formData,
          }),
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
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        email: "",
        codingExperience: "",
        careerPath: "",
        goals: "",
        interviewTime: [],
      });
    } catch (error) {
      // Handle any errors that occur during the request
      console.error("Error submitting the form:", error);
    }
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   // ... (rest of your existing code)

  //   // Create a new applicant in Sanity
  //   try {
  //     const response_stripe = await fetch("/api/checkoutSession", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         firstName: formData.firstName,
  //         lastName: formData.lastName,
  //         phone: formData.phone,
  //         address: formData.address,
  //         city: formData.city,
  //         state: formData.state,
  //         email: formData.email,
  //         codingExperience: formData.codingExperience,
  //         careerPath: formData.careerPath,
  //         goals: formData.goals,
  //         interviewTime: formData.interviewTime,
  //       }),
  //     });

  //     const data = await response_stripe.json();
  //     console.log(data);

  //     if (data.error) {
  //       // Handle the error
  //       console.error(data.error);
  //     } else {
  //       const response = await client.create({
  //         _type: "application", // This should match the name of your Sanity schema for applicants
  //         firstName: formData.firstName,
  //         lastName: formData.lastName,
  //         phone: formData.phone,
  //         address: formData.address,
  //         city: formData.city,
  //         state: formData.state,
  //         email: formData.email,
  //         codingExperience: formData.codingExperience,
  //         careerPath: formData.careerPath,
  //         goals: formData.goals,
  //         interviewTime: formData.interviewTime,
  //       });

  //       console.log("Applicant created:", response);


  //       // Redirect the user to the Stripe Checkout page
  //       router.push(`${data.url}`);
  //     }
  //     // Optionally, you can display a success message to the user after successful submission.
  //   } catch (error) {
  //     console.error("Error creating applicant:", error);
  //     // Handle errors here if necessary.
  //   }
  // };
  return (
    <div className="mx-auto max-w-[90%] md:max-w-[80%] lg:max-w-[60%] bg-gray-100 px-10 mt-[10vh] rounded-xl py-[10vh]">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h1 className="font-bold text-2xl mb-[3vh]">Application Form</h1>
        <p className="font-normal text-sm opacity-80 text-red-600 mb-[5vh]">
          Note : Application Fees of $40 will apply
        </p>
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="mt-1 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="mt-1 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleInputChange}
            className="mt-1 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium text-gray-700"
          >
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleInputChange}
            className="mt-1 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-700"
          >
            State
          </label>
          <input
            type="text"
            name="state"
            id="state"
            value={formData.state}
            onChange={handleInputChange}
            className="mt-1 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="mt-1 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="codingExperience"
            className="block text-sm font-medium text-gray-700"
          >
            Coding Experience
          </label>
          <textarea
            name="codingExperience"
            id="codingExperience"
            value={formData.codingExperience}
            onChange={handleInputChange}
            rows={3}
            className="mt-1 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="careerPath"
            className="block text-sm font-medium text-gray-700"
          >
            Career Path
          </label>
          <textarea
            name="careerPath"
            id="careerPath"
            value={formData.careerPath}
            onChange={handleInputChange}
            rows={3}
            className="mt-1 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="goals"
            className="block text-sm font-medium text-gray-700"
          >
            Goals
          </label>
          <textarea
            name="goals"
            id="goals"
            value={formData.goals}
            onChange={handleInputChange}
            rows={3}
            className="mt-1 px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Schedule Time for 1 on 1 interview
          </label>
          <div className="mt-2 space-y-2">
            <label htmlFor="monday" className="flex items-center">
              <input
                type="checkbox"
                name="monday"
                value="Monday - 4pm-6pm"
                onChange={handleCheckboxChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">
                Monday - 4pm-6pm
              </span>
            </label>
            <label htmlFor="tuesday" className="flex items-center">
              <input
                type="checkbox"
                name="tuesday"
                value="Tuesday - 4pm-6pm"
                onChange={handleCheckboxChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">
                Tuesday - 4pm-6pm
              </span>
            </label>
            <label htmlFor="wednesday" className="flex items-center">
              <input
                type="checkbox"
                name="wednesday"
                value="Wednesday - 4pm-6pm"
                onChange={handleCheckboxChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">
                Wednesday - 4pm-6pm
              </span>
            </label>
            <label htmlFor="thursday" className="flex items-center">
              <input
                type="checkbox"
                name="thursday"
                value="Thursday - 4pm-6pm"
                onChange={handleCheckboxChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">
                Thursday - 4pm-6pm
              </span>
            </label>
            <label htmlFor="friday" className="flex items-center">
              <input
                type="checkbox"
                name="friday"
                value="Friday - 4pm-6pm"
                onChange={handleCheckboxChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm text-gray-600">
                Friday - 4pm-6pm
              </span>
            </label>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
