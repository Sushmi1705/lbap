import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Settings, Box, Database, Cpu, Mail, MapPin, Phone, Globe } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Home = () => {
  return (
    <div className="bg-white text-slate-900 font-['Outfit'] selection:bg-[#0B96AC]/20">
      
      {/* --- Navigation --- */}
      <nav className="absolute top-0 w-full z-50 py-8">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#0B96AC] flex items-center justify-center">
              <span className="font-bold text-lg text-white">LB</span>
            </div>
            <span className="font-bold tracking-tighter text-xl uppercase text-white">Laxmi Balaji</span>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-[12px] font-bold tracking-widest uppercase text-white/80">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/about" className="hover:text-white transition-colors">About Us</a>
            <a href="/product" className="hover:text-white transition-colors">Product</a>
            <a href="/machineries" className="hover:text-white transition-colors">Machineries</a>
            <a href="/csr" className="hover:text-white transition-colors">CSR</a>
            <a href="/gallery" className="hover:text-white transition-colors">Gallery</a>
            <a href="/career" className="hover:text-white transition-colors">Career</a>
            <a href="/contact" className="hover:text-white transition-colors">Contact Us</a>
          </div>
          <button className="bg-[#0B96AC] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-[#097b8e] transition-all">
            Request Quote
          </button>
        </div>
      </nav>

      {/* --- 1. Hero Section (FIGMA PIXEL PERFECT) --- */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-[#0A0D12]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1531266752426-aad4d5fd0b5d?auto=format&fit=crop&q=80&w=2000" 
            alt="Robotic Manufacturing" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0D12] via-[#0A0D12]/60 to-transparent"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="inline-block px-4 py-1 bg-[#0B96AC]/10 border border-[#0B96AC]/20 mb-8">
              <span className="text-[#0B96AC] text-[10px] font-bold tracking-[0.3em] uppercase">Trusted Partners</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-5xl lg:text-[72px] font-bold leading-[1.1] tracking-tight mb-8 text-white max-w-3xl">
              Engineering the Future of <br />
              <span className="text-white">Automotive Components.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-[16px] text-white/60 mb-12 max-w-xl leading-relaxed font-light">
              Advanced sheet metal fabrication and precision manufacturing for global automotive leaders.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-5">
              <button className="bg-[#0B96AC] text-white px-10 py-4 font-bold text-[12px] tracking-widest hover:bg-[#097b8e] transition-all uppercase">
                Explore Solutions
              </button>
              <button className="border border-white/20 text-white px-10 py-4 font-bold text-[12px] tracking-widest hover:bg-white/5 transition-all uppercase">
                Technical Data
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Production Info */}
        <div className="absolute bottom-12 right-12 hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="p-8 bg-[#1A1F26] border border-white/5 shadow-2xl max-w-[320px] backdrop-blur-md"
          >
            <h4 className="text-[#0B96AC] font-bold text-[11px] uppercase tracking-widest mb-3">Live Production Feed</h4>
            <p className="text-[13px] text-white/70 leading-relaxed font-light">
              Unit VI(S04) currently in Post Assembly Quality Check phase, Hosur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. Partners Strip --- */}
      <section className="bg-white border-y border-slate-100 py-10">
        <div className="container-custom">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-[#8E99AF] mb-8">Partners in Precision Engineering</p>
          <div className="flex flex-wrap justify-between items-center gap-10 grayscale opacity-40">
            {['VOLT-AUTO', 'NEXUS-MOTORS', 'APEX-PARTS', 'TITAN-ENGINEERING', 'FLUX-DYNAMICS'].map((p) => (
              <span key={p} className="text-[14px] font-extrabold tracking-widest text-[#191C1E]">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. Capabilities Section (FIGMA PIXEL PERFECT) --- */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h4 className="text-[#0B96AC] font-bold text-[11px] uppercase tracking-[0.3em] mb-4">Core Capabilities</h4>
              <h2 className="text-4xl lg:text-[42px] font-bold tracking-tight text-[#191C1E]">Precision at Scale. Rigor at Volume.</h2>
            </div>
            <div className="hidden md:block text-[14px] font-bold tracking-widest text-[#8E99AF]">001 — 003</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Cpu, 
                title: "Sheet Metal Fabrication", 
                desc: "Our high-speed CNC punching and automated folding lines handle complex geometries with tolerances within 0.01mm.",
                label: "CAPACITY",
                val: "40,000 SQ FT",
                year: "ESTD 1998"
              },
              { 
                icon: Settings, 
                title: "Heavy Fabrication", 
                desc: "Specialized robotic welding units for chassis components, engine mounts, and structural reinforcements.",
                label: "UNITS",
                val: "04 UNITS",
                year: "IN HOUSE"
              },
              { 
                icon: Box, 
                title: "Press Components", 
                desc: "Integrated sub-assembly capabilities for progressive die manufacturing and high-volume component stamping.",
                label: "PRECISION",
                val: "HIGH SPEED",
                year: "AUTOMATED"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-10 bg-white border border-slate-200 hover:border-[#0B96AC] transition-all group relative overflow-hidden"
              >
                <div className="mb-12">
                  <item.icon className="w-8 h-8 text-[#0B96AC]" />
                </div>
                <h3 className="text-2xl font-bold mb-6 text-[#191C1E]">{item.title}</h3>
                <p className="text-[#515F78] text-[14px] leading-relaxed mb-12 min-h-[80px] font-light">{item.desc}</p>
                
                <div className="pt-8 border-t border-slate-100 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] font-bold text-[#8E99AF] tracking-widest mb-1">{item.label}</p>
                    <p className="text-[12px] font-bold text-[#191C1E]">{item.val}</p>
                  </div>
                  <p className="text-[10px] font-bold text-[#0B96AC] tracking-widest">{item.year}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. Mass Production Section (FIGMA PIXEL PERFECT) --- */}
      <section className="bg-[#122A30] py-32 text-white">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl lg:text-[42px] font-bold tracking-tight mb-12 text-white leading-tight">Mass Production Without Compromise.</h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-10 h-10 bg-[#0B96AC]/20 border border-[#0B96AC]/30 flex items-center justify-center shrink-0">
                   <Settings className="w-5 h-5 text-[#0B96AC]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">120,000 Sq Ft Facility</h4>
                  <p className="text-white/50 text-[14px] leading-relaxed font-light">
                    Our manufacturing unit is strategically located to serve the industrial hub with maximum efficiency and high industrial safety.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-10 h-10 bg-[#0B96AC]/20 border border-[#0B96AC]/30 flex items-center justify-center shrink-0">
                   <Cpu className="w-5 h-5 text-[#0B96AC]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Smart Logic Integration</h4>
                  <p className="text-white/50 text-[14px] leading-relaxed font-light">
                    Utilizing data tracking throughout the manufacturing lifecycle for total transparency and error-free output.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" 
              alt="Laser Cutting" 
              className="w-full h-[400px] object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
              alt="Quality Control" 
              className="w-full h-[400px] object-cover mt-12"
            />
          </div>
        </div>
      </section>

      {/* --- 5. Stats Section (FIGMA PIXEL PERFECT) --- */}
      <section className="bg-white py-24">
        <div className="container-custom">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.3em] text-[#0B96AC] mb-4">Our Operational Metrics</p>
          <h2 className="text-center text-3xl lg:text-[36px] font-bold text-[#191C1E] mb-20 tracking-tight">Global Trust. Data-Driven Excellence.</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "ANNUAL DELIVERIES", value: "4.2M" },
              { label: "PRECISION RATE", value: "0.02%" },
              { label: "ON-TIME QUALITY", value: "100%" },
              { label: "SOUTH INDIA PLANTS", value: "12+" }
            ].map((stat, i) => (
              <div key={i} className="text-center lg:text-left border-l-2 border-slate-100 pl-8">
                <h3 className="text-4xl lg:text-5xl font-bold mb-2 text-[#191C1E]">{stat.value}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#8E99AF]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 6. Machinery Specification (FIGMA PIXEL PERFECT) --- */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Sidebar Categories */}
            <div className="w-full lg:w-1/4">
              <h4 className="text-[10px] font-bold text-[#8E99AF] tracking-[0.3em] mb-8 uppercase">Technical Categories</h4>
              <ul className="space-y-4">
                {[
                  { name: "SHEET METAL", active: true },
                  { name: "FABRICATION", active: false },
                  { name: "PRESS COMPONENTS", active: false }
                ].map((cat, i) => (
                  <li key={i} className={`flex items-center gap-4 py-4 px-6 border ${cat.active ? 'border-[#0B96AC] text-[#0B96AC]' : 'border-slate-100 text-[#515F78]'} cursor-pointer hover:border-[#0B96AC] transition-all`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${cat.active ? 'bg-[#0B96AC]' : 'bg-slate-300'}`}></div>
                    <span className="text-[12px] font-bold tracking-widest">{cat.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Table Area */}
            <div className="w-full lg:w-3/4">
              <h2 className="text-3xl font-bold text-[#191C1E] mb-12">Machinery Specification</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-[#122A30] text-white">
                    <tr>
                      <th className="p-6 text-[11px] font-bold tracking-widest uppercase">Equipment</th>
                      <th className="p-6 text-[11px] font-bold tracking-widest uppercase">Capacity</th>
                      <th className="p-6 text-[11px] font-bold tracking-widest uppercase">Precision</th>
                      <th className="p-6 text-[11px] font-bold tracking-widest uppercase">Origin</th>
                    </tr>
                  </thead>
                  <tbody className="border-x border-b border-slate-100">
                    {[
                      { name: "AMADA Fiber Laser", cap: "3000W / 4000W", prec: "+0.01mm", origin: "Japan" },
                      { name: "ABB Robotic Welders", cap: "6-Axis Sync", prec: "0.2mm/sec", origin: "Sweden" },
                      { name: "Seyi Power Press", cap: "200T - 1000T", prec: "High Speed", origin: "Taiwan" },
                      { name: "CMM Measuring", cap: "3000 x 1200mm", prec: "0.005mm", origin: "Germany" }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                        <td className="p-6 text-[14px] font-bold text-[#191C1E]">{row.name}</td>
                        <td className="p-6 text-[14px] text-[#515F78]">{row.cap}</td>
                        <td className="p-6 text-[14px] text-[#515F78]">{row.prec}</td>
                        <td className="p-6 text-[14px] text-[#0B96AC] font-bold">{row.origin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Footer (FIGMA PIXEL PERFECT) --- */}
      <footer className="bg-[#F8FAFC] pt-32 pb-12 text-[#191C1E]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-24">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-10">
                <div className="w-10 h-10 bg-[#0B96AC] flex items-center justify-center">
                  <span className="font-bold text-lg text-white">LB</span>
                </div>
                <span className="font-bold tracking-tighter text-xl uppercase text-[#191C1E]">Laxmi Balaji</span>
              </div>
              <p className="text-[#515F78] text-[14px] leading-relaxed font-light mb-10">
                Manufacturer of Automotive Fabrication Components, Sheet Metal Parts, Automotive Sub Assemblies, and Press Tools.
              </p>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-10 text-[#0B96AC]">Work Areas</h4>
              <ul className="space-y-4 text-[14px] text-[#515F78] font-light">
                <li><a href="#" className="hover:text-[#0B96AC] transition-colors">HOME</a></li>
                <li><a href="#" className="hover:text-[#0B96AC] transition-colors">ABOUT US</a></li>
                <li><a href="#" className="hover:text-[#0B96AC] transition-colors">PRODUCT</a></li>
                <li><a href="#" className="hover:text-[#0B96AC] transition-colors">CSR</a></li>
                <li><a href="#" className="hover:text-[#0B96AC] transition-colors">CONTACT US</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-start lg:items-center">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-10 text-[#0B96AC]">QR Link</h4>
              <div className="p-4 bg-white border border-slate-100 shadow-sm">
                <div className="w-32 h-32 bg-slate-50 flex items-center justify-center">
                  <span className="text-[10px] text-[#8E99AF] font-bold">QR CODE</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-10 text-[#0B96AC]">Contact</h4>
              <ul className="space-y-6 text-[14px] text-[#515F78] font-light">
                <li className="flex gap-3">
                   <MapPin className="w-5 h-5 text-[#0B96AC] shrink-0" />
                   <span>Hosur, Tamil Nadu, 635126</span>
                </li>
                <li className="flex gap-3">
                   <Mail className="w-5 h-5 text-[#0B96AC] shrink-0" />
                   <span>info@laxmibalaji.co</span>
                </li>
                <li className="flex gap-3">
                   <Phone className="w-5 h-5 text-[#0B96AC] shrink-0" />
                   <span>+91 944 333 4444</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-200 flex flex-col md:row justify-between items-center gap-6 text-[11px] font-bold text-[#8E99AF] tracking-widest">
            <p>COPYRIGHT © 2024 LAXMI BALAJI AUTOMOTIVE PRODUCTS PVT LTD. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;
