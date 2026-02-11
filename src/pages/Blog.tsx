import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight, Search } from 'lucide-react';
import { blogPosts, blogCategories } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const heroRef = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const postsRef = useScrollAnimation<HTMLElement>({ threshold: 0.05 });

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
                Blog
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
                Latest Blog Posts
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
                Insights from my research and data storytelling journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section ref={postsRef.ref} className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-7xl mx-auto">
            {/* Filters */}
            <div
              className={`flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 transition-all duration-700 ${
                postsRef.isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
            >
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {blogCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-[#124e9d] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative max-w-xs">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-100 border border-transparent rounded-lg focus:bg-white focus:border-[#124e9d] focus:ring-2 focus:ring-[#124e9d]/20 outline-none transition-all duration-300"
                />
              </div>
            </div>

            {/* Posts Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <article
                    key={post.id}
                    className={`blog-card group bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 card-hover transition-all duration-700 ${
                      postsRef.isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-10'
                    }`}
                    style={{
                      transitionTimingFunction: 'var(--ease-expo-out)',
                      transitionDelay: `${100 + index * 100}ms`,
                    }}
                  >
                    <Link to={`/blog/${post.slug}`}>
                      {/* Image */}
                      <div className="blog-card-image aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        {/* Meta */}
                        <div className="flex items-center gap-4 mb-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#124e9d]/10 text-[#124e9d] text-xs font-medium rounded-full">
                            <Tag className="w-3 h-3" />
                            {post.category}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-gray-500 text-xs">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h2
                          className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#124e9d] transition-colors duration-300 line-clamp-2"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          {post.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>

                        {/* Read More */}
                        <span className="inline-flex items-center gap-2 text-[#124e9d] font-medium text-sm group-hover:gap-3 transition-all duration-300">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
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
                  No posts found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
