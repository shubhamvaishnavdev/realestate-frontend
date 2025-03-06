"use client";

import Image from "next/image";
import React, { useState } from "react";

interface SelectProps {
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  defaultValue?: string;
  className?: string;
}

const Select: React.FC<SelectProps> = ({
  options,
  onChange,
  defaultValue,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false); // Track dropdown state

  return (
    <div className="relative w-fit rounded-sm border border-(--color-7) bg-white ">
      {/* Dropdown Select */}
      <select
        className={`relative p-3 pr-8  min-w-[78px] min-h-[24px]  appearance-none focus:outline-none ${className}`}
        onChange={(e) => onChange(e.target.value)}
        defaultValue={defaultValue}
        onClick={() => setIsOpen(!isOpen)} // Detect open state
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="font-[400] leading-6 w-full"
          >
            {option.label}
          </option>
        ))}
      </select>

      {/* Dropdown Character-Based Icon */}
      <div className=" absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none text-gray-500 ">
        <Image
          src="/ArrowDown.svg"
          alt="Dropdown Arrow"
          width={14}
          height={7}
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
    </div>
  );
};

export default Select;
