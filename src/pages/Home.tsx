import { HeroSection } from '@/sections/HeroSection';
import { AboutPreviewSection } from '@/sections/AboutPreviewSection';
import { BlogPreviewSection } from '@/sections/BlogPreviewSection';
import { ProcessSection } from '@/sections/ProcessSection';
import { CTASection } from '@/sections/CTASection';

export function Home() {
  return (
    <main>
      <HeroSection />
      <AboutPreviewSection />
      <ProcessSection />
      <BlogPreviewSection />
      <CTASection />
    </main>
  );
}
