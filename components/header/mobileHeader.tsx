"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CommonButton from "../common/button";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Menu Icon */}
      <button onClick={() => setIsOpen(true)}>
        <Image src="/menuIcon.svg" alt="menu icon" height={24} width={24} />
      </button>

      {/* Mobile Menu Modal */}
      {isOpen && (
        <div
          className="z-50 fixed inset-0  flex justify-end border border-(--color-7) shadow-black shadow-2xl"
          onClick={closeMenu} // Close menu when clicking outside
        >
          <div
            className="w-2/3 bg-white h-full p-4 flex flex-col shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent click inside from closing
          >
            {/* Close Icon */}
            <button className="self-end" onClick={closeMenu}>
              <Image
                src="/closeIcon.svg"
                alt="close icon"
                height={24}
                width={24}
              />
            </button>

            {/* Navigation Links */}
            <nav className="mt-4 flex flex-col gap-4">
              <ul className="flex flex-col gap-6 ">
                <li onClick={closeMenu}>
                  <Link href="#" className="py-[2px] px-1 font-[400] leading-6">
                    Buy
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link href="#" className="py-[2px] px-1 font-[400] leading-6">
                    Rent
                  </Link>
                </li>
                <li onClick={closeMenu}>
                  <Link href="#" className="py-[2px] px-1 font-[400] leading-6">
                    Post an advertisement
                  </Link>
                </li>
                <li onClick={closeMenu}>
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
                      onClick={closeMenu}
                      paddingHorizontal="px-4"
                      paddingVertical="py-2"
                    />
                  </Link>
                </li>
                <li
                  onClick={closeMenu}
                  className="py-[2px] px-1 font-[400] leading-6"
                >
                  ENG
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
