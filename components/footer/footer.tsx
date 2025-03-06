import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="m-3 sm:m-5 p-[2em] lg:p-[7.5em]  pb-0 mt-[9.375em] bg-(--color-1)">
      <div className=" flex justify-center md:justify-between flex-col md:flex-row gap-10 md:gap-0">
        {/* first column */}
        <div className=" w-[18em] sm:w-[22em] lg:w-[22.5em] mr-0 md:mr-[2em] lg:mr-[8em] xl:mr-[15em] ">
          <p className="text-(--color-9) font-[400] leading-6">
            Fylpi Immo-online GmbH <br />
            Forchheimergasse 3/13, 1230 Wien, Österreich
          </p>
          <p className="text-(--color-9) font-[400] leading-6 my-6">
            office@fylpi.at | www.fylpi.at
          </p>
          <span className="flex gap-1.5 justify-start items-center">
            <Image
              src="/Youtube.svg"
              alt="Youtube"
              width={48}
              height={48}
              className="text-(--color-9)"
            />
            <p className="text-(--color-9)">Youtube</p>
          </span>
        </div>
        {/* second column */}
        <div className="w-[18em] sm:w-[22em] md:w-[6em] lg:w-[12em] xl:w-[16.25em] mr-0 md:mr-10 text-(--color-9) flex flex-col gap-[15px]">
          <Link href={"#"}>About us</Link>
          <Link href={"#"}>Contact us</Link>
          <Link href={"#"}>My account</Link>
          <Link href={"#"}>Buy</Link>
          <Link href={"#"}>Rent</Link>
        </div>
        {/* third column */}
        <div className=" w-[18em] sm:w-[22em] xl:w-[16.25em] text-(--color-9) flex flex-col gap-[15px]">
          <Link href={"#"}>FAQ</Link>
          <Link href={"#"}>Real estate services</Link>
          <Link href={"#"}>Practical guides</Link>
          <Link href={"#"}>Real estate knowledge</Link>
          <Link href={"#"}>Consulting services</Link>
        </div>
      </div>
      {/* divider */}
      <hr className="border border-white mt-10 md:mt-[4.5em] " />
      <div className="text-(--color-2) flex flex-col gap-2 md:gap-0 md:flex-row justify-between items-center py-6">
        <p className="text-center md:text-start">
          © 2024 Fylpi. Alle Rechte vorbehalten.
        </p>
        <span className="flex justify-center items-center gap-6">
          <Link href={"#"} target="_blank">
            Impressum
          </Link>
          <Link href={"#"} target="_blank">
            Impressum
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
