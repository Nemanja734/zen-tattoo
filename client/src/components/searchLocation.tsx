"use client";

import Icon from "@/ui/icon";
import { inputStyle } from "@/config/styles";
import clsx from "clsx";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { debounce } from "lodash";
import Text from "@/ui/text";
import { useClickOutside } from "@/lib/useClickOutside";

interface Address {
  country?: string;
  county?: string;
  city?: string;
  postalCode?: string;
  street?: string;
}

export default function SearchLocation() {
  const defaultPlaceholder = "Suche nach Standort";
  const [placeholder, setPlaceholder] = useState(defaultPlaceholder);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Address[] | null>();
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLInputElement | null>(null);

  // Hide search results when clicking outside
  useClickOutside(ref, () => setShowSearchResults(false));

  // extract addresses from nominatim data
  const extractAddress = (data: any) => {
    return data.map((location: any) => {
      const addr = location.address;

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
  const searchRequest = useCallback(async (search: string) => {
    if (!search.trim()) return;

    const request = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
      search
    )}&countrycodes=DE&addressdetails=1&layer=address&format=json`;

    try {
      const response = await fetch(request, {
        headers: { "User-Agent": "ZenTattooApp (contact@zen-tattoo.de)" },
      });
      const data = await response.json();

      setSearchResults(extractAddress(data));
    } catch (error) {
      console.error("Error fetching location data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Memoize the debounce function
  const debouncedSearchRequest = useMemo(() => {
    return debounce(searchRequest, 800);
  }, [searchRequest]);

  // Handle input change
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setLoading(true);
    setSearch(value);

    if (!value) {
      setSearchResults([]);
      setLoading(false);
      return;
    }

    debouncedSearchRequest(value);
  };

  // Cleanup debounce on unmount
  useEffect(() => {
    return () => {
      debouncedSearchRequest.cancel();
    };
  }, [debouncedSearchRequest]);

  return (
    <div
      className="absolute left-1/2 -translate-x-1/2 lg:translate-0 lg:static lg:mr-auto w-fit md:w-70"
      ref={ref}
      onClick={() => setShowSearchResults(true)}
    >
      <div className="relative">
        <Icon
          name="search"
          size="base"
          className="absolute left-1.5 sm:left-2.5 md:left-3 top-1/2 -translate-y-1/2 pointer-events-none"
        />
        <input
          type="text"
          placeholder={placeholder}
          className={clsx(inputStyle, "pl-7 sm:pl-10 md:pl-12 text-sm")}
          onFocus={() => setPlaceholder("")}
          onBlur={() => setPlaceholder(defaultPlaceholder)}
          onChange={(e) => onSearch(e)}
          aria-label="Standort suchen"
        />
        {showSearchResults && (
          <div className="absolute w-full bg-background">
            {searchResults &&
              searchResults.map((location, index) => (
                <div
                  key={index}
                  className="flex items-center cursor-pointer hover:bg-tint"
                >
                  <Icon name="location" size="base" className="ml-2" />
                  {location.street && (
                    <div className="p-2">
                      <Text level="sm bold">{location.street}</Text>
                      <Text level="sm">
                        {location.city}, {location.country}
                      </Text>
                    </div>
                  )}
                  {!location.street && location.city && (
                    <div className="p-2">
                      <Text level="sm bold">{location.city}</Text>
                      <Text level="sm">
                        {location.postalCode
                          ? location.postalCode
                          : location.county}
                        {location.postalCode || location.county ? ", " : ""}
                        {location.country}
                      </Text>
                    </div>
                  )}
                  {!location.street && !location.city && (
                    <div className="p-2">
                      <Text level="sm bold">{location.county}</Text>
                      <Text level="sm">{location.country}</Text>
                    </div>
                  )}
                </div>
              ))}

            {searchResults?.length == 0 && search && !loading && (
              <div className="p-2 text-center">
                <Text level="sm">Keine Ergebnisse gefunden</Text>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
