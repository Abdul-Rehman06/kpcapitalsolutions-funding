import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { Mail, MapPin, Menu, Phone, X } from 'lucide-react';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Free Calculator', to: '/free-calculator' },
  { label: 'Contact', to: '/contact' },
];

const fundingSolutions = [
  'SBA 7(a) Loans',
  'SBA 504 Loans',
  'Business Lines of Credit',
  'Equipment Financing',
  'Working Capital',
  'Business Acquisitions',
  '0% APR Credit Stacking',
  'Bridge Financing',
];

function linkClass(isActive: boolean) {
  return `nav-link ${isActive ? 'text-white' : ''}`;
}

export function SiteLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const mobileNav = useMemo(
    () =>
      navItems.map((item) => (
        <NavLink
          key={item.to}
          end={item.to === '/'}
          to={item.to}
          className={({ isActive }) =>
            `text-sm font-semibold uppercase tracking-widest transition-colors ${
              isActive ? 'text-white' : 'text-gray-300'
            }`
          }
        >
          {item.label}
        </NavLink>
      )),
    [],
  );

  return (
    <div className="min-h-screen bg-navy-900 text-white font-sans">
      <div className="border-b border-white/10 px-6 py-2 text-xs text-gray-400">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div>Katy, TX - Serving Businesses Nationwide</div>
          <a href="tel:9793563927" className="flex items-center gap-2 transition-colors hover:text-white">
            <Phone className="h-3 w-3" />
            <span>(979) 356-3927</span>
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/95 backdrop-blur">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-wide">The Funding Dept.</span>
            <span className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-gold-500">
              Commercial Funding Advisory
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <NavLink key={item.to} end={item.to === '/'} to={item.to} className={({ isActive }) => linkClass(isActive)}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <Link
              to="/contact"
              className="btn-outline border-white/30 px-4 py-2 text-xs hover:border-white hover:bg-white hover:text-navy-900"
            >
              Check Eligibility
            </Link>
            <Link to="/book-call" className="btn-primary px-4 py-2 text-xs">
              Book Strategy Call
            </Link>
          </div>

          <button
            type="button"
            className="text-white lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-white/10 bg-navy-800 lg:hidden">
            <nav className="flex flex-col gap-4 px-6 py-4">
              {mobileNav}
              <div className="mt-2 flex flex-col gap-3 border-t border-white/10 pt-4">
                <Link to="/contact" className="btn-outline w-full justify-center">
                  Check Eligibility
                </Link>
                <Link to="/book-call" className="btn-primary w-full justify-center">
                  Book Strategy Call
                </Link>
              </div>
            </nav>
          </div>
        ) : null}
      </header>

      <Outlet />

      <footer className="border-t border-white/10 bg-[#080d1e] pb-10 pt-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
            <div className="lg:col-span-2">
              <Link to="/" className="mb-6 flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-wide text-white">The Funding Dept.</span>
                <span className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-gold-500">
                  Commercial Funding Advisory
                </span>
              </Link>
              <p className="mb-8 max-w-sm text-sm leading-relaxed text-gray-400">
                Your Off-Site Funding Department. We help established businesses access the capital they need to scale
                without the banks, the runaround, or the wasted time.
              </p>
              <div className="flex flex-col gap-3 text-sm text-gray-300">
                <a
                  href="mailto:info@thefundingdept.com"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-gold-500" />
                  <span>info@thefundingdept.com</span>
                </a>
                <a href="tel:9793563927" className="flex items-center gap-3 transition-colors hover:text-white">
                  <Phone className="h-4 w-4 text-gold-500" />
                  <span>(979) 356-3927</span>
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-gold-500" />
                  <span>Katy, TX</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-gold-500">Funding Solutions</h4>
              <ul className="flex flex-col gap-4 text-sm text-gray-400">
                {fundingSolutions.map((solution) => (
                  <li key={solution}>
                    <Link to="/services" className="transition-colors hover:text-white">
                      {solution}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-xs font-semibold uppercase tracking-widest text-gold-500">Quick Links</h4>
              <ul className="mb-8 flex flex-col gap-4 text-sm text-gray-400">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/book-call" className="transition-colors hover:text-white">
                    Book Strategy Call
                  </Link>
                </li>
              </ul>
              <Link to="/book-call" className="btn-primary w-full justify-center py-3 text-xs">
                Book Strategy Call
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-gray-500 md:flex-row md:items-center">
            <p>&copy; 2024 The Funding Dept. All rights reserved. Katy, TX.</p>
            <p className="max-w-2xl leading-relaxed md:text-left">
              The Funding Dept is a commercial funding advisory firm. We do not guarantee funding approvals. Results
              vary based on individual business profile, credit history, and lender availability. This website is for
              informational purposes only and does not constitute financial advice.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
