"use client";
import React from "react";
import { useInView } from "@/hooks/use-in-view";

export function Animate({
  children,
  className = "animate-on-scroll",
  delay = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
  as?: React.ElementType;
}) {
  const { ref, inView } = useInView();
  return (
    <Tag ref={ref} className={`${className} ${delay} ${inView ? "in-view" : ""}`}>
      {children}
    </Tag>
  );
}
