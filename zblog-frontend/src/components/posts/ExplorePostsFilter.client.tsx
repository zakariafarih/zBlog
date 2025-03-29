"use client"

import React from "react"
import { FilterState } from "./ExplorePostsFilter"
import ExplorePostsFilter from "./ExplorePostsFilter"

interface Props {
  filters: FilterState
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>
}

export default function ExplorePostsFilterClient({ filters, setFilters }: Props) {
  return <ExplorePostsFilter filters={filters} setFilters={setFilters} />
}
