/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import {
  CheckCircle,
  Award,
  Table,
  Menu,
  X,
  ChevronRight,
  GraduationCap,
  Sparkles,
  Search,
  Languages,
} from 'lucide-react';

import { ALL_TOPICS } from './topicsData.ts';
import { ALL_QUESTIONS } from './questionsData.ts';
import {
  getCompletedTopics,
  getStoredErrors,
  getExamResults,
  isTopicCompleted,
} from './storage.ts';

import { TopicView } from './TopicView.tsx';
import { PracticeView } from './PracticeView.tsx';
import { ExamView } from './ExamView.tsx';
import { ErrorsView } from './ErrorsView.tsx';
import { TextAnalysisView } from './TextAnalysisView.tsx';
import { FiguresTableView } from './FiguresTableView.tsx';
import { ComparisonsView } from './ComparisonsView.tsx';
import { AprendePasoAPaso } from './AprendePasoAPaso.tsx';
import { GuessFigureGame } from './GuessFigureGame.tsx';
import { WordModal } from './WordModal.tsx';

type MainView =
  | 'home'
  | 'topic'
  | 'practice'
  | 'exam'
  | 'errors'
  | 'texts'
  | 'figuresTable'
  | 'comparisons'
  | 'pasoApaso'
  | 'game';

