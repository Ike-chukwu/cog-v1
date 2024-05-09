import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize
  return items.slice(startIndex, startIndex + pageSize)
}

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
