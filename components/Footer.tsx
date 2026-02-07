import React from 'react';
import {
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Disc as Discord
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const data = {
  company: {
    name: 'Endpoint Group',
    description: 'Pioneering advanced resource recovery and RWA tokenization infrastructure for the new green economy.',
  },
  contact: {
    email: 'timgoltz@endpoint-group.com',
    address: 'San Salvador, El Salvador',
  },
  socials: [
      { icon: Twitter, label: 'Twitter', href: '#' },
      { icon: Linkedin, label: 'LinkedIn', href: '#' },
      { icon: Discord, label: 'Discord', href: '#' }
  ]
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

            <ul className="mt-8 flex justify-center gap-6 sm:justify-start">
              {data.socials.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/60 transition hover:text-emerald-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{label}</span>
                    <Icon className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
            
            {/* About */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Company</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                    <Link to="/about" className="text-white/60 transition hover:text-emerald-400">
                        About Endpoint
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="text-white/60 transition hover:text-emerald-400">
                        Contact Us
                    </Link>
                </li>
              </ul>
            </div>

            {/* Ecosystem */}
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Ecosystem</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                    <Link to="/technology" className="text-white/60 transition hover:text-emerald-400">
                        CODE™ Technology
                    </Link>
                </li>
                 <li>
                    <Link to="/projects/el-salvador" className="text-white/60 transition hover:text-emerald-400">
                        El Salvador Pyrolysis Project
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
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-white/40">
              <span className="block sm:inline">© 2025 Endpoint Group. All rights reserved.</span>
            </p>

            <div className="mt-4 flex justify-center gap-6 text-sm text-white/40 sm:mt-0">
               <a href="#" className="hover:text-emerald-400 transition">Privacy Policy</a>
               <a href="#" className="hover:text-emerald-400 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};