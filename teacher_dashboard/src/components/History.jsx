import { useState, useMemo } from 'react';
import { sessions } from '../data/sessions';
import Pagination from './Pagination';
import { useApp } from '../context/AppContext';

const ITEMS_PER_PAGE = 5;

export default function History() {
  const { showToast } = useApp();
  const [search, setSearch] = useState('');
  const [course, setCourse] = useState('All Courses');
  const [date, setDate] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return sessions.filter(s => {
      const matchSearch = !search || s.id.toLowerCase().includes(search.toLowerCase()) || s.course.toLowerCase().includes(search.toLowerCase());
      const matchCourse = course === 'All Courses' || s.course === course;
      const matchDate = !date || s.date.includes(date);
      return matchSearch && matchCourse && matchDate;
    });
  }, [search, course, date]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const pageData = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handlePageChange = (p) => {
    if (p >= 1 && p <= totalPages) setPage(p);
  };

  const courses = [...new Set(sessions.map(s => s.course))];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#0F2C4A]">Session History</h2>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
            <input
              type="text" placeholder="Search sessions..."
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
              className="w-full pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00B4D8]"
            />
          </div>
          <select
            value={course}
            onChange={e => { setCourse(e.target.value); setPage(1); }}
            className="px-4 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00B4D8]"
          >
            <option>All Courses</option>
            {courses.map(c => <option key={c}>{c}</option>)}
          </select>
          <input
            type="date"
            value={date}
            onChange={e => { setDate(e.target.value); setPage(1); }}
            className="px-4 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00B4D8]"
          />
        </div>
      </div>

      <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
        <thead className="bg-[#0F2C4A] text-white">
          <tr>
            {['Session ID', 'Course', 'Students', 'Date', 'Avg Score', 'Cheating %', 'Status', 'Actions'].map(h => (
              <th key={h} className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pageData.map(s => (
            <tr key={s.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-6 py-4 text-sm">#{s.id}</td>
              <td className="px-6 py-4 text-sm">{s.course}</td>
              <td className="px-6 py-4 text-sm">{s.students}</td>
              <td className="px-6 py-4 text-sm">{s.date}</td>
              <td className="px-6 py-4 text-sm">{s.score}</td>
              <td className="px-6 py-4 text-sm">{s.cheating}</td>
              <td className="px-6 py-4 text-sm">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-600">{s.status}</span>
              </td>
              <td className="px-6 py-4 text-sm">
                <div className="flex gap-1">
                  {[
                    { icon: 'fa-eye', action: 'Viewing session' },
                    { icon: 'fa-file-alt', action: 'Generating report' },
                    { icon: 'fa-download', action: 'Exporting' },
                    { icon: 'fa-redo', action: 'Opening Re-Viva options' },
                  ].map(btn => (
                    <button
                      key={btn.icon}
                      onClick={() => showToast(`${btn.action} ${s.id}...`, 'info')}
                      className="text-gray-400 hover:text-[#0F2C4A] transition p-1.5 rounded-md hover:bg-gray-100 cursor-pointer"
                    >
                      <i className={`fas ${btn.icon}`}></i>
                    </button>
                  ))}
                </div>
              </td>
            </tr>
          ))}
          {pageData.length === 0 && (
            <tr>
              <td colSpan={8} className="px-6 py-12 text-center text-gray-400">No sessions found</td>
            </tr>
          )}
        </tbody>
      </table>

      <Pagination currentPage={page} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}
