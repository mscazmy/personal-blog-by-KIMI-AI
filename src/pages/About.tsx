import { personalInfo } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, MapPin, Mail, Globe, Award, BookOpen, Users, TrendingUp } from 'lucide-react';

const expertiseAreas = [
  {
    icon: TrendingUp,
    title: 'Epidemiology',
    description: 'Advanced statistical analysis and disease pattern research',
  },
  {
    icon: BookOpen,
    title: 'Health Policy',
    description: 'Evidence-based policy analysis and recommendations',
  },
  {
    icon: Users,
    title: 'Data Visualization',
    description: 'Transforming complex data into accessible visuals',
  },
  {
    icon: Award,
    title: 'Storytelling',
    description: 'Compelling narratives that drive public health action',
  },
];

const education = [
  {
    degree: 'PhD in Public Health',
    institution: 'University of Public Health Sciences',
    year: '2018',
    description: 'Specialized in epidemiology and health data analysis',
  },
  {
    degree: 'Master of Public Health',
    institution: 'Global Health Institute',
    year: '2014',
    description: 'Focus on health policy and community health',
  },
  {
    degree: 'Bachelor of Science',
    institution: 'State University',
    year: '2012',
    description: 'Biology with minor in Statistics',
  },
];

const experience = [
  {
    role: 'Senior Researcher',
    organization: 'International Health Research Center',
    period: '2020 - Present',
    description: 'Leading research projects on health disparities and data storytelling initiatives.',
  },
  {
    role: 'Public Health Analyst',
    organization: 'Global Health Initiative',
    period: '2018 - 2020',
    description: 'Conducted epidemiological studies and policy analysis across three continents.',
  },
  {
    role: 'Research Associate',
    organization: 'University Research Lab',
    period: '2014 - 2018',
    description: 'Assisted in large-scale public health studies and data collection projects.',
  },
];

