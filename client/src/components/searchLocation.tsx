"use client";

import { useRef, useState } from "react";
import SearchLocationResults from "./searchLocationResults";
import InputText from "@/ui/inputText";
import { useOnClickOutside } from "@/lib/useOnClickOutside";
import { useNominatimSearch } from "@/lib/useNominatimSearch";

export default function SearchLocation() {
  const {search, debouncedSearch, setSearch, searchResults, loading} = useNominatimSearch();
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchResultsRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(searchResultsRef, () => setShowSearchResults(false));

  return (
    <div className="absolute left-1/2 -translate-x-1/2 lg:translate-0 lg:static lg:mr-auto w-fit md:w-70">
      <div
        ref={searchResultsRef}
        className="relative"
        onClick={() => setShowSearchResults(true)}
      >
        <InputText
          defaultPlaceholder="Suche nach Standort"
          onChange={(value) => setSearch(value)}
          ariaLabel="Standort suchen"
        />
        <SearchLocationResults
        search={search}
          debouncedSearch={debouncedSearch}
          searchResults={searchResults}
          showSearchResults={showSearchResults}
          loading={loading}
        />
      </div>
    </div>
  );
}
