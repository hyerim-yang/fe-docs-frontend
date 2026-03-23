"use client";

import { createContext, useContext } from "react";

interface CategoryContextValue {
  activeCategory: string;
}

const CategoryContext = createContext<CategoryContextValue>({ activeCategory: "전체" });

export const CategoryProvider = CategoryContext.Provider;
export const useActiveCategory = () => useContext(CategoryContext);
