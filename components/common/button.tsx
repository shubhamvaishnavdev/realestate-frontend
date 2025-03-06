"use client";
import React from "react";

interface ButtonProps {
  /** Tailwind class for background color (e.g., "bg-blue-500") */
  bgColor: string;
  /** Tailwind class for text color (e.g., "text-white") */
  textColor: string;
  /** If true, apply a border */
  border?: boolean;
  /** Tailwind class for border color (e.g., "border-gray-300"). Used only if `border` is true. */
  borderColor?: string;
  /** If true, render an icon */
  withIcon?: boolean;
  /** Icon to display when `withIcon` is true */
  icon?: React.ReactNode;
  /** Tailwind class for horizontal padding (e.g., "px-4") */
  paddingHorizontal?: string;
  /** Tailwind class for vertical padding (e.g., "py-2") */
  paddingVertical?: string;
  /** Button content */
  children: React.ReactNode;
  /** Click event handler */
  onClick?: () => void;
  /** Additional Tailwind classes */
  className?: string;
}

const CommonButton: React.FC<ButtonProps> = ({
  bgColor,
  textColor,
  border = false,
  borderColor = "border-(--color-5)",
  withIcon = false,
  icon,
  paddingHorizontal = "px-4",
  paddingVertical = "py-2",
  children,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${bgColor} 
        ${textColor} 
        ${paddingHorizontal} 
        ${paddingVertical} 
        ${border ? `border ${borderColor}` : ""} 
        rounded-sm
        flex items-center gap-1.5 
        ${className}
      `}
    >
      {withIcon && icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default CommonButton;
