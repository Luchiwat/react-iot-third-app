import React from "react";
import Headeriot from "../components/Headeriot";
import Footeriot from "../components/Footeriot";
import Navberiot from "../components/Navberiot";
import bmr from "../assets/bmr.png";

export default function PageC() {
  return (
    <div>
      <Navberiot />
      <Headeriot wow="หน้า C" woo="🎅" />
      <div className="w-7/10 border border-gray-300 p-7 mx-auto rounded-lg shadow-xl mt-5">
        <h1 className="text-center text-2xl font-bold">BMR Calculator</h1>
        <p className="text-center text-gray-500 mt-1">คำนวณ BMR</p>

        <img src={bmr} alt="BMR logo" className="w-28 mx-auto mt-5" />

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

        <label className="font-bold mt-6 block"> ป้อนอายุ (ปี)</label>
        <input
          type="number"
          placeholder="เช่น 20"
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />

        <div className="mt-6">
          <div className="font-bold mb-2">เพศ</div>
          <div className="flex items-center gap-8">
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" className="accent-blue-600" />
              ชาย
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="gender" className="accent-blue-600" />
              หญิง
            </label>
          </div>
        </div>

        <div className="flex mt-6 gap-3">
          <button className="p-3 bg-indigo-700 hover:bg-indigo-800 rounded-lg w-full text-white cursor-pointer">
            คำนวณ BMR
          </button>
          <button className="p-3 bg-red-500 hover:bg-red-600 rounded-lg w-full text-white cursor-pointer">
            รีเซ็ต
          </button>
        </div>

        <div className="text-center mt-6 text-lg">
          ค่า BMR ที่คำนวณได้:{" "}
          <span className="text-indigo-700 font-bold text-2xl">0.00</span>
        </div>

        <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded-lg w-full cursor-pointer mt-4">
          กลับหน้าหลัก
        </button>
      </div>
      <Footeriot />
    </div>
  );
}