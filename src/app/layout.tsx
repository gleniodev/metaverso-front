import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layouts/navbar";
import { Footer } from "@/components/layouts/footer";
import { WhatsAppButton } from "@/components/ui/whatsappButton";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Metaverso",
  description: "Assessoria em investimentos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
