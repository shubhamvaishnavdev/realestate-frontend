"use client";
import React, { useState } from "react";
import Select from "../common/select";
import SearchBox from "./searchBox";
import usePropertyStore from "@/lib/store/propertyStore";
import Image from "next/image";

const FilterSection = () => {
  const { setFilters } = usePropertyStore();

  const handleFilterChange = (key: string, value: string | number) => {
    setFilters({ [key]: value });
  };

  return (
    <div className="flex gap-3 xl:justify-between items-center  flex-wrap mt-10 mb-[1.8em]">
      <SearchBox />
      <Select
        onChange={(value) => handleFilterChange("transaction_type", value)}
        options={[
          { label: "ALL", value: "" },
          { label: "For sell", value: "buy" },
          { label: "Rent", value: "rent" },
        ]}
        key={"buy"}
        defaultValue="hello"
      />
      <Select
        onChange={(value) => handleFilterChange("type", value)}
        options={[
          { label: "Type", value: "" },
          { label: "Apartment", value: "apartment" },
          { label: "House", value: "house" },
          { label: "Villa", value: "villa" },
        ]}
        key={"Type"}
        defaultValue="hello"
      />
      <Select
        onChange={(value) => handleFilterChange("price", value)}
        options={[
          { label: "Price", value: "" },
          { label: "Under $100k", value: "under-100k" },
          { label: "$100k - $500k", value: "100k-500k" },
          { label: "Above $500k", value: "above-500k" },
        ]}
        key={"Price"}
        defaultValue="hello"
      />
      <Select
        onChange={(value) => handleFilterChange("area", value)}
        options={[
          { label: "Area", value: "" },
          { label: "Under 50 sqm", value: "under-50" },
          { label: "50-100 sqm", value: "50-100" },
          { label: "Above 100 sqm", value: "above-100" },
        ]}
        key={"Area"}
        defaultValue="hello"
      />
      <Select
        onChange={(value) => handleFilterChange("rooms", value)}
        options={[
          { label: "Rooms", value: "" },
          { label: "1 Room", value: "1" },
          { label: "2 Rooms", value: "2" },
          { label: "3+ Rooms", value: "3+" },
        ]}
        key={"Rooms"}
        defaultValue="hello"
      />
      <span className="h-12 w-12 flex justify-center items-center border border-(--color-7) rounded-sm p-3">
        <Image src="/MapIcon.svg" alt="MapIcon" height={24} width={24} />
      </span>
    </div>
  );
};

export default FilterSection;
