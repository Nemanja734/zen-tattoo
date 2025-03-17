"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Address, NominatimData } from "@/config/models/geolocation";
import { useDebounce } from "use-debounce";
import SearchLocationResults from "./searchLocationResults";
import InputText from "@/ui/inputText";
import { useOnClickOutside } from "@/lib/useOnClickOutside";

export default function SearchLocation() {
  const [search, setSearch] = useState("");
  const [debouncedSearch] = useDebounce(search, 500);
  const [searchResults, setSearchResults] = useState<Address[] | null>(null);
  const [loading, setLoading] = useState(false);

  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchResultsRef = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(searchResultsRef, () => setShowSearchResults(false));

  // extract addresses from nominatim data
  const extractAddress = (data: NominatimData[]) => {
    return data.map((location: NominatimData) => {
      const addr = location.address;

      console.log(location);

      return {
        country: addr.country,
        county: addr.county,
        city:
          addr.city ||
          addr.town ||
          addr.village ||
          addr.hamlet ||
          addr.locality ||
          "",
        postalCode: addr.postcode || "",
        street:
          (addr.road ||
            addr.pedestrian ||
            addr.footway ||
            addr.path ||
            addr.square ||
            "") + (addr.house_number ? ` ${addr.house_number}` : ""),
      };
    });
  };

  // Search in nominatim
  const searchRequest = useCallback(async () => {
    if (!debouncedSearch.trim()) return;

    const request = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      debouncedSearch
    )}&countrycodes=DE&addressdetails=1&layer=address&format=json`;

    try {
      const response = await fetch(request, {
        headers: { "User-Agent": "ZenTattooApp (contact@zen-tattoo.de)" },
      });

      const data = await response.json();

      // Extract address from nominatim data and save into useState
      setSearchResults(extractAddress(data));
    } catch (error) {
      console.error("Error fetching location data:", error);
    } finally {
      setLoading(false);
    }
  }, [debouncedSearch]);

  useEffect(() => {
    if (debouncedSearch.trim()) {
      searchRequest();
    }
  }, [debouncedSearch]);

  // Handle input change
  const onSearch = (text: string) => {
    setLoading(true);
    setSearch(() => text);

    if (!text) {
      setSearchResults([]);
      setLoading(false);
    }
  };

  return (
    <div className="absolute left-1/2 -translate-x-1/2 lg:translate-0 lg:static lg:mr-auto w-fit md:w-70">
      <div
        ref={searchResultsRef}
        className="relative"
        onClick={() => setShowSearchResults(true)}
      >
        <InputText
          defaultPlaceholder="Suche nach Standort"
          onChange={(value) => onSearch(value)}
          ariaLabel="Standort suchen"
        />
        <SearchLocationResults
          search={search}
          searchResults={searchResults}
          showSearchResults={showSearchResults}
          loading={loading}
        />
      </div>
    </div>
  );
}
