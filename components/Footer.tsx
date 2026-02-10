import React from 'react';
import { Mail, MapPin, ArrowUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const data = {
  company: {
    name: 'Endpoint Group',
    description: 'Pioneering advanced resource recovery and RWA tokenization infrastructure for the new green economy.',
  },
  contact: {
    email: 'timgoltz@endpoint-group.com',
    address: 'El Salvador',
  }
};

export const Footer: React.FC = () => {
  const location = useLocation();

  if (location.pathname === '/contact') {
    return null;
  }

  return (
    <footer className="bg-[#020402] border-t border-white/5 pt-16 pb-8 relative z-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-emerald-500 rounded-sm" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">
                {data.company.name}
              </span>
            </div>

            <p className="mt-6 max-w-md text-center leading-relaxed text-white/50 sm:max-w-xs sm:text-left">
              {data.company.description}
            </p>
          </div>

          {/* Links Grid - 2 Sections */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">

            {/* Company */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Company</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link to="/about" className="text-white/60 transition-all duration-300 hover:text-emerald-400 hover:translate-x-1 inline-block">
                    About Endpoint
                  </Link>
                </li>
                <li>
                  <Link to="/technology" className="text-white/60 transition-all duration-300 hover:text-emerald-400 hover:translate-x-1 inline-block">
                    CODE™ Technology
                  </Link>
                </li>
                <li>
                  <Link to="/projects/el-salvador" className="text-white/60 transition-all duration-300 hover:text-emerald-400 hover:translate-x-1 inline-block">
                    El Salvador Project
                  </Link>
                </li>
                <li>
                  <Link to="/about#leadership" className="text-white/60 transition-all duration-300 hover:text-emerald-400 hover:translate-x-1 inline-block">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/projects/el-salvador#critical-timeline" className="text-white/60 transition-all duration-300 hover:text-emerald-400 hover:translate-x-1 inline-block">
                    ESPP Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <a className="flex items-center justify-center gap-2 sm:justify-start text-white/60 hover:text-emerald-400 transition" href={`mailto:${data.contact.email}`}>
                    <Mail className="h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{data.contact.email}</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center justify-center gap-2 sm:justify-start text-white/60">
                    <MapPin className="h-4 w-4 shrink-0 text-emerald-500" />
                    <span>{data.contact.address}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left items-center">
            <p className="text-sm text-white/40">
              <span className="block sm:inline">© 2026 Endpoint Group. All rights reserved.</span>
            </p>

            <div className="mt-4 inline-flex items-center gap-6 text-sm text-white/40 sm:mt-0 rounded-full border border-transparent hover:border-dotted hover:border-white/20 px-4 py-1.5 transition-all duration-300">
              <Link to="/privacy" className="hover:text-emerald-400 transition-all duration-300">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-emerald-400 transition-all duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
        {/* Floating Scroll-to-Top Pill */}
        <div className="flex items-center justify-center mt-8 pb-2">
          <div className="flex items-center rounded-full border border-dotted border-white/15 hover:border-white/30 transition-all duration-300 group">
            <button
              type="button"
              onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
              className="rounded-full px-5 py-2 text-white/30 hover:text-emerald-400 transition-all duration-300 flex items-center gap-2"
            >
              <ArrowUp className="h-3.5 w-3.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              <span className="text-[10px] uppercase tracking-widest font-semibold">Back to top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};