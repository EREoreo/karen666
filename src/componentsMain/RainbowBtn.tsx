import React from "react";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}




export function RainbowButton({ children, className, ...props }) {
  return (
    <button
      className={cn(
        "group relative   border-2-solid rounded-[30px] p-2  duration-200 inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center  border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",
        // "bg-[linear-gradient(to right, #3b82f6, #302e81)]",
        // "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        className // Include the additional className if provided
      )}
      {...props}
    >
      <h2>Записаться на Демо</h2>
    </button>
  );
}