import React from "react";
import SearchImg from "../img/search 1.svg";


const Search = ({searchValue, setSearchValue}) => {
  return (
    <div className=" flex w-[216px] h-[38px] sm:ml-[250px]  lg:ml-[506px] border-[#E7E7E7] rounded-[10px] border-solid border-[1px]">
      <img className="ml-[11px] w-6 mr-1" src={SearchImg} alt="" />
      <input value={searchValue} onChange={(event)=> setSearchValue(event.target.value)} placeholder="Search" className="pl-1 text-xs text-[#B5B7C0] content-center"/>
    </div>
  );
};

export default Search;
