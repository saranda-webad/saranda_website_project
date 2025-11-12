import NonHeroSections from "@/components/ui/home/NonHeroSections";
import AboutSection from "@/components/ui/home/AboutSection";
import Hero from "@/components/ui/home/Hero";
import FeaturedSection from "@/components/ui/home/FeaturedSection";
import CommunitiesSection from "@/components/ui/home/CommunitiesSection";

export default function Home() {
  return <>
    <Hero />
    <NonHeroSections>
      <AboutSection />
      <FeaturedSection/>
      <CommunitiesSection/>
    </NonHeroSections>
  </>
}
