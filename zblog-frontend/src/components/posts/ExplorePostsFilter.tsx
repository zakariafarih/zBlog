"use client"

import React from "react"
import { Search, X } from "lucide-react"
import clsx from "clsx"
import Select from "react-select"

export interface FilterState {
  keyword: string
  tag: string
  dateRange: string
  sort: string
}

interface ExplorePostsFilterProps {
  filters: FilterState
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>
}

const TAG_OPTIONS = [
  "Coding", "TypeScript", "Microservices", "Design", "Cloud",
  "AI", "VS Code", "Python", "Data Science"
].map((tag) => ({ label: tag, value: tag }))

const DATE_OPTIONS = [
  { label: "Today", value: "today" },
  { label: "Last 7 days", value: "7d" },
  { label: "This month", value: "month" },
  { label: "All", value: "all" },
]

export default function ExplorePostsFilter({
  filters,
  setFilters,
}: ExplorePostsFilterProps) {
  const handleChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="space-y-4 mb-8 relative z-50">
      {/* Top Filters Row */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search and Sort */}
        <div className="flex flex-1 gap-3">
          {/* Search Input */}
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              value={filters.keyword}
              onChange={(e) => handleChange("keyword", e.target.value)}
              placeholder="Search posts"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Sort Dropdown */}
          <select
            value={filters.sort}
            onChange={(e) => handleChange("sort", e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded-lg py-2 px-3 text-sm text-white"
          >
            <option value="recent">All time</option>
            <option value="popular">Most Liked</option>
            <option value="comments">Most Commented</option>
          </select>
        </div>

        {/* Date Range + Tags */}
        <div className="flex flex-wrap gap-3 items-center">
          {/* Date Buttons */}
          {DATE_OPTIONS.map((option) => (
            <button
              key={option.value}
              onClick={() => handleChange("dateRange", option.value)}
              className={clsx(
                "px-4 py-1.5 rounded-lg text-sm font-medium border",
                filters.dateRange === option.value
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700"
              )}
            >
              {option.label}
            </button>
          ))}

          {/* Tag Select */}
          <div className="w-64 relative z-50">
          <Select
            options={TAG_OPTIONS}
            isMulti
            placeholder="Tags"
            classNamePrefix="react-select"
            onChange={(selected) => {
                const value = selected.map((opt) => opt.value).join(",")
                handleChange("tag", value)
            }}
            value={TAG_OPTIONS.filter((opt) => filters.tag.split(",").includes(opt.value))}
            styles={{
                control: (base) => ({
                ...base,
                backgroundColor: "#1e293b",
                borderColor: "#334155",
                color: "white",
                minHeight: "38px",
                }),
                menu: (base) => ({
                ...base,
                backgroundColor: "#1e293b",
                zIndex: 9999,
                }),
                option: (base, state) => ({
                ...base,
                backgroundColor: state.isFocused
                    ? "#2563eb" 
                    : "#1e293b", 
                color: state.isFocused ? "white" : "#e2e8f0", 
                cursor: "pointer",
                }),
                multiValue: (base) => ({ ...base, backgroundColor: "#2563eb" }),
                multiValueLabel: (base) => ({ ...base, color: "white" }),
                input: (base) => ({ ...base, color: "white" }),
            }}
            />
          </div>
        </div>
      </div>

      {/* Tag Pills below search */}
      {filters.tag && filters.tag.split(",").length > 0 && (
        <div className="flex flex-wrap gap-2 pl-1">
          {filters.tag.split(",").map((t) => (
            <div
              key={t}
              className="flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium"
            >
              {t}
              <button
                onClick={() => {
                  const remaining = filters.tag
                    .split(",")
                    .filter((tag) => tag !== t)
                    .join(",")
                  handleChange("tag", remaining)
                }}
                className="ml-2 hover:text-slate-300"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
