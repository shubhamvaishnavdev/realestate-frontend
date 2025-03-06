import { propertyListingApi } from "@/config/apiRoutes";
import { PropertyResponse } from "@/types/property";
import axios from "axios";
import { create } from "zustand";

// Define types for state
interface PropertyState {
  searchQuery: { lat?: number; lon?: number }; // Location-based search
  filters: {
    transaction_type?: string;
    type?: string;
    price?: number;
    area?: number;
    rooms?: number;
  };
  pagination: { page: number; limit: number };
  properties: PropertyResponse; // Replace with actual property type

  // Actions
  setSearchQuery: (lat: number | undefined, lon: number | undefined) => void;
  setFilters: (filters: Partial<PropertyState["filters"]>) => void;
  setPagination: (pagination: PropertyState["pagination"]) => void;
  fetchProperties: () => Promise<void>;
}

// Create Zustand store
const usePropertyStore = create<PropertyState>((set, get) => ({
  searchQuery: {},
  filters: {},
  pagination: { page: 1, limit: 9 },
  properties: {
    data: [],
    meta: {
      code: 1,
      message: "",
      pagination: { currentPage: 1, totalItems: 0, totalPages: 1 },
    },
  },

  // Set location-based search (lat/lon)
  setSearchQuery: (lat, lon) => {
    set({ searchQuery: { lat, lon } });
    get().fetchProperties(); // Fetch updated results
  },

  // Update filters dynamically
  setFilters: (newFilters) => {
    set((state) => ({ filters: { ...state.filters, ...newFilters } }));
    get().fetchProperties(); // Fetch updated results
  },

  // Update pagination and trigger fetch
  setPagination: (pagination) => {
    set({ pagination });
    get().fetchProperties(); // Fetch updated results
  },

  // Fetch properties from API
  fetchProperties: async () => {
    const { searchQuery, filters, pagination } = get();

    const queryParams = new URLSearchParams();

    // Append location-based search (if available)
    if (searchQuery.lat !== undefined && searchQuery.lon !== undefined) {
      queryParams.append("lat", searchQuery.lat.toString());
      queryParams.append("lon", searchQuery.lon.toString());
    }

    // Append filter keys dynamically
    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        queryParams.append(key, value.toString());
      }
    });

    // Append pagination
    queryParams.append("page", pagination.page.toString());
    queryParams.append("limit", pagination.limit.toString());

    try {
      const res = await axios.get(
        `${propertyListingApi}?${queryParams.toString()}`
      );
      const data = res.data;

      set({ properties: data });
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  },
}));

export default usePropertyStore;
