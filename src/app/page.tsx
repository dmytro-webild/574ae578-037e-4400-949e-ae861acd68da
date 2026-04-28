"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, CheckCircle, Shield, Package, Users, Warehouse } from "lucide-react";

export default function LandingPage() {
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
        { name: "בית", id: "hero" },
        { name: "אודות", id: "about" },
        { name: "שירותים", id: "features" },
        { name: "מחירון", id: "pricing" },
        { name: "צור קשר", id: "contact" },
      ]}
      brandName="אורטל הובלות"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "gradient-bars"}}
      title="אורטל הובלות – עוברים בראש שקט"
      description="הובלות דירה, משרדים ופריטים בודדים בפריסה ארצית. שירות מקצועי, ביטוח מלא ועמידה בזמנים."
      buttons={[
        {
          text: "קבל הצעת מחיר",          href: "#contact"},
      ]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-delivery-man-wearing-mask_23-2149035864.jpg", imageAlt: "Truck" },
        { imageSrc: "http://img.b2bpic.net/free-photo/close-up-delivery-man-holding-box_23-2149035877.jpg", imageAlt: "Truck" },
        { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-delivery-people_23-2149103416.jpg", imageAlt: "Truck" },
        { imageSrc: "http://img.b2bpic.net/free-photo/romantic-people-relaxing-together-living-room-floor-talking-about-decorations-future-family-enjoying-relocation-taking-break-after-moving-relationship-achievement-top-view_482257-44774.jpg", imageAlt: "Truck" },
        { imageSrc: "http://img.b2bpic.net/free-photo/young-delivery-man-closing-delivery-truck-doors_23-2148944604.jpg", imageAlt: "Truck" },
        { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-delivery-man-holding-box_23-2149103440.jpg", imageAlt: "Truck" },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={true}
      title="למה לבחור באורטל הובלות?"
      metrics={[
        {
          icon: CheckCircle,
          label: "הובלות שבוצעו",          value: "1500+"},
        {
          icon: Award,
          label: "שנות ניסיון",          value: "10+"},
        {
          icon: Shield,
          label: "ביטוח מלא",          value: "100%"},
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "אריזה בטוחה",          description: "שימוש בחומרי אריזה איכותיים לשמירה על התכולה.",          buttonIcon: Package,
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-adhesive-tape-packing-boxes_329181-19955.jpg"},
        {
          title: "צוות מקצועי",          description: "צוות סבלים מיומן שעובד בזהירות מרבית.",          buttonIcon: Users,
          imageSrc: "http://img.b2bpic.net/free-photo/young-family-moving-into-new-home_23-2149196337.jpg"},
        {
          title: "ביטוח מלא",          description: "התכולה שלכם מבוטחת לכל אורך הדרך.",          buttonIcon: Shield,
          imageSrc: "http://img.b2bpic.net/free-photo/folder-overlay-word-young-people_53876-167130.jpg"},
        {
          title: "שירותי אחסנה",          description: "מחסנים מאובטחים לכל טווח זמן שתצטרכו.",          buttonIcon: Warehouse,
          imageSrc: "http://img.b2bpic.net/free-photo/business-owner-manager-scanning-boxes-barcode-using-store-scanner-listening-music-warehouse-inventory-employee-looking-storehouse-shelves-preparing-customers-orders-delivery_482257-73207.jpg"},
      ]}
      title="השירותים שלנו"
      description="פתרונות לוגיסטיים מותאמים אישית לכל לקוח."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "1",          name: "קרטון גדול",          price: "10 ₪",          imageSrc: "http://img.b2bpic.net/free-photo/woman-handling-belongings-cardboard-boxes-moving-new-house_23-2149086799.jpg"},
        {
          id: "2",          name: "פצפצים",          price: "25 ₪",          imageSrc: "http://img.b2bpic.net/free-photo/side-view-unrecognizable-postwoman-red-cap-holding-parcels-cropped-female-courier-with-walking-street-delivering-express-order-cardboard-boxes-delivery-service-post-concept_74855-12010.jpg"},
        {
          id: "3",          name: "סרט הדבקה",          price: "5 ₪",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-male-hands-sealing-cardboard-box-using-adhesive-tape-getting-ready-move-out_482257-135008.jpg"},
        {
          id: "4",          name: "כיסוי מזרן",          price: "30 ₪",          imageSrc: "http://img.b2bpic.net/free-photo/black-man-moving-furniture_53876-20674.jpg"},
        {
          id: "5",          name: "שמיכת הובלה",          price: "40 ₪",          imageSrc: "http://img.b2bpic.net/free-photo/couple-moving-into-new-house_53876-48891.jpg"},
        {
          id: "6",          name: "נייר עטיפה",          price: "15 ₪",          imageSrc: "http://img.b2bpic.net/free-photo/stationery-frame-parcel-delivery-concept_53876-128926.jpg"},
      ]}
      title="ציוד אריזה למכירה"
      description="הכל כדי שהמעבר יעבור חלק."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",          price: "800 ₪",          name: "הובלה קטנה",          features: ["פריטים בודדים", "רכב קטן", "צוות סבלים"],
          buttons: [{ text: "לבחירה", href: "#contact" }],
        },
        {
          id: "std",          price: "1500 ₪",          name: "הובלת דירה",          features: ["דירת 2 חדרים", "אריזה מראש", "ביטוח מלא"],
          buttons: [{ text: "לבחירה", href: "#contact" }],
        },
        {
          id: "pro",          price: "2500 ₪",          name: "הובלת פרימיום",          features: ["דירת 4 חדרים", "אריזה מלאה", "פירוק והרכבה"],
          buttons: [{ text: "לבחירה", href: "#contact" }],
        },
      ]}
      title="מחירון הובלות"
      description="מחירים הוגנים ושקופים."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="שירות מעולה, עמדו בזמנים ושמרו על הרהיטים שלי בצורה מדהימה!"
      rating={5}
      author="ישראל כהן"
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/young-man-standing-near-girlfriend-with-notebook_23-2147894739.jpg", alt: "User 1" },
        { src: "http://img.b2bpic.net/free-photo/storehouse-employees-preparing-customers-packages-putting-order-cardboard-box-wrapped-with-bubble-wrap-while-discussing-shipping-detalies-diverse-team-working-delivery-department-warehouse_482257-66361.jpg", alt: "User 2" },
        { src: "http://img.b2bpic.net/free-photo/happy-young-latin-woman-unpacking-things-her-new-apartment-opening-carton-box_74855-10209.jpg", alt: "User 3" },
        { src: "http://img.b2bpic.net/free-photo/person-presenting-their-job-resignation_23-2149445151.jpg", alt: "User 4" },
        { src: "http://img.b2bpic.net/free-photo/woman-carrying-box-with-items-new-apartment_329181-129.jpg", alt: "User 5" },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        { id: "1", title: "האם אתם מציעים ביטוח?", content: "כן, כל התכולה מבוטחת בזמן המעבר." },
        { id: "2", title: "כמה זמן מראש צריך להזמין?", content: "מומלץ להזמין לפחות שבועיים מראש." },
        { id: "3", title: "האם אתם עושים פירוק רהיטים?", content: "כן, יש לנו שירות פירוק והרכבה לכל סוגי הרהיטים." },
      ]}
      sideTitle="שאלות נפוצות"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={true}
      background={{
        variant: "gradient-bars"}}
      tag="צור קשר"
      title="מוכנים למעבר? דברו איתנו"
      description="השאירו פרטים ונחזור אליכם בהקדם להצעת מחיר משתלמת."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoText="אורטל הובלות"
      columns={[
        {
          title: "קישורים",          items: [
            { label: "בית", href: "#hero" },
            { label: "אודות", href: "#about" },
          ],
        },
        {
          title: "שירותים",          items: [
            { label: "הובלות", href: "#features" },
            { label: "אריזה", href: "#features" },
          ],
        },
        {
          title: "יצירת קשר",          items: [
            { label: "טלפון: 050-1234567", href: "tel:0501234567" },
          ],
        },
      ]}
      copyrightText="© 2024 אורטל הובלות. כל הזכויות שמורות."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
