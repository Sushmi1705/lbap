import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Machineries from './pages/Machineries';
import CSR from './pages/CSR';
import Gallery from './pages/Gallery';
import Career from './pages/Career';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-outfit">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Products />} />
          <Route path="/machineries" element={<Machineries />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
