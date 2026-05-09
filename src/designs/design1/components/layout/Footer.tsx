import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-8 border-t border-slate-50 font-['Inter']">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* ABOUT US */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-[14px] text-[#191C1E] mb-6">ABOUT US:</h4>
            <p className="text-[12px] text-[#515F78] leading-[1.8] pr-10 font-light">
              We are pleased to introduce ourselves as one of the leading manufacture and supply Pressed Components, Fabricated Parts, Assemblies, etc. with highest quality standards meeting Reliability, Quality and Performance Requirement for many leading automotive customers.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-[14px] text-[#191C1E] mb-6 uppercase">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-[12px] text-[#515F78] font-light">
              <li><Link to="/" className="hover:text-[#0B96AC] transition-colors">HOME</Link></li>
              <li><Link to="/about" className="hover:text-[#0B96AC] transition-colors">ABOUT US</Link></li>
              <li><Link to="/product" className="hover:text-[#0B96AC] transition-colors">PRODUCT</Link></li>
              <li><Link to="/career" className="hover:text-[#0B96AC] transition-colors">CAREER</Link></li>
              <li><Link to="/client" className="hover:text-[#0B96AC] transition-colors">CLIENT</Link></li>
              <li><Link to="/contact" className="hover:text-[#0B96AC] transition-colors">CONTACT US</Link></li>
            </ul>
          </div>

          {/* QR CODE */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-[14px] text-[#191C1E] mb-6 uppercase">QR CODE</h4>
            <div className="w-28 h-28 bg-white border border-[#E2E8F0] p-1.5">
               <div className="w-full h-full relative">
                  <img 
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent('https://laxmibalaji.com')}`} 
                    alt="QR Code" 
                    className="w-full h-full grayscale"
                  />
               </div>
            </div>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-[14px] text-[#191C1E] mb-6 uppercase">Contact</h4>
            <ul className="flex flex-col gap-4 text-[12px] text-[#515F78] font-light">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-[#0B96AC] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Plot No. 16-D, 3rd Cross, SIPCOT Industrial Complex - Phase 2, Hosur-635126, Tamil Nadu
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0B96AC] shrink-0" />
                <span className="hover:text-[#0B96AC] transition-colors cursor-pointer">jotheeslbap@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#0B96AC] shrink-0" />
                <span>+91 99943 97522 / +91 97900 05516</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#0B96AC] shrink-0" />
                <span>Mon - Sat: 10AM - 6PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#E2E8F0] text-center text-[11px] text-[#515F78] font-light tracking-widest uppercase">
          COPYRIGHT © 2024 LAXMI BALAJI AUTOMOTIVE PRODUCTS PVT. LTD. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
