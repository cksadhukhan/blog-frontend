import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { PaginationComponentProps } from "./pagination.component.props";

export const Pagination: NextPage<PaginationComponentProps> = (
  props: PaginationComponentProps
) => {
  const { currentPage, totalPage } = props;

  const isFirstPage = (): boolean => {
    return Number(currentPage) === 1;
  };
  const isLastPage = (): boolean => {
    return Number(currentPage) === Number(totalPage);
  };
  return (
    <div className="flex flex-row px-40 py-16 items-center justify-center">
      {!isFirstPage() && (
        <button className="text-md bg-transparent bg-white font-medium text-gray-800 py-2 px-3 border hover:border-gray-800 border-transparent hover:border rounded-full">
          <Link href={`/page/${Number(currentPage) - 1}`}>Previous posts</Link>
        </button>
      )}
      <p className="text-gray-800 px-5">
        {currentPage}/{totalPage}
      </p>
      {!isLastPage() && (
        <button className="text-md bg-transparent bg-white font-medium text-gray-800 py-2 px-3 border hover:border-gray-800 border-transparent hover:border rounded-full">
          <Link href={`/page/${Number(currentPage) + 1}`}>Next posts</Link>
        </button>
      )}
    </div>
  );
};