export default function App() {
  const [currentView, setCurrentView] = useState<MainView>('home');
  const [selectedTopicId, setSelectedTopicId] = useState<string>(ALL_TOPICS[0].id);
  const [searchWordForModal, setSearchWordForModal] = useState<string | null>(null);
  const [globalSearch, setGlobalSearch] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Font size scaling (Standard: 18px, Large: 20px, XLarge: 22px)
  const [textSize, setTextSize] = useState<'standard' | 'large' | 'xlarge'>(() => {
    const saved = localStorage.getItem('lengua_1eso_text_size');
    return (saved === 'standard' || saved === 'large' || saved === 'xlarge') ? saved : 'large';
  });

  useEffect(() => {
    document.documentElement.classList.remove('text-size-standard', 'text-size-large', 'text-size-xlarge');
    document.documentElement.classList.add(`text-size-${textSize}`);
    localStorage.setItem('lengua_1eso_text_size', textSize);
  }, [textSize]);

  // Stats from storage
  const [completedTopicIds, setCompletedTopicIds] = useState<string[]>([]);
  const [storedErrorCount, setStoredErrorCount] = useState<number>(0);
  const [examHistory, setExamHistory] = useState(getExamResults());

  const refreshGlobalStats = () => {
    setCompletedTopicIds(getCompletedTopics());
    setStoredErrorCount(getStoredErrors().length);
    setExamHistory(getExamResults());
  };

  useEffect(() => {
    refreshGlobalStats();
  }, [currentView]);

  const handleWordClick = (word: string) => {
    setSearchWordForModal(word);
  };

  const handleOpenTopic = (topicId: string) => {
    setSelectedTopicId(topicId);
    setCurrentView('topic');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenPractice = (topicId: string) => {
    setSelectedTopicId(topicId);
    setCurrentView('practice');
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeTopic = ALL_TOPICS.find((t) => t.id === selectedTopicId) || ALL_TOPICS[0];
  const activeTopicIndex = ALL_TOPICS.findIndex((t) => t.id === activeTopic.id);
  const nextTopic = activeTopicIndex < ALL_TOPICS.length - 1 ? ALL_TOPICS[activeTopicIndex + 1] : undefined;
  const prevTopic = activeTopicIndex > 0 ? ALL_TOPICS[activeTopicIndex - 1] : undefined;

  // Questions for active topic practice
  const topicPracticeQuestions = useMemo(() => {
    const list = ALL_QUESTIONS.filter((q) => q.topicId === activeTopic.id);
    return list.length > 0 ? list : ALL_QUESTIONS.slice(0, 10);
  }, [activeTopic.id]);

  // Topics filtered by search
  const filteredTopics = useMemo(() => {
    if (!globalSearch.trim()) return ALL_TOPICS;
    const query = globalSearch.toLowerCase();
    return ALL_TOPICS.filter(
      (t) =>
        t.title.toLowerCase().includes(query) ||
        t.subtitle.toLowerCase().includes(query) ||
        t.bloqueTitle.toLowerCase().includes(query)
    );
  }, [globalSearch]);

  // Group topics by Bloque for dashboard
  const bloqueGroups = useMemo(() => {
    const groups: Record<string, typeof ALL_TOPICS> = {};
    filteredTopics.forEach((t) => {
      if (!groups[t.bloqueTitle]) groups[t.bloqueTitle] = [];
      groups[t.bloqueTitle].push(t);
    });
    return groups;
  }, [filteredTopics]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C1810] flex flex-col font-sans selection:bg-[#800020]/20 selection:text-[#800020]">
      {/* Top Notice Bar on Bilingual Armenian/Spanish click */}
      <div className="bg-[#800020] text-[#D4AF37] px-4 py-1.5 text-xs font-medium text-center flex items-center justify-center space-x-2">
        <Languages className="w-3.5 h-3.5 shrink-0" />
        <span>
          <strong>Instrucción interactiva:</strong> Pulsa en <em>cualquier oración</em> para ver su
          traducción al armenio (հայերեն թարգմանություն), o en cualquier palabra para el diccionario.
        </span>
      </div>

      {/* Main Navbar */}
      <header className="bg-white border-b border-[#E7DECE] sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo & Title */}
          <div
            onClick={() => {
              setCurrentView('home');
              setMobileMenuOpen(false);
            }}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 bg-[#800020] rounded-xl flex items-center justify-center text-[#D4AF37] shadow-sm group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="font-serif font-bold text-base sm:text-lg text-[#2C1810] leading-tight">
                Lengua y Literatura
              </div>
              <div className="text-[11px] font-semibold text-[#800020] tracking-wider uppercase">
                Examen 1.º ESO • Castellano
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => setCurrentView('home')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentView === 'home' || currentView === 'topic'
                  ? 'bg-[#FAF7F2] text-[#800020] shadow-2xs font-extrabold'
                  : 'text-[#6B5E55] hover:text-[#2C1810]'
              }`}
            >
              📚 Temario (19)
            </button>

            <button
              onClick={() => setCurrentView('exam')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentView === 'exam'
                  ? 'bg-[#800020] text-[#D4AF37] shadow-2xs'
                  : 'text-[#800020] hover:bg-[#FAF7F2]'
              }`}
            >
              🎯 Simulacro 100
            </button>

            <button
              onClick={() => setCurrentView('figuresTable')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentView === 'figuresTable'
                  ? 'bg-[#FAF7F2] text-[#800020] shadow-2xs font-extrabold'
                  : 'text-[#6B5E55] hover:text-[#2C1810]'
              }`}
            >
              📋 Tabla Figuras
            </button>

            <button
              onClick={() => setCurrentView('comparisons')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentView === 'comparisons'
                  ? 'bg-[#FAF7F2] text-[#800020] shadow-2xs font-extrabold'
                  : 'text-[#6B5E55] hover:text-[#2C1810]'
              }`}
            >
              ⚖️ Comparaciones
            </button>

            <button
              onClick={() => setCurrentView('texts')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentView === 'texts'
                  ? 'bg-[#FAF7F2] text-[#800020] shadow-2xs font-extrabold'
                  : 'text-[#6B5E55] hover:text-[#2C1810]'
              }`}
            >
              📖 Analizar Textos
            </button>

            <button
              onClick={() => setCurrentView('pasoApaso')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentView === 'pasoApaso'
                  ? 'bg-[#FAF7F2] text-[#800020] shadow-2xs font-extrabold'
                  : 'text-[#6B5E55] hover:text-[#2C1810]'
              }`}
            >
              🧭 Paso a Paso
            </button>

            <button
              onClick={() => setCurrentView('game')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentView === 'game'
                  ? 'bg-[#FAF7F2] text-[#800020] shadow-2xs font-extrabold'
                  : 'text-[#6B5E55] hover:text-[#2C1810]'
              }`}
            >
              🎮 Mini-Juego
            </button>

            <button
              onClick={() => setCurrentView('errors')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all relative cursor-pointer ${
                currentView === 'errors'
                  ? 'bg-amber-100 text-amber-900 shadow-2xs font-extrabold'
                  : 'text-[#6B5E55] hover:text-[#2C1810]'
              }`}
            >
              🧠 Errores
              {storedErrorCount > 0 && (
                <span className="ml-1.5 px-1.5 py-0.2 bg-rose-600 text-white rounded-full text-[10px] font-bold">
                  {storedErrorCount}
                </span>
              )}
            </button>

            {/* Font Size Selector Desktop */}
            <div
              className="flex items-center gap-0.5 bg-[#FAF7F2] p-1 rounded-xl border border-[#E0D5C1] ml-2"
              title="Ajustar tamaño de letra / Փոխել տառաչափը"
            >
              <button
                onClick={() => setTextSize('standard')}
                className={`px-2 py-0.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  textSize === 'standard'
                    ? 'bg-[#800020] text-[#D4AF37] shadow-xs'
                    : 'text-[#6B5E55] hover:text-[#2C1810]'
                }`}
                title="Tamaño normal (18px)"
              >
                A
              </button>
              <button
                onClick={() => setTextSize('large')}
                className={`px-2 py-0.5 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                  textSize === 'large'
                    ? 'bg-[#800020] text-[#D4AF37] shadow-xs'
                    : 'text-[#6B5E55] hover:text-[#2C1810]'
                }`}
                title="Tamaño grande (20px)"
              >
                A+
              </button>
              <button
                onClick={() => setTextSize('xlarge')}
                className={`px-2 py-0.5 rounded-lg text-base font-bold transition-all cursor-pointer ${
                  textSize === 'xlarge'
                    ? 'bg-[#800020] text-[#D4AF37] shadow-xs'
                    : 'text-[#6B5E55] hover:text-[#2C1810]'
                }`}
                title="Tamaño muy grande (22px)"
              >
                A++
              </button>
            </div>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center space-x-2">
            <div className="flex items-center gap-0.5 bg-[#FAF7F2] p-0.5 rounded-lg border border-[#E0D5C1]">
              <button
                onClick={() => setTextSize('standard')}
                className={`px-1.5 py-0.5 text-xs font-bold rounded ${
                  textSize === 'standard' ? 'bg-[#800020] text-[#D4AF37]' : 'text-[#6B5E55]'
                }`}
              >
                A
              </button>
              <button
                onClick={() => setTextSize('large')}
                className={`px-1.5 py-0.5 text-xs font-bold rounded ${
                  textSize === 'large' ? 'bg-[#800020] text-[#D4AF37]' : 'text-[#6B5E55]'
                }`}
              >
                A+
              </button>
              <button
                onClick={() => setTextSize('xlarge')}
                className={`px-1.5 py-0.5 text-xs font-bold rounded ${
                  textSize === 'xlarge' ? 'bg-[#800020] text-[#D4AF37]' : 'text-[#6B5E55]'
                }`}
              >
                A++
              </button>
            </div>

            <button
              onClick={() => setCurrentView('exam')}
              className="px-2.5 py-1 bg-[#800020] text-[#D4AF37] font-bold text-xs rounded-lg cursor-pointer"
            >
              Examen
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#2C1810] hover:bg-[#FAF7F2] rounded-lg cursor-pointer"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#E7DECE] px-4 pt-2 pb-4 space-y-1 text-sm font-semibold">
            <button
              onClick={() => {
                setCurrentView('home');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-[#FAF7F2] cursor-pointer"
            >
              📚 Temario Completo (19 Temas)
            </button>
            <button
              onClick={() => {
                setCurrentView('exam');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 px-3 rounded-lg text-[#800020] hover:bg-[#FAF7F2] cursor-pointer"
            >
              🎯 Simulacro Oficial (100 preguntas)
            </button>
            <button
              onClick={() => {
                setCurrentView('figuresTable');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-[#FAF7F2] cursor-pointer"
            >
              📋 Resumen de Figuras Literarias
            </button>
            <button
              onClick={() => {
                setCurrentView('comparisons');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-[#FAF7F2] cursor-pointer"
            >
              ⚖️ Comparaciones Clave
            </button>
            <button
              onClick={() => {
                setCurrentView('texts');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-[#FAF7F2] cursor-pointer"
            >
              📖 Analiza el Texto (Poemas, Cuentos, Mitos)
            </button>
            <button
              onClick={() => {
                setCurrentView('pasoApaso');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-[#FAF7F2] cursor-pointer"
            >
              🧭 Aprende Paso a Paso
            </button>
            <button
              onClick={() => {
                setCurrentView('game');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-[#FAF7F2] cursor-pointer"
            >
              🎮 Adivina la Figura
            </button>
            <button
              onClick={() => {
                setCurrentView('errors');
                setMobileMenuOpen(false);
              }}
              className="w-full text-left py-2 px-3 rounded-lg text-amber-800 hover:bg-[#FAF7F2] flex items-center justify-between cursor-pointer"
            >
              <span>🧠 Mis Errores</span>
              {storedErrorCount > 0 && (
                <span className="px-2 py-0.5 bg-rose-600 text-white text-xs rounded-full">
                  {storedErrorCount}
                </span>
              )}
            </button>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {/* VIEW 1: HOME / DASHBOARD */}
        {currentView === 'home' && (
          <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="bg-gradient-to-r from-[#FAF7F2] to-[#F5EFE6] border border-[#E7DECE] rounded-3xl p-6 sm:p-10 shadow-sm mb-8">
              <div className="max-w-3xl">
                <div className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#800020] bg-white border border-[#E0D5C1] px-3.5 py-1 rounded-full mb-3 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-600" /> Preparación Completa
                  1.º ESO
                </div>
                <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#2C1810] mb-3 leading-tight">
                  Lengua Castellana y Literatura
                </h1>
                <p className="text-sm sm:text-base text-[#5C4D44] leading-relaxed mb-6">
                  Tu entrenador interactivo para aprobar con sobresaliente el examen escolar. Toda la
                  teoría de tu libreta, las 11 figuras retóricas, tablas comparativas, cientos de
                  ejercicios y traducción instantánea de cualquier frase al armenio con un simple
                  clic.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setCurrentView('exam')}
                    className="px-6 py-3 bg-[#800020] text-[#D4AF37] font-semibold text-sm rounded-xl hover:bg-[#600018] transition-colors shadow-sm flex items-center cursor-pointer"
                  >
                    <Award className="w-4 h-4 mr-2" />
                    Simulacro Oficial (100 preguntas)
                  </button>
                  <button
                    onClick={() => setCurrentView('figuresTable')}
                    className="px-5 py-3 bg-white border border-[#C5B7A5] text-[#2C1810] font-semibold text-sm rounded-xl hover:bg-[#FAF7F2] transition-colors flex items-center shadow-xs cursor-pointer"
                  >
                    <Table className="w-4 h-4 mr-2 text-[#800020]" />
                    Tabla de Figuras Literarias
                  </button>
                </div>
              </div>

              {/* Progress Summary Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8 pt-8 border-t border-[#E7DECE]">
                <div className="bg-white/80 p-3.5 rounded-2xl border border-[#E0D5C1]">
                  <div className="text-[11px] font-bold text-[#8C7E74] uppercase">
                    Temas Completados
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#800020]">
                    {completedTopicIds.length}{' '}
                    <span className="text-xs font-sans text-[#6B5E55]">/ 19</span>
                  </div>
                </div>

                <div className="bg-white/80 p-3.5 rounded-2xl border border-[#E0D5C1]">
                  <div className="text-[11px] font-bold text-[#8C7E74] uppercase">
                    Banco de Preguntas
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#2C1810]">
                    300+
                  </div>
                </div>

                <div className="bg-white/80 p-3.5 rounded-2xl border border-[#E0D5C1]">
                  <div className="text-[11px] font-bold text-[#8C7E74] uppercase">
                    Simulacros Realizados
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-[#2C1810]">
                    {examHistory.length}
                  </div>
                </div>

                <div className="bg-white/80 p-3.5 rounded-2xl border border-[#E0D5C1]">
                  <div className="text-[11px] font-bold text-[#8C7E74] uppercase">
                    Errores Pendientes
                  </div>
                  <div className="text-xl sm:text-2xl font-serif font-bold text-amber-800">
                    {storedErrorCount}
                  </div>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="mb-8 max-w-xl">
              <div className="relative">
                <Search className="w-4 h-4 text-[#8C7E74] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Buscar tema (ej. Romance, Aliteración, Metáfora, Leyenda...)"
                  value={globalSearch}
                  onChange={(e) => setGlobalSearch(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-white border border-[#E0D5C1] rounded-2xl text-sm focus:outline-none focus:border-[#800020] shadow-xs transition-colors"
                />
              </div>
            </div>

            {/* Bloques & Topics Grid */}
            <div className="space-y-10">
              {Object.entries(bloqueGroups).map(([bloqueTitle, topicsInBloque]) => (
                <div key={bloqueTitle} className="space-y-4">
                  <div className="border-b border-[#E7DECE] pb-2 flex items-center justify-between">
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#2C1810]">
                      {bloqueTitle}
                    </h2>
                    <span className="text-xs text-[#8C7E74] font-medium">
                      {topicsInBloque.length} {topicsInBloque.length === 1 ? 'tema' : 'temas'}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {topicsInBloque.map((topic) => {
                      const completed = isTopicCompleted(topic.id);
                      const qCount = ALL_QUESTIONS.filter((q) => q.topicId === topic.id).length || 10;

                      return (
                        <div
                          key={topic.id}
                          className="bg-white border border-[#E0D5C1] rounded-2xl p-5 hover:border-[#800020] hover:shadow-md transition-all flex flex-col justify-between group"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#800020] bg-[#FAF7F2] px-2 py-0.5 rounded-md border border-[#E0D5C1]">
                                Tema {topic.number}
                              </span>
                              {completed && (
                                <span className="inline-flex items-center text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                  <CheckCircle className="w-3 h-3 mr-1" /> Completado
                                </span>
                              )}
                            </div>

                            <h3 className="font-serif font-bold text-base sm:text-lg text-[#2C1810] mb-1 group-hover:text-[#800020] transition-colors">
                              {topic.title}
                            </h3>
                            <p className="text-xs text-[#5C4D44] line-clamp-2 mb-4 leading-relaxed">
                              {topic.subtitle}
                            </p>
                          </div>

                          <div className="flex items-center justify-between pt-3 border-t border-[#EFE9DF] mt-2">
                            <button
                              onClick={() => handleOpenTopic(topic.id)}
                              className="text-xs font-bold text-[#800020] hover:underline flex items-center cursor-pointer"
                            >
                              Estudiar teoría <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                            </button>
                            <button
                              onClick={() => handleOpenPractice(topic.id)}
                              className="px-3 py-1 bg-[#FAF7F2] hover:bg-[#800020] hover:text-white border border-[#E0D5C1] rounded-lg text-xs font-semibold text-[#2C1810] transition-colors cursor-pointer"
                            >
                              Test ({qCount})
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VIEW 2: TOPIC VIEW */}
        {currentView === 'topic' && (
          <TopicView
            topic={activeTopic}
            onBack={() => setCurrentView('home')}
            onStartPractice={(topicId) => handleOpenPractice(topicId)}
            onOpenWordLookup={handleWordClick}
            onNextTopic={nextTopic ? () => handleOpenTopic(nextTopic.id) : undefined}
            onPrevTopic={prevTopic ? () => handleOpenTopic(prevTopic.id) : undefined}
          />
        )}

        {/* VIEW 3: PRACTICE VIEW */}
        {currentView === 'practice' && (
          <PracticeView
            title={`Práctica: ${activeTopic.title}`}
            subtitle={activeTopic.subtitle}
            questions={topicPracticeQuestions}
            onBack={() => setCurrentView('home')}
            onFinish={() => {
              refreshGlobalStats();
              setCurrentView('home');
            }}
            onOpenWordLookup={handleWordClick}
          />
        )}

        {/* VIEW 4: EXAM VIEW */}
        {currentView === 'exam' && <ExamView onWordClick={handleWordClick} />}

        {/* VIEW 5: ERRORS VIEW */}
        {currentView === 'errors' && (
          <ErrorsView
            onWordClick={handleWordClick}
            onGoToTopic={(topicId) => handleOpenTopic(topicId)}
          />
        )}

        {/* VIEW 6: TEXTS ANALYSIS VIEW */}
        {currentView === 'texts' && <TextAnalysisView onWordClick={handleWordClick} />}

        {/* VIEW 7: FIGURES TABLE VIEW */}
        {currentView === 'figuresTable' && <FiguresTableView onWordClick={handleWordClick} />}

        {/* VIEW 8: COMPARISONS VIEW */}
        {currentView === 'comparisons' && <ComparisonsView onWordClick={handleWordClick} />}

        {/* VIEW 9: PASO A PASO */}
        {currentView === 'pasoApaso' && (
          <AprendePasoAPaso onWordClick={handleWordClick} onFinish={() => setCurrentView('home')} />
        )}

        {/* VIEW 10: MINI-GAME */}
        {currentView === 'game' && <GuessFigureGame onWordClick={handleWordClick} />}
      </main>

      {/* Interactive Word Dictionary Modal */}
      {searchWordForModal !== null && (
        <WordModal
          initialWord={searchWordForModal}
          onClose={() => setSearchWordForModal(null)}
        />
      )}
    </div>
  );
}
