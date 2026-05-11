import { useApp } from '../context/AppContext';
import { stats } from '../data/sessions';

const statCards = [
  { icon: 'fa-users', value: stats.totalStudents, label: 'Total Students', color: 'blue' },
  { icon: 'fa-check-circle', value: stats.sessionsCompleted, label: 'Sessions Completed', color: 'teal' },
  { icon: 'fa-clock', value: stats.scheduled, label: 'Scheduled', color: 'orange' },
  { icon: 'fa-exclamation-triangle', value: stats.highRisk, label: 'High Risk', color: 'red' },
];

const colorMap = {
  blue: 'bg-[#0F2C4A]/10 text-[#0F2C4A]',
  teal: 'bg-[#00B4D8]/10 text-[#00B4D8]',
  orange: 'bg-yellow-100 text-yellow-600',
  red: 'bg-red-100 text-red-500',
};

const recentSessions = [
  { id: 'VIV-2024-042', course: 'Data Structures', students: 45, date: 'Mar 25, 2024', score: '78%', status: 'Completed' },
  { id: 'VIV-2024-041', course: 'Algorithm Design', students: 38, date: 'Mar 24, 2024', score: '82%', status: 'Completed' },
  { id: 'VIV-2024-040', course: 'Database Systems', students: 52, date: 'Mar 28, 2024', score: '-', status: 'Scheduled' },
];

export default function Overview() {
  const { navigate, showToast } = useApp();

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#0F2C4A]">Dashboard Overview</h2>
        <button onClick={() => navigate('new-session')}
          className="bg-gradient-to-r from-[#00B4D8] to-[#0090b0] text-white px-5 py-2.5 rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#00B4D8]/40 transition-all duration-300 flex items-center gap-2 cursor-pointer">
          <i className="fas fa-plus"></i> New Viva Session
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6 mb-8">
        {statCards.map(s => (
          <div key={s.label} className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-5 hover:-translate-y-1 hover:shadow-md transition-all">
            <div className={`w-15 h-15 rounded-xl flex items-center justify-center text-2xl ${colorMap[s.color]}`}>
              <i className={`fas ${s.icon}`}></i>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#0F2C4A]">{s.value}</div>
              <div className="text-sm text-gray-500">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#0F2C4A] mb-4">Recent Sessions</h3>
        <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
          <thead className="bg-[#0F2C4A] text-white">
            <tr>
              {['Session ID', 'Course', 'Students', 'Date', 'Avg Score', 'Status', 'Actions'].map(h => (
                <th key={h} className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {recentSessions.map(s => (
              <tr key={s.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">#{s.id}</td>
                <td className="px-6 py-4 text-sm">{s.course}</td>
                <td className="px-6 py-4 text-sm">{s.students}</td>
                <td className="px-6 py-4 text-sm">{s.date}</td>
                <td className="px-6 py-4 text-sm">{s.score}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    s.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>{s.status}</span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-gray-400 hover:text-[#0F2C4A] transition p-1.5 rounded-md hover:bg-gray-100 cursor-pointer" title="View">
                    <i className="fas fa-eye"></i>
                  </button>
                  <button className="text-gray-400 hover:text-[#0F2C4A] transition p-1.5 rounded-md hover:bg-gray-100 cursor-pointer" title="Export">
                    <i className="fas fa-download"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
