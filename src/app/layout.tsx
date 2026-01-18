import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://radityacollection.web.id"),
  title: {
    default: "Raditya Collection: Jasa Lubang & Pasang Kancing di Singaraja",
    template: "%s | Raditya Collection",
  },
  description:
    "Spesialis jasa lubang kancing dan pasang kancing profesional di Singaraja. Hasil presisi standar garmen, harga bersahabat, kualitas hebat.",

  verification: {
    google: "yIB0-2wEbuolYW67FZtWgr7L5xVUd-YzbOvzwLI5WVs",
  },

  keywords: [
    "Jasa Lubang Kancing",
    "Pasang Kancing",
    "Wastra",
    "Overdeck",
    "Neci",
    "Benang Jahit",
    "Alat-alat Jahit",
    "Raditya Collection",
  ],

  openGraph: {
    title: "Raditya Collection: Spesialis Lubang Kancing dan Pasang Kancing",
    description:
      "Jasa lubang & pasang kancing presisi di Singaraja. Hubungi kami!",
    url: "https://radityacollection.web.id",
    siteName: "Raditya Collection",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="overflow-x-hidden w-full relative min-h-screen">
          <StructuredData />
          {children}
        </div>
      </body>
    </html>
  );
}
