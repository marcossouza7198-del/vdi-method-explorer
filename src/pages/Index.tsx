import { lazy, Suspense } from "react";
import { HeroSection } from "@/components/HeroSection";

// Lazy load components below the fold for faster initial load
const PainSection = lazy(() => import("@/components/PainSection").then(m => ({ default: m.PainSection })));
const ForWhomSection = lazy(() => import("@/components/ForWhomSection").then(m => ({ default: m.ForWhomSection })));
const MarqueeSection = lazy(() => import("@/components/MarqueeSection").then(m => ({ default: m.MarqueeSection })));
const ModulesSection = lazy(() => import("@/components/ModulesSection").then(m => ({ default: m.ModulesSection })));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const GuaranteeSection = lazy(() => import("@/components/GuaranteeSection").then(m => ({ default: m.GuaranteeSection })));
const CTASection = lazy(() => import("@/components/CTASection").then(m => ({ default: m.CTASection })));
const FAQSection = lazy(() => import("@/components/FAQSection").then(m => ({ default: m.FAQSection })));
const Footer = lazy(() => import("@/components/Footer").then(m => ({ default: m.Footer })));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton").then(m => ({ default: m.WhatsAppButton })));
const PurchaseNotification = lazy(() => import("@/components/PurchaseNotification").then(m => ({ default: m.PurchaseNotification })));

// Minimal loading skeleton
const SectionSkeleton = () => (
  <div className="py-20 px-4 animate-pulse">
    <div className="max-w-4xl mx-auto">
      <div className="h-8 bg-muted rounded w-1/2 mx-auto mb-4" />
      <div className="h-4 bg-muted rounded w-3/4 mx-auto" />
    </div>
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />

      <Suspense fallback={<SectionSkeleton />}>
        <PainSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ForWhomSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <MarqueeSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ModulesSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <GuaranteeSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <CTASection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>

      <Suspense fallback={null}>
        <PurchaseNotification />
      </Suspense>
    </main>
  );
};

export default Index;
