"use client";

import React, { useState } from "react";
import Lottie from "lottie-react";
import searchLottie from "@/assets/animations/searchLottie.json";
import CyberpunkSelect from "@/components/ui/CyberpunkSelect";
import { FilterState } from "@/types/filters";

interface ExplorePostsFilterProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

const ExplorePostsFilter: React.FC<ExplorePostsFilterProps> = ({ filters, setFilters }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const updateLocalFilter = (field: keyof FilterState, value: string) => {
    setLocalFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleSearch = () => {
    setFilters(localFilters);
  };

  return (
    <div className="mb-6 px-4 md:px-0 font-mono">
      <div className="grid md:grid-cols-[1fr_1fr_1fr_auto] border border-slate-700 divide-x divide-slate-700 overflow-hidden shadow-md">
        {/* Keyword */}
        <div className="bg-slate-900 p-2 flex items-center">
          <input
            type="text"
            placeholder="Search posts..."
            value={localFilters.keyword}
            onChange={(e) => updateLocalFilter("keyword", e.target.value)}
            className="w-full bg-transparent text-slate-200 text-sm border-none px-1 py-1.5 placeholder-slate-500 focus:outline-none focus:ring-0"
          />
        </div>

        {/* Tag */}
        <div className="bg-slate-900 p-2 flex items-center">
          <input
            type="text"
            placeholder="Filter by tag..."
            value={localFilters.tag}
            onChange={(e) => updateLocalFilter("tag", e.target.value)}
            className="w-full bg-transparent text-slate-200 text-sm border-none px-1 py-1.5 placeholder-slate-500 focus:outline-none focus:ring-0"
          />
        </div>

        {/* Sort */}
        <div className="bg-slate-900 p-2 flex items-center">
          <CyberpunkSelect
            value={localFilters.sort}
            onChange={(val) => updateLocalFilter("sort", val)}
          />
        </div>

        {/* Search Button */}
        <div className="bg-slate-900 p-2 flex items-center justify-center hover:bg-slate-800 transition-colors">
          <button
            onClick={handleSearch}
            className="w-full h-full flex items-center justify-center hover:scale-105 transition-transform duration-150"
          >
            <Lottie animationData={searchLottie} loop style={{ width: 36, height: 36 }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExplorePostsFilter;
