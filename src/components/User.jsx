import React from "react";
import Ellipse from '../img/Ellipse 8.jpg'

const User = () => {
  return (
    <div className=" flex mb-[76px]">
      {" "}
      <img className=" mr-3 w-[42px] h-[42px]" src={Ellipse} alt="" />
      <div>
        <h5 className=" text-sm font-medium">Evano</h5>
        <p className=" text-xs text-[#757575]">Project Manager</p>
      </div>
    </div>
  );
};

export default User;
