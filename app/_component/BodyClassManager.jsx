"use client";
import { useEffect } from 'react';

export default function BodyClassManager() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.classList.add('vsc-initialized');
    }
  }, []);

  return null;
}
