/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import {
  Gamepad2,
  Sparkles,
  Trophy,
  Flame,
  CheckCircle,
  XCircle,
  Zap,
  HelpCircle,
  ChevronRight,
} from 'lucide-react';
import { ALL_FIGURES } from './figuresData.ts';
import { InteractiveSentence } from './InteractiveSentence.tsx';

interface GuessFigureGameProps {
  onWordClick?: (word: string) => void;
}

type Difficulty = 'facil' | 'medio' | 'dificil' | 'experto';

interface GameCard {
  figureName: string;
  figureId: string;
  verseSpanish: string;
  verseArmenian: string;
  hintSpanish: string;
  hintArmenian: string;
  options: string[];
  difficulty: Difficulty;
}

export const GuessFigureGame: React.FC<GuessFigureGameProps> = ({ onWordClick }) => {
  const [difficulty, setDifficulty] = useState<Difficulty>('facil');
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [currentRound, setCurrentRound] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showHint, setShowHint] = useState(false);

  const cardsPool: GameCard[] = useMemo(() => {
    const list: GameCard[] = [];

    ALL_FIGURES.forEach((fig) => {
      fig.examples.forEach((ex, idx) => {
        let diff: Difficulty = 'facil';
        if (idx === 0 || idx === 1) diff = 'facil';
        else if (idx === 2 || idx === 3) diff = 'medio';
        else if (idx === 4 || idx === 5) diff = 'dificil';
        else diff = 'experto';

        const otherFigures = ALL_FIGURES.filter((f) => f.id !== fig.id).map((f) => f.name);
        const shuffledOthers = [...otherFigures].sort(() => 0.5 - Math.random()).slice(0, 3);
        const options = [fig.name, ...shuffledOthers].sort(() => 0.5 - Math.random());

        list.push({
          figureName: fig.name,
          figureId: fig.id,
          verseSpanish: ex.text,
          verseArmenian: ex.textHy,
          hintSpanish: fig.howToRecognizeEs,
          hintArmenian: fig.howToRecognizeHy,
          options,
          difficulty: diff,
        });
      });
    });

    return list;
  }, []);

  const filteredCards = useMemo(() => {
    return cardsPool.filter((c) => c.difficulty === difficulty);
  }, [cardsPool, difficulty]);

  const activeCard = filteredCards[currentRound % filteredCards.length];

  const handleSelect = (chosen: string) => {
    if (selectedOption !== null) return;
    setSelectedOption(chosen);

    if (chosen === activeCard.figureName) {
      const bonus = showHint ? 10 : 20;
      setScore((s) => s + bonus);
      setStreak((st) => {
        const next = st + 1;
        if (next > bestStreak) setBestStreak(next);
        return next;
      });
    } else {
      setStreak(0);
    }
  };

  const nextCard = () => {
    setSelectedOption(null);
    setShowHint(false);
    setCurrentRound((r) => r + 1);
  };

  const restartGame = () => {
    setScore(0);
    setStreak(0);
    setCurrentRound(0);
    setSelectedOption(null);
    setShowHint(false);
  };

  if (!activeCard) {
    return null;
  }

  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === activeCard.figureName;

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-[#FAF7F2] border border-[#E7DECE] rounded-3xl p-6 sm:p-8 shadow-sm mb-6 text-center">
        <div className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#800020] bg-white border border-[#E0D5C1] px-3 py-1 rounded-full mb-3 shadow-xs">
          <Gamepad2 className="w-3.5 h-3.5 mr-1.5" /> Mini-Juego Educativo
        </div>
        <h1 className="font-serif text-3xl font-bold text-[#2C1810] mb-2">
          Adivina la Figura Literaria
        </h1>
        <p className="text-[#5C4D44] text-xs sm:text-sm max-w-xl mx-auto mb-6">
          Lee el fragmento poético, pulsa en cualquier frase para ver su traducción al armenio, e
          identifica qué figura retórica está usando el autor.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {(['facil', 'medio', 'dificil', 'experto'] as Difficulty[]).map((d) => (
            <button
              key={d}
              onClick={() => {
                setDifficulty(d);
                restartGame();
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                difficulty === d
                  ? 'bg-[#800020] text-[#D4AF37] shadow-xs'
                  : 'bg-white border border-[#E0D5C1] text-[#6B5E55] hover:border-[#800020]'
              }`}
            >
              {d === 'facil'
                ? 'Fácil'
                : d === 'medio'
                ? 'Medio'
                : d === 'dificil'
                ? 'Difícil'
                : 'Experto 🔥'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
          <div className="bg-white p-3 rounded-2xl border border-[#E0D5C1] shadow-xs">
            <div className="text-[10px] font-bold uppercase text-[#8C7E74] flex items-center justify-center">
              <Trophy className="w-3 h-3 mr-1 text-amber-500" /> Puntos
            </div>
            <div className="font-serif font-bold text-xl text-[#2C1810]">{score}</div>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-[#E0D5C1] shadow-xs">
            <div className="text-[10px] font-bold uppercase text-[#8C7E74] flex items-center justify-center">
              <Flame className="w-3 h-3 mr-1 text-rose-500" /> Racha
            </div>
            <div className="font-serif font-bold text-xl text-[#800020]">
              {streak} <span className="text-xs text-[#8C7E74]">/ {bestStreak}</span>
            </div>
          </div>

          <div className="bg-white p-3 rounded-2xl border border-[#E0D5C1] shadow-xs">
            <div className="text-[10px] font-bold uppercase text-[#8C7E74] flex items-center justify-center">
              <Zap className="w-3 h-3 mr-1 text-indigo-500" /> Ronda
            </div>
            <div className="font-serif font-bold text-xl text-[#2C1810]">{currentRound + 1}</div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#E0D5C1] rounded-3xl p-6 sm:p-10 shadow-sm mb-6 text-center">
        <div className="text-xs font-bold uppercase tracking-wider text-[#8C7E74] mb-3">
          ¿Qué figura literaria se esconde en este texto?
        </div>

        <div className="bg-[#FAF7F2] border-2 border-[#E7DECE] rounded-2xl p-6 sm:p-8 mb-6 font-serif italic text-lg sm:text-2xl text-[#2C1810] leading-relaxed">
          <InteractiveSentence
            sentence={{
              es: activeCard.verseSpanish,
              hy: activeCard.verseArmenian,
            }}
            onWordClick={onWordClick}
          />
        </div>

        {!showHint && !isAnswered && (
          <button
            onClick={() => setShowHint(true)}
            className="text-xs font-semibold text-[#800020] hover:underline flex items-center justify-center mx-auto mb-6 cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5 mr-1" /> Necesito una pista (-10 pts)
          </button>
        )}

        {showHint && (
          <div className="bg-amber-50/80 border border-amber-200 rounded-xl p-3 text-xs sm:text-sm text-amber-950 max-w-lg mx-auto mb-6 text-left">
            <div className="font-bold text-amber-900 mb-1 flex items-center">
              <Sparkles className="w-3.5 h-3.5 mr-1 text-amber-700" /> Pista mnemotécnica:
            </div>
            <InteractiveSentence
              sentence={{
                es: activeCard.hintSpanish,
                hy: activeCard.hintArmenian,
              }}
              onWordClick={onWordClick}
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {activeCard.options.map((opt) => {
            const isChosen = selectedOption === opt;
            const isTarget = opt === activeCard.figureName;

            let btnClass = 'border-[#E0D5C1] bg-white hover:border-[#800020] text-[#2C1810]';
            if (isAnswered) {
              if (isTarget) {
                btnClass =
                  'border-emerald-500 bg-emerald-100 text-emerald-950 font-bold scale-[1.02] shadow-xs';
              } else if (isChosen && !isTarget) {
                btnClass = 'border-rose-400 bg-rose-100 text-rose-950 line-through';
              } else {
                btnClass = 'border-[#E0D5C1] bg-gray-50 text-gray-400 opacity-60';
              }
            }

            return (
              <button
                key={opt}
                onClick={() => handleSelect(opt)}
                disabled={isAnswered}
                className={`py-4 px-5 rounded-2xl border-2 text-sm sm:text-base font-serif font-bold transition-all flex items-center justify-between cursor-pointer ${btnClass}`}
              >
                <span>{opt}</span>
                {isAnswered && isTarget && (
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {isAnswered && isChosen && !isTarget && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 border-t border-[#EFE9DF]">
            <div className="text-sm font-semibold text-[#2C1810]">
              {isCorrect ? (
                <span className="text-emerald-700 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1.5" /> ¡Exacto! Se trata de una{' '}
                  {activeCard.figureName}.
                </span>
              ) : (
                <span className="text-rose-700 flex items-center">
                  <XCircle className="w-4 h-4 mr-1.5" /> ¡Oh, no! Era una {activeCard.figureName}.
                </span>
              )}
            </div>
            <button
              onClick={nextCard}
              className="px-6 py-2.5 bg-[#800020] text-[#D4AF37] font-semibold text-sm rounded-xl hover:bg-[#600018] transition-colors flex items-center shadow-xs cursor-pointer"
            >
              Siguiente reto <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
