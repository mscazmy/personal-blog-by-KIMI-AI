import { useState, useEffect } from 'react';
import { Link, useLocation } from '@/router';
import { Menu, X, Coffee } from 'lucide-react';
import { navLinks, personalInfo } from '@/data/content';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 backdrop-blur-xl bg-white/95 shadow-lg'
            : 'py-5 bg-transparent'
        }`}
        style={{
          transitionTimingFunction: 'var(--ease-expo-out)',
        }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className={`text-xl md:text-2xl font-bold transition-all duration-300 ${
                isScrolled ? 'scale-90' : 'scale-100'
              }`}
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <span className="text-[#124e9d]">{personalInfo.name}</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition-all duration-300 link-underline ${
                    isActive(link.path)
                      ? 'text-[#124e9d]'
                      : 'text-gray-700 hover:text-[#124e9d]'
                  }`}
                  style={{
                    animationDelay: `${index * 80}ms`,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a
                href="https://www.buymeacoffee.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#f1bf45] text-black text-sm font-semibold rounded-md transition-all duration-300 hover:bg-[#e5b13d] hover:scale-105"
                style={{
                  boxShadow: '0 2px 10px rgba(241, 191, 69, 0.3)',
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                <Coffee className="w-4 h-4" />
                Buy Me A Coffee
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 w-full max-w-sm h-full bg-white shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ transitionTimingFunction: 'var(--ease-expo-out)' }}
        >
          <div className="flex flex-col h-full pt-20 pb-8 px-6">
            {/* Mobile Nav Links */}
            <div className="flex-1 space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block py-3 px-4 text-lg font-medium rounded-lg transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-[#124e9d]/10 text-[#124e9d]'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-[#124e9d]'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="pt-6 border-t border-gray-100">
              <a
                href="https://www.buymeacoffee.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#f1bf45] text-black font-semibold rounded-md transition-all duration-300 hover:bg-[#e5b13d]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                <Coffee className="w-5 h-5" />
                Buy Me A Coffee
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
