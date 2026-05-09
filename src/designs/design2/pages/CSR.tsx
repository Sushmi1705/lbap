import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Droplets, RefreshCw, ArrowRight, Mail, Globe, MapPin, Phone } from 'lucide-react';

const CSR = () => {
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
            <a href="/csr" className="text-slate-900 transition-colors">CSR</a>
            <a href="/gallery" className="hover:text-slate-900 transition-colors">Gallery</a>
            <a href="/career" className="hover:text-slate-900 transition-colors">Career</a>
            <a href="/contact" className="hover:text-slate-900 transition-colors">Contact Us</a>
          </div>
          <button className="bg-[#0B96AC] text-white px-5 py-2 text-[11px] font-bold uppercase tracking-widest rounded-sm shadow-lg shadow-[#0B96AC]/20">
            Request Quote
          </button>
        </div>
      </nav>

      {/* --- Header Section --- */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#0B96AC] mb-6">Commitment to the Future</h4>
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">
                 Sustainable Engineering for a <span className="text-[#0B96AC]">Greener Tomorrow.</span>
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed mb-12">
                 LBAP is redefining automotive manufacturing through a radical commitment to environmental stewardship. Our roadmap to 2030 is built on technical precision and measurable carbon reduction.
              </p>
              
              <div className="flex items-center gap-10">
                 <div>
                    <h3 className="text-4xl font-black text-slate-900 mb-1 tracking-tight">2,190</h3>
                    <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Tons CO2 Offset</p>
                 </div>
                 <div className="flex-grow">
                    <p className="text-[10px] font-bold text-[#0B96AC] uppercase tracking-widest mb-2 flex justify-between">
                       Carbon Neutrality Progress <span>74% Achieved</span>
                    </p>
                    <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
                       <div className="w-[74%] h-full bg-[#0B96AC]"></div>
                    </div>
                 </div>
              </div>
           </div>
           <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-sm overflow-hidden">
                 <img 
                    src="https://images.unsplash.com/photo-1466611653911-954ffea1128b?q=80&w=1200&auto=format&fit=crop" 
                    alt="Sustainable Factory" 
                    className="w-full h-full object-cover grayscale opacity-60"
                 />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-[#0B96AC] p-10 text-white shadow-2xl">
                 <p className="text-sm font-medium leading-relaxed italic">
                    "Sustainability isn't just a metric; it's the foundation of our engineering DNA."
                 </p>
              </div>
           </div>
        </div>
      </section>

      {/* --- Green Factory Initiatives --- */}
      <section className="py-32 bg-slate-50">
        <div className="container-custom">
           <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Green Factory Initiatives</h2>
           <p className="text-slate-400 mb-20 text-sm">Our manufacturing sites operate as closed-loop ecosystems.</p>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Zap, 
                  title: "Renewable Energy Autonomy", 
                  desc: "Integrating 12,000 sqm of photovoltaic arrays across all plant rooftops, generating 2.5MW of clean energy for precision fabrication.",
                  stat1: "85%", stat1Label: "Grid Independence", stat2: "1,200", stat2Label: "CO2 Tons Saved"
                },
                { 
                  icon: Droplets, 
                  title: "Zero Liquid Discharge", 
                  desc: "Advanced reverse osmosis systems recycle 98% of water used in sheet metal cleaning and cooling processes.",
                  tag: "Industrial Excellence"
                },
                { 
                  icon: RefreshCw, 
                  title: "Circular Metallurgy", 
                  desc: "100% of scrap aluminum and steel is reprocessed, sorted, and returned to our smelting partners for infinite loops.",
                  link: "View Logistics Map"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-10 border border-slate-200 flex flex-col justify-between h-full group">
                   <div>
                      <div className="w-12 h-12 bg-[#0B96AC]/5 flex items-center justify-center text-[#0B96AC] mb-10 group-hover:bg-[#0B96AC] group-hover:text-white transition-all">
                         <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">{item.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-10">{item.desc}</p>
                   </div>
                   
                   {item.stat1 ? (
                      <div className="grid grid-cols-2 gap-6 border-t border-slate-50 pt-8">
                         <div>
                            <p className="text-lg font-black text-[#0B96AC]">{item.stat1}</p>
                            <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">{item.stat1Label}</p>
                         </div>
                         <div>
                            <p className="text-lg font-black text-slate-900">{item.stat2}</p>
                            <p className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">{item.stat2Label}</p>
                         </div>
                      </div>
                   ) : item.tag ? (
                      <div className="flex justify-between items-center pt-8 border-t border-slate-50">
                         <span className="text-[10px] font-bold text-[#0B96AC] uppercase tracking-widest flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#0B96AC] animate-pulse"></div> Operational Since 2012
                         </span>
                      </div>
                   ) : (
                      <div className="pt-8 border-t border-slate-50">
                         <button className="text-[10px] font-bold text-[#0B96AC] uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">
                            {item.link} <ArrowRight className="w-3 h-3" />
                         </button>
                      </div>
                   )}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- Precision Skills Section --- */}
      <section className="py-32 bg-white">
        <div className="container-custom">
           <div className="flex flex-col lg:flex-row border border-slate-100 overflow-hidden">
              <div className="lg:w-1/2 bg-[#E1F3F5] p-16 flex flex-col justify-center">
                 <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#0B96AC] mb-6">Community Impact</h4>
                 <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                    Precision Skills for the Next Generation.
                 </h2>
                 <p className="text-slate-600 mb-12 leading-relaxed">
                    The LBAP Technical Institute provides fully-funded vocational training in CNC machining, robotic welding, and additive manufacturing for local youth.
                 </p>
                 <ul className="space-y-6 mb-12">
                    <li className="flex items-center gap-4 text-sm font-bold text-slate-900 italic">
                       <Zap className="w-4 h-4 text-[#0B96AC]" /> Advanced Lab Facilities
                    </li>
                    <li className="flex items-center gap-4 text-sm font-bold text-slate-900 italic">
                       <Zap className="w-4 h-4 text-[#0B96AC]" /> 92% Employment Rate
                    </li>
                 </ul>
                 <button className="self-start px-8 py-3 border border-[#0B96AC] text-[#0B96AC] text-[10px] font-bold uppercase tracking-widest hover:bg-[#0B96AC] hover:text-white transition-all">
                    Read Impact Report
                 </button>
              </div>
              <div className="lg:w-1/2 relative h-[500px] lg:h-auto">
                 <img 
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop" 
                    alt="Training" 
                    className="w-full h-full object-cover grayscale"
                 />
              </div>
           </div>
        </div>
      </section>

      {/* --- Metric Tracking --- */}
      <section className="py-32 bg-white">
        <div className="container-custom">
           <h3 className="text-2xl font-bold mb-4 tracking-tight uppercase">Environmental Metric Tracking</h3>
           <p className="text-slate-400 text-sm mb-12">Live data feed from our Global Monitoring Center ensuring compliance with ISO 14001:2015 standards.</p>
           
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead>
                    <tr className="bg-[#E1F3F5] text-[#0B96AC]">
                       <th className="p-4 text-[10px] font-bold uppercase tracking-widest">Parameter</th>
                       <th className="p-4 text-[10px] font-bold uppercase tracking-widest">Unit</th>
                       <th className="p-4 text-[10px] font-bold uppercase tracking-widest">Threshold</th>
                       <th className="p-4 text-[10px] font-bold uppercase tracking-widest">Current Value</th>
                       <th className="p-4 text-[10px] font-bold uppercase tracking-widest">Status</th>
                    </tr>
                 </thead>
                 <tbody className="text-sm">
                    {[
                       { param: "Emission Intensity", unit: "kg CO2e / unit", threshold: "0.45", value: "0.28", status: "Ideal", color: "text-green-500" },
                       { param: "Energy Consumption", unit: "MWh / month", threshold: "850", value: "712", status: "Ideal", color: "text-green-500" },
                       { param: "Water Recirculation", unit: "% Total Mass", threshold: "95.00", value: "98.40", status: "Optimal", color: "text-[#0B96AC]" }
                    ].map((row, i) => (
                       <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition-all">
                          <td className="p-4 font-bold text-slate-900">{row.param}</td>
                          <td className="p-4 text-slate-500">{row.unit}</td>
                          <td className="p-4 text-slate-500">{row.threshold}</td>
                          <td className="p-4 text-slate-900 font-bold">{row.value}</td>
                          <td className={`p-4 font-black uppercase text-[10px] tracking-widest ${row.color}`}>{row.status}</td>
                       </tr>
                    ))}
                 </tbody>
              </table>
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

export default CSR;
