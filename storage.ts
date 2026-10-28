import { UserErrorRecord, ExamResult } from './types.ts';

const STORAGE_KEYS = {
  COMPLETED_TOPICS: 'lengua_1eso_completed_topics',
  TOPIC_STATUSES: 'lengua_1eso_topic_statuses', // 'not_started' | 'in_progress' | 'completed' | 'needs_review'
  USER_ERRORS: 'lengua_1eso_user_errors',
  EXAM_RESULTS: 'lengua_1eso_exam_results',
  BEST_SCORE: 'lengua_1eso_best_score',
  LAST_TOPIC: 'lengua_1eso_last_topic',
  TRANSLATION_MODE: 'lengua_1eso_trans_mode'
};

export type TopicStatus = 'not_started' | 'in_progress' | 'completed' | 'needs_review';

export function getCompletedTopics(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.COMPLETED_TOPICS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function markTopicCompleted(topicId: string): void {
  try {
    const list = getCompletedTopics();
    if (!list.includes(topicId)) {
      list.push(topicId);
      localStorage.setItem(STORAGE_KEYS.COMPLETED_TOPICS, JSON.stringify(list));
    }
    setTopicStatus(topicId, 'completed');
  } catch (e) {
    console.error('Error saving completed topic', e);
  }
}

export function getTopicStatuses(): Record<string, TopicStatus> {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.TOPIC_STATUSES);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function setTopicStatus(topicId: string, status: TopicStatus): void {
  try {
    const statuses = getTopicStatuses();
    statuses[topicId] = status;
    localStorage.setItem(STORAGE_KEYS.TOPIC_STATUSES, JSON.stringify(statuses));
  } catch (e) {
    console.error('Error updating topic status', e);
  }
}

export function getUserErrors(): UserErrorRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.USER_ERRORS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function recordUserError(err: Omit<UserErrorRecord, 'id' | 'timestamp' | 'timesFailed'>): void {
  try {
    const errors = getUserErrors();
    const existingIndex = errors.findIndex((e) => e.questionId === err.questionId);

    if (existingIndex >= 0) {
      errors[existingIndex].timesFailed += 1;
      errors[existingIndex].timestamp = Date.now();
      errors[existingIndex].userSelectedOptionText = err.userSelectedOptionText;
      errors[existingIndex].userSelectedOptionTextHy = err.userSelectedOptionTextHy;
    } else {
      errors.unshift({
        ...err,
        id: `err-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
        timestamp: Date.now(),
        timesFailed: 1
      });
    }

    localStorage.setItem(STORAGE_KEYS.USER_ERRORS, JSON.stringify(errors));
    setTopicStatus(err.topicId, 'needs_review');
  } catch (e) {
    console.error('Error recording error', e);
  }
}

export function removeResolvedError(questionId: string): void {
  try {
    const errors = getUserErrors().filter((e) => e.questionId !== questionId);
    localStorage.setItem(STORAGE_KEYS.USER_ERRORS, JSON.stringify(errors));
  } catch (e) {
    console.error('Error removing error', e);
  }
}

export function clearAllErrors(): void {
  try {
    localStorage.removeItem(STORAGE_KEYS.USER_ERRORS);
  } catch (e) {
    console.error('Error clearing errors', e);
  }
}

export function getExamResults(): ExamResult[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.EXAM_RESULTS);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveExamResult(result: ExamResult): void {
  try {
    const results = getExamResults();
    results.unshift(result);
    localStorage.setItem(STORAGE_KEYS.EXAM_RESULTS, JSON.stringify(results));

    // Update best score
    const best = getBestExamScore();
    if (result.scoreOn10 > best) {
      localStorage.setItem(STORAGE_KEYS.BEST_SCORE, result.scoreOn10.toString());
    }
  } catch (e) {
    console.error('Error saving exam result', e);
  }
}

export function getBestExamScore(): number {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BEST_SCORE);
    return raw ? parseFloat(raw) : 0;
  } catch {
    return 0;
  }
}

export function setLastStudiedTopic(topicId: string): void {
  try {
    localStorage.setItem(STORAGE_KEYS.LAST_TOPIC, topicId);
  } catch (e) {
    console.error('Error setting last topic', e);
  }
}

export function getLastStudiedTopic(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEYS.LAST_TOPIC);
  } catch {
    return null;
  }
}

export const getStoredErrors = getUserErrors;

export function isTopicCompleted(topicId: string): boolean {
  return getCompletedTopics().includes(topicId);
}

