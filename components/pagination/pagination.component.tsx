import React from "react";
import { PaginationComponentProps } from "./pagination.component.props";

const Pagination: React.FC<PaginationComponentProps> = (
  props: PaginationComponentProps
) => {
  const { currentPage, totalPage } = props;
  const isFirstPage = (): boolean => {
    return currentPage === 1;
  };
  const isLastPage = (): boolean => {
    return currentPage === totalPage;
  };
  return (
    <div className="flex flex-row px-40 py-16 items-center justify-center">
      <button className="text-md bg-transparent bg-white font-medium text-gray-800 py-2 px-3 border hover:border-gray-800 hover:border-transparent rounded-full">
        Previous posts
      </button>
      <p className="text-gray-800 px-5">1/9</p>
      <button className="text-md bg-transparent bg-white font-medium text-gray-800 py-2 px-3 border hover:border-gray-800 hover:border-transparent rounded-full">
        Next posts
      </button>
    </div>
  );
};

export default Pagination;
