"use client";

import Link from "next/link";
import React from "react";

export function TelegramButton() {
  return (
    <Link
      href="https://t.me/metaversoassessoria"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="/telegram-button.svg"
        alt="Telegram"
        className="fixed bottom-5 right-5 z-50 hidden h-16 w-16 transition-all hover:h-14 hover:w-14 md:block"
      />
    </Link>
  );
}

export default TelegramButton;