export function About() {
  const heroRef = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const expertiseRef = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const educationRef = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const experienceRef = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef.ref}
        className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50/30"
      >
        <div className="section-container">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div
                className={`relative transition-all duration-1000 ${
                  heroRef.isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
              >
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/images/profile.jpg"
                      alt={personalInfo.name}
                      className="w-full h-auto object-cover aspect-[4/5]"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#124e9d] rounded-2xl -z-10" />
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#f1bf45] rounded-lg -z-10" />
                </div>
              </div>

              {/* Content */}
              <div>
                <span
                  className={`inline-block text-sm font-semibold text-[#124e9d] tracking-wider uppercase mb-4 transition-all duration-700 ${
                    heroRef.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }`}
                  style={{
                    transitionTimingFunction: 'var(--ease-expo-out)',
                    transitionDelay: '200ms',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  About Me
                </span>

                <h1
                  className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-700 ${
                    heroRef.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }`}
                  style={{
                    transitionTimingFunction: 'var(--ease-expo-out)',
                    transitionDelay: '300ms',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  {personalInfo.name}
                </h1>

                <p
                  className={`text-xl text-[#124e9d] font-semibold mb-6 transition-all duration-700 ${
                    heroRef.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }`}
                  style={{
                    transitionTimingFunction: 'var(--ease-expo-out)',
                    transitionDelay: '400ms',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  {personalInfo.title}
                </p>

                {personalInfo.about.bio.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-gray-600 leading-relaxed mb-4 transition-all duration-700 ${
                      heroRef.isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-5'
                    }`}
                    style={{
                      transitionTimingFunction: 'var(--ease-expo-out)',
                      transitionDelay: `${500 + index * 100}ms`,
                    }}
                  >
                    {paragraph}
                  </p>
                ))}

                {/* Contact Info */}
                <div
                  className={`mt-8 flex flex-wrap gap-6 transition-all duration-700 ${
                    heroRef.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }`}
                  style={{
                    transitionTimingFunction: 'var(--ease-expo-out)',
                    transitionDelay: '700ms',
                  }}
                >
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-[#124e9d] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    {personalInfo.email}
                  </a>
                  <span className="inline-flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    {personalInfo.location}
                  </span>
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-[#124e9d] transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                    LinkedIn Profile
                  </a>
                </div>

                {/* Stats */}
                <div
                  className={`mt-10 grid grid-cols-3 gap-6 transition-all duration-700 ${
                    heroRef.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }`}
                  style={{
                    transitionTimingFunction: 'var(--ease-expo-out)',
                    transitionDelay: '800ms',
                  }}
                >
                  {personalInfo.about.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div
                        className="text-3xl md:text-4xl font-bold text-[#124e9d]"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section
        ref={expertiseRef.ref}
        className="py-16 md:py-24 bg-white"
      >
        <div className="section-container">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span
                className={`inline-block text-sm font-semibold text-[#124e9d] tracking-wider uppercase mb-4 transition-all duration-700 ${
                  expertiseRef.isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Expertise
              </span>
              <h2
                className={`text-3xl md:text-4xl font-bold text-gray-900 transition-all duration-700 ${
                  expertiseRef.isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
                style={{
                  transitionTimingFunction: 'var(--ease-expo-out)',
                  transitionDelay: '100ms',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Areas of Expertise
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expertiseAreas.map((area, index) => (
                <div
                  key={index}
                  className={`group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl hover:border-[#124e9d]/20 border border-transparent transition-all duration-500 ${
                    expertiseRef.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionTimingFunction: 'var(--ease-expo-out)',
                    transitionDelay: `${200 + index * 100}ms`,
                  }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#124e9d] to-[#1a6bc7] flex items-center justify-center mb-6 shadow-lg shadow-[#124e9d]/20 group-hover:scale-110 transition-transform duration-300">
                    <area.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold text-gray-900 mb-3"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        ref={educationRef.ref}
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="section-container">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span
                className={`inline-block text-sm font-semibold text-[#124e9d] tracking-wider uppercase mb-4 transition-all duration-700 ${
                  educationRef.isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Education
              </span>
              <h2
                className={`text-3xl md:text-4xl font-bold text-gray-900 transition-all duration-700 ${
                  educationRef.isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
                style={{
                  transitionTimingFunction: 'var(--ease-expo-out)',
                  transitionDelay: '100ms',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Academic Background
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`flex gap-6 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-500 ${
                    educationRef.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionTimingFunction: 'var(--ease-expo-out)',
                    transitionDelay: `${200 + index * 100}ms`,
                  }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#124e9d]/10 flex items-center justify-center">
                    <GraduationCap className="w-7 h-7 text-[#124e9d]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3
                        className="text-lg font-bold text-gray-900"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {edu.degree}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 bg-[#f1bf45]/20 text-[#b8952e] text-sm font-medium rounded-full">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-[#124e9d] font-medium mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 text-sm">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        ref={experienceRef.ref}
        className="py-16 md:py-24 bg-white"
      >
        <div className="section-container">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span
                className={`inline-block text-sm font-semibold text-[#124e9d] tracking-wider uppercase mb-4 transition-all duration-700 ${
                  experienceRef.isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Experience
              </span>
              <h2
                className={`text-3xl md:text-4xl font-bold text-gray-900 transition-all duration-700 ${
                  experienceRef.isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
                style={{
                  transitionTimingFunction: 'var(--ease-expo-out)',
                  transitionDelay: '100ms',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Professional Journey
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className={`relative pl-8 pb-8 border-l-2 border-[#124e9d]/20 last:pb-0 last:border-l-0 transition-all duration-700 ${
                    experienceRef.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionTimingFunction: 'var(--ease-expo-out)',
                    transitionDelay: `${200 + index * 100}ms`,
                  }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-[#124e9d] border-4 border-white shadow" />

                  <div className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3
                        className="text-lg font-bold text-gray-900"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {exp.role}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 bg-[#124e9d]/10 text-[#124e9d] text-sm font-medium rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-[#124e9d] font-medium mb-2">
                      {exp.organization}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
