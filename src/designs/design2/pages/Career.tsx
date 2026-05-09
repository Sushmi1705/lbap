import React from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Clock, Briefcase, ArrowRight, Play, Mail, Globe, Phone } from 'lucide-react';

const Career = () => {
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
            <a href="/gallery" className="hover:text-slate-900 transition-colors">Gallery</a>
            <a href="/career" className="text-slate-900 transition-colors">Career</a>
            <a href="/contact" className="hover:text-slate-900 transition-colors">Contact Us</a>
          </div>
          <button className="bg-[#0B96AC] text-white px-5 py-2 text-[11px] font-bold uppercase tracking-widest rounded-sm shadow-lg shadow-[#0B96AC]/20">
            Request Quote
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
            alt="Career Hero" 
            className="w-full h-full object-cover grayscale brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-[#0B96AC]/5 mix-blend-overlay"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-6xl lg:text-7xl font-black text-white mb-10 tracking-tighter leading-tight">
               Join the <span className="text-[#0B96AC]">Engineering Elite.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-12">
               LBAP is not just a factory; it's a precision laboratory. We are looking for the next generation of engineers to define the future of automotive excellence.
            </p>
            <div className="flex flex-wrap gap-5">
               <button className="bg-[#0B96AC] text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-all">Explore Openings</button>
               <button className="border border-white/20 text-white px-8 py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-white/10 transition-all">Our Culture</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Life at LBAP --- */}
      <section className="py-32 bg-white">
        <div className="container-custom">
           <h2 className="text-3xl font-black text-[#0B96AC] mb-4 tracking-tight">Life at LBAP</h2>
           <p className="text-slate-400 mb-20 text-sm">Hear from the specialists driving innovation across our fabrication and press component clusters.</p>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              {/* Testimonial */}
              <div className="lg:col-span-7 bg-slate-50 border border-slate-100 p-16 flex flex-col justify-center">
                 <div className="text-4xl text-[#0B96AC] font-black mb-10">"</div>
                 <h3 className="text-3xl font-black text-slate-900 mb-8 tracking-tight leading-tight">
                    "From Junior Intern to Lead Tool Designer in 4 years."
                 </h3>
                 <p className="text-slate-500 italic leading-relaxed mb-12 max-w-lg">
                    "The mentorship program here is unparalleled. At LBAP, you don't just work on parts; you understand the soul of the machine. Every micron matters."
                 </p>
                 <div className="flex items-center gap-4">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Rahul" className="w-16 h-16 rounded-full object-cover grayscale" />
                    <div>
                       <h4 className="text-lg font-bold text-slate-900">RAHUL SHARMA</h4>
                       <p className="text-[10px] font-bold text-[#0B96AC] uppercase tracking-widest">Lead Tooling Engineer</p>
                    </div>
                 </div>
              </div>

              {/* R&D Sandbox */}
              <div className="lg:col-span-5 bg-slate-900 p-12 text-white relative overflow-hidden group">
                 <div className="relative z-10">
                    <h4 className="text-2xl font-black mb-6 tracking-tight">The R&D Sandbox</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-12">
                       Our Quality Control lab uses real-time AI analytics. We don't just fix errors; we predict them before they happen.
                    </p>
                 </div>
                 <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop" 
                    alt="R&D" 
                    className="w-full h-64 object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-1000 mt-auto" 
                 />
              </div>
           </div>

           {/* Stats Row */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="border border-slate-100 p-10 flex items-center justify-between">
                 <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-[#0B96AC]/5 flex items-center justify-center text-[#0B96AC]">
                       <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                       <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Collaborative Culture</h4>
                       <p className="text-xs text-slate-400">Where boundaries between design and physics disappear.</p>
                    </div>
                 </div>
              </div>
              <div className="border border-slate-100 p-10 flex items-center justify-between">
                 <div className="flex items-center gap-6">
                    <div className="text-5xl font-black text-[#0B96AC]">98%</div>
                    <div>
                       <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight">Retention Rate</h4>
                       <p className="text-xs text-slate-400">Our commitment to employee growth remains our talent moat.</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- Growth Pathway --- */}
      <section className="py-32 bg-slate-50">
        <div className="container-custom">
           <div className="text-center mb-24">
              <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Growth Pathway</h2>
              <p className="text-[10px] font-bold text-[#0B96AC] uppercase tracking-[0.4em]">Structural Advancement for Junior Engineers</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Foundations", desc: "6-months focus on material science and plant floor physics.", active: false },
                { step: "02", title: "Specialization", desc: "Mastering Tech-II & III Level precision tools and robotic leadership.", active: false },
                { step: "03", title: "Operational Lead", desc: "Managing multi-functional lines with high availability targets.", active: false },
                { step: "04", title: "Chief Engineer", desc: "Driving innovation logic across global scale manufacturing hubs.", active: true }
              ].map((item, idx) => (
                <div key={idx} className={`p-10 border transition-all ${item.active ? 'bg-[#0B96AC] border-[#0B96AC] text-white shadow-2xl' : 'bg-white border-slate-100 text-slate-900'}`}>
                   <span className={`text-[10px] font-bold uppercase tracking-widest block mb-10 ${item.active ? 'text-white/50' : 'text-[#0B96AC]'}`}>{item.step}</span>
                   <h4 className="text-lg font-bold mb-6 tracking-tight">{item.title}</h4>
                   <p className={`text-sm leading-relaxed ${item.active ? 'text-white/70' : 'text-slate-400'}`}>{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- Available Positions --- */}
      <section className="py-32 bg-white">
        <div className="container-custom">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                 <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Available Positions</h2>
                 <p className="text-sm text-slate-400">Precision roles for precision talent.</p>
              </div>
              <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest">
                 <button className="px-5 py-2 bg-[#0B96AC] text-white">All</button>
                 <button className="px-5 py-2 border border-slate-100 text-slate-400 hover:border-[#0B96AC]/30">R&D</button>
                 <button className="px-5 py-2 border border-slate-100 text-slate-400 hover:border-[#0B96AC]/30">Quality Control</button>
                 <button className="px-5 py-2 border border-slate-100 text-slate-400 hover:border-[#0B96AC]/30">Tooling</button>
              </div>
           </div>

           <div className="border border-slate-100 rounded-sm overflow-hidden mb-12">
              <div className="flex border-b border-slate-100">
                 <div className="p-4 bg-slate-50 border-r border-slate-100">
                    <Search className="w-5 h-5 text-slate-300" />
                 </div>
                 <input type="text" placeholder="Search By Role or Keyword..." className="flex-grow p-4 outline-none text-sm font-medium" />
                 <div className="p-4 border-l border-slate-100 flex items-center gap-4 cursor-pointer">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Plant Location</span>
                    <ArrowRight className="w-4 h-4 text-slate-300 rotate-90" />
                 </div>
              </div>
              
              <div className="bg-white">
                 {[
                   { title: "Precision Tool Designer", type: "Full Time", loc: "Hosur Unit", role: "Tool & Die", exp: "5+ Years Exp" },
                   { title: "QA Metrology Specialist", type: "Full Time", loc: "Plant III", role: "Quality Control", exp: "3+ Years Exp" },
                   { title: "Fabrication Process Engineer", type: "Full Time", loc: "Gurgaon Plant", role: "R&D", exp: "2+ Years Exp" }
                 ].map((job, idx) => (
                   <div key={idx} className="p-8 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-all group">
                      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                         <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                            <div>
                               <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0B96AC] transition-colors">{job.title}</h3>
                               <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                                  <span className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest"><MapPin className="w-3 h-3" /> {job.loc}</span>
                                  <span className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest"><Clock className="w-3 h-3" /> {job.type}</span>
                                  <span className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest"><Briefcase className="w-3 h-3" /> {job.exp}</span>
                               </div>
                            </div>
                         </div>
                         <button className="px-8 py-3 border border-slate-100 text-[#0B96AC] text-[10px] font-bold uppercase tracking-widest hover:bg-[#0B96AC] hover:text-white hover:border-[#0B96AC] transition-all">
                            Apply Now
                         </button>
                      </div>
                   </div>
                 ))}
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

export default Career;
