import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { companyName } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white text-sm">
                A
              </div>
              <span className="text-xl font-bold text-white tracking-tight">{companyName}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-6">
              Production-grade AI automation infrastructure for growth-stage SaaS companies. 
              Built by engineers who ship code, not consultants who write decks.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-slate-400 hover:text-cyan-400 transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/ai-support" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                  AI Support Automation
                </Link>
              </li>
              <li>
                <Link to="/ai-sales" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                  AI Sales Automation
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                  Book a Call
                </Link>
              </li>
              <li>
                <a href="mailto:engineering@apexai.systems" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors duration-200">
                  engineering@apexai.systems
                </a>
              </li>
              <li>
                <span className="text-slate-400 text-sm">
                  Response time: &lt; 24 hours
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm">
              © {currentYear} {companyName}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-slate-500 hover:text-slate-300 text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
