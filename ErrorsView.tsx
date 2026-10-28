/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  AlertTriangle,
  RotateCcw,
  Trash2,
  CheckCircle,
  Sparkles,
  BookOpen,
  Filter,
} from 'lucide-react';
import { getStoredErrors, removeResolvedError, clearAllErrors } from './storage.ts';
import { getAllQuestions } from './questionsData.ts';
import { Question } from './types.ts';
import { InteractiveSentence } from './InteractiveSentence.tsx';
import { PracticeView } from './PracticeView.tsx';

interface ErrorsViewProps {
  onWordClick?: (word: string) => void;
  onGoToTopic?: (topicId: string) => void;
}

export const ErrorsView: React.FC<ErrorsViewProps> = ({ onWordClick, onGoToTopic }) => {
  const [errorRecords, setErrorRecords] = useState(() => getStoredErrors());
  const [isPracticingErrors, setIsPracticingErrors] = useState(false);
  const [filterTopic, setFilterTopic] = useState<string>('all');

  const allQuestions = useMemo(() => getAllQuestions(), []);
  const questionMap = useMemo(() => new Map(allQuestions.map((q) => [q.id, q])), [allQuestions]);

  const refreshErrors = () => {
    setErrorRecords(getStoredErrors());
  };

  const handleResolve = (questionId: string) => {
    removeResolvedError(questionId);
    refreshErrors();
  };

  const handleClearAll = () => {
    if (window.confirm('¿Seguro que deseas reiniciar tu lista de errores guardados?')) {
      clearAllErrors();
      refreshErrors();
    }
  };

  const detailedErrors = useMemo(() => {
    return errorRecords
      .map((rec) => {
        const question = questionMap.get(rec.questionId);
        return {
          ...rec,
          question,
        };
      })
      .filter((item): item is typeof item & { question: Question } => item.question !== undefined);
  }, [errorRecords, questionMap]);

  const topicsInErrors = useMemo(() => {
    const set = new Set(detailedErrors.map((e) => e.question.topicId));
    return Array.from(set);
  }, [detailedErrors]);

  const filteredErrors = useMemo(() => {
    if (filterTopic === 'all') return detailedErrors;
    return detailedErrors.filter((e) => e.question.topicId === filterTopic);
  }, [detailedErrors, filterTopic]);

  const errorQuestionsForPractice = useMemo(() => {
    return detailedErrors.map((e) => e.question);
  }, [detailedErrors]);

  if (isPracticingErrors && errorQuestionsForPractice.length > 0) {
    return (
      <PracticeView
        title="Entrenamiento Especial: Mis Errores"
        subtitle="Repasa las preguntas que has fallado anteriormente"
        questions={errorQuestionsForPractice}
        onBack={() => {
          setIsPracticingErrors(false);
          refreshErrors();
        }}
        onFinish={() => {
          setIsPracticingErrors(false);
          refreshErrors();
        }}
        onOpenWordLookup={onWordClick}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-[#FAF7F2] border border-[#E7DECE] rounded-3xl p-6 sm:p-8 shadow-sm mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full mb-3">
              <AlertTriangle className="w-3.5 h-3.5 mr-1.5" /> Registro de Fallos
            </div>
            <h1 className="font-serif text-3xl font-bold text-[#2C1810] mb-2">
              Mis Errores para Repasar
            </h1>
            <p className="text-[#5C4D44] text-sm max-w-xl">
              Aquí se guardan automáticamente las preguntas en las que has dudado o fallado.
              Repásalas para asegurarte de no cometer el mismo error en el examen escolar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            {detailedErrors.length > 0 && (
              <>
                <button
                  onClick={() => setIsPracticingErrors(true)}
                  className="px-5 py-2.5 bg-[#800020] text-[#D4AF37] font-semibold text-sm rounded-xl hover:bg-[#600018] transition-colors flex items-center justify-center shadow-xs cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Practicar errores ({detailedErrors.length})
                </button>
                <button
                  onClick={handleClearAll}
                  className="p-2.5 text-[#8C7E74] hover:text-rose-600 rounded-xl hover:bg-white border border-transparent hover:border-[#E0D5C1] transition-colors flex items-center justify-center cursor-pointer"
                  title="Borrar todos los errores"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {topicsInErrors.length > 1 && (
        <div className="flex items-center space-x-2 overflow-x-auto pb-3 mb-6 text-xs">
          <span className="text-[#6B5E55] font-semibold flex items-center shrink-0">
            <Filter className="w-3.5 h-3.5 mr-1" /> Filtrar por tema:
          </span>
          <button
            onClick={() => setFilterTopic('all')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors cursor-pointer ${
              filterTopic === 'all'
                ? 'bg-[#800020] text-white'
                : 'bg-white border border-[#E0D5C1] text-[#2C1810]'
            }`}
          >
            Todos ({detailedErrors.length})
          </button>
          {topicsInErrors.map((tid) => (
            <button
              key={tid}
              onClick={() => setFilterTopic(tid)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-colors cursor-pointer ${
                filterTopic === tid
                  ? 'bg-[#800020] text-white'
                  : 'bg-white border border-[#E0D5C1] text-[#2C1810]'
              }`}
            >
              {tid.replace('tema-', 'Tema ').replace('-', ' ')}
            </button>
          ))}
        </div>
      )}

      {filteredErrors.length === 0 ? (
        <div className="bg-white border border-[#E0D5C1] rounded-3xl p-10 text-center">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#2C1810] mb-2">
            ¡No tienes errores registrados!
          </h2>
          <p className="text-sm text-[#5C4D44] max-w-md mx-auto">
            A medida que realices prácticas y simulacros de examen, cualquier fallo se registrará aquí
            para que puedas repasarlo con calma.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredErrors.map(({ questionId, timesFailed, question }, idx) => {
            const correctOption = question.options.find((o) => o.id === question.correctOptionId);

            return (
              <div
                key={questionId}
                className="bg-white border border-[#E0D5C1] rounded-2xl p-5 sm:p-6 shadow-xs transition-all hover:border-[#800020]/40"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#800020]">
                      {question.topicId.replace('-', ' ').toUpperCase()}
                    </span>
                    <span className="text-xs bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded-full">
                      Fallado {timesFailed} {timesFailed === 1 ? 'vez' : 'veces'}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    {onGoToTopic && (
                      <button
                        onClick={() => onGoToTopic(question.topicId)}
                        className="text-xs text-[#800020] hover:underline flex items-center font-semibold cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5 mr-1" /> Ver teoría del tema
                      </button>
                    )}
                    <button
                      onClick={() => handleResolve(questionId)}
                      className="text-xs text-[#6B5E55] hover:text-emerald-700 flex items-center font-medium bg-[#FAF7F2] px-2.5 py-1 rounded-lg border border-[#E0D5C1] cursor-pointer"
                      title="Marcar como aprendido"
                    >
                      <CheckCircle className="w-3.5 h-3.5 mr-1 text-emerald-600" /> Ya me lo sé
                    </button>
                  </div>
                </div>

                <div className="text-base font-semibold text-[#2C1810] mb-3">
                  <InteractiveSentence
                    sentence={{
                      es: question.question,
                      hy: question.questionHy,
                    }}
                    onWordClick={onWordClick}
                  />
                </div>

                {question.stimulus && (
                  <div className="p-3 bg-[#FAF7F2] border-l-4 border-[#800020] rounded-r-xl mb-3 font-serif italic text-sm text-[#4A3E38]">
                    <InteractiveSentence
                      sentence={{
                        es: question.stimulus,
                        hy: question.stimulusHy || '',
                      }}
                      onWordClick={onWordClick}
                    />
                  </div>
                )}

                {correctOption && (
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3 mb-3 text-xs sm:text-sm text-emerald-950">
                    <div className="font-bold text-emerald-900 mb-1 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-1 text-emerald-700" /> Respuesta correcta:
                    </div>
                    <InteractiveSentence
                      sentence={{
                        es: correctOption.text,
                        hy: correctOption.textHy,
                      }}
                      onWordClick={onWordClick}
                    />
                  </div>
                )}

                {question.explanationEs && (
                  <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-3 text-xs sm:text-sm text-amber-950">
                    <div className="font-bold text-amber-900 mb-1 flex items-center">
                      <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-700" /> Explicación detallada:
                    </div>
                    <InteractiveSentence
                      sentence={{
                        es: question.explanationEs,
                        hy: question.explanationHy || '',
                      }}
                      onWordClick={onWordClick}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
