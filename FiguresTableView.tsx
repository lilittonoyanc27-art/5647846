/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Table,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Search,
} from 'lucide-react';
import { ALL_FIGURES } from './figuresData.ts';
import { InteractiveSentence } from './InteractiveSentence.tsx';

interface FiguresTableViewProps {
  onWordClick?: (word: string) => void;
  onSelectFigure?: (figureId: string) => void;
}

export const FiguresTableView: React.FC<FiguresTableViewProps> = ({
  onWordClick,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [levelFilter, setLevelFilter] = useState<'all' | 'fonico' | 'morfosintactico' | 'semantico'>(
    'all'
  );
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredFigures = ALL_FIGURES.filter((fig) => {
    const matchesLevel =
      levelFilter === 'all' ||
      (levelFilter === 'fonico' && fig.level === 'fónico') ||
      (levelFilter === 'morfosintactico' && fig.level === 'morfosintáctico') ||
      (levelFilter === 'semantico' && fig.level === 'semántico');

    const matchesSearch =
      searchQuery.trim() === '' ||
      fig.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fig.definitionEs.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fig.howToRecognizeEs.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesLevel && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="bg-[#FAF7F2] border border-[#E7DECE] rounded-3xl p-6 sm:p-8 shadow-sm mb-8 text-center sm:text-left">
        <div className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#800020] bg-white border border-[#E0D5C1] px-3 py-1 rounded-full mb-3 shadow-xs">
          <Table className="w-3.5 h-3.5 mr-1.5" /> Tabla Maestra de Estudio
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1810] mb-2">
          Resumen Completo de Figuras Literarias
        </h1>
        <p className="text-[#5C4D44] text-sm sm:text-base max-w-2xl leading-relaxed">
          Las 11 figuras retóricas de 1.º ESO organizadas por planos lingüísticos. Haz clic en
          cualquier fila para ver sus trucos mnemotécnicos, ejemplos y advertencias de examen.
          Recuerda pulsar en cualquier oración para ver su traducción al armenio.
        </p>

        {/* Filters and Search */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-[#8C7E74] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar figura (ej. Anáfora, Polisíndeton...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-[#E0D5C1] rounded-xl text-sm focus:outline-none focus:border-[#800020] transition-colors"
            />
          </div>

          <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-[#E0D5C1] self-start sm:self-auto overflow-x-auto">
            <button
              onClick={() => setLevelFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                levelFilter === 'all'
                  ? 'bg-[#800020] text-white shadow-xs'
                  : 'text-[#6B5E55] hover:text-[#2C1810]'
              }`}
            >
              Todas (11)
            </button>
            <button
              onClick={() => setLevelFilter('fonico')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                levelFilter === 'fonico'
                  ? 'bg-[#800020] text-white shadow-xs'
                  : 'text-[#6B5E55] hover:text-[#2C1810]'
              }`}
            >
              Fónico (3)
            </button>
            <button
              onClick={() => setLevelFilter('morfosintactico')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                levelFilter === 'morfosintactico'
                  ? 'bg-[#800020] text-white shadow-xs'
                  : 'text-[#6B5E55] hover:text-[#2C1810]'
              }`}
            >
              Morfosintáctico (7)
            </button>
            <button
              onClick={() => setLevelFilter('semantico')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                levelFilter === 'semantico'
                  ? 'bg-[#800020] text-white shadow-xs'
                  : 'text-[#6B5E55] hover:text-[#2C1810]'
              }`}
            >
              Semántico (1)
            </button>
          </div>
        </div>
      </div>

      {/* Main Table */}
      <div className="bg-white border border-[#E0D5C1] rounded-2xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FAF7F2] border-b border-[#E0D5C1] text-xs font-bold uppercase tracking-wider text-[#6B5E55]">
                <th className="py-4 px-5">Figura Retórica</th>
                <th className="py-4 px-4 hidden sm:table-cell">Nivel / Plano</th>
                <th className="py-4 px-5">Definición Esencial</th>
                <th className="py-4 px-5 hidden md:table-cell">Ejemplo Clásico</th>
                <th className="py-4 px-4 text-center">Detalle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EFE9DF] text-sm text-[#2C1810]">
              {filteredFigures.map((fig) => {
                const isExpanded = expandedId === fig.id;
                const sampleExample = fig.examples[0];

                let levelBadgeClass = 'bg-blue-100 text-blue-800';
                if (fig.level === 'fónico') levelBadgeClass = 'bg-purple-100 text-purple-800';
                if (fig.level === 'semántico') levelBadgeClass = 'bg-amber-100 text-amber-800';

                return (
                  <React.Fragment key={fig.id}>
                    <tr
                      onClick={() => toggleExpand(fig.id)}
                      className={`hover:bg-[#FAF7F2]/80 transition-colors cursor-pointer ${
                        isExpanded ? 'bg-[#FAF7F2]/60' : ''
                      }`}
                    >
                      <td className="py-4 px-5 font-serif font-bold text-base text-[#800020]">
                        {fig.name}
                      </td>
                      <td className="py-4 px-4 hidden sm:table-cell">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${levelBadgeClass}`}
                        >
                          {fig.level}
                        </span>
                      </td>
                      <td className="py-4 px-5 text-xs sm:text-sm">
                        <InteractiveSentence
                          sentence={{
                            es: fig.simpleExplanationEs,
                            hy: fig.simpleExplanationHy,
                          }}
                          onWordClick={onWordClick}
                        />
                      </td>
                      <td className="py-4 px-5 hidden md:table-cell font-serif italic text-xs text-[#5C4D44]">
                        {sampleExample && (
                          <InteractiveSentence
                            sentence={{
                              es: sampleExample.text,
                              hy: sampleExample.textHy,
                            }}
                            onWordClick={onWordClick}
                          />
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <button
                          className="w-8 h-8 rounded-full bg-[#FAF7F2] hover:bg-[#E7DECE] text-[#800020] flex items-center justify-center mx-auto transition-colors cursor-pointer"
                          aria-label="Expandir fila"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </button>
                      </td>
                    </tr>

                    {/* Expanded Detail Row */}
                    {isExpanded && (
                      <tr className="bg-[#FAF7F2]/40">
                        <td colSpan={5} className="py-5 px-6 border-b border-[#E0D5C1]">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-xl border border-[#E0D5C1]">
                              <div className="text-xs font-bold uppercase tracking-wider text-[#800020] mb-2 flex items-center">
                                <Sparkles className="w-3.5 h-3.5 mr-1" /> Clave para Reconocerla en el Examen
                              </div>
                              <InteractiveSentence
                                sentence={{
                                  es: fig.howToRecognizeEs,
                                  hy: fig.howToRecognizeHy,
                                }}
                                onWordClick={onWordClick}
                              />
                            </div>

                            <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200">
                              <div className="text-xs font-bold uppercase tracking-wider text-amber-900 mb-2 flex items-center">
                                ⚠️ Peligro de Confusión Frecuente
                              </div>
                              <InteractiveSentence
                                sentence={{
                                  es: `${fig.confusedWithEs} - ${fig.howToDistinguishEs}`,
                                  hy: `${fig.confusedWithHy} - ${fig.howToDistinguishHy}`,
                                }}
                                onWordClick={onWordClick}
                              />
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-[#E0D5C1] md:col-span-2">
                              <div className="text-xs font-bold uppercase tracking-wider text-[#2C1810] mb-3">
                                Ejemplos Clave Analizados
                              </div>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {fig.examples.slice(0, 4).map((ex, idx) => (
                                  <div
                                    key={idx}
                                    className="p-3 bg-[#FAF7F2] rounded-lg border border-[#EFE9DF]"
                                  >
                                    <div className="font-serif italic text-sm text-[#800020] mb-1">
                                      <InteractiveSentence
                                        sentence={{
                                          es: ex.text,
                                          hy: ex.textHy,
                                        }}
                                        onWordClick={onWordClick}
                                      />
                                    </div>
                                    <div className="text-xs text-[#5C4D44]">
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
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
