import React from "react";
import Dashboard from "./Dashboard";

import Product from "./Product";
import Customers from "./Customers";

import NotFound from "./NotFound";

import { Routes, Route } from "react-router-dom";

const Header = () => {

  return (
    <div className=" w-[555px]  lg:w-[1134px] ">
      <h2 className=" ml-[71px] mt-4 sm:mt-[41px] lg:mb-[51px] text-2xl font-medium ">
        Hello Evano 👋🏼,
      </h2>
     <div className="bg-[#fff] sm:w-[800px] lg:w-[968px] sm:mx-5 lg:mx-[71px] rounded-[30px] ">
        <Routes >
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
     </div>
    </div>
  );
};

export default Header;
