import { Link } from '@/router';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function AboutPreviewSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

  return (
    <section
      id="about-preview"
      ref={ref}
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      {/* Diagonal Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent -skew-x-12 origin-top-right" />

      <div className="section-container relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div
              className={`relative transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/profile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-auto object-cover aspect-[4/5]"
                  />
                </div>

                {/* Decorative Frame */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#124e9d] rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#f1bf45] rounded-lg -z-10" />
              </div>
            </div>

            {/* Content */}
            <div>
              {/* Section Label */}
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
                <span
                  className="inline-block text-sm font-semibold text-[#124e9d] tracking-wider uppercase mb-4"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  About Me
                </span>
              </div>

              {/* Headline */}
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
                style={{
                  transitionTimingFunction: 'var(--ease-expo-out)',
                  transitionDelay: '300ms',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Transforming Data Into
                <span className="text-[#124e9d]"> Impactful Stories</span>
              </h2>

              {/* Bio Paragraphs */}
              {personalInfo.about.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-gray-600 leading-relaxed mb-4 transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }`}
                  style={{
                    transitionTimingFunction: 'var(--ease-expo-out)',
                    transitionDelay: `${400 + index * 100}ms`,
                  }}
                >
                  {paragraph}
                </p>
              ))}

              {/* CTA Button */}
              <div
                className={`mt-8 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
                style={{
                  transitionTimingFunction: 'var(--ease-expo-out)',
                  transitionDelay: '600ms',
                }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-[#124e9d] font-semibold hover:gap-3 transition-all duration-300"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Learn More About Me
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Stats */}
              <div
                className={`mt-12 grid grid-cols-3 gap-6 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
                style={{
                  transitionTimingFunction: 'var(--ease-expo-out)',
                  transitionDelay: '700ms',
                }}
              >
                {personalInfo.about.stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div
                      className="stat-number text-3xl md:text-4xl"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
