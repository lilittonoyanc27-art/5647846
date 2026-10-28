/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import {
  Clock,
  Award,
  AlertTriangle,
  CheckCircle,
  XCircle,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  BookOpen,
  BarChart2,
  Sparkles,
} from 'lucide-react';
import { Question, ExamResult } from './types.ts';
import { generateExamQuestions, getAllQuestions } from './questionsData.ts';
import { saveExamResult, recordUserError, getStoredErrors } from './storage.ts';
import { InteractiveSentence } from './InteractiveSentence.tsx';

interface ExamViewProps {
  onWordClick?: (word: string) => void;
  onExit?: () => void;
  initialPreset?: 'short' | 'medium' | 'full' | 'errors';
}

type ExamPreset = 'short' | 'medium' | 'full' | 'errors';

export const ExamView: React.FC<ExamViewProps> = ({
  onWordClick,
  onExit,
  initialPreset = 'full',
}) => {
  const [preset, setPreset] = useState<ExamPreset>(initialPreset);
  const [isExamStarted, setIsExamStarted] = useState(false);
  const [isExamSubmitted, setIsExamSubmitted] = useState(false);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({}); // questionId -> optionId
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState(3600);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [result, setResult] = useState<ExamResult | null>(null);

  // Review mode filter
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect' | 'correct'>('all');

  const startExam = (chosenPreset: ExamPreset) => {
    setPreset(chosenPreset);
    let selectedQuestions: Question[] = [];

    if (chosenPreset === 'short') {
      selectedQuestions = generateExamQuestions(20);
      setTimeRemainingSeconds(20 * 60);
    } else if (chosenPreset === 'medium') {
      selectedQuestions = generateExamQuestions(50);
      setTimeRemainingSeconds(45 * 60);
    } else if (chosenPreset === 'full') {
      selectedQuestions = generateExamQuestions(100);
      setTimeRemainingSeconds(90 * 60);
    } else if (chosenPreset === 'errors') {
      const storedErrors = getStoredErrors();
      const allQ = getAllQuestions();
      const errorMap = new Map(allQ.map((q) => [q.id, q]));
      const errorQuestions = storedErrors
        .map((e) => errorMap.get(e.questionId))
        .filter((q): q is Question => q !== undefined);

      if (errorQuestions.length === 0) {
        selectedQuestions = generateExamQuestions(20);
      } else {
        selectedQuestions = errorQuestions.slice(0, 50);
      }
      setTimeRemainingSeconds(selectedQuestions.length * 70);
    }

    setQuestions(selectedQuestions);
    setUserAnswers({});
    setCurrentIndex(0);
    setIsExamStarted(true);
    setIsExamSubmitted(false);
    setResult(null);
  };

  // Timer countdown
  useEffect(() => {
    if (!isExamStarted || isExamSubmitted) return;

    const interval = setInterval(() => {
      setTimeRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isExamStarted, isExamSubmitted, questions, userAnswers]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectOption = (questionId: string, optionId: string) => {
    if (isExamSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const calculateResults = (): ExamResult => {
    let score = 0;
    const categoryTotals: Record<string, { total: number; correct: number }> = {};
    const incorrectItems: { question: Question; selectedId: string }[] = [];

    questions.forEach((q) => {
      const cat = `Tema ${q.bloqueId}`;
      if (!categoryTotals[cat]) {
        categoryTotals[cat] = { total: 0, correct: 0 };
      }
      categoryTotals[cat].total += 1;

      const chosenOptionId = userAnswers[q.id];
      if (chosenOptionId === q.correctOptionId) {
        score += 1;
        categoryTotals[cat].correct += 1;
      } else {
        incorrectItems.push({ question: q, selectedId: chosenOptionId || '' });
        const selectedOpt = q.options.find((o) => o.id === chosenOptionId);
        const correctOpt = q.options.find((o) => o.id === q.correctOptionId);

        // Record user error
        recordUserError({
          questionId: q.id,
          topicId: q.topicId,
          questionText: q.question,
          questionTextHy: q.questionHy,
          userSelectedOptionText: selectedOpt ? selectedOpt.text : 'Sin respuesta',
          userSelectedOptionTextHy: selectedOpt ? selectedOpt.textHy : 'Առանց պատասխանի',
          correctOptionText: correctOpt ? correctOpt.text : '',
          correctOptionTextHy: correctOpt ? correctOpt.textHy : '',
          explanationEs: q.explanationEs,
          explanationHy: q.explanationHy,
        });
      }
    });

    const categoryScores: Record<string, { correct: number; total: number }> = {};
    Object.keys(categoryTotals).forEach((cat) => {
      categoryScores[cat] = {
        correct: categoryTotals[cat].correct,
        total: categoryTotals[cat].total,
      };
    });

    const percentage = Math.round((score / questions.length) * 100);
    const scoreOn10 = Number(((score / questions.length) * 10).toFixed(1));

    const examRes: ExamResult = {
      id: `exam-${Date.now()}`,
      date: new Date().toLocaleDateString('es-ES'),
      totalQuestions: questions.length,
      correctCount: score,
      incorrectCount: questions.length - score,
      scoreOn10,
      percentage,
      durationSeconds: 0,
      categoryScores,
      incorrectQuestions: incorrectItems,
    };

    saveExamResult(examRes);
    return examRes;
  };

  const handleSubmitExam = () => {
    setShowConfirmSubmit(false);
    const res = calculateResults();
    setResult(res);
    setIsExamSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const answeredCount = Object.keys(userAnswers).length;
  const currentQuestion = questions[currentIndex];

  const filteredReviewQuestions = useMemo(() => {
    if (!isExamSubmitted) return [];
    return questions.filter((q) => {
      const isCorrect = userAnswers[q.id] === q.correctOptionId;
      if (reviewFilter === 'correct') return isCorrect;
      if (reviewFilter === 'incorrect') return !isCorrect;
      return true;
    });
  }, [isExamSubmitted, questions, userAnswers, reviewFilter]);

  // Screen 1: Start selection
  if (!isExamStarted) {
    const errorCount = getStoredErrors().length;

    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-[#FAF7F2] border border-[#E7DECE] rounded-3xl p-6 sm:p-10 shadow-sm mb-8 text-center">
          <div className="w-16 h-16 bg-[#800020] text-[#D4AF37] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
            <Award className="w-9 h-9" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1810] mb-3">
            Simulacro de Examen Oficial — 1.º ESO
          </h1>
          <p className="text-[#5C4D44] max-w-2xl mx-auto leading-relaxed mb-6">
            Pon a prueba todos tus conocimientos con las mismas exigencias, cuotas de preguntas y
            puntuación sobre 10 utilizada en los institutos de España. Recuerda: puedes pulsar en
            cualquier frase para ver su traducción al armenio.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left mt-8">
            <div
              onClick={() => startExam('full')}
              className="bg-white border-2 border-[#800020] rounded-2xl p-5 hover:shadow-lg transition-all cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute top-2 right-2 bg-[#800020] text-[#D4AF37] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full">
                Recomendado
              </div>
              <div className="text-2xl font-bold font-serif text-[#800020] mb-1">100 Preguntas</div>
              <div className="font-semibold text-[#2C1810] text-sm mb-2">Examen Completo Oficial</div>
              <p className="text-xs text-[#6B5E55] mb-4">
                Distribución exacta de los 19 temas, figuras y análisis de texto. 90 minutos.
              </p>
              <div className="flex items-center text-xs font-bold text-[#800020] group-hover:translate-x-1 transition-transform">
                Comenzar <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            <div
              onClick={() => startExam('medium')}
              className="bg-white border border-[#E0D5C1] rounded-2xl p-5 hover:border-[#800020] hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="text-2xl font-bold font-serif text-[#2C1810] mb-1">50 Preguntas</div>
              <div className="font-semibold text-[#2C1810] text-sm mb-2">Examen Medio</div>
              <p className="text-xs text-[#6B5E55] mb-4">
                Excelente para repasar antes del examen general. 45 minutos.
              </p>
              <div className="flex items-center text-xs font-bold text-[#800020] group-hover:translate-x-1 transition-transform">
                Comenzar <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            <div
              onClick={() => startExam('short')}
              className="bg-white border border-[#E0D5C1] rounded-2xl p-5 hover:border-[#800020] hover:shadow-md transition-all cursor-pointer group"
            >
              <div className="text-2xl font-bold font-serif text-[#2C1810] mb-1">20 Preguntas</div>
              <div className="font-semibold text-[#2C1810] text-sm mb-2">Simulacro Rápido</div>
              <p className="text-xs text-[#6B5E55] mb-4">
                Un test ágil de 20 minutos para comprobar tu nivel en cualquier momento.
              </p>
              <div className="flex items-center text-xs font-bold text-[#800020] group-hover:translate-x-1 transition-transform">
                Comenzar <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            <div
              onClick={() => startExam('errors')}
              className={`bg-white border rounded-2xl p-5 transition-all cursor-pointer group ${
                errorCount > 0
                  ? 'border-amber-400 hover:border-amber-600 hover:shadow-md'
                  : 'border-[#E0D5C1] opacity-70'
              }`}
            >
              <div className="text-2xl font-bold font-serif text-amber-700 mb-1">
                {errorCount} {errorCount === 1 ? 'Error' : 'Errores'}
              </div>
              <div className="font-semibold text-[#2C1810] text-sm mb-2">Examen de Errores</div>
              <p className="text-xs text-[#6B5E55] mb-4">
                Preguntas que has fallado anteriormente en tus prácticas.
              </p>
              <div className="flex items-center text-xs font-bold text-amber-800 group-hover:translate-x-1 transition-transform">
                {errorCount > 0 ? 'Repasar fallos' : 'Sin errores guardados'}{' '}
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#E0D5C1] rounded-2xl p-6 sm:p-8">
          <h2 className="font-serif text-xl font-bold text-[#2C1810] mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2 text-[#800020]" />
            Estructura y Cuota Oficial del Examen de 100 Preguntas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4A3E38]">
            <div className="flex justify-between p-2.5 bg-[#FAF7F2] rounded-lg">
              <span>Tema 1: Literatura popular (oralidad, anonimato, estribillos)</span>
              <strong className="text-[#800020]">8 preguntas</strong>
            </div>
            <div className="flex justify-between p-2.5 bg-[#FAF7F2] rounded-lg">
              <span>Tema 2: El romance (octosílabos, rima asonante en pares)</span>
              <strong className="text-[#800020]">7 preguntas</strong>
            </div>
            <div className="flex justify-between p-2.5 bg-[#FAF7F2] rounded-lg">
              <span>Tema 3: La leyenda (base real, elementos sobrenaturales)</span>
              <strong className="text-[#800020]">5 preguntas</strong>
            </div>
            <div className="flex justify-between p-2.5 bg-[#FAF7F2] rounded-lg">
              <span>Tema 4: El mito (dioses, origen del universo)</span>
              <strong className="text-[#800020]">5 preguntas</strong>
            </div>
            <div className="flex justify-between p-2.5 bg-[#FAF7F2] rounded-lg">
              <span>Tema 5: El cuento (prosa breve, estructura tripartita)</span>
              <strong className="text-[#800020]">5 preguntas</strong>
            </div>
            <div className="flex justify-between p-2.5 bg-[#FAF7F2] rounded-lg">
              <span>Tema 6: Literatura culta y tabla comparativa Popular VS Culta</span>
              <strong className="text-[#800020]">8 preguntas</strong>
            </div>
            <div className="flex justify-between p-2.5 bg-[#FAF7F2] rounded-lg">
              <span>Tema 7: El lenguaje literario y estético</span>
              <strong className="text-[#800020]">7 preguntas</strong>
            </div>
            <div className="flex justify-between p-2.5 bg-[#FAF7F2] rounded-lg">
              <span>Tema 8: La prosa y el verso</span>
              <strong className="text-[#800020]">5 preguntas</strong>
            </div>
            <div className="flex justify-between p-2.5 bg-[#FAF7F2] rounded-lg">
              <span>Figuras de plano fónico (Aliteración, Onomatopeya, Paronomasia)</span>
              <strong className="text-[#800020]">12 preguntas</strong>
            </div>
            <div className="flex justify-between p-2.5 bg-[#FAF7F2] rounded-lg">
              <span>Figuras morfosintácticas (Hipérbaton, Anáfora, Asíndeton, Polisíndeton, etc.)</span>
              <strong className="text-[#800020]">15 preguntas</strong>
            </div>
            <div className="flex justify-between p-2.5 bg-[#FAF7F2] rounded-lg">
              <span>La Metáfora y sus estructuras (A es B, B de A, Metáfora pura)</span>
              <strong className="text-[#800020]">10 preguntas</strong>
            </div>
            <div className="flex justify-between p-2.5 bg-[#FAF7F2] rounded-lg">
              <span>Comparaciones entre figuras literarias comúnmente confundidas</span>
              <strong className="text-[#800020]">8 preguntas</strong>
            </div>
            <div className="flex justify-between p-2.5 bg-[#FAF7F2] rounded-lg md:col-span-2">
              <span>Análisis aplicado de fragmentos literarios</span>
              <strong className="text-[#800020]">6 preguntas</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Screen 3: Post-exam report
  if (isExamSubmitted && result) {
    const isApproved = result.scoreOn10 >= 5.0;

    let qualitativeGrade = 'Insuficiente';
    if (result.scoreOn10 >= 9.0) qualitativeGrade = 'Sobresaliente';
    else if (result.scoreOn10 >= 7.0) qualitativeGrade = 'Notable';
    else if (result.scoreOn10 >= 6.0) qualitativeGrade = 'Bien';
    else if (result.scoreOn10 >= 5.0) qualitativeGrade = 'Suficiente';

    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
        <div
          className={`rounded-3xl p-6 sm:p-10 border shadow-md mb-8 text-center ${
            isApproved ? 'bg-[#FAF7F2] border-[#D4AF37]' : 'bg-red-50 border-red-200'
          }`}
        >
          <div
            className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold font-serif ${
              isApproved ? 'bg-[#800020] text-[#D4AF37]' : 'bg-red-600 text-white'
            }`}
          >
            {result.scoreOn10}
          </div>

          <div className="inline-block px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-2 bg-white/80 border border-current text-[#800020]">
            {qualitativeGrade}
          </div>

          <h2 className="font-serif text-3xl font-bold text-[#2C1810] mb-2">
            {isApproved ? '¡Enhorabuena! Has superado el examen' : 'Necesitas reforzar algunos temas'}
          </h2>

          <p className="text-sm sm:text-base text-[#5C4D44] max-w-xl mx-auto mb-6">
            Has acertado <strong>{result.correctCount}</strong> de <strong>{result.totalQuestions}</strong>{' '}
            preguntas (<strong>{result.percentage}%</strong>). Todos los errores han sido registrados
            en tu sección «Mis errores» para que puedas practicarlos.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => startExam(preset)}
              className="px-6 py-2.5 bg-[#800020] text-[#D4AF37] font-semibold rounded-xl hover:bg-[#600018] transition-colors flex items-center shadow-sm cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Repetir este examen
            </button>
            <button
              onClick={() => setIsExamStarted(false)}
              className="px-6 py-2.5 bg-white border border-[#C5B7A5] text-[#2C1810] font-semibold rounded-xl hover:bg-[#FAF7F2] transition-colors cursor-pointer"
            >
              Elegir otro examen
            </button>
          </div>
        </div>

        {/* Detailed Question Review */}
        <div className="bg-white border border-[#E0D5C1] rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#EFE9DF] gap-4">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#2C1810]">Revisión Detallada</h3>
              <p className="text-xs text-[#6B5E55]">
                Pulsa en cualquier oración para ver su traducción al armenio.
              </p>
            </div>
            <div className="flex items-center gap-1.5 bg-[#FAF7F2] p-1 rounded-xl border border-[#E0D5C1]">
              <button
                onClick={() => setReviewFilter('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  reviewFilter === 'all'
                    ? 'bg-[#800020] text-white shadow-xs'
                    : 'text-[#6B5E55] hover:text-[#2C1810]'
                }`}
              >
                Todas ({questions.length})
              </button>
              <button
                onClick={() => setReviewFilter('incorrect')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  reviewFilter === 'incorrect'
                    ? 'bg-rose-700 text-white shadow-xs'
                    : 'text-[#6B5E55] hover:text-rose-700'
                }`}
              >
                Fallos ({result.incorrectCount})
              </button>
              <button
                onClick={() => setReviewFilter('correct')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  reviewFilter === 'correct'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-[#6B5E55] hover:text-emerald-700'
                }`}
              >
                Aciertos ({result.correctCount})
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {filteredReviewQuestions.map((q, idx) => {
              const userChoiceId = userAnswers[q.id];
              const isCorrect = userChoiceId === q.correctOptionId;

              return (
                <div
                  key={q.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    isCorrect ? 'bg-emerald-50/40 border-emerald-200' : 'bg-rose-50/40 border-rose-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#6B5E55]">
                      Pregunta #{idx + 1}
                    </span>
                    <span
                      className={`inline-flex items-center text-xs font-bold px-2.5 py-0.5 rounded-full ${
                        isCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {isCorrect ? (
                        <>
                          <CheckCircle className="w-3.5 h-3.5 mr-1" /> Correcta
                        </>
                      ) : (
                        <>
                          <XCircle className="w-3.5 h-3.5 mr-1" /> Incorrecta
                        </>
                      )}
                    </span>
                  </div>

                  <div className="font-semibold text-base text-[#2C1810] mb-3">
                    <InteractiveSentence
                      sentence={{
                        es: q.question,
                        hy: q.questionHy,
                      }}
                      onWordClick={onWordClick}
                    />
                  </div>

                  {q.stimulus && (
                    <div className="bg-white/80 border border-[#E0D5C1] rounded-xl p-3 mb-3 font-serif italic text-sm">
                      <InteractiveSentence
                        sentence={{
                          es: q.stimulus,
                          hy: q.stimulusHy || '',
                        }}
                        onWordClick={onWordClick}
                      />
                    </div>
                  )}

                  <div className="space-y-2 mb-3">
                    {q.options.map((opt) => {
                      const isOptionCorrect = opt.id === q.correctOptionId;
                      const isOptionSelected = opt.id === userChoiceId;

                      let optClass = 'border-[#E0D5C1] bg-white text-[#2C1810]';
                      if (isOptionCorrect) {
                        optClass = 'border-emerald-500 bg-emerald-100/60 font-semibold text-emerald-950';
                      } else if (isOptionSelected && !isOptionCorrect) {
                        optClass = 'border-rose-400 bg-rose-100/60 text-rose-950 line-through';
                      }

                      return (
                        <div
                          key={opt.id}
                          className={`p-3 rounded-xl border text-sm flex items-start justify-between ${optClass}`}
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
                          {isOptionCorrect && (
                            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 ml-2 mt-0.5" />
                          )}
                          {isOptionSelected && !isOptionCorrect && (
                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 ml-2 mt-0.5" />
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {q.explanationEs && (
                    <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-3 text-xs sm:text-sm text-amber-950">
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
    );
  }

  // Screen 2: Exam runner
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white border border-[#E0D5C1] rounded-2xl p-4 sm:p-5 shadow-xs mb-6 sticky top-4 z-20">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="font-serif font-bold text-lg text-[#2C1810]">
              Pregunta {currentIndex + 1} de {questions.length}
            </span>
            <span className="text-xs px-2.5 py-0.5 bg-[#FAF7F2] border border-[#E0D5C1] rounded-full text-[#6B5E55] font-medium">
              Tema {currentQuestion.bloqueId}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <div
              className={`flex items-center font-mono font-bold text-base px-3 py-1 rounded-xl border ${
                timeRemainingSeconds < 300
                  ? 'bg-red-50 text-red-600 border-red-300 animate-pulse'
                  : 'bg-[#FAF7F2] text-[#2C1810] border-[#E0D5C1]'
              }`}
            >
              <Clock className="w-4 h-4 mr-1.5 text-[#800020]" />
              {formatTime(timeRemainingSeconds)}
            </div>

            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="px-4 py-2 bg-[#800020] text-[#D4AF37] font-semibold text-xs sm:text-sm rounded-xl hover:bg-[#600018] transition-colors shadow-xs cursor-pointer"
            >
              Finalizar examen
            </button>
          </div>
        </div>

        <div className="w-full bg-[#EFE9DF] h-1.5 rounded-full overflow-hidden mt-3">
          <div
            className="bg-[#800020] h-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-white border border-[#E0D5C1] rounded-3xl p-6 sm:p-8 shadow-sm mb-6">
        <div className="text-xs font-bold text-[#800020] uppercase tracking-wider mb-2">
          {currentQuestion.topicId.replace('-', ' ').toUpperCase()}
        </div>

        <div className="text-lg sm:text-xl font-medium text-[#2C1810] mb-4 leading-relaxed">
          <InteractiveSentence
            sentence={{
              es: currentQuestion.question,
              hy: currentQuestion.questionHy,
            }}
            onWordClick={onWordClick}
          />
        </div>

        {currentQuestion.stimulus && (
          <div className="p-4 bg-[#FAF7F2] border-l-4 border-[#800020] rounded-r-xl mb-6 font-serif italic text-base text-[#4A3E38]">
            <InteractiveSentence
              sentence={{
                es: currentQuestion.stimulus,
                hy: currentQuestion.stimulusHy || '',
              }}
              onWordClick={onWordClick}
            />
          </div>
        )}

        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => {
            const isSelected = userAnswers[currentQuestion.id] === option.id;
            const letter = String.fromCharCode(65 + idx);

            return (
              <div
                key={option.id}
                onClick={() => handleSelectOption(currentQuestion.id, option.id)}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start ${
                  isSelected
                    ? 'border-[#800020] bg-[#FAF7F2] shadow-xs'
                    : 'border-[#EBE2D4] bg-white hover:border-[#C5B7A5]'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 mr-3.5 transition-colors ${
                    isSelected
                      ? 'bg-[#800020] text-[#D4AF37]'
                      : 'bg-[#FAF7F2] text-[#6B5E55] border border-[#E0D5C1]'
                  }`}
                >
                  {letter}
                </div>
                <div className="flex-1 text-sm sm:text-base text-[#2C1810]">
                  <InteractiveSentence
                    sentence={{
                      es: option.text,
                      hy: option.textHy,
                    }}
                    onWordClick={onWordClick}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => setCurrentIndex((p) => Math.max(0, p - 1))}
          disabled={currentIndex === 0}
          className="px-5 py-2.5 rounded-xl border border-[#C5B7A5] font-semibold text-xs sm:text-sm text-[#2C1810] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FAF7F2] transition-colors flex items-center cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 mr-1" /> Anterior
        </button>

        <div className="text-xs text-[#6B5E55] font-medium hidden sm:block">
          {answeredCount} de {questions.length} respondidas
        </div>

        {currentIndex < questions.length - 1 ? (
          <button
            onClick={() => setCurrentIndex((p) => Math.min(questions.length - 1, p + 1))}
            className="px-5 py-2.5 rounded-xl bg-[#800020] text-[#D4AF37] font-semibold text-xs sm:text-sm hover:bg-[#600018] transition-colors flex items-center shadow-xs cursor-pointer"
          >
            Siguiente <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        ) : (
          <button
            onClick={() => setShowConfirmSubmit(true)}
            className="px-5 py-2.5 rounded-xl bg-emerald-700 text-white font-semibold text-xs sm:text-sm hover:bg-emerald-800 transition-colors flex items-center shadow-xs cursor-pointer"
          >
            Finalizar examen <CheckCircle className="w-4 h-4 ml-1.5" />
          </button>
        )}
      </div>

      <div className="bg-white border border-[#E0D5C1] rounded-2xl p-5 shadow-xs">
        <div className="text-xs font-bold text-[#6B5E55] uppercase tracking-wider mb-3 flex items-center justify-between">
          <span>Mapa de preguntas</span>
          <span className="font-normal lowercase">
            {answeredCount} contestadas • {questions.length - answeredCount} pendientes
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {questions.map((q, idx) => {
            const isAnswered = !!userAnswers[q.id];
            const isCurrent = idx === currentIndex;

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIndex(idx)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  isCurrent
                    ? 'ring-2 ring-[#800020] ring-offset-2 bg-[#800020] text-white'
                    : isAnswered
                    ? 'bg-[#E7DECE] text-[#2C1810]'
                    : 'bg-[#FAF7F2] text-[#8C7E74] hover:bg-[#EBE2D4]'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {showConfirmSubmit && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white border border-[#E0D5C1] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-center">
            <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2C1810] mb-2">
              ¿Finalizar el examen ahora?
            </h3>
            <p className="text-sm text-[#5C4D44] mb-6">
              Has contestado <strong>{answeredCount}</strong> de <strong>{questions.length}</strong>{' '}
              preguntas.
              {answeredCount < questions.length && (
                <span className="block text-rose-600 font-semibold mt-1">
                  Tienes {questions.length - answeredCount} preguntas sin responder.
                </span>
              )}
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="flex-1 py-2.5 rounded-xl border border-[#C5B7A5] font-semibold text-sm text-[#2C1810] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
              >
                Seguir respondiendo
              </button>
              <button
                onClick={handleSubmitExam}
                className="flex-1 py-2.5 rounded-xl bg-[#800020] text-[#D4AF37] font-semibold text-sm hover:bg-[#600018] transition-colors shadow-xs cursor-pointer"
              >
                Sí, entregar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
