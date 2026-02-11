import { personalInfo } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Search, BarChart3, Palette, BookOpen } from 'lucide-react';

const processIcons = [Search, BarChart3, Palette, BookOpen];

export function ProcessSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#124e9d]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#f1bf45]/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              className={`inline-block text-sm font-semibold text-[#124e9d] tracking-wider uppercase mb-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
              style={{
                transitionTimingFunction: 'var(--ease-expo-out)',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              My Approach
            </span>
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
              style={{
                transitionTimingFunction: 'var(--ease-expo-out)',
                transitionDelay: '100ms',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              {personalInfo.process.headline}
            </h2>
            <p
              className={`text-gray-600 text-lg transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
              style={{
                transitionTimingFunction: 'var(--ease-expo-out)',
                transitionDelay: '200ms',
              }}
            >
              {personalInfo.process.subheadline}
            </p>
          </div>

          {/* Process Steps */}
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#124e9d]/20 via-[#f1bf45]/30 to-[#124e9d]/20 -translate-y-1/2" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {personalInfo.process.steps.map((step, index) => {
                const Icon = processIcons[index];
                return (
                  <div
                    key={index}
                    className={`relative transition-all duration-700 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{
                      transitionTimingFunction: 'var(--ease-expo-out)',
                      transitionDelay: `${300 + index * 150}ms`,
                    }}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#124e9d]/20 transition-all duration-300 h-full">
                      {/* Step Number */}
                      <div className="absolute -top-4 -left-2 text-6xl font-bold text-[#124e9d]/10">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#124e9d] to-[#1a6bc7] flex items-center justify-center mb-6 shadow-lg shadow-[#124e9d]/20">
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Content */}
                      <h3
                        className="text-xl font-bold text-gray-900 mb-3"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow (Desktop, except last) */}
                    {index < personalInfo.process.steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 bg-white rounded-full shadow-md border border-gray-100 z-10 -translate-y-1/2">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-[#124e9d] rounded-full" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
