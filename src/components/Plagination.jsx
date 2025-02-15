import React from "react";
import { useCrypto } from "../context/CryptoContext";

const Pagination = () => {
  const { page, setPage } = useCrypto();

  return (
    <div className="pagination">
      <button
        className="p-[9px] bg-blue-500 rounded text-white"
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
      >
        Prev
      </button>
      <span className="text-white"> -- Page -- {page} </span>
      <button
        className="p-[9px] bg-blue-500 rounded text-white"
        onClick={() => setPage((prev) => prev + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
