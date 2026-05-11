import { describe, it, expect } from 'vitest';
import { sessions, stats } from '../data/sessions';

describe('sessions data', () => {
  it('has 15 sample sessions', () => {
    expect(sessions).toHaveLength(15);
  });

  it('every session has required fields', () => {
    sessions.forEach(s => {
      expect(s).toHaveProperty('id');
      expect(s).toHaveProperty('course');
      expect(s).toHaveProperty('students');
      expect(s).toHaveProperty('date');
      expect(s).toHaveProperty('score');
      expect(s).toHaveProperty('cheating');
      expect(s).toHaveProperty('status');
    });
  });

  it('all sessions are completed', () => {
    sessions.forEach(s => {
      expect(s.status).toBe('Completed');
    });
  });

  it('stats object has expected keys', () => {
    expect(stats).toHaveProperty('totalStudents', 156);
    expect(stats).toHaveProperty('sessionsCompleted', 42);
    expect(stats).toHaveProperty('scheduled', 8);
    expect(stats).toHaveProperty('highRisk', 3);
  });
});
