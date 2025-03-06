"use client";
import usePropertyStore from "@/lib/store/propertyStore";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface Location {
  display_name: string;
  lat: string;
  lon: string;
}

const SearchBox: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Location[]>([]);
  const { setSearchQuery } = usePropertyStore();

  useEffect(() => {
    if (!query || query.length < 3) {
      setResults([]); // Hide dropdown when input is empty or too short
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/search?format=json&q=${query}`
        );
        setResults(response?.data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    }, 500); // Delay API call by 500ms

    return () => clearTimeout(delayDebounceFn); // Cleanup function to cancel previous calls
  }, [query]);

  // Handle location selection
  const handleSelect = (place: Location) => {
    setSearchQuery(Number(place?.lat), Number(place?.lon));
    setResults([]); // Hide suggestions after selection
  };

  return (
    <div className="relative w-[23.75em] flex p-3 gap-1.5 rounded-sm border border-(--color-7)">
      <Image
        src="/LocationPin.svg"
        alt="Location icon"
        width={24}
        height={24}
      />

      <div className="w-full relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search location..."
          className="border w-full focus:outline-none border-none outline-none"
        />
        <span
          onClick={() => {
            setQuery("")
            setSearchQuery(undefined, undefined);
          }}
          className={`absolute top-0 right-3 cursor-pointer ${
            query.trim() ? "flex" : "hidden"
          }`}
        >
          clear
        </span>

        {/* Dropdown Suggestions */}
        {results.length > 0 && (
          <ul className="absolute w-full bg-white border border-gray-300 shadow-md mt-1 max-h-60 overflow-y-auto z-10">
            {results.map((place, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelect(place)}
              >
                {place.display_name} (Lat: {place.lat}, Lon: {place.lon})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
