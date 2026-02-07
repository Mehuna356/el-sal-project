import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const data = {
  company: {
    name: 'Endpoint Group',
    description: 'Pioneering advanced resource recovery and RWA tokenization infrastructure for the new green economy.',
  },
  contact: {
    email: 'timgoltz@endpoint-group.com',
    address: 'San Salvador, El Salvador',
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

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:gap-4">
            {/* Navigation */}
            <div>
              <p className="font-medium text-white text-sm uppercase tracking-wider mb-4">Navigation</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-white/50 hover:text-emerald-400 transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-white/50 hover:text-emerald-400 transition-colors">About</Link></li>
                <li><Link to="/technology" className="text-white/50 hover:text-emerald-400 transition-colors">Technology</Link></li>
                <li><Link to="/projects" className="text-white/50 hover:text-emerald-400 transition-colors">Projects</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <p className="font-medium text-white text-sm uppercase tracking-wider mb-4">Connect</p>
              <ul className="space-y-2 text-sm">
                <li><Link to="/contact" className="text-white/50 hover:text-emerald-400 transition-colors">Contact Us</Link></li>
                <li><a href={`mailto:${data.contact.email}`} className="text-white/50 hover:text-emerald-400 flex items-center gap-1 transition-colors"><Mail className="w-3 h-3 opacity-50" />Email</a></li>
                <li><span className="text-white/50 flex items-center gap-1"><MapPin className="w-3 h-3 opacity-50" />{data.contact.address}</span></li>
              </ul>
            </div>
          </div>

          {/* Legal */}
          <div>
            <p className="font-medium text-white text-sm uppercase tracking-wider mb-4">Legal</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-white/50 hover:text-emerald-400 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-white/50 hover:text-emerald-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; 2026 {data.company.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/30 font-mono tracking-wider">Built for the new green economy</p>
        </div>
      </div>
    </footer>
  );
};