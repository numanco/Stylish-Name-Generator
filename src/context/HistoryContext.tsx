/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from "react";

interface HistoryContextType {
  history: string[];
  saveToHistory: (text: string) => void;
  clearHistory: () => void;
  showHistory: boolean;
  setShowHistory: (show: boolean) => void;
}

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

export function HistoryProvider({ children }: { children: React.ReactNode }) {
  const [history, setHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const savedHistory = localStorage.getItem("name_history");
    if (savedHistory) setHistory(JSON.parse(savedHistory));
  }, []);

  const saveToHistory = (text: string) => {
    setHistory(prev => {
      const newHistory = [text, ...prev.filter(h => h !== text)].slice(0, 20);
      localStorage.setItem("name_history", JSON.stringify(newHistory));
      return newHistory;
    });
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("name_history");
  };

  return (
    <HistoryContext.Provider value={{ history, saveToHistory, clearHistory, showHistory, setShowHistory }}>
      {children}
    </HistoryContext.Provider>
  );
}

export function useHistory() {
  const context = useContext(HistoryContext);
  if (context === undefined) {
    throw new Error("useHistory must be used within a HistoryProvider");
  }
  return context;
}
