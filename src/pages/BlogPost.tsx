import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, User, Twitter, Linkedin, Facebook } from 'lucide-react';
import { blogPosts, personalInfo } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const contentRef = useScrollAnimation<HTMLElement>({ threshold: 0.05 });

  // Find the post by slug
  const post = blogPosts.find((p) => p.slug === slug);

  // If post not found, redirect to blog page
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out this article: ${post.title}`;

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-[#124e9d] to-[#0d3a73] overflow-hidden">
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

        <div className="section-container relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Link */}
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Category */}
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/20 text-white text-sm font-medium rounded-full mb-6">
              <Tag className="w-4 h-4" />
              {post.category}
            </span>

            {/* Title */}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <span className="inline-flex items-center gap-2">
                <User className="w-4 h-4" />
                {personalInfo.name}
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative -mt-12 section-container">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto aspect-video object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <section ref={contentRef.ref} className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_280px] gap-12">
              {/* Main Content */}
              <div>
                <article
                  className={`prose prose-lg max-w-none transition-all duration-700 ${
                    contentRef.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Share Section */}
                <div
                  className={`mt-12 pt-8 border-t border-gray-200 transition-all duration-700 ${
                    contentRef.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }`}
                  style={{
                    transitionTimingFunction: 'var(--ease-expo-out)',
                    transitionDelay: '200ms',
                  }}
                >
                  <h3
                    className="text-lg font-semibold text-gray-900 mb-4"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Share this article
                  </h3>
                  <div className="flex items-center gap-4">
                    <a
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                        shareUrl
                      )}&text=${encodeURIComponent(shareText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#1DA1F2]/10 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-all duration-300"
                      aria-label="Share on Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                        shareUrl
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
                      aria-label="Share on LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                        shareUrl
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#4267B2]/10 flex items-center justify-center text-[#4267B2] hover:bg-[#4267B2] hover:text-white transition-all duration-300"
                      aria-label="Share on Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-8">
                {/* Author Card */}
                <div
                  className={`bg-gray-50 rounded-xl p-6 transition-all duration-700 ${
                    contentRef.isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }`}
                  style={{
                    transitionTimingFunction: 'var(--ease-expo-out)',
                    transitionDelay: '100ms',
                  }}
                >
                  <h3
                    className="text-lg font-semibold text-gray-900 mb-4"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    About the Author
                  </h3>
                  <div className="flex items-center gap-4">
                    <img
                      src="/images/profile.jpg"
                      alt={personalInfo.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <p
                        className="font-semibold text-gray-900"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        {personalInfo.name}
                      </p>
                      <p className="text-sm text-gray-600">{personalInfo.title}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                    {personalInfo.footer.bio}
                  </p>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 mt-4 text-[#124e9d] font-medium text-sm hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <div
                    className={`bg-gray-50 rounded-xl p-6 transition-all duration-700 ${
                      contentRef.isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-5'
                    }`}
                    style={{
                      transitionTimingFunction: 'var(--ease-expo-out)',
                      transitionDelay: '200ms',
                    }}
                  >
                    <h3
                      className="text-lg font-semibold text-gray-900 mb-4"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Related Posts
                    </h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link
                          key={relatedPost.id}
                          to={`/blog/${relatedPost.slug}`}
                          className="group block"
                        >
                          <div className="flex gap-4">
                            <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src={relatedPost.image}
                                alt={relatedPost.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div>
                              <h4
                                className="font-semibold text-gray-900 text-sm line-clamp-2 group-hover:text-[#124e9d] transition-colors"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                              >
                                {relatedPost.title}
                              </h4>
                              <span className="text-xs text-gray-500 mt-1">
                                {relatedPost.date}
                              </span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
