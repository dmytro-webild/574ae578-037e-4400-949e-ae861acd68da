"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function BlogPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="mediumLargeSizeLargeTitles"
        background="floatingGradient"
        cardStyle="glass-depth"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
            <NavbarStyleApple
            navItems={[
                { name: "בית", id: "/" },
                { name: "אודות", id: "/about" },
                { name: "שירותים", id: "/features" },
                { name: "מחירון", id: "/pricing" },
                { name: "צור קשר", id: "/contact" },
                { name: "בלוג", id: "/blog" },
            ]}
            brandName="אורטל הובלות"
            />
        </div>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8">
            <h1 className="text-4xl font-bold mb-4">הבלוג שלנו</h1>
            <p className="text-lg opacity-80">בקרוב יפורסמו כאן טיפים למעבר דירה והמלצות מקצועיות.</p>
        </div>
        <div id="footer" data-section="footer">
            <FooterBaseReveal
            logoText="אורטל הובלות"
            columns={[
                { title: "קישורים", items: [{ label: "בית", href: "/" }] }
            ]}
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}