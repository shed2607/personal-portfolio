"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
  const [state, handleSubmit] = useForm("mgegjene");
  if (state.succeeded) {
    return <p>Thanks for reaching out!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-transparent rounded-lg w-full max-w-md mx-auto"
    >
      <span className="text-4xl" role="img" aria-label="wave">
        👋
      </span>
      <div className="mb-4">
        <label
          htmlFor="fullname"
          className="block text-gray-700 font-bold mb-2"
        >
          Full Name
        </label>
        <input
          id="fullname"
          type="text"
          name="fullname"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-red-500 mt-1"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-red-500 mt-1"
        />
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
}

// Contact Information Component
export function ContactInfo() {
  return (
    <div className="text-center mt-8">
      <p className="text-lg text-gray-700">You can also reach me at:</p>
      <p className="text-lg font-semibold text-gray-800">
        your.email@example.com
      </p>
      <p className="text-lg font-semibold text-gray-800">+1 234 567 890</p>
      <span className="text-4xl" role="img" aria-label="wave">
        👋
      </span>
    </div>
  );
}
