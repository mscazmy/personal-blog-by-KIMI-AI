import { Link } from '@/router';
import { Twitter, Linkedin, Github, Mail, ExternalLink } from 'lucide-react';
import { personalInfo, navLinks } from '@/data/content';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Twitter, href: personalInfo.social.twitter, label: 'Twitter' },
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-black text-white">
      {/* Wave Separator */}
      <div className="relative h-16 -mt-16 overflow-hidden">
        <svg
          viewBox="0 0 1440 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 64L48 58.7C96 53 192 43 288 37.3C384 32 480 32 576 37.3C672 43 768 53 864 53.3C960 53 1056 43 1152 37.3C1248 32 1344 32 1392 32L1440 32V64H1392C1344 64 1248 64 1152 64C1056 64 960 64 864 64C768 64 672 64 576 64C480 64 384 64 288 64C192 64 96 64 48 64H0Z"
            fill="#1a1a1a"
          />
        </svg>
      </div>

      <div className="section-container py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link
                to="/"
                className="inline-block text-2xl font-bold mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <span className="text-white">{personalInfo.name}</span>
              </Link>
              <p
                className="text-[#f1bf45] font-medium mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {personalInfo.footer.tagline}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                {personalInfo.footer.bio}
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 hover:bg-[#124e9d] hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-lg font-semibold mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4
                className="text-lg font-semibold mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Connect
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href={personalInfo.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-flex items-center gap-2"
                  >
                    <Twitter className="w-4 h-4" />
                    Twitter
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                </li>
                <li>
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                    <ExternalLink className="w-3 h-3 opacity-50" />
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {currentYear} {personalInfo.name}. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs">
                Designed with care for public health communication
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
