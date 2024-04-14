import React, { useState } from "react";
import Key from "../img/key-square.svg";
import D3 from "../img/3d-square 1.svg";
import Chevron from "../img/chevron-right 2.svg";
import User from "../img/user-square 1.svg";
import Wallet from "../img/wallet-money 2.svg";
import Discount from "../img/discount-shape 1.svg";
import Message from "../img/message-question 1.svg";
import { Link } from "react-router-dom";

// const categories = [];

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div>
      <div className="w-[250px]">
        <Link to="/"
          className={`flex mb-[18px] h-[46px] items-center rounded-lg  text-[#9197B3] ${
            selectedItem === 0 ? "bg-[#5932EA] text-white" : ""
          }`}
          onClick={() => handleItemClick(0)}
        >
          <img className="ml-[13px] mr-[14px] fill-current" src={Key} alt="" />
          <p className="text-sm content-center font-medium">
            Dashboard
          </p>
        </Link>
        <Link to="/product"
          className={`flex mb-[18px] h-[46px] items-center rounded-lg text-[#9197B3] ${
            selectedItem === 1 ? "bg-[#5932EA] text-white" : ""
          }`}
          onClick={() => handleItemClick(1)}
        >
          <img className="ml-[13px] mr-[14px] fill-current" src={D3} alt="" />
          <p className="text-sm content-center font-medium  flex-auto">
            Product
          </p>
          <img className="" src={Chevron} alt="" />
        </Link>
        <Link to="/customers"
          className={`flex mb-[18px] h-[46px] items-center rounded-lg text-[#9197B3] ${
            selectedItem === 2 ? "bg-[#5932EA] text-white" : ""
          }`}
          onClick={() => handleItemClick(2)}
        >
          <img className="ml-[13px] mr-[14px] fill-current" src={User} alt="" />
          <p className="text-sm content-center font-medium  flex-auto">
            Customers
          </p>
          <img className="" src={Chevron} alt="" />
        </Link>
        <Link to="/income"
          className={`flex mb-[18px] h-[46px] items-center rounded-lg text-[#9197B3] ${
            selectedItem === 3 ? "bg-[#5932EA] text-white" : ""
          }`}
          onClick={() => handleItemClick(3)}
        >
          <img className="ml-[13px] mr-[14px] fill-current" src={Wallet} alt="" />
          <p className="text-sm content-center font-medium  flex-auto">
            Income
          </p>
          <img className="" src={Chevron} alt="" />
        </Link>
        <Link to="/promote"
          className={`flex mb-[18px] h-[46px] items-center rounded-lg text-[#9197B3] ${
            selectedItem === 4 ? "bg-[#5932EA] text-white" : ""
          }`}
          onClick={() => handleItemClick(4)}
        >
          <img className="ml-[13px] mr-[14px] fill-current" src={Discount} alt="" />
          <p className="text-sm content-center font-medium  flex-auto">
            Promote
          </p>
          <img className="" src={Chevron} alt="" />
        </Link>
        <Link to="/help"
          className={`flex mb-[18px] h-[46px] items-center rounded-lg text-[#9197B3] ${
            selectedItem === 5 ? "bg-[#5932EA] text-white" : ""
          }`}
          onClick={() => handleItemClick(5)}
        >
          <img className="ml-[13px] mr-[14px] fill-current" src={Message} alt="" />
          <p className="text-sm content-center font-medium  flex-auto">
            Help
          </p>
          <img className="" src={Chevron} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
