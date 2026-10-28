import React, { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  HelpCircle,
  Lightbulb,
  Sparkles,
  ArrowLeft,
  RotateCcw,
  Languages,
  BookOpen,
  Award
} from 'lucide-react';
import { Question } from './types.ts';
import { recordUserError } from './storage.ts';

interface PracticeViewProps {
  title: string;
  subtitle?: string;
  questions: Question[];
  onBack: () => void;
  onFinish?: (score: { correct: number; total: number }) => void;
  onOpenWordLookup?: (word: string) => void;
}

export const PracticeView: React.FC<PracticeViewProps> = ({
  title,
  subtitle,
  questions,
  onBack,
  onFinish,
  onOpenWordLookup
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [showArmenianExplanation, setShowArmenianExplanation] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl border border-[#E8DEC8] text-center space-y-4">
        <p className="text-gray-600">No hay preguntas disponibles para esta sesión.</p>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-[#800020] text-white rounded-xl text-sm font-semibold cursor-pointer"
        >
          Volver
        </button>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const isCorrect = selectedOptionId === currentQ.correctOptionId;
  const correctOption = currentQ.options.find((o) => o.id === currentQ.correctOptionId);
  const selectedOption = currentQ.options.find((o) => o.id === selectedOptionId);

  const handleSelectOption = (optId: string) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionId(optId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOptionId || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);

    if (selectedOptionId === currentQ.correctOptionId) {
      setCorrectCount((prev) => prev + 1);
    } else {
      // Record mistake to persistence
      recordUserError({
        questionId: currentQ.id,
        topicId: currentQ.topicId,
        questionText: currentQ.question,
        questionTextHy: currentQ.questionHy,
        userSelectedOptionText: selectedOption?.text || '',
        userSelectedOptionTextHy: selectedOption?.textHy || '',
        correctOptionText: correctOption?.text || '',
        correctOptionTextHy: correctOption?.textHy || '',
        explanationEs: currentQ.explanationEs,
        explanationHy: currentQ.explanationHy
      });
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOptionId(null);
      setIsAnswerSubmitted(false);
      setShowArmenianExplanation(false);
    } else {
      setIsCompleted(true);
      if (onFinish) {
        onFinish({
          correct: correctCount + (isCorrect ? 1 : 0),
          total: questions.length
        });
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOptionId(null);
    setIsAnswerSubmitted(false);
    setShowArmenianExplanation(false);
    setCorrectCount(0);
    setIsCompleted(false);
  };

  if (isCompleted) {
    const finalScore = correctCount;
    const percentage = Math.round((finalScore / questions.length) * 100);
    const scoreOn10 = parseFloat(((finalScore / questions.length) * 10).toFixed(1));

    return (
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-[#D4AF37]/50 shadow-xl text-center space-y-6 animate-fadeIn">
        <div className="w-20 h-20 mx-auto rounded-full bg-[#FAF2E6] border-2 border-[#D4AF37] flex items-center justify-center text-[#800020] shadow-inner">
          <Award className="w-10 h-10 text-[#D4AF37]" />
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-bold font-cinzel text-[#800020]">
            ¡Práctica completada!
          </h2>
          <p className="font-armenian text-sm text-[#7A6B63] mt-1">
            Վարժությունն ավարտված է: Գերազանց աշխատանք:
          </p>
        </div>

        {/* Score display */}
        <div className="grid grid-cols-3 gap-3 bg-[#FAF7F2] p-4 rounded-2xl border border-[#E8DEC8]">
          <div className="p-2">
            <p className="text-xs text-[#7A6B63] uppercase font-semibold">Nota escolar</p>
            <p className="text-2xl sm:text-3xl font-bold text-[#800020]">{scoreOn10} / 10</p>
          </div>
          <div className="p-2 border-x border-[#E8DEC8]">
            <p className="text-xs text-[#7A6B63] uppercase font-semibold">Aciertos</p>
            <p className="text-2xl sm:text-3xl font-bold text-emerald-700">
              {finalScore} <span className="text-sm font-normal text-gray-500">/ {questions.length}</span>
            </p>
          </div>
          <div className="p-2">
            <p className="text-xs text-[#7A6B63] uppercase font-semibold">Porcentaje</p>
            <p className="text-2xl sm:text-3xl font-bold text-amber-700">{percentage}%</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[#D4AF37] text-[#800020] bg-[#FAF7F2] hover:bg-amber-100/50 font-bold text-sm transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Repetir práctica</span>
          </button>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#800020] hover:bg-[#600018] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            <span>Volver al menú</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-5 pb-16 animate-fadeIn">
      {/* Top Bar with Progress */}
      <div className="flex items-center justify-between gap-3 bg-white/80 p-3.5 rounded-xl border border-[#E8DEC8] shadow-2xs">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#800020] hover:underline cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Salir de práctica</span>
        </button>

        <div className="text-xs font-bold text-[#7A6B63]">
          Pregunta <span className="text-[#800020] text-sm">{currentIndex + 1}</span> de{' '}
          {questions.length}
        </div>

        <div className="text-xs font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
          Aciertos: {correctCount}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-[#EAE2D5] h-2 rounded-full overflow-hidden">
        <div
          className="bg-[#800020] h-full transition-all duration-300 rounded-full"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DEC8] shadow-md space-y-6">
        {/* Stimulus / quote if present */}
        {currentQ.stimulus && (
          <div className="p-4 sm:p-5 bg-[#FAF7F2] rounded-2xl border-l-4 border-[#800020] shadow-2xs">
            <p className="text-lg sm:text-xl font-serif italic text-[#2C1810] leading-relaxed whitespace-pre-line">
              {currentQ.stimulus}
            </p>
            {currentQ.stimulusHy && (
              <p className="text-sm sm:text-base font-armenian text-[#6B5A50] mt-2.5 pt-2 border-t border-[#E8DEC8]/60 leading-relaxed">
                {currentQ.stimulusHy}
              </p>
            )}
          </div>
        )}

        {/* Question Text */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#2C1810] font-cinzel leading-snug">
            {currentQ.question}
          </h3>
          <p className="font-armenian text-base sm:text-lg text-[#604F46] font-medium mt-2 leading-relaxed">
            {currentQ.questionHy}
          </p>
        </div>

        {/* 4 Shuffled Options */}
        <div className="space-y-3">
          {currentQ.options.map((opt, idx) => {
            const letter = ['A', 'B', 'C', 'D'][idx];
            const isSelected = selectedOptionId === opt.id;
            const isCorrectOption = opt.id === currentQ.correctOptionId;

            let cardStyle =
              'border-[#E8DEC8] bg-[#FAF7F2]/60 hover:bg-[#FAF7F2] hover:border-[#D4AF37] text-[#2C1810]';
            let badgeStyle = 'bg-white text-[#800020] border-[#E8DEC8]';

            if (isSelected && !isAnswerSubmitted) {
              cardStyle = 'border-[#800020] bg-amber-50/70 shadow-xs ring-2 ring-[#800020]/20';
              badgeStyle = 'bg-[#800020] text-white border-[#800020]';
            }

            if (isAnswerSubmitted) {
              if (isCorrectOption) {
                cardStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/30';
                badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
              } else if (isSelected && !isCorrectOption) {
                cardStyle = 'border-rose-400 bg-rose-50 text-rose-950 ring-2 ring-rose-400/30';
                badgeStyle = 'bg-rose-600 text-white border-rose-600';
              } else {
                cardStyle = 'opacity-50 border-gray-200 bg-gray-50';
              }
            }

            return (
              <div
                key={opt.id}
                onClick={() => handleSelectOption(opt.id)}
                className={`p-4 rounded-2xl border-2 transition-all flex items-start gap-3.5 ${
                  !isAnswerSubmitted ? 'cursor-pointer' : 'cursor-default'
                } ${cardStyle}`}
              >
                <div
                  className={`shrink-0 w-9 h-9 rounded-xl border flex items-center justify-center font-bold text-sm ${badgeStyle}`}
                >
                  {letter}
                </div>

                <div className="flex-1 pt-0.5">
                  <p className="text-base sm:text-lg font-medium leading-relaxed">{opt.text}</p>
                  <p className="font-armenian text-sm sm:text-base text-[#6B5A50] mt-1.5 font-normal leading-relaxed">
                    {opt.textHy}
                  </p>
                </div>

                {isAnswerSubmitted && isCorrectOption && (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                )}
                {isAnswerSubmitted && isSelected && !isCorrectOption && (
                  <XCircle className="w-6 h-6 text-rose-600 shrink-0 mt-1" />
                )}
              </div>
            );
          })}
        </div>

        {/* Submit Button */}
        {!isAnswerSubmitted && (
          <div className="pt-2">
            <button
              onClick={handleSubmitAnswer}
              disabled={!selectedOptionId}
              className={`w-full py-3.5 px-6 rounded-2xl font-bold text-sm tracking-wide transition-all shadow-md cursor-pointer ${
                selectedOptionId
                  ? 'bg-[#800020] hover:bg-[#650019] text-white shadow-[#800020]/20'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
              }`}
            >
              Comprobar respuesta
            </button>
          </div>
        )}

        {/* FEEDBACK SECTION UPON ANSWERING */}
        {isAnswerSubmitted && (
          <div className="space-y-4 pt-3 border-t-2 border-[#E8DEC8] animate-fadeIn">
            {isCorrect ? (
              // CORRECT STATE
              <div className="p-4 sm:p-5 bg-emerald-50/80 rounded-2xl border border-emerald-300 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>¡Correcto! Muy bien.</span>
                </div>
                <p className="text-sm text-emerald-950 leading-relaxed font-medium">
                  {currentQ.explanationEs}
                </p>
                <button
                  onClick={() => setShowArmenianExplanation(!showArmenianExplanation)}
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-800 hover:text-emerald-950 underline mt-1 cursor-pointer"
                >
                  <Languages className="w-3.5 h-3.5" />
                  <span>
                    {showArmenianExplanation ? 'Թաքցնել թարգմանությունը' : 'Տեսնել բացատրությունը հայերեն'}
                  </span>
                </button>
                {showArmenianExplanation && (
                  <p className="text-xs sm:text-sm font-armenian text-emerald-900 pt-2 border-t border-emerald-200 leading-relaxed">
                    {currentQ.explanationHy}
                  </p>
                )}
              </div>
            ) : (
              // INCORRECT STATE — COMPREHENSIVE 8-POINT BREAKDOWN AS REQUIRED
              <div className="p-5 sm:p-6 bg-rose-50/90 rounded-2xl border border-rose-300 space-y-3.5 shadow-xs">
                <div className="flex items-center gap-2 text-rose-800 font-bold text-base">
                  <XCircle className="w-5 h-5 text-rose-600" />
                  <span>Respuesta incorrecta</span>
                </div>

                <div className="text-sm text-[#2C1810] space-y-2">
                  <p className="font-semibold text-emerald-800 bg-emerald-100/70 p-2.5 rounded-xl border border-emerald-300/60">
                    La respuesta correcta es:{' '}
                    <span className="font-bold underline">{correctOption?.text}</span>
                  </p>

                  <div className="bg-white p-3.5 rounded-xl border border-rose-200 space-y-1.5">
                    <p className="text-xs font-bold uppercase text-[#800020] tracking-wider">
                      ¿Por qué? (Explicación detallada)
                    </p>
                    <p className="text-sm text-[#2C1810] leading-relaxed">
                      {currentQ.explanationEs}
                    </p>

                    <button
                      onClick={() => setShowArmenianExplanation(!showArmenianExplanation)}
                      className="inline-flex items-center gap-1 text-xs text-[#800020] hover:underline mt-1 cursor-pointer font-medium"
                    >
                      <Languages className="w-3.5 h-3.5" />
                      <span>
                        {showArmenianExplanation ? 'Թաքցնել' : 'Տեսնել հայերեն թարգմանությունը'}
                      </span>
                    </button>

                    {showArmenianExplanation && (
                      <div className="p-2.5 bg-amber-50/80 rounded-lg text-xs sm:text-sm font-armenian text-[#382318] border-l-2 border-[#800020] mt-2">
                        {currentQ.explanationHy}
                      </div>
                    )}
                  </div>

                  {/* Why selected was wrong */}
                  {currentQ.whyIncorrect && selectedOptionId && currentQ.whyIncorrect[selectedOptionId] && (
                    <div className="text-xs text-rose-900 bg-rose-100/60 p-2.5 rounded-xl">
                      <span className="font-bold">Por qué tu opción no es correcta: </span>
                      {currentQ.whyIncorrect[selectedOptionId].es}
                    </div>
                  )}

                  {/* Memory tip / Rule */}
                  {currentQ.memoryTipEs && (
                    <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 flex items-start gap-2 text-xs text-[#453229]">
                      <Lightbulb className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-[#800020]">Truco para recordar: </span>
                        <span>{currentQ.memoryTipEs}</span>
                        {currentQ.memoryTipHy && (
                          <p className="font-armenian text-amber-950 mt-1">
                            {currentQ.memoryTipHy}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* MANDATORY BUTTON TO ADVANCE (DOES NOT AUTO ADVANCE AFTER ERROR) */}
            <div className="pt-2">
              <button
                onClick={handleNextQuestion}
                className="w-full py-4 px-6 rounded-2xl font-bold text-sm tracking-wide bg-[#800020] hover:bg-[#650019] text-white shadow-lg shadow-[#800020]/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>Entendido, siguiente pregunta</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
