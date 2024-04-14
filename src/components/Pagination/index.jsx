import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

const Pagination = ({currentPage, handlePageChange }) => {
  return (
    <ReactPaginate className={styles.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={({ selected }) => handlePageChange(selected)}
            pageRangeDisplayed={3} // Отображаем 4 номера страницы между стрелками "вперед" и "назад"
            pageCount={40} // Общее количество страниц
            forcePage={currentPage}
            renderOnZeroPageCount={null}
          />
  );
};

export default Pagination;
