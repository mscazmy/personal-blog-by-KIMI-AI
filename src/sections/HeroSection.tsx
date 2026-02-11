import { useEffect, useState } from 'react';
import { Link } from '@/router';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { personalInfo } from '@/data/content';

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50/30">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Shape 1 */}
        <div
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-[#124e9d]/5 blur-3xl"
          style={{
            animation: 'float 8s ease-in-out infinite',
          }}
        />
        {/* Floating Shape 2 */}
        <div
          className="absolute bottom-40 right-[30%] w-48 h-48 rounded-full bg-[#f1bf45]/10 blur-2xl"
          style={{
            animation: 'float 10s ease-in-out infinite reverse',
          }}
        />
        {/* Floating Shape 3 */}
        <div
          className="absolute top-1/3 left-[5%] w-32 h-32 rounded-full bg-[#124e9d]/5 blur-2xl"
          style={{
            animation: 'float 6s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
      </div>

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-10rem)]">
            {/* Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              {/* Headline */}
              <div
                className={`transition-all duration-700 ${
                  isLoaded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
              >
                <span
                  className="inline-block text-sm md:text-base font-semibold text-[#124e9d] tracking-wider uppercase mb-4"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Welcome to my portfolio
                </span>
              </div>

              <h1
                className={`transition-all duration-700 delay-100 ${
                  isLoaded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionTimingFunction: 'var(--ease-expo-out)',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                <span className="block text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                  {personalInfo.hero.headline}
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl font-bold text-[#124e9d]">
                  {personalInfo.hero.subheadline}
                </span>
              </h1>

              {/* Description */}
              <p
                className={`mt-6 text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed transition-all duration-700 delay-200 ${
                  isLoaded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
              >
                {personalInfo.hero.description}
              </p>

              {/* CTA Buttons */}
              <div
                className={`mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 transition-all duration-700 delay-300 ${
                  isLoaded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
              >
                <Link
                  to="/about"
                  className="btn-primary group"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {personalInfo.hero.ctaPrimary}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/blog"
                  className="btn-secondary"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {personalInfo.hero.ctaSecondary}
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div
              className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 delay-200 ${
                isLoaded
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              <div className="relative">
                {/* Image Frame */}
                <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/profile.jpg"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#124e9d]/10 to-transparent" />
                </div>

                {/* Decorative Elements */}
                <div
                  className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#f1bf45] rounded-lg -z-10"
                  style={{
                    animation: 'float 6s ease-in-out infinite',
                  }}
                />
                <div
                  className="absolute -top-4 -right-4 w-16 h-16 border-4 border-[#124e9d] rounded-lg -z-10"
                  style={{
                    animation: 'float 8s ease-in-out infinite reverse',
                  }}
                />

                {/* Floating Badge */}
                <div
                  className={`absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 bg-white rounded-xl shadow-xl px-6 py-4 transition-all duration-700 delay-500 ${
                    isLoaded
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionTimingFunction: 'var(--ease-spring)' }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#124e9d]/10 flex items-center justify-center">
                      <span className="text-[#124e9d] font-bold text-sm">PhD</span>
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold text-gray-900"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        Public Health
                      </p>
                      <p className="text-xs text-gray-500">Researcher</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <a
          href="#about-preview"
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-[#124e9d] transition-colors"
        >
          <span className="text-xs font-medium uppercase tracking-wider">
            Scroll
          </span>
          <ChevronDown
            className="w-5 h-5"
            style={{ animation: 'float 1.5s ease-in-out infinite' }}
          />
        </a>
      </div>
    </section>
  );
}

  );
}
