import { truncateText } from "@/utils/textTransformation";
import Image from "next/image";
import React from "react";

interface Property {
  property_name: string;
  description?: string;
  property_area: number;
  property_price: number;
  property_images: string[];
  location: {
    type: "Point";
    coordinates: [number, number]; // [Longitude, Latitude]
  };
  property_address: string;
  transaction_type: string;
  type: string;
  rooms: number;
  bathrooms: number;
  views?: number;
  city: string;
  property_id: number; // 6-digit ID
  postal_code: string;
  createdAt?: string; // Timestamp from MongoDB
  updatedAt?: string; // Timestamp from MongoDB
}

// Usage in PropertyCard component
interface PropertyCardProps {
  propertyData: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ propertyData }) => {
  return (
    <div className="w-[22.5em] h-[26.75em]">
      <div className="relative h-[15em] w-[22.5em] rounded-t-lg">
        <Image
          src={propertyData?.property_images[0]}
          alt={propertyData?.property_name || "Property Image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="py-5 px-6 bg-(--color-8) rounded-b-lg">
        <p className="font-bold leading-6 text-start">
          {truncateText(
            "JAHRHUNDERTVILLA MIT AUSBAUPOTENZIAL IN KLOSTERNEUBURG"
          )}
        </p>
        <p className="mb-1.5 mt-3 font-[400] text-xs leading-[18px]">
          {/* ID: 10025 | Haus | 3400 Klosterneuburg */}
          {`ID: ${propertyData?.property_id} | ${propertyData?.type} | ${propertyData?.postal_code} ${propertyData?.city}`}
        </p>
        <p className="font-[400] text-xs leading-[18px]">
          {/* 6 Zimmer | 3 Bad | 215,96 m² | Kaufen */}
          {`${propertyData?.rooms} Rooms | ${propertyData?.bathrooms} Bathrooms | ${propertyData?.property_area} m² | ${propertyData?.transaction_type}`}
        </p>
        <div className="flex justify-between items-end mt-3">
          <p className="leading-[33.6px] text-2xl font-medium">{`${propertyData?.property_price} €`}</p>
          <span className="flex justify-between items-center gap-1.5">
            <p className="font-[400] leading-6 text-(--color-7)">
              {propertyData?.views}
            </p>
            <Image
              src="/EyeIcon.svg"
              alt="Eye icon"
              width={24}
              height={24}
              className="text-(--color-7)"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
