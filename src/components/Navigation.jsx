import React from "react";
import Menu from "./Menu";
import User from "./User";

import Set1 from "../img/setting 1.svg";

const Navigation = () => {
  return (
    <div className=" w-[306px] sm:h-[600px] lg:h-[1198px] pl-[28px] pt-9 flex flex-col bg-[#fff]">
      <div className=" flex pb-16">
        <img className="" src={Set1} alt="" />
        <h1 className=" content-center text-[26px] font-semibold ml-2 mr-1">
          {" "}
          Dashboard{" "}
        </h1>
        <p className=" text-[10px] content-end mb-1.5 font-medium text-[#838383]">
          v.01
        </p>
      </div>
      <div className=" flex-auto "><Menu /></div>
      <div>
        <User />
      </div>
    </div>
  );
};

export default Navigation;
