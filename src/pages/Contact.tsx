import { useState } from 'react';
import { Mail, MapPin, Send, Twitter, Linkedin, Github, CheckCircle } from 'lucide-react';
import { personalInfo } from '@/data/content';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const heroRef = useScrollAnimation<HTMLElement>({ threshold: 0.1 });
  const formRef = useScrollAnimation<HTMLElement>({ threshold: 0.1 });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
    {
      icon: Twitter,
      label: 'Twitter',
      value: '@ahmedazeez',
      href: personalInfo.social.twitter,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Ahmed Azeez',
      href: personalInfo.social.linkedin,
    },
  ];

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
                Get in Touch
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
                Let's Collaborate
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
                Have a project in mind? I'm always open to discussing new research
                collaborations, data storytelling opportunities, or public health
                initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={formRef.ref} className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div
                className={`transition-all duration-700 ${
                  formRef.isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
              >
                <h2
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Feel free to reach out through any of the channels below. I
                  typically respond within 24-48 hours.
                </p>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href || undefined}
                      target={info.href?.startsWith('http') ? '_blank' : undefined}
                      rel={info.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg border border-transparent hover:border-gray-100 transition-all duration-300 ${
                        !info.href ? 'cursor-default hover:bg-gray-50 hover:shadow-none hover:border-transparent' : ''
                      }`}
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#124e9d]/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-[#124e9d]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        <p className="font-semibold text-gray-900">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-8">
                  <p
                    className="text-sm font-semibold text-gray-900 mb-4"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Follow Me
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href={personalInfo.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={personalInfo.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#0A66C2] hover:text-white transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={personalInfo.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#333] hover:text-white transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div
                className={`transition-all duration-700 ${
                  formRef.isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                }`}
                style={{
                  transitionTimingFunction: 'var(--ease-expo-out)',
                  transitionDelay: '200ms',
                }}
              >
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h2
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Send a Message
                  </h2>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3
                        className="text-xl font-semibold text-gray-900 mb-2"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        Message Sent!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        Thank you for reaching out. I'll get back to you soon.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="btn-primary"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-[#124e9d] focus:ring-2 focus:ring-[#124e9d]/20 outline-none transition-all duration-300"
                          placeholder="John Doe"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-[#124e9d] focus:ring-2 focus:ring-[#124e9d]/20 outline-none transition-all duration-300"
                          placeholder="john@example.com"
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-gray-700 mb-2"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-[#124e9d] focus:ring-2 focus:ring-[#124e9d]/20 outline-none transition-all duration-300"
                        >
                          <option value="">Select a subject</option>
                          <option value="collaboration">Research Collaboration</option>
                          <option value="consulting">Consulting</option>
                          <option value="speaking">Speaking Opportunity</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-2"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:border-[#124e9d] focus:ring-2 focus:ring-[#124e9d]/20 outline-none transition-all duration-300 resize-none"
                          placeholder="Tell me about your project..."
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg
                              className="animate-spin h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Send className="w-5 h-5" />
                            Send Message
                          </span>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
