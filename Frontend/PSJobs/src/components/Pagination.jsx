import React from "react";

const Pagination = ({ currentPage, totalPages, setCurrentPage }) => (
  <div className="flex justify-center items-center space-x-4 mt-6">
    <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 bg-[#933DC9] text-[#FBFAEE] rounded-lg hover:bg-[#53118F] disabled:opacity-50">Previous</button>
    <span>Page {currentPage} of {totalPages}</span>
    <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 bg-[#933DC9] text-[#FBFAEE] rounded-lg hover:bg-[#53118F] disabled:opacity-50">Next</button>
  </div>
);

export default Pagination;