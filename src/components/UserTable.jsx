import React from "react";
import user from "../assets/user.json";

const UserTable = ({ searchValue, currentPage }) => {
  // Разделение массива на подмассивы по 8 элементов
  const chunkSize = 8;
  const startIndex = currentPage * chunkSize;
  const endIndex = startIndex + chunkSize;
  const filteredUsers = user.filter((obj) => {
    if (obj.customer_name.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    } else if (obj.Company.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    return false;
  });
  const chunkedUsers = filteredUsers.slice(startIndex, endIndex);

  return (
    <table className="lg:w-[886px] mx-2 sm:mx-9 ">
      <thead className="border-[#eee] border-solid border-b-2">
        <tr className="text-left text-[10px] font-medium text-[#B5B7C0] h-[38px] ">
          <th className="w-[172px] content-start" scope="col">
            Customer Name
          </th>
          <th className="w-[131px] content-start" scope="col">
            Company
          </th>
          <th className="w-[156px] content-start" scope="col">
            Phone Number
          </th>
          <th className="sm:w-[207px] content-start " scope="col">
            Email
          </th>
          <th className="w-[152px] content-start" scope="col">
            CountryStatus
          </th>
          <th className="content-start" scope="col">
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {/* Используем один map для итерации по всему массиву */}
        {chunkedUsers.map((obj) => (
          <tr
            key={obj.id}
            className="text-left text-xs sm:text-sm font-medium text-[#292D32] h-[69px] border-[#eee] border-solid border-b-2"
          >
            <td className="content-center">{obj.customer_name}</td>
            <td className="content-center">{obj.Company}</td>
            <td className="content-center">{obj.Phone_Number}</td>
            <td className="content-center">{obj.Email}</td>
            <td className="content-center">{obj.Country}</td>
            <td className="content-center ">
              <div
                className={`content-center text-center w-20 h-[29px] rounded-[4px] border-solid border-2  ${
                  obj.Status === "Active"
                    ? "bg-[#16C098] bg-opacity-[38%] border-[#008767] text-[#008767]"
                    : "bg-[#FFC5C5]  border-[#DF0404] text-[#DF0404]"
                }`}
              >
                {obj.Status}
              </div>
            </td>
          </tr>
        ))}
        {/* Заполняем пустыми ячейками, если в подмассиве меньше 8 элементов */}
        {chunkedUsers.length < chunkSize && (
          <tr>
            <td
              colSpan={6 - chunkedUsers.length}
              className="content-center"
            ></td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
