"use client";

import Link from "next/link";
import React from "react";

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5565992984215"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/whatsapp-rounded-button.svg"
        alt="WhatsApp"
        className="fixed bottom-5 right-5 z-50 hidden h-24 w-24 transition-all hover:h-20 hover:w-20 md:block"
      />
    </Link>
  );
}

export default WhatsAppButton;
