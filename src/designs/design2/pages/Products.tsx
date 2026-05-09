import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Cpu, Box, Settings, ArrowRight, Mail, Globe, MapPin, Phone } from 'lucide-react';

const Products = () => {
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
            <a href="/product" className="text-slate-900 transition-colors">Product</a>
            <a href="/machineries" className="hover:text-slate-900 transition-colors">Machineries</a>
            <a href="/csr" className="hover:text-slate-900 transition-colors">CSR</a>
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
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h1 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter">Component Engineering Catalog</h1>
          <p className="text-slate-500 max-w-2xl leading-relaxed text-lg">
            Precision-manufactured automotive solutions engineered for peak performance and structural integrity. Explore our technical specifications and material grades.
          </p>
        </div>
      </section>

      {/* --- Explorer Tool Section --- */}
      <section className="pb-32 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Categories */}
            <div className="lg:w-64 shrink-0">
               <div className="bg-slate-50 border border-slate-100 p-6 rounded-sm">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B96AC] mb-8">Technical Categories</h4>
                  <div className="space-y-2">
                     <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-[#0B96AC]/20 text-[#0B96AC] text-[11px] font-bold uppercase tracking-widest shadow-sm">
                        <Cpu className="w-4 h-4" /> Sheet Metal
                     </button>
                     <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 text-[11px] font-bold uppercase tracking-widest hover:bg-slate-100 transition-all">
                        <Settings className="w-4 h-4" /> Fabrication
                     </button>
                     <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 text-[11px] font-bold uppercase tracking-widest hover:bg-slate-100 transition-all">
                        <Box className="w-4 h-4" /> Press Components
                     </button>
                  </div>
               </div>
            </div>

            {/* Main Table Content */}
            <div className="flex-grow">
               <div className="bg-slate-50 border border-slate-100 p-8 rounded-sm">
                  <div className="flex justify-between items-center mb-10">
                     <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#0B96AC] mb-2">Explorer Tool</h4>
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Technical Specification Explorer</h3>
                     </div>
                     <div className="flex gap-2">
                        <button className="px-4 py-1.5 bg-[#0B96AC] text-white text-[10px] font-bold uppercase tracking-widest">CRCA</button>
                        <button className="px-4 py-1.5 bg-white border border-slate-200 text-slate-400 text-[10px] font-bold uppercase tracking-widest">HR</button>
                        <button className="px-4 py-1.5 bg-white border border-slate-200 text-slate-400 text-[10px] font-bold uppercase tracking-widest">SS</button>
                     </div>
                  </div>

                  <div className="overflow-x-auto">
                     <table className="w-full text-left">
                        <thead>
                           <tr className="bg-[#0B96AC] text-white">
                              <th className="p-4 text-[10px] font-bold uppercase tracking-widest">Grade Code</th>
                              <th className="p-4 text-[10px] font-bold uppercase tracking-widest">Thickness (MM)</th>
                              <th className="p-4 text-[10px] font-bold uppercase tracking-widest">Tolerance</th>
                              <th className="p-4 text-[10px] font-bold uppercase tracking-widest">Yield Strength</th>
                              <th className="p-4 text-[10px] font-bold uppercase tracking-widest">Application</th>
                           </tr>
                        </thead>
                        <tbody className="text-sm">
                           {[
                              { grade: "ST12 / DC01", thickness: "0.50 — 2.00", tolerance: "± 0.05mm", yield: "280 MPa", app: "Body Panels" },
                              { grade: "ST14 / DC04", thickness: "0.80 — 3.50", tolerance: "± 0.02mm", yield: "210 MPa", app: "Deep Drawing" },
                              { grade: "SPCC", thickness: "1.00 — 4.00", tolerance: "± 0.03mm", yield: "240 MPa", app: "Brackets" }
                           ].map((row, i) => (
                              <tr key={i} className="border-b border-slate-200 hover:bg-white transition-all">
                                 <td className="p-4 font-bold text-slate-900">{row.grade}</td>
                                 <td className="p-4 text-slate-500">{row.thickness}</td>
                                 <td className="p-4 text-slate-500">{row.tolerance}</td>
                                 <td className="p-4 text-slate-500">{row.yield}</td>
                                 <td className="p-4 text-slate-900 font-medium">{row.app}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
             {[
               { 
                 id: "CH-9830",
                 name: "Chassis Brackets", 
                 desc: "High-tensile steel brackets designed for structural reinforcement with ±0.1mm tolerance levels.",
                 material: "HR 4.0mm",
                 process: "Stamping",
                 img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=800&auto=format&fit=crop",
                 bestSeller: true
               },
               { 
                 id: "DF-4412",
                 name: "Door Internal Frames", 
                 desc: "Ultra-lightweight DC04 deep-draw components for passenger safety and door alignment integrity.",
                 material: "DC04 0.8mm",
                 process: "Prog-Die",
                 img: "https://images.unsplash.com/photo-1565173153515-05e83693e506?q=80&w=800&auto=format&fit=crop"
               },
               { 
                 id: "TH-1022",
                 name: "Transmission Housing", 
                 desc: "Precision-machined fabrication for heavy-duty commercial vehicle transmission mounts.",
                 material: "SS304 6.0mm",
                 process: "Fabrication",
                 img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=800&auto=format&fit=crop"
               },
               { 
                 id: "SA-2210",
                 name: "Suspension Arms", 
                 desc: "Safety-critical suspension components featuring robotic welding and ultrasonic testing certification.",
                 material: "HR 12.0mm",
                 process: "Welding",
                 img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=800&auto=format&fit=crop"
               }
             ].map((product, idx) => (
               <div key={idx} className="border border-slate-100 flex flex-col md:flex-row h-full group">
                  <div className="md:w-1/2 relative overflow-hidden h-64 md:h-auto">
                     <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                     {product.bestSeller && (
                        <div className="absolute top-4 left-4 bg-[#0B96AC] px-3 py-1 text-[8px] font-bold text-white uppercase tracking-widest">Best Seller</div>
                     )}
                  </div>
                  <div className="md:w-1/2 p-8 flex flex-col justify-between">
                     <div>
                        <div className="flex justify-between items-start mb-4">
                           <h3 className="text-xl font-bold text-slate-900 tracking-tight">{product.name}</h3>
                           <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">#{product.id}</span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed mb-8">{product.desc}</p>
                        
                        <div className="flex gap-8 mb-8 border-t border-slate-50 pt-6">
                           <div>
                              <p className="text-[9px] font-bold text-slate-300 uppercase mb-1">Material</p>
                              <p className="text-[11px] font-bold text-slate-900">{product.material}</p>
                           </div>
                           <div>
                              <p className="text-[9px] font-bold text-slate-300 uppercase mb-1">Process</p>
                              <p className="text-[11px] font-bold text-slate-900">{product.process}</p>
                           </div>
                        </div>
                     </div>
                     <button className="w-full py-3 bg-[#0B96AC] text-white text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-colors">
                        Add to RFQ List
                     </button>
                  </div>
               </div>
             ))}
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

export default Products;
