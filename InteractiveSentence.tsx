import React, { useState } from 'react';
import { Languages, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { lookupWord } from './dictionaryData.ts';

interface InteractiveSentenceProps {
  sentence: {
    es: string;
    hy: string;
    note?: string;
  };
  forceShowTranslation?: boolean;
  onWordClick?: (word: string) => void;
  className?: string;
}

export const InteractiveSentence: React.FC<InteractiveSentenceProps> = ({
  sentence,
  forceShowTranslation = false,
  onWordClick,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const showTranslation = forceShowTranslation || isOpen;

  // Split sentence into words so user can click individual words
  const words = sentence.es.split(/(\s+|[.,;:!?«»()]+)/);

  const handleWordClick = (e: React.MouseEvent, rawWord: string) => {
    e.stopPropagation();
    const clean = rawWord.trim().replace(/^[«"(]+|[.,;:!?»")]+$/g, '');
    if (clean.length > 1 && onWordClick) {
      onWordClick(clean);
    }
  };

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`group my-2 p-2.5 sm:p-3 rounded-xl transition-all duration-200 cursor-pointer border ${
        showTranslation
          ? 'bg-[#FAF2E6] border-[#D4AF37]/50 shadow-xs'
          : 'bg-white/85 border-transparent hover:border-[#800020]/25 hover:bg-[#FDFBF7]'
      } ${className}`}
      title="Pulsa para ver la traducción al armenio / Սեղմիր հայերեն թարգմանությունը տեսնելու համար"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="text-[17px] sm:text-[19px] lg:text-[20px] text-[#2C1810] leading-relaxed select-text font-normal">
          {words.map((chunk, idx) => {
            const isClickableWord = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ]+$/.test(
              chunk.trim().replace(/^[«"(]+|[.,;:!?»")]+$/g, '')
            );
            const lookup = isClickableWord ? lookupWord(chunk) : null;

            if (isClickableWord) {
              return (
                <span
                  key={idx}
                  onClick={(e) => handleWordClick(e, chunk)}
                  className={`inline-block transition-colors rounded-xs px-0.5 ${
                    lookup
                      ? 'underline decoration-dotted decoration-[#800020]/50 hover:bg-[#800020]/15 hover:text-[#800020] cursor-help font-medium'
                      : 'hover:bg-amber-100/70'
                  }`}
                  title={lookup ? `Ver vocabulario: ${lookup.meaningHy}` : undefined}
                >
                  {chunk}
                </span>
              );
            }
            return <span key={idx}>{chunk}</span>;
          })}
        </p>

        <span
          className={`shrink-0 inline-flex items-center gap-1.5 text-xs sm:text-sm px-2.5 py-1 rounded-full transition-all duration-200 mt-0.5 ${
            showTranslation
              ? 'bg-[#800020] text-white shadow-xs'
              : 'bg-[#F0EAE1] text-[#7A6B63] group-hover:bg-[#800020]/10 group-hover:text-[#800020]'
          }`}
        >
          <Languages className="w-4 h-4" />
          <span className="font-semibold text-xs sm:text-sm">
            {showTranslation ? 'Հայերեն' : 'Թարգմանել'}
          </span>
          {showTranslation ? (
            <ChevronUp className="w-3.5 h-3.5 ml-0.5" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 ml-0.5" />
          )}
        </span>
      </div>

      {showTranslation && (
        <div className="mt-3 pt-2.5 border-t border-[#D4AF37]/35 text-amber-950 font-armenian text-[16px] sm:text-[18px] lg:text-[19px] leading-relaxed bg-[#FFFDF9] p-3 rounded-lg shadow-2xs">
          <div className="flex items-center gap-1.5 text-xs sm:text-sm text-[#800020] font-sans font-bold mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#800020]"></span>
            <span>Հայերեն թարգմանություն</span>
          </div>
          <p className="font-normal text-[#2C1810] leading-relaxed">{sentence.hy}</p>
          {sentence.note && (
            <div className="mt-2 text-xs sm:text-sm text-[#7A6B63] flex items-center gap-1.5 font-sans">
              <BookOpen className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <span className="italic">{sentence.note}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
