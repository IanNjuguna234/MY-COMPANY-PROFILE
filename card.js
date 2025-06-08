import React from "react";

export function Card({ children }) {
  return <div className="bg-white shadow-md rounded-2xl">{children}</div>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
