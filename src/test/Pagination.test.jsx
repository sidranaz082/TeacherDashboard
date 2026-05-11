import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from '../components/Pagination';

describe('Pagination', () => {
  it('renders nothing when totalPages is 1', () => {
    const { container } = render(<Pagination currentPage={1} totalPages={1} onPageChange={() => {}} />);
    expect(container.innerHTML).toBe('');
  });

  it('renders correct number of page buttons', () => {
    render(<Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(5);
  });

  it('highlights the current page', () => {
    render(<Pagination currentPage={2} totalPages={3} onPageChange={() => {}} />);
    const page2 = screen.getByText('2');
    expect(page2.className).toContain('bg-[#00B4D8]');
  });

  it('disables prev button on first page', () => {
    render(<Pagination currentPage={1} totalPages={3} onPageChange={() => {}} />);
    const prev = screen.getAllByRole('button')[0];
    expect(prev).toBeDisabled();
  });

  it('disables next button on last page', () => {
    render(<Pagination currentPage={3} totalPages={3} onPageChange={() => {}} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons[buttons.length - 1]).toBeDisabled();
  });

  it('calls onPageChange when clicking a page number', () => {
    const fn = vi.fn();
    render(<Pagination currentPage={1} totalPages={3} onPageChange={fn} />);
    fireEvent.click(screen.getByText('2'));
    expect(fn).toHaveBeenCalledWith(2);
  });

  it('calls onPageChange with prev when clicking prev', () => {
    const fn = vi.fn();
    render(<Pagination currentPage={2} totalPages={3} onPageChange={fn} />);
    const prev = screen.getAllByRole('button')[0];
    fireEvent.click(prev);
    expect(fn).toHaveBeenCalledWith(1);
  });

  it('calls onPageChange with next when clicking next', () => {
    const fn = vi.fn();
    render(<Pagination currentPage={1} totalPages={3} onPageChange={fn} />);
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[buttons.length - 1]);
    expect(fn).toHaveBeenCalledWith(2);
  });
});
