import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Languages,
  PlayCircle,
  HelpCircle,
  Award
} from 'lucide-react';
import { Topic } from './types.ts';
import { InteractiveSentence } from './InteractiveSentence.tsx';
import { markTopicCompleted, getCompletedTopics } from './storage.ts';

interface TopicViewProps {
  topic: Topic;
  onBack: () => void;
  onStartPractice: (topicId: string) => void;
  onOpenWordLookup: (word: string) => void;
  onNextTopic?: () => void;
  onPrevTopic?: () => void;
}

export const TopicView: React.FC<TopicViewProps> = ({
  topic,
  onBack,
  onStartPractice,
  onOpenWordLookup,
  onNextTopic,
  onPrevTopic
}) => {
  const [showAllTranslations, setShowAllTranslations] = useState(false);
  const [isCompleted, setIsCompleted] = useState(() =>
    getCompletedTopics().includes(topic.id)
  );

  const handleMarkComplete = () => {
    markTopicCompleted(topic.id);
    setIsCompleted(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16 animate-fadeIn">
      {/* Top Navigation & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white/80 p-3.5 rounded-xl border border-[#E8DEC8] shadow-2xs">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#800020] hover:text-[#5A0017] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al índice</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowAllTranslations(!showAllTranslations)}
            className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
              showAllTranslations
                ? 'bg-[#800020] text-white border-[#800020] shadow-xs'
                : 'bg-[#FDFBF7] text-[#55433C] border-[#D4AF37]/50 hover:bg-amber-50'
            }`}
          >
            <Languages className="w-4 h-4" />
            <span>
              {showAllTranslations ? 'Ocultar traducciones' : 'Mostrar todas las traducciones'}
            </span>
          </button>

          <button
            onClick={handleMarkComplete}
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
              isCompleted
                ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                : 'bg-white text-[#7A6B63] border-gray-300 hover:border-emerald-500 hover:text-emerald-700'
            }`}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{isCompleted ? 'Completado' : 'Marcar como estudiado'}</span>
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-gradient-to-br from-[#800020] via-[#650019] to-[#450011] text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-[#D4AF37]/40 relative overflow-hidden">
        <div className="absolute right-0 top-0 -mt-6 -mr-6 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-white/10 px-3 py-1 rounded-full mb-3">
          <span>{topic.bloqueTitle}</span>
          <span className="text-white/40">•</span>
          <span className="font-armenian">{topic.bloqueTitleHy}</span>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-cinzel text-amber-50 tracking-wide">
              Tema {topic.number}. {topic.title}
            </h1>
            <p className="font-armenian text-amber-200/90 text-lg sm:text-xl font-medium mt-1">
              {topic.titleHy}
            </p>
            <p className="text-amber-100/80 text-sm sm:text-base mt-2 max-w-2xl">
              {topic.subtitle}
            </p>
          </div>

          <div className="hidden sm:flex shrink-0 w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 items-center justify-center text-[#D4AF37] shadow-inner">
            <BookOpen className="w-8 h-8" />
          </div>
        </div>

        {/* Action button */}
        <div className="mt-6 pt-5 border-t border-white/15 flex flex-wrap items-center gap-3">
          <button
            onClick={() => onStartPractice(topic.id)}
            className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#E5C158] text-[#450011] font-bold px-5 py-2.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer text-sm"
          >
            <PlayCircle className="w-4 h-4" />
            <span>Practicar este tema (30 preguntas)</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      {/* Summary Box */}
      <div className="bg-[#FAF2E6] rounded-2xl p-5 border border-[#D4AF37]/50 shadow-xs">
        <div className="flex items-center gap-2 text-xs font-bold text-[#800020] uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span>Resumen fundamental del tema (Idea clave)</span>
        </div>
        <div className="space-y-1">
          {topic.summary.map((sent, i) => (
            <InteractiveSentence
              key={i}
              sentence={sent}
              forceShowTranslation={showAllTranslations}
              onWordClick={onOpenWordLookup}
            />
          ))}
        </div>
      </div>

      {/* Theory Sections */}
      <div className="space-y-5">
        {topic.sections.map((section, sIdx) => (
          <div
            key={sIdx}
            className="bg-white rounded-2xl p-5 sm:p-7 border border-[#E8DEC8] shadow-2xs space-y-3"
          >
            <div className="border-b border-[#F0EAE1] pb-2.5">
              <h2 className="text-lg sm:text-xl font-bold font-cinzel text-[#800020]">
                {section.title}
              </h2>
              {section.titleHy && (
                <p className="font-armenian text-sm text-[#7A6B63] font-medium mt-0.5">
                  {section.titleHy}
                </p>
              )}
            </div>

            <div className="space-y-1.5 pt-1">
              {section.content.map((sentence, idx) => (
                <InteractiveSentence
                  key={idx}
                  sentence={sentence}
                  forceShowTranslation={showAllTranslations}
                  onWordClick={onOpenWordLookup}
                />
              ))}
            </div>

            {section.subsections && (
              <div className="mt-4 space-y-3 pt-3 border-t border-dashed border-[#E8DEC8]">
                {section.subsections.map((sub, subIdx) => (
                  <div key={subIdx} className="bg-[#FAF7F2] p-4 rounded-xl border border-[#E8DEC8]">
                    <h3 className="text-sm font-bold text-[#800020] mb-2 font-cinzel">
                      {sub.title}
                    </h3>
                    <div className="space-y-1">
                      {sub.content.map((sent, sId) => (
                        <InteractiveSentence
                          key={sId}
                          sentence={sent}
                          forceShowTranslation={showAllTranslations}
                          onWordClick={onOpenWordLookup}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Curated Real Examples */}
      {topic.examples.length > 0 && (
        <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[#E8DEC8] shadow-2xs space-y-4">
          <div className="flex items-center gap-2 border-b border-[#F0EAE1] pb-3">
            <div className="p-1.5 bg-[#800020]/10 rounded-lg text-[#800020]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-cinzel text-[#800020]">
                Ejemplos reales con análisis detallado
              </h3>
              <p className="text-xs text-[#7A6B63] font-armenian">
                Իրական օրինակներ մանրամասն վերլուծությամբ
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {topic.examples.map((ex, idx) => (
              <div
                key={idx}
                className="bg-[#FAF7F2] rounded-xl p-4 sm:p-5 border border-[#E8DEC8] hover:border-[#D4AF37]/60 transition-all space-y-3"
              >
                <div className="bg-white p-3.5 rounded-lg border-l-4 border-[#800020] shadow-2xs">
                  <p className="text-[17px] sm:text-[19px] lg:text-[20px] text-[#2C1810] font-serif leading-relaxed whitespace-pre-line italic">
                    {ex.text}
                  </p>
                  {ex.author && (
                    <p className="text-xs sm:text-sm font-semibold text-[#800020] mt-1 text-right font-sans">
                      — {ex.author}
                    </p>
                  )}
                </div>

                <div className="bg-amber-50/60 p-3.5 rounded-lg border border-amber-200/50">
                  <div className="text-xs sm:text-sm font-bold text-[#800020] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-[#D4AF37]" />
                    <span>Análisis del texto</span>
                  </div>
                  <p className="text-[15px] sm:text-[17px] text-[#382318] leading-relaxed">
                    {ex.analysis}
                  </p>
                  <p className="text-[15px] sm:text-[16px] font-armenian text-[#4E392F] mt-2 pt-2 border-t border-amber-200/40 leading-relaxed">
                    {ex.analysisHy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Exam Tips and Pitfalls Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Exam Tips */}
        <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-emerald-900 font-bold font-cinzel text-base border-b border-emerald-200 pb-2">
            <Award className="w-5 h-5 text-emerald-600" />
            <span>Claves para el Examen escolar</span>
          </div>
          <div className="space-y-1">
            {topic.examTips.map((tip, idx) => (
              <InteractiveSentence
                key={idx}
                sentence={tip}
                forceShowTranslation={showAllTranslations}
                onWordClick={onOpenWordLookup}
              />
            ))}
          </div>
        </div>

        {/* Common Pitfalls */}
        <div className="bg-rose-50/70 rounded-2xl p-5 border border-rose-200 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-rose-950 font-bold font-cinzel text-base border-b border-rose-200 pb-2">
            <AlertTriangle className="w-5 h-5 text-rose-600" />
            <span>Errores frecuentes a evitar</span>
          </div>
          <div className="space-y-1">
            {topic.commonPitfalls.map((pit, idx) => (
              <InteractiveSentence
                key={idx}
                sentence={pit}
                forceShowTranslation={showAllTranslations}
                onWordClick={onOpenWordLookup}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Practice Banner */}
      <div className="bg-gradient-to-r from-[#FAF2E6] to-[#F5EFE6] rounded-2xl p-6 border border-[#D4AF37] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-lg font-bold text-[#800020] font-cinzel">
            ¿Has entendido la teoría del Tema {topic.number}?
          </h4>
          <p className="text-xs sm:text-sm text-[#7A6B63] mt-0.5 font-armenian">
            Ամրապնդի՛ր գիտելիքներդ 30 ինտերակտիվ վարժություններով
          </p>
        </div>

        <button
          onClick={() => onStartPractice(topic.id)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#800020] hover:bg-[#600018] text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all cursor-pointer text-sm"
        >
          <PlayCircle className="w-4 h-4" />
          <span>Comenzar práctica</span>
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      {/* Next / Previous Topic Navigation */}
      <div className="flex items-center justify-between pt-2">
        {onPrevTopic ? (
          <button
            onClick={onPrevTopic}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E8DEC8] text-xs font-semibold text-[#800020] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Tema anterior</span>
          </button>
        ) : (
          <div></div>
        )}

        {onNextTopic && (
          <button
            onClick={onNextTopic}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E8DEC8] text-xs font-semibold text-[#800020] hover:bg-[#FAF7F2] transition-colors cursor-pointer"
          >
            <span>Siguiente tema</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
