import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import { AppProvider, useApp } from '../context/AppContext';

vi.useFakeTimers();

function TestConsumer() {
  const { toasts, currentPage, showToast, navigate } = useApp();
  return (
    <div>
      <span data-testid="page">{currentPage}</span>
      <span data-testid="toast-count">{toasts.length}</span>
      {toasts.map(t => <span key={t.id} data-testid={`toast-${t.id}`}>{t.message}</span>)}
      <button data-testid="btn-toast" onClick={() => showToast('hello', 'success')}>Toast</button>
      <button data-testid="btn-nav" onClick={() => navigate('history')}>Nav</button>
    </div>
  );
}

function renderWithProvider() {
  return render(
    <AppProvider>
      <TestConsumer />
    </AppProvider>
  );
}

describe('AppContext', () => {
  beforeEach(() => {
    renderWithProvider();
  });

  it('starts on overview page', () => {
    expect(screen.getByTestId('page').textContent).toBe('overview');
  });

  it('navigate changes current page', () => {
    act(() => { screen.getByTestId('btn-nav').click(); });
    expect(screen.getByTestId('page').textContent).toBe('history');
  });

  it('showToast adds a toast', () => {
    act(() => { screen.getByTestId('btn-toast').click(); });
    expect(screen.getByTestId('toast-count').textContent).toBe('1');
  });

  it('showToast auto-removes toast after 3 seconds', () => {
    act(() => { screen.getByTestId('btn-toast').click(); });
    expect(screen.getByTestId('toast-count').textContent).toBe('1');

    act(() => { vi.advanceTimersByTime(3000); });
    expect(screen.getByTestId('toast-count').textContent).toBe('0');
  });
});
