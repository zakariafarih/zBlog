"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import clsx from "clsx";

interface CyberpunkSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CyberpunkSelect({ value, onChange }: CyberpunkSelectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="w-full h-full"
    >
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          className={clsx(
            "w-full h-full px-3 py-1.5 text-sm bg-transparent text-slate-200",
            "border-none focus:outline-none focus:ring-0 uppercase tracking-wide",
            "neon-glow"
          )}
        >
          <SelectValue placeholder="Sort..." />
        </SelectTrigger>
        <SelectContent
          className={clsx(
            "bg-slate-900 border border-slate-700 text-slate-300 rounded-none",
            "neon-glow"
          )}
        >
          <SelectItem value="recent">Newest First</SelectItem>
          <SelectItem value="popular">Most Popular</SelectItem>
          <SelectItem value="mostLiked">Most Liked</SelectItem>
        </SelectContent>
      </Select>
    </motion.div>
  );
}
