"use client";
import { useEffect, useRef } from "react";

const registry = new Set<string>();

export function useRunOnce(key: string, fn: () => void) {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    if (registry.has(key)) return;
    registry.add(key);

    fn();
  }, [key, fn]);
}
