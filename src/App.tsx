/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Sparkles, Smartphone, Languages, History, Moon, Sun, Globe } from "lucide-react";
import React, { useState, useEffect } from "react";
import GeneratorPage from "./pages/GeneratorPage";
import ScrollToTop from "./components/ScrollToTop";
import { SEO_DATA } from "./data/seo";
import { HistoryProvider, useHistory } from "./context/HistoryContext";

function Layout({ children }: { children: React.ReactNode }) {
  const { setShowHistory, history } = useHistory();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showLangs, setShowLangs] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const languages = [
    { name: "English", code: "en", flag: "🇺🇸" },
    { name: "Urdu", code: "ur", flag: "🇵🇰" },
    { name: "Hindi", code: "hi", flag: "🇮🇳" },
    { name: "Arabic", code: "ar", flag: "🇸🇦" },
    { name: "Bangla", code: "bn", flag: "🇧🇩" },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#0A0A0A] text-white' : 'bg-[#FAFAFA] text-[#1A1A1A]'} font-sans selection:bg-[#F27D26] selection:text-white`}>
      <header className={`${isDarkMode ? 'bg-[#111111] border-white/5' : 'bg-white border-black/10'} border-b sticky top-0 z-50`}>
        <div className="max-w-5xl mx-auto px-4 py-6 flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tighter flex items-center gap-2">
              STYLISH<span className="text-[#F27D26]">NAME</span>
            </h1>
            <p className={`text-[10px] uppercase tracking-widest font-semibold ${isDarkMode ? 'opacity-20' : 'opacity-40'}`}>Unicode Font Generator v2.0</p>
          </Link>
          <div className="flex gap-4 items-center">
            <nav className={`hidden md:flex gap-6 text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'opacity-20' : 'opacity-40'}`}>
              <Link to="/free-fire-stylish-name" className="hover:opacity-100 transition-opacity">Free Fire</Link>
              <Link to="/pubg-stylish-name" className="hover:opacity-100 transition-opacity">PUBG</Link>
              <Link to="/tiktok-stylish-name" className="hover:opacity-100 transition-opacity">TikTok</Link>
              <Link to="/urdu-stylish-name" className="hover:opacity-100 transition-opacity">Urdu</Link>
            </nav>
            <div className="flex items-center gap-2 border-l border-black/5 pl-4 ml-2">
               <div className="relative">
                  <button onClick={() => setShowLangs(!showLangs)} className={`p-2 rounded-full hover:bg-black/5 transition-colors ${isDarkMode && 'hover:bg-white/5'}`}>
                    <Globe size={20} />
                  </button>
                  <AnimatePresence>
                    {showLangs && (
                      <div className={`absolute right-0 top-full mt-2 w-48 rounded-2xl shadow-2xl border ${isDarkMode ? 'bg-[#1A1A1A] border-white/10' : 'bg-white border-black/5'} p-2 z-[100]`}>
                        {languages.map(lang => (
                          <button key={lang.code} onClick={() => setShowLangs(false)} className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-3 hover:bg-black/5 ${isDarkMode && 'hover:bg-white/5'}`}>
                            <span className="text-lg">{lang.flag}</span> {lang.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </AnimatePresence>
               </div>
               <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 rounded-full hover:bg-black/5 transition-colors ${isDarkMode && 'hover:bg-white/5'}`}>
                 {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
               </button>
               <button 
                onClick={() => setShowHistory(true)}
                className={`p-2 rounded-full hover:bg-black/5 transition-colors relative ${isDarkMode && 'hover:bg-white/5'}`}
                title="Recently Copied"
              >
                <History size={20} />
                {history.length > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-[#F27D26] rounded-full" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className={`${isDarkMode ? 'bg-[#111111] border-white/5' : 'bg-white border-black/10'} border-t py-20 mt-20`}>
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h2 className="text-xl font-bold tracking-tighter">STYLISH<span className="text-[#F27D26]">NAME</span></h2>
            <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-white/40' : 'text-black/40'}`}>The world's most advanced Unicode stylish name generator. Perfect for gaming, social media, and branding.</p>
          </div>
          <div className="space-y-4">
            <h3 className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'opacity-20' : 'opacity-40'}`}>Gaming Pages</h3>
            <ul className="text-xs space-y-2">
              <li><Link to="/free-fire-stylish-name" className="hover:text-[#F27D26] transition-colors">Free Fire Stylish Name</Link></li>
              <li><Link to="/pubg-stylish-name" className="hover:text-[#F27D26] transition-colors">PUBG Stylish Name</Link></li>
              <li><Link to="/bgmi-stylish-name" className="hover:text-[#F27D26] transition-colors">BGMI Stylish Name</Link></li>
              <li><Link to="/cod-mobile-stylish-name" className="hover:text-[#F27D26] transition-colors">COD Mobile Name</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'opacity-20' : 'opacity-40'}`}>Social Media</h3>
            <ul className="text-xs space-y-2">
              <li><Link to="/tiktok-stylish-name" className="hover:text-[#F27D26] transition-colors">TikTok Stylish Name</Link></li>
              <li><Link to="/instagram-stylish-name" className="hover:text-[#F27D26] transition-colors">Instagram Stylish Name</Link></li>
              <li><Link to="/facebook-stylish-name" className="hover:text-[#F27D26] transition-colors">Facebook Stylish Name</Link></li>
              <li><Link to="/whatsapp-stylish-name" className="hover:text-[#F27D26] transition-colors">WhatsApp Name</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'opacity-20' : 'opacity-40'}`}>Alphabet Pages</h3>
            <div className="grid grid-cols-5 gap-2">
              {"abcdefghijklmnopqrstuvwxyz".split("").map(l => (
                <Link key={l} to={`/${l}-stylish-name`} className="text-[10px] font-bold uppercase hover:text-[#F27D26] transition-colors">{l}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className={`max-w-5xl mx-auto px-4 mt-20 pt-12 border-t ${isDarkMode ? 'border-white/5' : 'border-black/10'} flex flex-col md:flex-row justify-between items-center gap-6 ${isDarkMode ? 'opacity-20' : 'opacity-40'} text-[10px] font-bold uppercase tracking-widest`}>
          <div className="flex gap-6">
            <span className="flex items-center gap-1"><Sparkles size={12} /> Free Forever</span>
            <span className="flex items-center gap-1"><Languages size={12} /> Multi-Language</span>
            <span className="flex items-center gap-1"><Smartphone size={12} /> Mobile Ready</span>
          </div>
          <p>© 2026 Stylish Name Generator • Built for Creators</p>
        </div>
      </footer>
    </div>
  );
}

import { AnimatePresence, motion } from "motion/react";

export default function App() {
  return (
    <HistoryProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<GeneratorPage />} />
            <Route path="/:slug" element={<GeneratorPage />} />
          </Routes>
        </Layout>
      </Router>
    </HistoryProvider>
  );
}
