import type { Metadata } from "next";
import StructuredData from "@/components/StructuredData";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL('https://www.radityacollection.web.id'),
  title: {
    default: "Raditya Collection: Jasa Lubang & Pasang Kancing di Singaraja",
    template: "%s | Raditya Collection",
  },
  description: "Spesialis jasa lubang kancing dan pasang kancing profesional di Singaraja. Hasil presisi standar garmen, harga bersahabat, kualitas hebat.",
  
  verification: {
    google: "KODE_VERIFIKASI_GOOGLE_CONSOLE_ANDA", // Nanti diisi setelah daftar GSC
  },

  openGraph: {
    title: "Raditya Collection - Spesialis Lubang Kancing",
    description: "Jasa lubang & pasang kancing presisi di Singaraja. Hubungi kami!",
    url: 'https://www.radityacollection.web.id',
    siteName: 'Raditya Collection',
    locale: 'id_ID',
    type: 'website',
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
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
