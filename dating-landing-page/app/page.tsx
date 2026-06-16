import { TopBar } from "@/components/top-bar"
import { HeroSection } from "@/components/hero-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ProfilesSection } from "@/components/profiles-section"
import { ReviewsSection } from "@/components/reviews-section"
import { SafetySection } from "@/components/safety-section"
import { CtaSection } from "@/components/cta-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <TopBar />
      <HeroSection />
      <HowItWorksSection />
      <ProfilesSection />
      <ReviewsSection />
      <SafetySection />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
