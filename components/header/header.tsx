"use client";
import Link from "next/link";
import React from "react";
import CommonButton from "../common/button";
import MobileHeader from "./mobileHeader";

const Header = () => {
  return (
    <header className="h-auto w-full flex justify-between items-center mt-[3.75em] ">
      <p>Real Estate Search</p>
      <nav aria-label="Main Navigation" className="hidden md:block">
        <ul className="flex gap-6 items-center">
          <li>
            <Link href="#" className="py-[2px] px-1 font-[400] leading-6">
              Buy
            </Link>
          </li>
          <li>
            <Link href="#" className="py-[2px] px-1 font-[400] leading-6">
              Rent
            </Link>
          </li>
          <li>
            <Link href="#" className="py-[2px] px-1 font-[400] leading-6">
              Post an advertisement
            </Link>
          </li>
          <li>
            <Link
              href="#"
              //   className="font-[400] leading-6 px-4 py-2 rounded-sm bg-black text-white"
            >
              <CommonButton
                bgColor="bg-(--color-5)"
                children="Sign in"
                textColor="text-white"
                border={false}
                withIcon={false}
                onClick={() => ""}
                paddingHorizontal="px-4"
                paddingVertical="py-2"
              />
            </Link>
          </li>
          <li className="py-[2px] px-1 font-[400] leading-6">ENG</li>
        </ul>
      </nav>
      <MobileHeader />
    </header>
  );
};

export default Header;
