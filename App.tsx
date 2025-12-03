import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Section from './components/Section';
import Charts from './components/Charts';
import { JORDAN_DATA, IRAQ_DATA } from './constants';
import { Language, Region } from './types';

function App() {
  const [language, setLanguage] = useState<Language>('zh');
  const [region, setRegion] = useState<Region>('jordan');

  const currentData = region === 'jordan' ? JORDAN_DATA : IRAQ_DATA;

  // Scroll to top when region changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [region]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <TopBar 
        language={language} 
        setLanguage={setLanguage}
        region={region}
        setRegion={setRegion}
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Hero / Report Title */}
        <div className="text-center mb-16 animate-fade-in">
          <div className={`inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase rounded-full ${region === 'jordan' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
             {language === 'zh' ? '2024-2025 年度报告' : '2024-2025 Annual Report'}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {language === 'zh' ? '小家电市场分析报告' : 'Small Appliance Market Analysis'}
          </h1>
          <h2 className={`text-2xl md:text-3xl font-light ${region === 'jordan' ? 'text-emerald-600' : 'text-amber-600'}`}>
            {currentData.regionName[language]}
          </h2>
        </div>

        {/* Dashboard / Charts Area */}
        <Charts region={region} language={language} />

        {/* Content Sections */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10 mb-12">
          {currentData.sections.map((section, index) => (
            <Section 
              key={index} 
              data={section} 
              language={language}
              region={region} 
            />
          ))}
        </div>

      </main>

      <footer className="bg-white border-t border-gray-200 py-8 text-center text-sm text-gray-400">
        <p>&copy; 2024 Market Analysis Report. Generated for review.</p>
      </footer>
    </div>
  );
}

export default App;