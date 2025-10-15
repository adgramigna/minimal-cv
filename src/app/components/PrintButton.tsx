"use client";

import React from "react";

/**
 * Client component for the print button
 * Handles the print functionality with onClick handler
 */
export function PrintButton() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      Print / Save as PDF
    </button>
  );
}
