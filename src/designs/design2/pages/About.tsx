import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Mail, Globe, MapPin, Phone } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white text-slate-900 font-['Outfit'] selection:bg-[#0B96AC]/20">
      
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
            <a href="/about" className="text-slate-900 transition-colors">About Us</a>
            <a href="/product" className="hover:text-slate-900 transition-colors">Product</a>
            <a href="/machineries" className="hover:text-slate-900 transition-colors">Machineries</a>
            <a href="/csr" className="hover:text-slate-900 transition-colors">CSR</a>
            <a href="/gallery" className="hover:text-slate-900 transition-colors">Gallery</a>
            <a href="/career" className="hover:text-slate-900 transition-colors">Career</a>
            <a href="/contact" className="hover:text-slate-900 transition-colors">Contact Us</a>
          </div>
          <button className="bg-[#0B96AC] text-white px-5 py-2 text-[11px] font-bold uppercase tracking-widest rounded-sm shadow-lg shadow-[#0B96AC]/20">
            Request Guide
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
            alt="Factory Interior" 
            className="w-full h-full object-cover grayscale brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-[#0B96AC]/10 mix-blend-overlay"></div>
          {/* Grid Overlay */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-[#0B96AC] px-4 py-1 mb-10">
               <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase">Strategic Scale</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-8 tracking-tighter">
              About Us | <span className="text-slate-400">Strategic Scale & Lea...</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed mb-12">
              LBAP uses the advanced manufacturing focus through a strategic of broad industrial footprint that exhibits high-fidelity standards to deliver supreme quality for the automotive sector.
            </p>
          </div>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Card: Total Investment */}
            <div className="lg:col-span-8 border border-slate-100 shadow-sm p-12">
               <h4 className="text-[#0B96AC] font-bold text-[11px] uppercase tracking-[0.3em] mb-12">Total Investment</h4>
               <div className="flex flex-col md:flex-row items-end gap-2 mb-16">
                  <span className="text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter">2.4M</span>
                  <span className="text-lg font-bold text-slate-400 pb-3">Sq Ft.</span>
               </div>
               
               <div className="grid grid-cols-3 border-t border-slate-100 pt-10">
                  <div className="pr-8">
                     <p className="text-[#0B96AC] font-bold text-[10px] mb-3">#1</p>
                     <p className="text-[13px] font-bold text-slate-900 leading-tight">Primary Assembly</p>
                  </div>
                  <div className="px-8 border-x border-slate-100">
                     <p className="text-[#0B96AC] font-bold text-[10px] mb-3">#2</p>
                     <p className="text-[13px] font-bold text-slate-900 leading-tight">Press Component Lab</p>
                  </div>
                  <div className="pl-8">
                     <p className="text-[#0B96AC] font-bold text-[10px] mb-3">#3</p>
                     <p className="text-[13px] font-bold text-slate-900 leading-tight">R&D Inventory</p>
                  </div>
               </div>
            </div>

            {/* Right Side: Two Cards */}
            <div className="lg:col-span-4 flex flex-col gap-8">
               <div className="bg-[#0B96AC] p-10 text-white flex-grow">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-white/70">Active Locations</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black">12</span>
                  </div>
                  <p className="text-sm mt-4 opacity-80 leading-relaxed">Strategic manufacturing plants spread across South India.</p>
               </div>
               <div className="bg-slate-100 p-10 flex-grow">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest mb-8 text-slate-400">Workforce Scale</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black text-slate-900">4,500+</span>
                  </div>
                  <p className="text-sm mt-4 text-slate-500 leading-relaxed">Engineers and technical personnel driving precision.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Timeline Section --- */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h4 className="text-slate-400 font-bold text-[11px] uppercase tracking-[0.3em] mb-4">25 Years of Excellence</h4>
              <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">Tracing our roots back to the global benchmarks.</h2>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                <ArrowRight className="rotate-180 w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {[
               { year: "1994", title: "Founding Vision", desc: "LBAP was established with a focus on delivering critical precision components for domestic Tier-1 suppliers." },
               { year: "2005", title: "Scale Expansion", desc: "Commissioned our second facility, expanding capabilities to include robotic welding and hollow fixtures." },
               { year: "2014", title: "Global Integration", desc: "Obtained ISO certification and became a direct supplier to global automotive leaders." },
               { year: "2024", title: "Modernization", desc: "Implementation of AI-driven quality control and IoT-enabled asset management." }
             ].map((item, idx) => (
               <div key={idx} className="p-10 bg-slate-50 border border-slate-100 hover:border-[#0B96AC]/30 transition-all group">
                  <span className="text-3xl font-black text-[#0B96AC] block mb-8">{item.year}</span>
                  <h4 className="text-lg font-bold text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- Strategic Reach Section --- */}
      <section className="py-32 bg-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
             <h4 className="text-[#0B96AC] font-bold text-[10px] uppercase tracking-[0.4em] mb-6">Strategic Reach</h4>
             <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-10">A Global Network, Driven by Scale.</h2>
             <p className="text-slate-500 text-lg leading-relaxed mb-12">
               Our multi-plant network is strategically positioned to serve key automotive hubs, reducing logistics overhead and ensuring just-in-time support.
             </p>
             <ul className="space-y-6">
               <li className="flex items-center gap-4 text-sm font-bold text-slate-900 italic">
                  <div className="w-2 h-2 bg-[#0B96AC] rounded-full"></div> APAC Region: 8 Plants
               </li>
               <li className="flex items-center gap-4 text-sm font-bold text-slate-900 italic">
                  <div className="w-2 h-2 bg-[#0B96AC] rounded-full"></div> EMEA Region: 2 Ports
               </li>
               <li className="flex items-center gap-4 text-sm font-bold text-slate-900 italic">
                  <div className="w-2 h-2 bg-[#0B96AC] rounded-full"></div> Americas: 2 Representative Hubs
               </li>
             </ul>
          </div>
          <div className="relative">
             <img 
               src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" 
               alt="World Map" 
               className="w-full h-auto grayscale opacity-40 rounded-lg"
             />
             <div className="absolute top-[40%] left-[25%] w-3 h-3 bg-[#0B96AC] rounded-full"></div>
             <div className="absolute top-[42%] left-[65%] w-3 h-3 bg-[#0B96AC] rounded-full"></div>
             <div className="absolute top-[65%] left-[75%] w-3 h-3 bg-[#0B96AC] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* --- Visionary Leadership Section --- */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <h4 className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.3em] mb-4">Visionary Leadership</h4>
            <h2 className="text-3xl font-extrabold tracking-tight">Led by industry veterans dedicated to technical excellence.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
             {[
               { name: "Thomas Anderson", role: "MANAGING DIRECTOR", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop" },
               { name: "Elena Rodriguez", role: "CHIEF OPERATIONS OFFICER", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" },
               { name: "Vikram Malhotra", role: "CHIEF TECHNOLOGY OFFICER", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop" }
             ].map((leader, i) => (
               <div key={i} className="relative group h-[600px] overflow-hidden">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover grayscale brightness-50 group-hover:brightness-75 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="absolute bottom-12 left-12">
                     <h4 className="text-[#0B96AC] font-bold text-[10px] tracking-widest mb-2 uppercase">{leader.role}</h4>
                     <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">{leader.name}</h3>
                     <button className="flex items-center gap-3 text-white/50 text-[11px] font-bold uppercase tracking-widest group-hover:text-white transition-colors">
                        <Play className="w-4 h-4 fill-white/20" /> Watch Introduction
                     </button>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="bg-[#0B96AC] py-20">
         <div className="container-custom text-center">
            <h2 className="text-3xl font-extrabold text-white mb-10 uppercase tracking-tight">Ready to collaborate with LBAP?</h2>
            <div className="flex justify-center gap-6">
               <button className="bg-white text-[#0B96AC] px-10 py-4 font-bold uppercase text-[11px] tracking-widest shadow-xl">
                  Partner with Us
               </button>
               <button className="border border-white/50 text-white px-10 py-4 font-bold uppercase text-[11px] tracking-widest hover:bg-white hover:text-[#0B96AC] transition-all">
                  Visit Facility
               </button>
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
                  Leading the industrial sector with high-fidelity components and sub-assembly manufacturing standards since 1998.
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
                   <li><a href="/machineries" className="hover:text-[#0B96AC] transition-colors">Machineries</a></li>
                   <li><a href="/csr" className="hover:text-[#0B96AC] transition-colors">CSR</a></li>
                   <li><a href="/gallery" className="hover:text-[#0B96AC] transition-colors">Gallery</a></li>
                   <li><a href="/career" className="hover:text-[#0B96AC] transition-colors">Career</a></li>
                </ul>
             </div>

             <div className="md:col-span-3">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-10">Contact</h4>
                <ul className="space-y-6 text-sm font-medium text-slate-600">
                   <li className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-[#0B96AC] shrink-0" />
                      <span>Hosur, Tamil Nadu, India - Industrial Hub Area</span>
                   </li>
                   <li className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-[#0B96AC] shrink-0" />
                      <span>+91 98765 43210</span>
                   </li>
                </ul>
             </div>

             <div className="md:col-span-2">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-10">Scan For Profile</h4>
                <div className="w-32 h-32 bg-slate-50 border border-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-300 uppercase">
                   QR Code
                </div>
             </div>
          </div>
          <div className="pt-10 border-t border-slate-50 text-[11px] font-bold text-slate-300 uppercase tracking-widest text-center">
             © 2024 Laxmi Balaji Automotive Products Pvt Ltd.
          </div>
        </div>
      </footer>

    </div>
  );
};

export default About;
