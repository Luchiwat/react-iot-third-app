import React from "react";
import Headeriot from "../components/Headeriot";
import Footeriot from "../components/Footeriot";
import Navberiot from "../components/Navberiot";
import car from "../assets/car.png";

export default function PageD() {
  return (
    <div>
      <Navberiot />
      <Headeriot wow="หน้า D" woo="👴" />
      <div className="w-7/10 border border-gray-300 p-7 mx-auto rounded-lg shadow-xl mt-5">
        <h1 className="text-center text-2xl font-bold">
          Car Installment Calculator
        </h1>
        <p className="text-center text-gray-500 mt-1">คำนวณ Car Installment</p>

        <img src={car} alt="car logo" className="w-28 mx-auto mt-5" />

        <label className="font-bold mt-6 block">ชื่อผู้คำนวณ</label>
        <input
          type="text"
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />

        <label className="font-bold mt-6 block">ราคารถ (บาท)</label>
        <input
          type="number"
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />

        <label className="font-bold mt-6 block">ดอกเบี้ยต่อปี (%)</label>
        <input
          type="number"
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />

        <div className="mt-6">
          <div className="font-bold mb-2">เงินดาวน์ (%)</div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <label className="flex items-center gap-2">
              <input type="radio" name="down" className="accent-blue-600" />
              0%
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="down" className="accent-blue-600" />
              10%
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="down" className="accent-blue-600" />
              20%
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="down" className="accent-blue-600" />
              25%
            </label>
          </div>
        </div>

        <label className="font-bold mt-6 block">จำนวนงวดที่ผ่อน</label>
        <select className="p-2 border border-gray-300 rounded w-full mt-2">
          <option>24 เดือน</option>
          <option>36 เดือน</option>
          <option>48 เดือน</option>
          <option>60 เดือน</option>
          <option>72 เดือน</option>
        </select>

        <div className="flex mt-6 gap-3">
          <button className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg w-full text-white cursor-pointer">
            คำนวณ
          </button>
          <button className="p-3 bg-gray-200 hover:bg-gray-300 rounded-lg w-full cursor-pointer">
            ล้างข้อมูล
          </button>
        </div>

        <div className="text-center mt-6 text-lg">
          ผ่อนชำระต่อเดือน:{" "}
          <span className="text-blue-600 font-bold text-lg">0.00</span> บาท
        </div>

        <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-lg w-full cursor-pointer mt-4">
          กลับหน้าหลัก
        </button>
      </div>
      <Footeriot />
    </div>
  );
}