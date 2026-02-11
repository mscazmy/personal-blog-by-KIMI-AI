import { useState } from 'react';
import { ExternalLink, BookOpen, Search, Filter } from 'lucide-react';
import { publications } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Publications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const heroRef = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const pubsRef = useScrollAnimation<HTMLElement>({ threshold: 0.05 });

  // Get unique years from publications
  const years = ['All', ...Array.from(new Set(publications.map((p) => p.year.toString()))).sort().reverse()];

  // Filter publications
  const filteredPublications = publications.filter((pub) => {
    const matchesSearch =
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = selectedYear === 'All' || pub.year.toString() === selectedYear;
    return matchesSearch && matchesYear;
  });

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section
        ref={heroRef.ref}
        className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50/30"
      >
        <div className="section-container">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto">
              <span
                className={`inline-block text-sm font-semibold text-[#124e9d] tracking-wider uppercase mb-4 transition-all duration-700 ${
                  heroRef.isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Research
              </span>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 transition-all duration-700 ${
                  heroRef.isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
                style={{
                  transitionTimingFunction: 'var(--ease-expo-out)',
                  transitionDelay: '100ms',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                Publications
              </h1>
              <p
                className={`text-lg text-gray-600 transition-all duration-700 ${
                  heroRef.isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
                style={{
                  transitionTimingFunction: 'var(--ease-expo-out)',
                  transitionDelay: '200ms',
                }}
              >
                A collection of my research papers and academic contributions to public health
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section ref={pubsRef.ref} className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            {/* Filters */}
            <div
              className={`flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 transition-all duration-700 ${
                pubsRef.isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              {/* Year Filter */}
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-gray-400" />
                <div className="flex flex-wrap gap-2">
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setSelectedYear(year)}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                        selectedYear === year
                          ? 'bg-[#124e9d] text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="relative max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search publications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border border-transparent rounded-lg focus:bg-white focus:border-[#124e9d] focus:ring-2 focus:ring-[#124e9d]/20 outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Publications List */}
            {filteredPublications.length > 0 ? (
              <div className="space-y-6">
                {filteredPublications.map((pub, index) => (
                  <article
                    key={pub.id}
                    className={`group p-6 md:p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100 transition-all duration-500 ${
                      pubsRef.isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{
                      transitionTimingFunction: 'var(--ease-expo-out)',
                      transitionDelay: `${100 + index * 100}ms`,
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[#124e9d]/10 flex items-center justify-center group-hover:bg-[#124e9d] transition-colors duration-300">
                        <BookOpen className="w-7 h-7 text-[#124e9d] group-hover:text-white transition-colors duration-300" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h2
                          className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#124e9d] transition-colors duration-300"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          {pub.title}
                        </h2>

                        <p className="text-gray-600 mb-2">
                          <span className="font-medium">Authors:</span> {pub.authors}
                        </p>

                        <p className="text-[#124e9d] font-medium mb-3">
                          {pub.journal} ({pub.year})
                        </p>

                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {pub.abstract}
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                          <span className="inline-flex items-center px-3 py-1 bg-[#f1bf45]/20 text-[#b8952e] text-sm font-medium rounded-full">
                            DOI: {pub.doi}
                          </span>
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-[#124e9d] font-medium hover:gap-3 transition-all duration-300"
                          >
                            View Publication
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3
                  className="text-xl font-semibold text-gray-900 mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  No publications found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}

            {/* Stats */}
            <div
              className={`mt-16 pt-8 border-t border-gray-200 transition-all duration-700 ${
                pubsRef.isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
              style={{
                transitionTimingFunction: 'var(--ease-expo-out)',
                transitionDelay: '500ms',
              }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div
                    className="text-3xl md:text-4xl font-bold text-[#124e9d]"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {publications.length}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Publications</div>
                </div>
                <div>
                  <div
                    className="text-3xl md:text-4xl font-bold text-[#124e9d]"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {new Set(publications.map((p) => p.journal)).size}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Journals</div>
                </div>
                <div>
                  <div
                    className="text-3xl md:text-4xl font-bold text-[#124e9d]"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {Math.max(...publications.map((p) => p.year)) -
                      Math.min(...publications.map((p) => p.year)) +
                      1}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Years Active</div>
                </div>
                <div>
                  <div
                    className="text-3xl md:text-4xl font-bold text-[#124e9d]"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    100+
                  </div>
                  <div className="text-sm text-gray-500 mt-1">Citations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
