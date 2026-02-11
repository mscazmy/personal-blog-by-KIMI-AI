import { Link } from '@/router';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#124e9d] to-[#0d3a73] rounded-3xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px',
                }}
              />
            </div>

            {/* Decorative Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#f1bf45]/10 rounded-full blur-2xl" />

            <div className="relative grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="p-8 md:p-12 lg:p-16">
                <h2
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }`}
                  style={{
                    transitionTimingFunction: 'var(--ease-expo-out)',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  {personalInfo.cta.headline}
                </h2>
                <p
                  className={`text-white/80 text-lg leading-relaxed mb-8 max-w-lg transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }`}
                  style={{
                    transitionTimingFunction: 'var(--ease-expo-out)',
                    transitionDelay: '100ms',
                  }}
                >
                  {personalInfo.cta.description}
                </p>
                <div
                  className={`transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }`}
                  style={{
                    transitionTimingFunction: 'var(--ease-expo-out)',
                    transitionDelay: '200ms',
                  }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#f1bf45] text-black font-semibold rounded-lg transition-all duration-300 hover:bg-[#e5b13d] hover:scale-105 group"
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      boxShadow: '0 4px 20px rgba(241, 191, 69, 0.3)',
                    }}
                  >
                    {personalInfo.cta.buttonText}
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div
                className={`hidden lg:block relative h-full min-h-[400px] transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                }`}
                style={{
                  transitionTimingFunction: 'var(--ease-expo-out)',
                  transitionDelay: '300ms',
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
                  }}
                >
                  <img
                    src="/images/profile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#124e9d]/50 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
