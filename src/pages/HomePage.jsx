import HeroSection from "../layout/HeroSection";
import HeroSectionWithPhoto from "../layout/HeroSectionWithPhoto";
import NewsSection from "../layout/NewsSection";

export default function HomePage() {
  return (
    <div>
      <HeroSectionWithPhoto />
      <NewsSection />
    </div>
  );
}