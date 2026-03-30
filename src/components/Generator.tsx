/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useCallback, useEffect } from "react";
import { Copy, Check, Search, Palette, Wand2, Loader2, X, Sparkles, Share2, History as HistoryIcon, Trash2, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FONT_MAPPINGS, DECORATIVE_TEMPLATES, CATEGORIES } from "../data/styles";
import { GoogleGenAI, Type } from "@google/genai";
import { useHistory } from "../context/HistoryContext";

interface GeneratorProps {
  initialName?: string;
  onCopy?: (text: string) => void;
}

export default function Generator({ initialName = "Your Name", onCopy }: GeneratorProps) {
  const { history, saveToHistory, clearHistory, showHistory, setShowHistory } = useHistory();
  const [name, setName] = useState(initialName);
  const [activeCategory, setActiveCategory] = useState("Popular");
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  const [textColor, setTextColor] = useState("#1A1A1A");
  const [gradientColor, setGradientColor] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  
  const [aiKeyword, setAiKeyword] = useState("");
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);

  const [visibleCount, setVisibleCount] = useState(24);

  const applyFont = (text: string, fontMap: Record<string, string>) => {
    return text
      .split("")
      .map((char) => fontMap[char] || char)
      .join("");
  };

  const generatedStyles = useMemo(() => {
    const styles: { id: string; text: string; category: string }[] = [];
    const input = name.trim() || "Your Name";

    FONT_MAPPINGS.forEach((font, idx) => {
      styles.push({
        id: `font-${idx}`,
        text: applyFont(input, font.map),
        category: "Popular",
      });
    });

    DECORATIVE_TEMPLATES.forEach((template, idx) => {
      const fontIdx = idx % FONT_MAPPINGS.length;
      const styledText = applyFont(input, FONT_MAPPINGS[fontIdx].map);
      
      styles.push({
        id: `template-${idx}`,
        text: `${template.prefix}${styledText}${template.suffix}`,
        category: template.category,
      });
    });

    return styles;
  }, [name]);

  const filteredStyles = useMemo(() => {
    let base = generatedStyles;
    
    if (activeCategory !== "Popular") {
      base = base.filter((s) => s.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      base = base.filter(s => 
        s.text.toLowerCase().includes(query) || 
        s.category.toLowerCase().includes(query)
      );
    }

    return base;
  }, [generatedStyles, activeCategory, searchQuery]);

  const handleCopy = useCallback((text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    saveToHistory(text);
    if (onCopy) onCopy(text);
    setTimeout(() => setCopiedId(null), 2000);
  }, [onCopy, history]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Stylish Name Generator',
          text: `Check out these stylish names I generated!`,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Share failed", err);
      }
    } else {
      handleCopy(window.location.href, 'share-link');
    }
  };

  const generateAISuggestions = async () => {
    if (!aiKeyword.trim()) return;
    setIsGeneratingAI(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Generate 10 stylish, creative, and unique nicknames or names based on the keyword: "${aiKeyword}". Use a mix of cool symbols and fancy characters. Return only a JSON array of strings.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        }
      });
      const suggestions = JSON.parse(response.text);
      setAiSuggestions(suggestions);
    } catch (error) {
      console.error("AI Generation failed", error);
    } finally {
      setIsGeneratingAI(false);
    }
  };

  const textStyle = useMemo(() => {
    if (gradientColor) {
      return {
        background: `linear-gradient(to right, ${textColor}, ${gradientColor})`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline-block"
      };
    }
    return { color: textColor };
  }, [textColor, gradientColor]);

  return (
    <div className="space-y-8">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="relative group">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Type your name..."
              className="w-full bg-white dark:bg-[#111111] border-2 border-black/10 dark:border-white/5 rounded-2xl px-6 py-8 text-3xl font-bold tracking-tight focus:outline-none focus:border-[#F27D26] transition-all placeholder:opacity-20 shadow-sm"
              maxLength={30}
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-20 group-focus-within:opacity-100 transition-opacity">
              <Search size={24} />
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center bg-white dark:bg-[#111111] p-4 rounded-2xl border border-black/10 dark:border-white/5 shadow-sm">
             <div className="flex items-center gap-3">
                <Palette size={18} className="opacity-40" />
                <div className="flex gap-2">
                  <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} className="w-8 h-8 rounded cursor-pointer border-none bg-transparent" />
                  <input type="color" value={gradientColor || "#ffffff"} onChange={(e) => setGradientColor(e.target.value)} className={`w-8 h-8 rounded cursor-pointer border-none bg-transparent ${!gradientColor && 'opacity-30'}`} />
                  {gradientColor && <button onClick={() => setGradientColor("")} className="p-1 hover:bg-black/5 dark:hover:bg-white/5 rounded"><X size={14} /></button>}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider opacity-40">Custom Colors</span>
             </div>
             <div className="h-6 w-[1px] bg-black/5 dark:bg-white/5 mx-2 hidden sm:block" />
             <div className="flex-1 min-w-[200px] relative">
                <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search styles..." className="w-full bg-black/5 dark:bg-white/5 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#F27D26]" />
                <Search size={14} className="absolute right-3 top-1/2 -translate-y-1/2 opacity-20" />
             </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#111111] rounded-2xl border border-black/10 dark:border-white/5 p-6 h-fit shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-widest opacity-60 mb-4 flex items-center gap-2"><Wand2 size={14} /> AI Suggestions</h2>
          <div className="flex gap-2 mb-4">
            <input type="text" value={aiKeyword} onChange={(e) => setAiKeyword(e.target.value)} placeholder="Keyword..." className="flex-1 bg-black/5 dark:bg-white/5 rounded-xl px-4 py-2 text-sm focus:outline-none" />
            <button onClick={generateAISuggestions} disabled={isGeneratingAI} className="bg-[#1A1A1A] dark:bg-white dark:text-black text-white p-2 rounded-xl hover:bg-[#F27D26] transition-colors disabled:opacity-50">
              {isGeneratingAI ? <Loader2 size={18} className="animate-spin" /> : <Sparkles size={18} />}
            </button>
          </div>
          <div className="space-y-2">
            {aiSuggestions.map((s, i) => (
              <button key={i} onClick={() => handleCopy(s, `ai-${i}`)} className="w-full text-left p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-sm transition-colors flex justify-between items-center group">
                <span className="truncate">{s}</span>
                <Copy size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar scroll-smooth">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeCategory === cat ? "bg-[#1A1A1A] dark:bg-white dark:text-black text-white shadow-xl shadow-black/10" : "bg-white dark:bg-[#111111] border border-black/10 dark:border-white/5 hover:border-black/20 shadow-sm"}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredStyles.slice(0, visibleCount).map((style) => (
            <motion.div layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} key={style.id} className="bg-white dark:bg-[#111111] border border-black/10 dark:border-white/5 rounded-2xl p-6 flex justify-between items-center group hover:border-[#F27D26]/30 hover:shadow-xl hover:shadow-[#F27D26]/5 transition-all cursor-pointer shadow-sm" onClick={() => handleCopy(style.text, style.id)}>
              <div className="flex flex-col gap-1 overflow-hidden">
                <span className="text-2xl truncate" style={textStyle}>{style.text}</span>
                <span className="text-[9px] font-bold uppercase tracking-widest opacity-30 group-hover:opacity-60 transition-opacity">{style.category} Style</span>
              </div>
              <div className={`p-3 rounded-xl transition-all ${copiedId === style.id ? "bg-green-500 text-white" : "bg-black/5 dark:bg-white/10 group-hover:bg-[#1A1A1A] dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black"}`}>
                {copiedId === style.id ? <Check size={20} /> : <Copy size={20} />}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {visibleCount < filteredStyles.length && (
        <div className="flex justify-center pt-8">
          <button 
            onClick={() => setVisibleCount(prev => prev + 24)}
            className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-[#111111] border border-black/10 dark:border-white/10 rounded-2xl font-bold hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
          >
            Load More Styles <ChevronDown size={18} />
          </button>
        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <button onClick={() => setShowHistory(true)} className="bg-white dark:bg-[#1A1A1A] text-[#1A1A1A] dark:text-white p-4 rounded-full shadow-2xl border border-black/5 dark:border-white/5 hover:scale-110 transition-transform relative">
          <HistoryIcon size={24} />
          {history.length > 0 && <span className="absolute -top-1 -right-1 bg-[#F27D26] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">{history.length}</span>}
        </button>
        <button onClick={handleShare} className="bg-[#1A1A1A] dark:bg-white text-white dark:text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform">
          <Share2 size={24} />
        </button>
      </div>

      {/* History Drawer */}
      <AnimatePresence>
        {showHistory && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowHistory(false)} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]" />
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="fixed right-0 top-0 h-full w-full max-w-md bg-white dark:bg-[#0A0A0A] z-[101] shadow-2xl p-8 overflow-y-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold flex items-center gap-3"><HistoryIcon /> Recently Copied</h2>
                <button onClick={() => setShowHistory(false)} className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full"><X size={24} /></button>
              </div>
              
              {history.length > 0 ? (
                <div className="space-y-4">
                  <button onClick={clearHistory} className="text-xs font-bold text-red-500 uppercase tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity mb-4"><Trash2 size={14} /> Clear All History</button>
                  {history.map((h, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-black/5 dark:bg-white/5 rounded-2xl group">
                      <span className="text-xl font-medium">{h}</span>
                      <button onClick={() => handleCopy(h, `hist-${i}`)} className="p-2 bg-white dark:bg-[#1A1A1A] rounded-xl shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        <Copy size={18} />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-[60vh] flex flex-col items-center justify-center text-center opacity-30 space-y-4">
                  <HistoryIcon size={64} />
                  <p className="font-medium">No history yet. Start copying some styles!</p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {copiedId && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#1A1A1A] text-white px-8 py-4 rounded-full font-bold text-sm shadow-2xl flex items-center gap-3 z-[100]">
            <Check size={18} className="text-green-400" /> COPIED TO CLIPBOARD
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
