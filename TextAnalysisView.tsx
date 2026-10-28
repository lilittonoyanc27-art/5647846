/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle,
  XCircle,
  Sparkles,
  RotateCcw,
} from 'lucide-react';
import { ALL_TEXTS } from './textsData.ts';
import { InteractiveSentence } from './InteractiveSentence.tsx';

interface TextAnalysisViewProps {
  onWordClick?: (word: string) => void;
}

type TextCategoryFilter = 'all' | 'poema' | 'cuento' | 'leyenda' | 'mito' | 'figura';

export const TextAnalysisView: React.FC<TextAnalysisViewProps> = ({ onWordClick }) => {
  const [categoryFilter, setCategoryFilter] = useState<TextCategoryFilter>('all');
  const [selectedTextId, setSelectedTextId] = useState<string>(ALL_TEXTS[0].id);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({}); // questionId -> optionId

  const filteredTexts = ALL_TEXTS.filter((t) => {
    if (categoryFilter === 'all') return true;
    return t.category === categoryFilter;
  });

  const activeText = ALL_TEXTS.find((t) => t.id === selectedTextId) || ALL_TEXTS[0];

  const handleSelectOption = (questionId: string, optionId: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const resetCurrentTextAnswers = () => {
    const nextAnswers = { ...userAnswers };
    activeText.questions.forEach((q) => {
      delete nextAnswers[q.id];
    });
    setUserAnswers(nextAnswers);
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'poema':
        return 'Poema / Romance';
      case 'cuento':
        return 'Cuento Breve';
      case 'leyenda':
        return 'Leyenda Tradicional';
      case 'mito':
        return 'Mito Clásico';
      case 'figura':
        return 'Fragmento Retórico';
      default:
        return cat;
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="bg-[#FAF7F2] border border-[#E7DECE] rounded-3xl p-6 sm:p-8 shadow-sm mb-8 text-center sm:text-left">
        <div className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#800020] bg-white border border-[#E0D5C1] px-3 py-1 rounded-full mb-3 shadow-xs">
          <BookOpen className="w-3.5 h-3.5 mr-1.5" /> Taller de Análisis Literario
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1810] mb-2">
          Analiza el Texto
        </h1>
        <p className="text-[#5C4D44] text-sm sm:text-base max-w-2xl leading-relaxed">
          Lee poemas, romances, cuentos, leyendas y mitos reales. Pulsa sobre cualquier frase para
          ver su traducción al armenio o sobre cualquier palabra para buscarla en el diccionario. A
          continuación, responde a las 5 preguntas de análisis escolar de cada obra.
        </p>

        {/* Category Filters */}
        <div className="mt-6 flex flex-wrap gap-2">
          {(['all', 'poema', 'cuento', 'leyenda', 'mito', 'figura'] as TextCategoryFilter[]).map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
                  categoryFilter === cat
                    ? 'bg-[#800020] text-[#D4AF37] shadow-xs'
                    : 'bg-white border border-[#E0D5C1] text-[#6B5E55] hover:border-[#800020]'
                }`}
              >
                {cat === 'all'
                  ? 'Todos los textos'
                  : cat === 'poema'
                  ? 'Poemas & Romances'
                  : cat === 'cuento'
                  ? 'Cuentos'
                  : cat === 'leyenda'
                  ? 'Leyendas'
                  : cat === 'mito'
                  ? 'Mitos'
                  : 'Figuras'}
              </button>
            )
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Side: Text Selector List */}
        <div className="lg:col-span-4 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-[#6B5E55] mb-2 px-1">
            Lecturas disponibles ({filteredTexts.length})
          </div>
          <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
            {filteredTexts.map((item) => {
              const isSelected = item.id === activeText.id;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedTextId(item.id);
                  }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#FAF7F2] border-[#800020] shadow-xs ring-1 ring-[#800020]'
                      : 'bg-white border-[#E0D5C1] hover:border-[#800020]/50'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-semibold text-[#8C7E74] mb-1">
                    <span className="capitalize">{getCategoryLabel(item.category)}</span>
                    <span>{item.author}</span>
                  </div>
                  <div className="font-serif font-bold text-sm sm:text-base text-[#2C1810]">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Active Text Reader and Analysis Questions */}
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white border border-[#E0D5C1] rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-4 border-b border-[#EFE9DF]">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#800020]">
                  {getCategoryLabel(activeText.category)}
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#2C1810] mt-0.5">
                  {activeText.title}
                </h2>
                <span className="text-xs text-[#6B5E55] italic">Autor: {activeText.author}</span>
              </div>
            </div>

            {/* Sentences */}
            <div className="font-serif text-base sm:text-lg text-[#2C1810] leading-relaxed space-y-2 p-5 bg-[#FAF7F2] rounded-2xl border border-[#EBE2D4]">
              {activeText.sentences.map((sent, idx) => (
                <div key={idx} className="block mb-2">
                  <InteractiveSentence sentence={sent} onWordClick={onWordClick} />
                </div>
              ))}
            </div>

            <div className="mt-4 text-xs text-[#8C7E74] italic">
              💡 Consejo: Pulsa sobre cualquier verso u oración para desplegar su traducción al
              armenio.
            </div>
          </div>

          {/* Analysis Questions Section */}
          <div className="bg-white border border-[#E0D5C1] rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EFE9DF]">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#2C1810] flex items-center">
                  <Sparkles className="w-5 h-5 mr-2 text-[#800020]" />
                  Preguntas de Análisis Escolar
                </h3>
                <p className="text-xs text-[#6B5E55]">
                  Responde a las preguntas sobre este texto para afianzar tu comprensión.
                </p>
              </div>
              <button
                onClick={resetCurrentTextAnswers}
                className="text-xs text-[#800020] hover:underline flex items-center font-medium cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 mr-1" /> Reiniciar
              </button>
            </div>

            <div className="space-y-6">
              {activeText.questions.map((q, idx) => {
                const userChoice = userAnswers[q.id];
                const isAnswered = !!userChoice;
                const isCorrect = userChoice === q.correctOptionId;

                return (
                  <div
                    key={q.id}
                    className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#E0D5C1] space-y-3"
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-[#800020]">
                      Pregunta #{idx + 1}
                    </div>

                    <div className="font-semibold text-sm sm:text-base text-[#2C1810]">
                      <InteractiveSentence
                        sentence={{
                          es: q.question,
                          hy: q.questionHy,
                        }}
                        onWordClick={onWordClick}
                      />
                    </div>

                    <div className="space-y-2">
                      {q.options.map((opt) => {
                        const isSelected = userChoice === opt.id;
                        const isOptionCorrect = opt.id === q.correctOptionId;

                        let btnClass = 'border-[#E0D5C1] bg-white hover:border-[#800020] text-[#2C1810]';
                        if (isAnswered) {
                          if (isOptionCorrect) {
                            btnClass =
                              'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                          } else if (isSelected && !isOptionCorrect) {
                            btnClass = 'border-rose-400 bg-rose-50 text-rose-950';
                          }
                        }

                        return (
                          <button
                            key={opt.id}
                            onClick={() => handleSelectOption(q.id, opt.id)}
                            disabled={isAnswered}
                            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-start justify-between cursor-pointer ${btnClass}`}
                          >
                            <div className="flex-1">
                              <InteractiveSentence
                                sentence={{
                                  es: opt.text,
                                  hy: opt.textHy,
                                }}
                                onWordClick={onWordClick}
                              />
                            </div>
                            {isAnswered && isOptionCorrect && (
                              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 ml-2 mt-0.5" />
                            )}
                            {isAnswered && isSelected && !isOptionCorrect && (
                              <XCircle className="w-4 h-4 text-rose-600 shrink-0 ml-2 mt-0.5" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && q.explanationEs && (
                      <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs sm:text-sm text-amber-950">
                        <div className="font-bold text-amber-900 mb-1 flex items-center">
                          <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-700" /> Explicación:
                        </div>
                        <InteractiveSentence
                          sentence={{
                            es: q.explanationEs,
                            hy: q.explanationHy || '',
                          }}
                          onWordClick={onWordClick}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
