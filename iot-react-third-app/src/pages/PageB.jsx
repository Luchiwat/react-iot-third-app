import React from "react";
import Headeriot from "../components/Headeriot";
import Footeriot from "../components/Footeriot";
import Navberiot from "../components/Navberiot";
import bmi from "../assets/bmi.png";

export default function PageB() {
  return (
    <div>
      <Navberiot />
      <Headeriot wow="หน้า B" woo="T T" />
      <div className="w-7/10 border border-gray-300 p-7 mx-auto rounded-lg shadow-xl mt-5">
        <h1 className="text-center text-2xl font-bold">BMI Calculator</h1>
        <p className="text-center text-gray-500 mt-1">คำนวณ BMI</p>

        <img src={bmi} className="w-24 mx-auto mt-5" alt="BMI logo" />

        <label className="font-bold mt-6 block"> ป้อนน้ำหนัก (กิโลกรัม)</label>
        <input
          type="number"
          placeholder="เช่น 65"
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />

        <label className="font-bold mt-6 block"> ป้อนส่วนสูง (เซนติเมตร)</label>
        <input
          type="number"
          placeholder="เช่น 170"
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />

        <button className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg w-full text-white cursor-pointer mt-6">
          คำนวณ BMI
        </button>

        <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded-lg w-full cursor-pointer mt-3">
          รีเซ็ต
        </button>

        <div className="flex justify-center mt-6 text-lg items-center gap-1">
          ค่า BMI ที่คำนวณได้:{" "}
          <span className="text-blue-600 font-bold text-2xl">0.00</span>
        </div>

        <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded-lg w-full cursor-pointer mt-4">
          กลับหน้าหลัก
        </button>
      </div>
      <Footeriot />
    </div>
  );
}