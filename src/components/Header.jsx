import React from "react";
import Logo from "../assets/v.gif";
import { Datepicker, TextInput } from "flowbite-react";
import { useState } from "react";
export default function Header() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  const handlePrint = () => {
    window.print(); // 👈 opens browser print dialog
  };

  return (
    <div className="">
      <div className="flex justify-between">
        <p>Gold/Silver</p>
        <p className="text-3xl">|| श्री गणेशाय नमः ||</p>
        <p className="flex gap-2">
          <span>Mobile No.</span>{" "}
          <span>
            94626-32598 <br /> 80055-64070
          </span>
        </p>
      </div>
      <div className="flex justify-end items-center">
        <button
          onClick={handlePrint}
          className="mb-4 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition print:hidden"
        >
          🖨️ Print
        </button>
      </div>
      <div className="flex justify-center items-center">
        <img src={Logo} className="w-[200px]" alt="logo" />
        <p className="text-8xl text-[#ffe5bd]">VIJAY JEWELLERS</p>
      </div>
      <div className="flex justify-end items-center">
        <address className="text-3xl bg-gray-300 rounded max-w-[500px] p-2 underline">
          68, विश्वकर्मा नगर स्पेशल , कोटा (राज.)
        </address>
      </div>

      <div className="flex justify-between text-2xl mt-10">
        <p>सोने व चांदी के पुनः निर्माणकर्ता</p>
        <p>(राशियों के रत्न भी उपलब्ध है)</p>
      </div>
      {/* <p className="text-3xl bg-gray-300 rounded max-w-[500px] p-2 mx-auto text-center underline">
        68, विश्वकर्मा नगर स्पेशल , कोटा (राज.)
      </p> */}

      <br />
      <div className="flex justify-end gap-5 items-end space-y-2 p-4">
        <p>Date:</p>
        <Datepicker />
      </div>
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-3 bg-white rounded-2xl"
        >
          {/* Name input */}
          <input
            type="text"
            placeholder="Enter Customer's Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg text-lg focus:ring-2 focus:ring-blue-500"
          />

          {/* Submit button */}
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Save
          </button>
        </form>
      ) : (
        <div className="text-start flex items-center">
          <p className="font-semibold">Mr/Mrs.</p>
          <h2 className="text-6xl font-bold text-gray-800">
            {name.toUpperCase()}
          </h2>
        </div>
      )}
    </div>
  );
}
