import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Contact } from './components/Contact';
import { CatalogModal } from './components/CatalogModal';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [catalogModalOpen, setCatalogModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenCatalog={() => setCatalogModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          lang={lang}
          onOpenCatalog={() => setCatalogModalOpen(true)}
        />
        <About lang={lang} />
        <Products
          lang={lang}
          onOpenCatalog={() => setCatalogModalOpen(true)}
        />
        <Contact lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Catalog Modal */}
      <CatalogModal
        isOpen={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
