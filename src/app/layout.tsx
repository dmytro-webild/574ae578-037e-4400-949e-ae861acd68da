import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";



export const metadata: Metadata = {
  title: 'אורטל הובלות | הובלות מקצועיות במחירים הוגנים',
  description: 'אורטל הובלות מספקת שירותי הובלת דירה, משרדים וציוד עם ביטוח מלא ומקצועיות ללא פשרות. צרו קשר לקבלת הצעת מחיר חינם.',
  openGraph: {
    "title": "אורטל הובלות",
    "description": "הובלות מקצועיות בפריסה ארצית",
    "type": "website",
    "siteName": "אורטל הובלות"
  },
};

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} antialiased`}>
          
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
