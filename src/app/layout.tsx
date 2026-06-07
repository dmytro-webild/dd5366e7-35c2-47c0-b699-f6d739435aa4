import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Mulish } from "next/font/google";



export const metadata: Metadata = {
  title: 'Artisan Canvas - Discover & Buy Original Paintings',
  description: 'Explore a curated collection of original hand-painted artworks from talented artists. Find unique pieces for your home or office at Artisan Canvas.',
  keywords: ["art, paintings, original art, buy art, art gallery, contemporary art, fine art, artist, canvas, artwork"],
  openGraph: {
    "title": "Artisan Canvas - Discover & Buy Original Paintings",
    "description": "Explore a curated collection of original hand-painted artworks from talented artists. Find unique pieces for your home or office at Artisan Canvas.",
    "url": "https://www.artisancanvas.com",
    "siteName": "Artisan Canvas",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/multicolored-paint-brush-strokes-surface_23-2148815523.jpg",
        "alt": "Vibrant abstract oil painting"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Artisan Canvas - Discover & Buy Original Paintings",
    "description": "Explore a curated collection of original hand-painted artworks from talented artists. Find unique pieces for your home or office at Artisan Canvas.",
    "images": [
      "http://img.b2bpic.net/free-photo/multicolored-paint-brush-strokes-surface_23-2148815523.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${mulish.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
