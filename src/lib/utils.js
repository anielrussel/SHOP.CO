import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Calculate previous price
export const calculatePreviousPrice = (currentPrice, discountPercentage) => {
  const discountRate = discountPercentage / 100; // Convert percentage to a decimal
  const previousPrice = currentPrice / (1 - discountRate);
  return previousPrice.toFixed(2); // Return the previous price rounded to 2 decimal places
};
