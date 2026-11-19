import type { Metadata, Viewport } from "next";
import "@fontsource/yeseva-one/400.css";
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phulkari — Punjabi Kitchen, DHA Lahore",
  description:
    "Karahi in desi ghee, a charcoal grill and family-style dawat platters in DHA Phase 5, Lahore. See the menu and book a table on WhatsApp.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Phulkari — Punjabi Kitchen, DHA Lahore",
    description: "Karahi, charcoal grill and family dawat platters. Book on WhatsApp.",
    images: ["https://images.unsplash.com/photo-1606471191009-63994c53433b?auto=format&fit=crop&w=1200&q=75"],
  },
};

export const viewport: Viewport = {
  themeColor: "#5b1a1f",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
