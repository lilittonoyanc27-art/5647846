/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Compass,
  CheckCircle,
  XCircle,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  AlertTriangle,
  Lightbulb,
  Award,
  BookOpen,
} from 'lucide-react';
import { ALL_FIGURES } from './figuresData.ts';
import { InteractiveSentence } from './InteractiveSentence.tsx';

interface AprendePasoAPasoProps {
  onWordClick?: (word: string) => void;
  onFinish?: () => void;
}

export const AprendePasoAPaso: React.FC<AprendePasoAPasoProps> = ({ onWordClick, onFinish }) => {
  const [selectedFigureId, setSelectedFigureId] = useState<string>(ALL_FIGURES[0].id);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});

  const figure = ALL_FIGURES.find((f) => f.id === selectedFigureId) || ALL_FIGURES[0];

  const steps = [
    { num: 1, title: '¿Qué es y qué significa?' },
    { num: 2, title: '¿Cómo funciona?' },
    { num: 3, title: 'Truco para el examen' },
    { num: 4, title: 'Ejemplos analizados' },
    { num: 5, title: '¡Peligro de confusión!' },
    { num: 6, title: 'Mini-test de comprobación' },
    { num: 7, title: 'Esquema mental final' },
  ];

  const handleSelectOption = (qId: string, optId: string) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [qId]: optId,
    }));
  };

  const handleSelectFigure = (id: string) => {
    setSelectedFigureId(id);
    setCurrentStep(1);
    setQuizAnswers({});
  };

  const miniQuestions = figure.miniTestQuestions.slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header and Figure Picker */}
      <div className="bg-[#FAF7F2] border border-[#E7DECE] rounded-3xl p-6 sm:p-8 shadow-sm mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#800020] bg-white border border-[#E0D5C1] px-3 py-1 rounded-full mb-3 shadow-xs">
              <Compass className="w-3.5 h-3.5 mr-1.5" /> Método Guiado Paso a Paso
            </div>
            <h1 className="font-serif text-3xl font-bold text-[#2C1810]">
              Aprende Paso a Paso: {figure.name}
            </h1>
            <p className="text-[#5C4D44] text-xs sm:text-sm mt-1">
              Un camino estructurado en 7 etapas para asimilar esta figura a fondo y no olvidarla.
            </p>
          </div>

          <div className="shrink-0">
            <select
              value={selectedFigureId}
              onChange={(e) => handleSelectFigure(e.target.value)}
              className="bg-white border border-[#C5B7A5] font-semibold text-sm rounded-xl px-4 py-2.5 text-[#2C1810] focus:outline-none focus:border-[#800020] shadow-xs cursor-pointer"
            >
              {ALL_FIGURES.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.name} ({f.level})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 7-Step Navigation Indicator */}
        <div className="grid grid-cols-7 gap-1 sm:gap-2">
          {steps.map((st) => {
            const isCurrent = currentStep === st.num;
            const isCompleted = currentStep > st.num;

            return (
              <button
                key={st.num}
                onClick={() => setCurrentStep(st.num)}
                className={`py-2 px-1 text-center rounded-xl transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-[#800020] text-white shadow-xs'
                    : isCompleted
                    ? 'bg-[#E7DECE] text-[#2C1810]'
                    : 'bg-white border border-[#E0D5C1] text-[#8C7E74]'
                }`}
              >
                <div className="font-bold text-xs sm:text-sm">{st.num}</div>
                <div className="hidden md:block text-[10px] truncate">{st.title}</div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Step Body */}
      <div className="bg-white border border-[#E0D5C1] rounded-3xl p-6 sm:p-8 shadow-sm mb-6 min-h-[380px] flex flex-col justify-between">
        {/* Step 1 */}
        {currentStep === 1 && (
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#800020] mb-2 flex items-center">
              <Sparkles className="w-4 h-4 mr-1.5" /> Paso 1: ¿Qué es y qué significa el concepto?
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#2C1810] mb-4">
              Definición de {figure.name}
            </h2>

            <div className="bg-[#FAF7F2] p-5 rounded-2xl border-l-4 border-[#800020] mb-5 text-base sm:text-lg leading-relaxed text-[#2C1810]">
              <InteractiveSentence
                sentence={{
                  es: figure.definitionEs,
                  hy: figure.definitionHy,
                }}
                onWordClick={onWordClick}
              />
            </div>

            <div className="text-sm sm:text-base text-[#4A3E38] space-y-3 leading-relaxed">
              <InteractiveSentence
                sentence={{
                  es: figure.simpleExplanationEs,
                  hy: figure.simpleExplanationHy,
                }}
                onWordClick={onWordClick}
              />
            </div>

            <div className="mt-6 p-4 bg-amber-50/60 rounded-xl border border-amber-200 text-xs sm:text-sm text-amber-950">
              <strong>Plano lingüístico:</strong> Pertenece al nivel{' '}
              <span className="font-bold uppercase text-[#800020]">{figure.level}</span>.
            </div>
          </div>
        )}

        {/* Step 2 */}
        {currentStep === 2 && (
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#800020] mb-2 flex items-center">
              <Lightbulb className="w-4 h-4 mr-1.5 text-amber-600" /> Paso 2: ¿Cómo funciona
              exactamente su mecanismo?
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#2C1810] mb-4">
              El Mecanismo de {figure.name}
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#2C1810]">
              <p className="leading-relaxed">
                Cada figura literaria actúa sobre el lenguaje de una forma única:
              </p>

              <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-[#E0D5C1]">
                <InteractiveSentence
                  sentence={{
                    es: figure.howToRecognizeEs,
                    hy: figure.howToRecognizeHy,
                  }}
                  onWordClick={onWordClick}
                />
              </div>

              <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 text-xs sm:text-sm text-emerald-950">
                <strong>¿Por qué el autor la usa?</strong> Para dar un ritmo especial, transmitir
                emoción, intensificar una idea o crear un impacto estético en quien lo lee o escucha.
              </div>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {currentStep === 3 && (
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#800020] mb-2 flex items-center">
              <Sparkles className="w-4 h-4 mr-1.5" /> Paso 3: El Truco Infalible para el Examen
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#2C1810] mb-4">
              ¿Cómo identificarla en cuestión de segundos?
            </h2>

            <div className="bg-[#FAF7F2] p-6 rounded-2xl border-2 border-[#800020] mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-[#800020] mb-2">
                REGLA DE ORO
              </div>
              <div className="text-base sm:text-lg font-medium text-[#2C1810]">
                <InteractiveSentence
                  sentence={{
                    es: figure.howToRecognizeEs,
                    hy: figure.howToRecognizeHy,
                  }}
                  onWordClick={onWordClick}
                />
              </div>
            </div>

            <p className="text-sm text-[#5C4D44] leading-relaxed">
              En tu hoja de examen escolar, cuando leas el verso o la frase, busca inmediatamente esta
              marca. Si la encuentras, anota con seguridad <strong>«{figure.name}»</strong>.
            </p>
          </div>
        )}

        {/* Step 4 */}
        {currentStep === 4 && (
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#800020] mb-2 flex items-center">
              <BookOpen className="w-4 h-4 mr-1.5" /> Paso 4: Ejemplos Clásicos Analizados
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#2C1810] mb-4">
              Observa cómo se aplica en la práctica
            </h2>

            <div className="space-y-4">
              {figure.examples.slice(0, 3).map((ex, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#E0D5C1] space-y-2"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-[#800020]">
                    Ejemplo #{idx + 1}
                  </div>
                  <div className="font-serif italic text-base sm:text-lg text-[#2C1810]">
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
                        es: ex.breakdownEs,
                        hy: ex.breakdownHy,
                      }}
                      onWordClick={onWordClick}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Step 5 */}
        {currentStep === 5 && (
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-rose-700 mb-2 flex items-center">
              <AlertTriangle className="w-4 h-4 mr-1.5" /> Paso 5: ¡Cuidado con no confundirla!
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#2C1810] mb-4">
              La Trampa Más Habitual del Examen
            </h2>

            <div className="bg-rose-50/70 border-2 border-rose-300 p-6 rounded-2xl mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-2">
                ⚠️ Cuidado con este error frecuente
              </div>
              <div className="text-sm sm:text-base text-[#2C1810] leading-relaxed">
                <InteractiveSentence
                  sentence={{
                    es: `${figure.confusedWithEs} - ${figure.howToDistinguishEs}`,
                    hy: `${figure.confusedWithHy} - ${figure.howToDistinguishHy}`,
                  }}
                  onWordClick={onWordClick}
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#5C4D44] leading-relaxed">
              Los profesores suelen poner este caso específico como trampa en las opciones tipo test.
              Ten siempre presente la diferencia clave.
            </p>
          </div>
        )}

        {/* Step 6 */}
        {currentStep === 6 && (
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#800020] mb-2 flex items-center">
              <Award className="w-4 h-4 mr-1.5" /> Paso 6: Mini-test de Comprobación
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#2C1810] mb-4">
              Demuestra que dominas {figure.name}
            </h2>

            <div className="space-y-6">
              {miniQuestions.map((q, qIdx) => {
                const userChoice = quizAnswers[q.id];
                const isAnswered = !!userChoice;
                const isCorrect = userChoice === q.correctOptionId;

                return (
                  <div key={q.id} className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#E0D5C1]">
                    <div className="text-xs font-bold text-[#800020] mb-1">
                      Pregunta {qIdx + 1} de 3
                    </div>
                    <div className="font-semibold text-sm sm:text-base text-[#2C1810] mb-3">
                      <InteractiveSentence
                        sentence={{
                          es: q.question,
                          hy: q.questionHy,
                        }}
                        onWordClick={onWordClick}
                      />
                    </div>

                    {q.stimulus && (
                      <div className="font-serif italic text-sm text-[#4A3E38] p-2.5 bg-white rounded-lg border border-[#EBE2D4] mb-3">
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

                        let btnClass = 'border-[#E0D5C1] bg-white hover:border-[#800020]';
                        if (isAnswered) {
                          if (isOptionCorrect) {
                            btnClass = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold';
                          } else if (isSelected && !isOptionCorrect) {
                            btnClass = 'border-rose-400 bg-rose-50 text-rose-950';
                          }
                        }

                        return (
                          <button
                            key={opt.id}
                            onClick={() => handleSelectOption(q.id, opt.id)}
                            disabled={isAnswered}
                            className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${btnClass}`}
                          >
                            <InteractiveSentence
                              sentence={{
                                es: opt.text,
                                hy: opt.textHy,
                              }}
                              onWordClick={onWordClick}
                            />
                            {isAnswered && isOptionCorrect && (
                              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                            )}
                            {isAnswered && isSelected && !isOptionCorrect && (
                              <XCircle className="w-4 h-4 text-rose-600 shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 7 */}
        {currentStep === 7 && (
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 mb-2 flex items-center">
              <Award className="w-4 h-4 mr-1.5" /> Paso 7: Esquema Mental de Recuerdo
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#2C1810] mb-4">
              ¡Misión Cumplida! Tu Ficha Mental de {figure.name}
            </h2>

            <div className="bg-[#FAF7F2] border-2 border-[#D4AF37] rounded-2xl p-6 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div>
                  <strong className="text-[#800020] block mb-1">Nombre:</strong>
                  <span>{figure.name}</span>
                </div>
                <div>
                  <strong className="text-[#800020] block mb-1">Nivel:</strong>
                  <span className="capitalize">{figure.level}</span>
                </div>
                <div className="sm:col-span-2">
                  <strong className="text-[#800020] block mb-1">Idea Clave:</strong>
                  <InteractiveSentence
                    sentence={{
                      es: figure.simpleExplanationEs,
                      hy: figure.simpleExplanationHy,
                    }}
                    onWordClick={onWordClick}
                  />
                </div>
                <div className="sm:col-span-2">
                  <strong className="text-[#800020] block mb-1">Punto a Recordar en Examen:</strong>
                  <InteractiveSentence
                    sentence={{
                      es: figure.howToRecognizeEs,
                      hy: figure.howToRecognizeHy,
                    }}
                    onWordClick={onWordClick}
                  />
                </div>
              </div>
            </div>

            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs sm:text-sm text-emerald-950 flex items-center">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mr-3" />
              <span>
                Has completado los 7 pasos de <strong>{figure.name}</strong>. Puedes pasar a otra
                figura o realizar prácticas generales.
              </span>
            </div>
          </div>
        )}

        {/* Step Navigation footer buttons */}
        <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#EFE9DF]">
          <button
            onClick={() => setCurrentStep((p) => Math.max(1, p - 1))}
            disabled={currentStep === 1}
            className="px-4 py-2 border border-[#C5B7A5] rounded-xl text-xs sm:text-sm font-semibold text-[#2C1810] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FAF7F2] transition-colors flex items-center cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Anterior
          </button>

          <span className="text-xs text-[#6B5E55] font-medium">
            Paso {currentStep} de {steps.length}
          </span>

          {currentStep < steps.length ? (
            <button
              onClick={() => setCurrentStep((p) => Math.min(steps.length, p + 1))}
              className="px-5 py-2 bg-[#800020] text-[#D4AF37] font-semibold text-xs sm:text-sm rounded-xl hover:bg-[#600018] transition-colors flex items-center shadow-xs cursor-pointer"
            >
              Siguiente <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          ) : (
            <button
              onClick={onFinish}
              className="px-5 py-2 bg-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-xl hover:bg-emerald-800 transition-colors flex items-center shadow-xs cursor-pointer"
            >
              Completado <CheckCircle className="w-4 h-4 ml-1.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
