"use client";
import React, { useEffect } from "react";
import PropertyCard from "./propertyCard";
import Pagination from "../common/pagination";
import usePropertyStore from "@/lib/store/propertyStore";

const PropertyListing = () => {
  const { properties, fetchProperties } = usePropertyStore();

  // Fetch properties on mount
  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div>
      <div className="flex justify-center gap-10 flex-wrap">
        {properties?.data?.length > 0 ? (
          properties?.data?.map((propertyData) => (
            <PropertyCard propertyData={propertyData} key={propertyData._id} />
          ))
        ) : (
          <p>No property found.</p>
        )}
      </div>
      <Pagination />
    </div>
  );
};

export default PropertyListing;
