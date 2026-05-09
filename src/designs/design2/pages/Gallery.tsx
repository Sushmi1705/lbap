import React from 'react';
import { motion } from 'framer-motion';
import { Play, Download, Search, Mail, Globe, MapPin, Phone } from 'lucide-react';

const Gallery = () => {
  return (
    <div className="bg-white text-slate-900 font-['Outfit']">
      
      {/* --- Navigation --- */}
      <nav className="bg-white border-b border-slate-100 py-4 px-6 sticky top-0 z-[100]">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded-full border-2 border-[#0B96AC] flex items-center justify-center p-1">
                <div className="w-full h-full bg-[#0B96AC] rounded-full"></div>
             </div>
             <span className="font-bold text-lg tracking-tight uppercase">Laxmi Balaji</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-[12px] font-bold uppercase tracking-wider text-slate-400">
            <a href="/" className="hover:text-slate-900 transition-colors">Home</a>
            <a href="/about" className="hover:text-slate-900 transition-colors">About Us</a>
            <a href="/product" className="hover:text-slate-900 transition-colors">Product</a>
            <a href="/machineries" className="hover:text-slate-900 transition-colors">Machineries</a>
            <a href="/csr" className="hover:text-slate-900 transition-colors">CSR</a>
            <a href="/gallery" className="text-slate-900 transition-colors">Gallery</a>
            <a href="/career" className="hover:text-slate-900 transition-colors">Career</a>
            <a href="/contact" className="hover:text-slate-900 transition-colors">Contact Us</a>
          </div>
          <button className="bg-[#0B96AC] text-white px-5 py-2 text-[11px] font-bold uppercase tracking-widest rounded-sm shadow-lg shadow-[#0B96AC]/20">
            Request Quote
          </button>
        </div>
      </nav>

      {/* --- Header Section --- */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="flex items-start gap-4 mb-6">
             <div className="w-1 h-24 bg-[#0B96AC]"></div>
             <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B96AC] mb-4">LBAP Visual Documentation</h4>
                <h1 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter">The Precision Archive.</h1>
                <p className="text-slate-500 max-w-2xl leading-relaxed">
                   A curated visual record of our manufacturing prowess, from raw sheet metal fabrication to final assembly metrology inspections. Each frame captures the clinical precision of our white-room standards.
                </p>
             </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-12">
             <button className="px-6 py-2 bg-[#0B96AC] text-white text-[10px] font-bold uppercase tracking-widest">All Documentation</button>
             <button className="px-6 py-2 bg-white border border-slate-100 text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:border-[#0B96AC]/30 transition-all">Plant Visits</button>
             <button className="px-6 py-2 bg-white border border-slate-100 text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:border-[#0B96AC]/30 transition-all">Infrastructure</button>
             <button className="px-6 py-2 bg-white border border-slate-100 text-slate-400 text-[10px] font-bold uppercase tracking-widest hover:border-[#0B96AC]/30 transition-all">Certifications</button>
          </div>
        </div>
      </section>

      {/* --- Monochromatic Grid --- */}
      <section className="pb-20 bg-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
              {/* Large Image 1 */}
              <div className="md:col-span-1 h-[400px] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop" alt="Industrial" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-zoom-in" />
              </div>
              {/* Large Image 2 */}
              <div className="md:col-span-1 h-[400px] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop" alt="Industrial" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-zoom-in" />
              </div>
              {/* Large Image 3 */}
              <div className="md:col-span-1 h-[400px] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800&auto=format&fit=crop" alt="Industrial" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-zoom-in" />
              </div>
              
              {/* Complex Layout Row */}
              <div className="md:col-span-2 grid grid-cols-2 gap-1">
                 <div className="h-[500px] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop" alt="Industrial" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-zoom-in" />
                 </div>
                 <div className="h-[500px] overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1565173153515-05e83693e506?q=80&w=800&auto=format&fit=crop" alt="Industrial" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-zoom-in" />
                 </div>
              </div>
              <div className="md:col-span-1 h-[500px] overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop" alt="Industrial" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-zoom-in" />
              </div>
           </div>
        </div>
      </section>

      {/* --- Video Section --- */}
      <section className="pb-32 bg-white">
        <div className="container-custom">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Video Card 1 */}
              <div className="group border border-slate-100 p-2">
                 <div className="relative h-80 overflow-hidden bg-slate-900">
                    <img src="https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=1200&auto=format&fit=crop" alt="Video" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-[#0B96AC] group-hover:border-[#0B96AC] transition-all">
                          <Play className="w-6 h-6 text-white fill-current" />
                       </div>
                    </div>
                    <div className="absolute top-6 left-6 bg-[#0B96AC] px-3 py-1 text-[9px] font-bold text-white uppercase tracking-widest">Tech Briefing</div>
                 </div>
                 <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">CNC Machining Operations</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-10">
                       Automated 5-axis milling process of high-strength alloy blocks. Demonstrating tool-path optimization and cooling efficiency.
                    </p>
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#0B96AC]">
                       <span>Duration 04:22</span>
                       <button className="flex items-center gap-2 hover:gap-4 transition-all">Download 1080P <Download className="w-3 h-3" /></button>
                    </div>
                 </div>
              </div>

              {/* Video Card 2 */}
              <div className="group border border-slate-100 p-2">
                 <div className="relative h-80 overflow-hidden bg-slate-900">
                    <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop" alt="Video" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:bg-[#0B96AC] group-hover:border-[#0B96AC] transition-all">
                          <Play className="w-6 h-6 text-white fill-current" />
                       </div>
                    </div>
                    <div className="absolute top-6 left-6 bg-[#0B96AC] px-3 py-1 text-[9px] font-bold text-white uppercase tracking-widest">Process Dynamics</div>
                 </div>
                 <div className="p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">Press Shop Dynamics</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-10">
                       High-tonnage progressive die stamping for structural chassis components. Capturing impact precision and waste management.
                    </p>
                    <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-[#0B96AC]">
                       <span>Duration 02:45</span>
                       <button className="flex items-center gap-2 hover:gap-4 transition-all">Download 1080P <Download className="w-3 h-3" /></button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-24 bg-white text-slate-900 border-t border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
             <div className="md:col-span-4">
                <div className="flex items-center gap-3 mb-10">
                   <div className="w-8 h-8 rounded-full border-2 border-[#0B96AC] flex items-center justify-center p-1">
                      <div className="w-full h-full bg-[#0B96AC] rounded-full"></div>
                   </div>
                   <span className="font-bold text-lg tracking-tight uppercase">Laxmi Balaji</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-10 max-w-xs">
                  We are pleased to introduce ourselves as one of the leading manufacture and supply Pressed Components, Fabricated Parts, Assemblies, etc. with highest quality standards meeting Reliability, Quality and Performance Requirement for nearly leading automotive customers.
                </p>
                <div className="flex gap-4">
                   <div className="w-10 h-10 border border-slate-100 flex items-center justify-center hover:text-[#0B96AC] transition-all cursor-pointer">
                      <Mail className="w-4 h-4" />
                   </div>
                   <div className="w-10 h-10 border border-slate-100 flex items-center justify-center hover:text-[#0B96AC] transition-all cursor-pointer">
                      <Globe className="w-4 h-4" />
                   </div>
                </div>
             </div>
             
             <div className="md:col-span-3">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-10">Quick Links</h4>
                <ul className="space-y-4 text-sm font-medium text-slate-600">
                   <li><a href="/" className="hover:text-[#0B96AC] transition-colors">Home</a></li>
                   <li><a href="/about" className="hover:text-[#0B96AC] transition-colors">About Us</a></li>
                   <li><a href="/product" className="hover:text-[#0B96AC] transition-colors">Product</a></li>
                   <li><a href="/career" className="hover:text-[#0B96AC] transition-colors">Career</a></li>
                   <li><a href="#" className="hover:text-[#0B96AC] transition-colors">Client</a></li>
                   <li><a href="#" className="hover:text-[#0B96AC] transition-colors">Contact Us</a></li>
                </ul>
             </div>

             <div className="md:col-span-3">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-10">Contact</h4>
                <ul className="space-y-6 text-sm font-medium text-slate-600">
                   <li className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-[#0B96AC] shrink-0" />
                      <span>Plot No. 16-D, 3rd Cross, SIPCOT Industrial Complex - Phase 2, Hosur-635126, Tamil Nadu</span>
                   </li>
                   <li className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-[#0B96AC] shrink-0" />
                      <span>jallreellbalaji@gmail.com</span>
                   </li>
                   <li className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-[#0B96AC] shrink-0" />
                      <span>+91 93643 97522 / +91 97910 85511</span>
                   </li>
                </ul>
             </div>

             <div className="md:col-span-2">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-10">QR Code</h4>
                <div className="w-32 h-32 bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-300 uppercase">
                   QR Code
                </div>
             </div>
          </div>
          <div className="pt-10 border-t border-slate-50 text-[11px] font-bold text-slate-300 uppercase tracking-widest text-center">
             COPYRIGHT © 2024 LAXMI BALAJI AUTOMOTIVE PRODUCTS PVT. LTD. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Gallery;
