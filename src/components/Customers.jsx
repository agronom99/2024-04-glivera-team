import React, { useState } from "react";
import UserTable from "./UserTable";
import Search from "./Search";
import Pagination from "./Pagination";


const Customers = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className=" h-[812px]">
      <div className=" sm:flex pt-4 sm:pt-[30px] ml-[38px] mb-4 sm:mb-10">
        <div className=" ">
          <h1 className=" text-[22px] font-semibold">All Customers</h1>
          <p className=" text-sm text-[#16C098]">Active Members</p>
        </div>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className=" h-[587px]">
        <UserTable searchValue={searchValue} currentPage={currentPage} />
      </div>
      <div className=" sm:flex mt-4 sm:mt-8 justify-between">
        <p className="mx-[38px] content-center text-sm font-medium text-[#B5B7C0]">
          Showing data {currentPage * 8 + 1} to {(currentPage + 1) * 8} of 256K
          entries
        </p>
        <div className="my-4 mx-2 lg:mx-[38px]">
          <Pagination handlePageChange={handlePageChange} currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
};

export default Customers;
