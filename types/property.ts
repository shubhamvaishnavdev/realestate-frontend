export interface Property {
    _id: string;
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
    transaction_type: "buy" | "rent";
    type: "apartment" | "house" | "villa";
    rooms: number;
    bathrooms: number;
    views?: number;
    city: string;
    property_id: number;
    postal_code: string;
    createdAt?: string;
    updatedAt?: string;
  }
  
  export interface Pagination {
    currentPage: number;
    totalItems: number;
    totalPages: number;
  }
  
  export interface Meta {
    code: number;
    message: string;
    pagination: Pagination;
  }
  
  export interface PropertyResponse {
    data: Property[];
    meta: Meta;
  }
  