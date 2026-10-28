/**
 * Type definitions for Lengua y Literatura 1.º ESO
 * All files are organized directly in /src/ without subdirectories.
 */

export interface SentenceWithTranslation {
  es: string;
  hy: string;
  note?: string;
}

export interface TopicSection {
  title: string;
  titleHy?: string;
  content: SentenceWithTranslation[];
  subsections?: {
    title: string;
    content: SentenceWithTranslation[];
  }[];
  notes?: SentenceWithTranslation[];
}

export interface TopicExample {
  text: string;
  textHy: string;
  analysis: string;
  analysisHy: string;
  author?: string;
  highlightWords?: string[];
}

export interface Topic {
  id: string;
  bloqueId: number;
  bloqueTitle: string;
  bloqueTitleHy: string;
  number: number;
  title: string;
  titleHy: string;
  subtitle: string;
  subtitleHy: string;
  iconName: string;
  summary: SentenceWithTranslation[];
  sections: TopicSection[];
  examples: TopicExample[];
  examTips: SentenceWithTranslation[];
  commonPitfalls: SentenceWithTranslation[];
  comparisonsWith?: string;
}

export interface QuestionOption {
  id: string;
  text: string;
  textHy: string;
}

export interface Question {
  id: string;
  topicId: string;
  bloqueId: number;
  difficulty: 'facil' | 'medio' | 'dificil' | 'experto';
  questionType:
    | 'choice'
    | 'identify'
    | 'truefalse'
    | 'finderror'
    | 'complete'
    | 'matchexample'
    | 'textanalysis'
    | 'compare'
    | 'relate'
    | 'classify';
  question: string;
  questionHy: string;
  stimulus?: string;
  stimulusHy?: string;
  options: QuestionOption[];
  correctOptionId: string;
  explanationEs: string;
  explanationHy: string;
  whyIncorrect?: Record<string, { es: string; hy: string }>;
  memoryTipEs?: string;
  memoryTipHy?: string;
  extraExampleEs?: string;
  extraExampleHy?: string;
}

export interface FigureDeepDive {
  id: string;
  name: string;
  nameHy: string;
  level: 'fónico' | 'morfosintáctico' | 'semántico';
  definitionEs: string;
  definitionHy: string;
  simpleExplanationEs: string;
  simpleExplanationHy: string;
  howToRecognizeEs: string;
  howToRecognizeHy: string;
  confusedWithEs: string;
  confusedWithHy: string;
  howToDistinguishEs: string;
  howToDistinguishHy: string;
  examples: {
    text: string;
    textHy: string;
    breakdownEs: string;
    breakdownHy: string;
    highlight: string;
    author?: string;
  }[];
  miniTestQuestions: Question[];
}

export interface ComparisonItem {
  id: string;
  title: string;
  titleHy: string;
  conceptA: string;
  conceptB: string;
  table: {
    aspect: string;
    aspectHy: string;
    conceptA: string;
    conceptAHy: string;
    conceptB: string;
    conceptBHy: string;
  }[];
  examples: {
    text: string;
    textHy: string;
    belongsTo: string;
    reasonEs: string;
    reasonHy: string;
    author?: string;
  }[];
  commonMistakes: SentenceWithTranslation[];
  exercises: Question[];
}

export interface TextAnalysisItem {
  id: string;
  category: 'poema' | 'cuento' | 'leyenda' | 'mito' | 'figura';
  title: string;
  author?: string;
  sentences: SentenceWithTranslation[];
  contextNoteEs: string;
  contextNoteHy: string;
  questions: Question[];
}

export interface UserErrorRecord {
  id: string;
  questionId: string;
  topicId: string;
  questionText: string;
  questionTextHy: string;
  userSelectedOptionText: string;
  userSelectedOptionTextHy: string;
  correctOptionText: string;
  correctOptionTextHy: string;
  explanationEs: string;
  explanationHy: string;
  timestamp: number;
  timesFailed: number;
}

export interface ExamSettings {
  questionCount: 20 | 50 | 100;
  isTimed: boolean;
  timeLimitMinutes: number;
  mode: 'full' | 'errors' | 'topic';
  selectedTopicId?: string;
}

export interface ExamResult {
  id: string;
  date: string;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  scoreOn10: number; // Spanish 0-10 scale
  percentage: number;
  durationSeconds: number;
  categoryScores: Record<string, { correct: number; total: number }>;
  incorrectQuestions: {
    question: Question;
    selectedId: string;
  }[];
}

export interface WordLookup {
  word: string;
  lemma: string;
  pos: string;
  meaningHy: string;
  contextExampleEs: string;
  contextExampleHy: string;
}
