/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Scale,
  Sparkles,
  CheckCircle,
  XCircle,
} from 'lucide-react';
import { ALL_COMPARISONS } from './comparisonsData.ts';
import { InteractiveSentence } from './InteractiveSentence.tsx';

interface ComparisonsViewProps {
  onWordClick?: (word: string) => void;
}

export const ComparisonsView: React.FC<ComparisonsViewProps> = ({ onWordClick }) => {
  const [selectedCompId, setSelectedCompId] = useState<string>(ALL_COMPARISONS[0].id);
  const [activeTab, setActiveTab] = useState<'tabla' | 'ejemplos' | 'ejercicios'>('tabla');
  const [exerciseAnswers, setExerciseAnswers] = useState<Record<string, string>>({});

  const activeComp =
    ALL_COMPARISONS.find((c) => c.id === selectedCompId) || ALL_COMPARISONS[0];

  const handleSelectOption = (qId: string, optId: string) => {
    setExerciseAnswers((prev) => ({
      ...prev,
      [qId]: optId,
    }));
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-[#FAF7F2] border border-[#E7DECE] rounded-3xl p-6 sm:p-8 shadow-sm mb-8 text-center sm:text-left">
        <div className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#800020] bg-white border border-[#E0D5C1] px-3 py-1 rounded-full mb-3 shadow-xs">
          <Scale className="w-3.5 h-3.5 mr-1.5" /> Estudio Comparativo
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1810] mb-2">
          Comparaciones y Diferencias Clave
        </h1>
        <p className="text-[#5C4D44] text-sm sm:text-base max-w-2xl leading-relaxed">
          Los exámenes de 1.º ESO suelen poner trampas enfrentando conceptos muy parecidos.
          Domina las diferencias definitivas con tablas interactivas, ejemplos enfrentados y
          ejercicios de distinción.
        </p>

        {/* 10 Comparisons Selection Pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {ALL_COMPARISONS.map((comp) => {
            const isSelected = comp.id === activeComp.id;
            return (
              <button
                key={comp.id}
                onClick={() => {
                  setSelectedCompId(comp.id);
                  setExerciseAnswers({});
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#800020] text-[#D4AF37] shadow-xs'
                    : 'bg-white border border-[#E0D5C1] text-[#6B5E55] hover:border-[#800020]'
                }`}
              >
                {comp.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white border border-[#E0D5C1] rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex border-b border-[#EFE9DF] pb-4 mb-6 gap-2">
          <button
            onClick={() => setActiveTab('tabla')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'tabla'
                ? 'bg-[#800020] text-white shadow-xs'
                : 'text-[#6B5E55] hover:bg-[#FAF7F2]'
            }`}
          >
            1. Tabla Comparativa
          </button>
          <button
            onClick={() => setActiveTab('ejemplos')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'ejemplos'
                ? 'bg-[#800020] text-white shadow-xs'
                : 'text-[#6B5E55] hover:bg-[#FAF7F2]'
            }`}
          >
            2. Ejemplos Enfrentados ({activeComp.examples.length})
          </button>
          <button
            onClick={() => setActiveTab('ejercicios')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === 'ejercicios'
                ? 'bg-[#800020] text-white shadow-xs'
                : 'text-[#6B5E55] hover:bg-[#FAF7F2]'
            }`}
          >
            3. Ejercicios de Distinción ({activeComp.exercises.length})
          </button>
        </div>

        {/* Tab 1: Comparative Table */}
        {activeTab === 'tabla' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#2C1810]">
              {activeComp.conceptA} frente a {activeComp.conceptB}
            </h2>

            <div className="overflow-x-auto rounded-2xl border border-[#E0D5C1]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF7F2] border-b border-[#E0D5C1] text-xs font-bold uppercase tracking-wider text-[#6B5E55]">
                    <th className="py-4 px-5">Aspecto / Criterio</th>
                    <th className="py-4 px-5 text-[#800020]">{activeComp.conceptA}</th>
                    <th className="py-4 px-5 text-[#2C1810]">{activeComp.conceptB}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFE9DF] text-xs sm:text-sm text-[#2C1810]">
                  {activeComp.table.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF7F2]/50 transition-colors">
                      <td className="py-3 px-5 font-bold text-[#5C4D44] bg-[#FAF7F2]/30">
                        <InteractiveSentence
                          sentence={{
                            es: row.aspect,
                            hy: row.aspectHy,
                          }}
                          onWordClick={onWordClick}
                        />
                      </td>
                      <td className="py-3 px-5">
                        <InteractiveSentence
                          sentence={{
                            es: row.conceptA,
                            hy: row.conceptAHy,
                          }}
                          onWordClick={onWordClick}
                        />
                      </td>
                      <td className="py-3 px-5">
                        <InteractiveSentence
                          sentence={{
                            es: row.conceptB,
                            hy: row.conceptBHy,
                          }}
                          onWordClick={onWordClick}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-2xl text-xs sm:text-sm text-amber-950 flex items-start">
              <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mr-2.5 mt-0.5" />
              <div>
                <strong>Consejo de examen:</strong> Cada fila de esta tabla representa una posible
                pregunta tipo test. Pulsa sobre cualquier texto para ver su traducción completa al
                armenio.
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Examples */}
        {activeTab === 'ejemplos' && (
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#2C1810] mb-4">
              Ejemplos con Justificación Detallada
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeComp.examples.map((ex, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#E0D5C1] space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#800020]">
                      Ejemplo #{idx + 1}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-0.5 bg-white border border-[#E0D5C1] rounded-full text-[#2C1810]">
                      {ex.belongsTo}
                    </span>
                  </div>

                  <div className="font-serif italic text-base text-[#2C1810]">
                    <InteractiveSentence
                      sentence={{
                        es: ex.text,
                        hy: ex.textHy,
                      }}
                      onWordClick={onWordClick}
                    />
                  </div>

                  <div className="text-xs sm:text-sm text-[#5C4D44] bg-white p-3 rounded-xl border border-[#EBE2D4]">
                    <InteractiveSentence
                      sentence={{
                        es: ex.reasonEs,
                        hy: ex.reasonHy,
                      }}
                      onWordClick={onWordClick}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Exercises */}
        {activeTab === 'ejercicios' && (
          <div className="space-y-6">
            <h2 className="font-serif text-2xl font-bold text-[#2C1810]">
              Pon a Prueba tu Capacidad de Distinción
            </h2>

            <div className="space-y-6">
              {activeComp.exercises.map((q, idx) => {
                const userChoice = exerciseAnswers[q.id];
                const isAnswered = !!userChoice;
                const isCorrect = userChoice === q.correctOptionId;

                return (
                  <div
                    key={q.id}
                    className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#E0D5C1] space-y-3"
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-[#800020]">
                      Ejercicio #{idx + 1}
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

                    {q.stimulus && (
                      <div className="font-serif italic text-sm text-[#4A3E38] p-3 bg-white rounded-xl border border-[#EBE2D4]">
                        <InteractiveSentence
                          sentence={{
                            es: q.stimulus,
                            hy: q.stimulusHy || '',
                          }}
                          onWordClick={onWordClick}
                        />
                      </div>
                    )}

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
        )}
      </div>
    </div>
  );
};
