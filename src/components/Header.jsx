import React from "react";
import Logo from "../assets/v.gif";
import { Datepicker, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { FaCoins } from "react-icons/fa"; // for gold
import { GiSilverBullet } from "react-icons/gi"; // for silver

export default function Header() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [goldRate, setGoldRate] = useState("");
  const [silverRate, setSilverRate] = useState("");

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
        <p className="md:text-2xl text-sm">Gold/Silver</p>
        <p className="md:text-3xl text-sm">|| श्री गणेशाय नमः ||</p>
        <p className="flex md:gap-2 md:text-2xl text-sm">
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
      <div className=" self-center whitespace-nowrap text-5xl sm:text-xl flex items-center">
        <img src={Logo} className="md:w-[200px] w-[150px]" alt="logo" />
        <p className="md:text-5xl uppercase font-light font-serif self-center text-[#ffe5bd] text-xl">
          VIJAY JEWELLERS
        </p>
      </div>
      <div className="flex justify-end items-center">
        <address className="md:text-3xl text-xl bg-gray-300 rounded max-w-[500px] p-2 underline">
          68, विश्वकर्मा नगर स्पेशल , कोटा (राज.)
        </address>
      </div>

      <div className="flex md:justify-between md:text-2xl text-xl mt-10">
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

      {/* Gold and Silver Inputs */}
      <div className="flex flex-col md:flex-row gap-6 justify-end mb-5">
        {/* Gold Rate */}
        <div className="flex flex-col">
          <label
            htmlFor="goldRate"
            className="text-gray-700 font-semibold mb-1 md:text-xl text-base"
          >
            Gold Rate (₹)
          </label>
          <input
            id="goldRate"
            type="number"
            placeholder="Enter Gold Rate"
            value={goldRate}
            onChange={(e) => setGoldRate(e.target.value)}
            className="bg-[#ffe5bd] rounded-xl"
          />
        </div>

        {/* Silver Rate */}
        <div className="flex flex-col">
          <label
            htmlFor="silverRate"
            className="text-gray-700 font-semibold mb-1 md:text-xl text-base"
          >
            Silver Rate (₹)
          </label>
          <input
            id="silverRate"
            type="number"
            placeholder="Enter Silver Rate"
            value={silverRate}
            onChange={(e) => setSilverRate(e.target.value)}
            className="rounded-xl"
          />
        </div>
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
          <h2 className="md:text-6xl text-3xl font-bold text-pink-800">
            {name.toUpperCase()}
          </h2>
        </div>
      )}
    </div>
  );
}
