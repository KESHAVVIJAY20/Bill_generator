import React from "react";
import SealStamp from '../assets/v_stamp.png';
export default function Footer() {
  return (
    <div className="mt-10">
    {/* <div className="flex justify-end items-center me-28 absolute"><p className="relative">M/S Vijay Jewellers</p>
    <img src={SealStamp} className="relative" alt="" /></div> */}
    <div className="absolute right-28 flex flex-col items-center">
  <div className="relative">
    <p className="text-sm font-semibold">M/S Vijay Jewellers</p>
    <img
      src={SealStamp}
      alt="Seal Stamp"
      className="absolute top-[-70px] left-1/2 -translate-x-1/2 rotate-[-15deg]  h-auto min-w-48 opacity-100 pointer-events-none"
    />
  </div>
</div>



      <div className="flex justify-between items-end mt-16">
        <ul className="space-y-5 text-xl">
          <li>सोने की शुद्धता की गारंटी</li>
          <li>भूल चुक लेनी देनी</li>
          <li>बिका हुआ मॉल वापिस नहीं होगा</li>
          <li>सभी विवादों का न्याय क्षेत्र कोटा न्यायालय होगा</li>
        </ul>
        <p>वास्ते –: विजय ज्वैलर्स</p>
      </div>
    </div>
  );
}
