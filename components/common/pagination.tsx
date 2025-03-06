"use client";

import usePropertyStore from "@/lib/store/propertyStore";
import Image from "next/image";
import React from "react";

const Pagination: React.FC = () => {
  const { pagination, properties, setPagination } = usePropertyStore();
  const { page: currentPage, limit } = pagination;
  const totalPages = properties?.meta?.pagination?.totalPages || 1;

  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 5;
    let start = Math.max(1, currentPage - 2);
    let end = Math.min(totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const onPageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setPagination({ page, limit });
    }
  };

  return (
    <div className="w-full flex justify-center items-center mt-[2em] md:mt-[5.625em] mb-[3em] md:mb-[6em] xl:mb-[9.375em]">
      <div className="flex items-center gap-2 mt-4">
        {/* Previous Button */}
        <button
          className={`px-3 py-2  rounded-sm border border-(--color) flex gap-1.5 ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-gray-200"
          }`}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <Image
            src="/ArrowLeft.svg"
            alt="Previous"
            width={24}
            height={24}
            className="text-(--color)"
          />
          <span className="font-[400] leading-6 text-(--color)">Previous</span>
        </button>

        {/* Page Numbers */}
        {getVisiblePages().map((page) => (
          <button
            key={page}
            className={`px-[13px] py-2 rounded-sm border border-(--color) ${
              currentPage === page
                ? "bg-(--color) text-white border-0"
                : "hover:bg-gray-200"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}

        {/* Next Button */}
        <button
          className={`px-3 py-2  rounded-sm border border-(--color) flex gap-1.5 ${
            currentPage === totalPages
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-gray-200"
          }`}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <span className="font-[400] leading-6 text-(--color)">Next</span>
          <Image
            src="/ArrowRight.svg"
            alt="Previous"
            width={24}
            height={24}
            className="text-(--color)"
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
