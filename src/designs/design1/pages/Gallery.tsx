// PIXEL-PERFECT FIGMA REBUILD - VIRTUAL FACTORY VERSION
import React from 'react';
import { motion } from 'framer-motion';
import { Box, FileText, Download, ArrowRight } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Gallery = () => {
  return (
    <div className="w-full bg-white font-sans text-lbap-dark overflow-hidden">
      
      {/* 1. Infrastructure Exploration Hero */}
      <section className="pt-20 pb-24">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.h4 variants={fadeInUp} className="text-[#0B96AC] text-[12px] font-bold tracking-[0.4em] uppercase mb-5">
              [ VIRTUAL FACTORY MODEL 3.0 ]
            </motion.h4>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-[56px] font-bold text-[#191C1E] leading-tight mb-8">
              Explore Our Infrastructure
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-[#515F78] text-lg max-w-2xl leading-relaxed opacity-90">
              Step inside our high-precision automotive manufacturing facility. Experience 360° of engineering excellence from our sterile white-room labs to the high-throughput press shops.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[500px] md:h-[700px] rounded-sm overflow-hidden shadow-2xl bg-gray-100 will-change-transform"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600" 
              alt="Sterile White Room Factory" 
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md px-6 py-3 border border-lbap-border rounded-sm flex items-center gap-4 shadow-xl"
            >
              <div className="w-8 h-8 rounded-full bg-[#0B96AC] flex items-center justify-center">
                <Box className="w-4 h-4 text-white" />
              </div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-[#191C1E] uppercase">Live 360° Interaction Enabled</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Facility Hotspots */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="flex justify-between items-end mb-16"
          >
            <div>
              <h2 className="text-4xl font-bold text-[#191C1E]">Facility Hotspots</h2>
              <div className="w-20 h-1 bg-[#0B96AC] mt-4"></div>
            </div>
            <span className="text-[11px] font-bold text-[#515F78] tracking-[0.3em] uppercase opacity-60">03 SECTORS DETAILED</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {[
              { 
                title: "Press Shop", 
                img: "https://images.unsplash.com/photo-1504917595217-d4ce5eb92815?auto=format&fit=crop&q=70&w=800",
                desc: "High-tonnage stamping line for structural chassis components with micron-level tolerance control."
              },
              { 
                title: "Assembly", 
                img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=70&w=800",
                desc: "Automated robotic synchronization for drivetrain integration and final body assembly."
              },
              { 
                title: "QC Lab", 
                img: "https://images.unsplash.com/photo-1581092324631-039a3007b58c?auto=format&fit=crop&q=70&w=800",
                desc: "Advanced metrology and stress testing facility ensuring global compliance standards."
              }
            ].map((sector, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-[#E2E8F0] overflow-hidden group hover:shadow-2xl transition-all duration-300 will-change-transform"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={sector.img} alt={sector.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold text-[#191C1E] mb-5">{sector.title}</h3>
                  <p className="text-[14px] text-[#515F78] leading-relaxed mb-8 opacity-80">{sector.desc}</p>
                  <button className="text-[#0B96AC] text-[11px] font-bold tracking-[0.2em] uppercase flex items-center gap-3">
                    VIEW SECTION <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Macro Detail Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-[#191C1E] mb-4">Macro Detail</h2>
            <p className="text-[16px] text-[#515F78] opacity-80">Technical close-ups showcasing the precision finish of our engineered components.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1530124560676-587cabee12f2?auto=format&fit=crop&q=70&w=800", ref: "REF: GRS-01" },
              { img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=70&w=800" },
              { img: "https://images.unsplash.com/photo-1565439390234-c09a8ebf85eb?auto=format&fit=crop&q=70&w=800" },
              { img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=70&w=800" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group overflow-hidden rounded-sm h-[450px] shadow-lg bg-gray-100 will-change-transform"
              >
                <img src={item.img} alt="Macro Detail" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                {item.ref && (
                  <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 text-[11px] font-bold tracking-[0.3em] text-[#191C1E] uppercase border border-lbap-border">
                    {item.ref}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technical Documentation Banner */}
      <section className="pb-32 pt-12">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F8FAFC] border border-[#E2E8F0] p-12 md:p-16 flex flex-col lg:flex-row justify-between items-center gap-12 rounded-sm shadow-xl relative overflow-hidden will-change-transform"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-[#0B96AC]"></div>
            <div>
              <h3 className="text-3xl font-bold text-[#191C1E] mb-4">Technical Documentation</h3>
              <p className="text-lg text-[#515F78] opacity-80">Download detailed infrastructure specifications and facility compliance reports.</p>
            </div>
            
            <div className="flex flex-wrap gap-6">
              <button className="bg-white border border-[#E2E8F0] px-10 py-5 flex items-center gap-4 text-[12px] font-bold tracking-[0.2em] text-[#191C1E] uppercase hover:shadow-lg transition-all active:scale-95">
                <FileText className="w-5 h-5 text-[#0B96AC]" />
                Plant Layout Specs
              </button>
              <button className="bg-white border border-[#E2E8F0] px-10 py-5 flex items-center gap-4 text-[12px] font-bold tracking-[0.2em] text-[#191C1E] uppercase hover:shadow-lg transition-all active:scale-95">
                <Download className="w-5 h-5 text-[#0B96AC]" />
                Machinery Metrics
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Gallery;
