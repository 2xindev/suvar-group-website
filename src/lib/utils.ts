import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// This helper lets us combine Tailwind classes conditionally without conflicts
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}