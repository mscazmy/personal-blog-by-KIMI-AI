import { Link } from '@/router';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { blogPosts, personalInfo } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function BlogPreviewSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  // Get only the first 3 posts
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-gray-50">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
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
                Blog
              </span>
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-700 ${
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
                className={`mt-4 text-gray-600 max-w-xl transition-all duration-700 ${
                  isVisible
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

            <Link
              to="/blog"
              className={`inline-flex items-center gap-2 text-[#124e9d] font-semibold hover:gap-3 transition-all duration-300 ${
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
              View All Posts
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article
                key={post.id}
                className={`blog-card group bg-white rounded-xl overflow-hidden shadow-lg card-hover transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionTimingFunction: 'var(--ease-expo-out)',
                  transitionDelay: `${400 + index * 150}ms`,
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
                    <h3
                      className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#124e9d] transition-colors duration-300 line-clamp-2"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {post.title}
                    </h3>

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
        </div>
      </div>
    </section>
  );
}
