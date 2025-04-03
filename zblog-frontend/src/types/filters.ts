export interface FilterState {
    keyword: string;
    tag: string;
    sort: "recent" | "popular" | "mostLiked";
    dateRange: string;
  }
  