import React, { useState } from 'react';
import { X, Search, Book, Sparkles } from 'lucide-react';
import { DICTIONARY, lookupWord } from './dictionaryData.ts';
import { WordLookup } from './types.ts';

interface WordModalProps {
  initialWord?: string;
  onClose: () => void;
}

export const WordModal: React.FC<WordModalProps> = ({ initialWord = '', onClose }) => {
  const [searchTerm, setSearchTerm] = useState(initialWord);

  const directResult = searchTerm.trim() ? lookupWord(searchTerm.trim()) : null;

  // Search filtered dictionary entries
  const allEntries = Object.values(DICTIONARY);
  const filteredEntries = allEntries.filter((entry) => {
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase().trim();
    return (
      entry.word.toLowerCase().includes(term) ||
      entry.lemma.toLowerCase().includes(term) ||
      entry.meaningHy.includes(term) ||
      entry.contextExampleEs.toLowerCase().includes(term)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="bg-[#FAF7F2] rounded-2xl w-full max-w-2xl max-h-[85vh] shadow-2xl flex flex-col border border-[#D4AF37]/40 overflow-hidden">
        {/* Header */}
        <div className="bg-[#800020] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-white/10 rounded-lg">
              <Book className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold tracking-wide">
                Diccionario Literario ES ↔ HY
              </h3>
              <p className="text-xs text-amber-200/90 font-armenian">
                Իսպաներեն-հայերեն գրական և քերականական բառարան
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search bar */}
        <div className="p-4 border-b border-[#E8DEC8] bg-[#F5EFE6]">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#7A6B63]" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Escribe una palabra o término (ej: metáfora, romance, sinalefa)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white rounded-xl border border-[#D4AF37]/30 focus:border-[#800020] focus:ring-2 focus:ring-[#800020]/20 text-sm text-[#2C1810] placeholder-[#A0938A] outline-hidden shadow-2xs"
              autoFocus
            />
          </div>
        </div>

        {/* Content list */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {directResult && (
            <div className="p-4 bg-amber-50/80 rounded-xl border border-[#D4AF37] shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#800020] uppercase tracking-wider mb-1">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Resultado directo</span>
              </div>
              <WordCard entry={directResult} />
            </div>
          )}

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#7A6B63] uppercase tracking-wider">
              {searchTerm ? `Resultados encontrados (${filteredEntries.length})` : 'Términos literarios clave'}
            </h4>

            {filteredEntries.length === 0 ? (
              <div className="text-center py-8 text-[#7A6B63]">
                <p className="text-sm">No se encontraron términos para «{searchTerm}».</p>
                <p className="text-xs font-armenian mt-1">Տերմիններ չեն գտնվել:</p>
              </div>
            ) : (
              filteredEntries.map((entry, idx) => (
                <WordCard key={idx} entry={entry} />
              ))
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#EFE8DC] border-t border-[#E8DEC8] text-center text-xs text-[#7A6B63]">
          Vocabulario oficial para 1.º de la ESO — Lengua Castellana y Literatura
        </div>
      </div>
    </div>
  );
};

const WordCard: React.FC<{ entry: WordLookup }> = ({ entry }) => {
  return (
    <div className="bg-white p-4 rounded-xl border border-[#E8DEC8] hover:border-[#D4AF37]/60 transition-all shadow-2xs">
      <div className="flex flex-wrap items-baseline gap-2 mb-1.5">
        <h4 className="text-lg font-bold text-[#800020] capitalize font-cinzel">
          {entry.word}
        </h4>
        <span className="text-xs px-2 py-0.5 bg-[#F5EFE6] text-[#7A6B63] rounded-md font-mono">
          {entry.pos}
        </span>
        {entry.lemma !== entry.word && (
          <span className="text-xs text-[#7A6B63]">
            (Lema: <span className="italic font-medium">{entry.lemma}</span>)
          </span>
        )}
      </div>

      <div className="bg-amber-50/60 p-2.5 rounded-lg border-l-3 border-[#800020] my-2">
        <p className="text-xs text-[#7A6B63] font-medium mb-0.5">Значение на армянском:</p>
        <p className="text-[15px] text-[#2C1810] font-armenian font-semibold leading-relaxed">
          {entry.meaningHy}
        </p>
      </div>

      <div className="text-xs text-[#504037] space-y-1 mt-2.5 pt-2 border-t border-dashed border-gray-100">
        <p>
          <span className="font-semibold text-[#800020]">Ejemplo:</span> «{entry.contextExampleEs}»
        </p>
        <p className="font-armenian text-[#6B5A50] italic">
          «{entry.contextExampleHy}»
        </p>
      </div>
    </div>
  );
};
