import React from "react";
import HeaderIot from "../components/HeaderIot.jsx";
import NavBarIot from "../components/NavBarIot.jsx";
import Footerlot from "../components/Footerlot.jsx";
import money from "../assets/money.png";

export default function pageD() {
  return (
    <div>
      <NavBarIot />
      <HeaderIot wow="หน้าA" woo="^_^" />
      PageA
      <Footerlot />
      <div className="w-7/10 border border-gray-400 p-7 mx-auto rounded-lg shadow-xl">
        <h1 className="text-center text-2xl text-green-800 font-bold">
          Money Shared
        </h1>
        <img src={money} alt="รูปเงิน" className="w-30 mx-auto mt-5" />
        <h3 className="font-bold mt-5">ป้อนเงิน</h3>
        <input
          type="number"
          placeholder="Inpot money"
          className="w-full border border-gray-300 rounded-lg p-2 mt-2 mb-5"
        ></input>
        <h3 className="font-bold mt-5">ป้อนคน</h3>
        <input
          type="number"
          placeholder="Inpot person"
          className="w-full border border-gray-300 rounded-lg p-2 mt-2 mb-5"
        ></input>
        <div className="flex mt-5">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-5 hover:bg-blue-600">
            คำนวณ
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
            ล้างค่า
          </button>
          <div className="flex justify-center items-center gap-5 mt-5">
            หารกันคนละ
            <span className="text-3xl text-red-600 font-bold">0.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}
