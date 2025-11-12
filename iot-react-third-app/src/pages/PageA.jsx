import React from "react";
import Headeriot from "../components/Headeriot";
import Footeriot from "../components/Footeriot";
import Navberiot from "../components/Navberiot";
import money from "../assets/money.png";

export default function PageA() {
  return (
    <div>
      <Navberiot />
      <Headeriot wow="หน้า A" woo="><" />

      <div className="w-7/10 border border-gray-300 p-7 mx-auto rounded-lg shadow-xl">
        <h1 className="text-center text-2xl text-green-600 font-bold">
          Money Shared
        </h1>

        <img src={money} alt="รูปเงิน" className="w-30 mx-auto mt-5" />

        <h3 className="font-bold mt-5"> ป้อนเงิน (บาท)</h3>

        <input
          type="number"
          placeholder="Input money....."
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />

        <h3 className="font-bold mt-5"> ป้อนคน (คน)</h3>

        <input
          type="number"
          placeholder="Input person....."
          className="p-2 border border-gray-300 rounded w-full mt-2"
        />

        <div className="flex mt-5">
          <button className="p-3 bg-blue-500 hover:bg-blue-700 rounded-lg w-full text-white cursor-pointer mr-2">
            คำนวณ
          </button>
          <button className="p-3 bg-red-500 hover:bg-red-700 rounded-lg w-full text-white cursor-pointer ml-2">
            ยกเลิก
          </button>
        </div>

        <div className="flex justify-center items-center gap-5 mt-5 ">
          หารกันคนละ
          <span className="text-5xl text-red-500 font-bold">0.00</span>
          บาท
        </div>
      </div>

      <Footeriot />
    </div>
  );
}
