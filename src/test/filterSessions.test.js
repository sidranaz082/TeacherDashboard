import { describe, it, expect } from 'vitest';
import { filterSessions } from '../data/filterSessions';
import { sessions } from '../data/sessions';

describe('filterSessions', () => {
  it('returns all sessions with no filters', () => {
    const result = filterSessions(sessions);
    expect(result).toHaveLength(15);
  });

  it('filters by search term (session ID)', () => {
    const result = filterSessions(sessions, { search: 'VIV-2024-042' });
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('VIV-2024-042');
  });

  it('filters by search term (course name)', () => {
    const result = filterSessions(sessions, { search: 'data structures' });
    expect(result.length).toBeGreaterThan(0);
    result.forEach(s => {
      expect(s.course.toLowerCase()).toContain('data structures');
    });
  });

  it('filters by course', () => {
    const result = filterSessions(sessions, { course: 'Algorithm Design' });
    result.forEach(s => {
      expect(s.course).toBe('Algorithm Design');
    });
  });

  it('returns all sessions when course is All Courses', () => {
    const result = filterSessions(sessions, { course: 'All Courses' });
    expect(result).toHaveLength(15);
  });

  it('returns empty array when no matches', () => {
    const result = filterSessions(sessions, { search: 'NO-MATCH-999' });
    expect(result).toHaveLength(0);
  });

  it('paginates correctly (first page of 5)', () => {
    const filtered = filterSessions(sessions);
    const page = filtered.slice(0, 5);
    expect(page).toHaveLength(5);
  });
});
