import { useState } from 'react';
import StudentCard from './StudentCard';
import NotificationPanel from './NotificationPanel';
import { useApp } from '../context/AppContext';

const initialStudents = [
  { roll: 'FA21-BSE-001', status: 'active', time: '12:34', risk: 'low' },
  { roll: 'FA21-BSE-002', status: 'active', time: '08:45', risk: 'medium' },
  { roll: 'FA21-BSE-003', status: 'paused', time: '05:12', risk: 'low' },
  { roll: 'FA21-BSE-015', status: 'risk-high', time: '10:22', risk: 'high', riskPct: '67%' },
  { roll: 'FA21-BSE-008', status: 'completed', score: '85%' },
  { roll: 'FA21-BSE-010', status: 'waiting' },
  { roll: 'FA21-BSE-022', status: 'active', time: '03:18', risk: 'low' },
  { roll: 'FA21-BSE-033', status: 'active', time: '07:55', risk: 'medium' },
];

export default function LiveMonitoring() {
  const { showToast } = useApp();
  const [students, setStudents] = useState(initialStudents);

  const updateStatus = (roll, newStatus) => {
    setStudents(prev => prev.map(s => s.roll === roll ? { ...s, status: newStatus } : s));
  };

  const handlePauseAll = () => {
    showToast('All sessions paused', 'warning');
    setStudents(prev => prev.map(s =>
      s.status === 'active' || s.status === 'risk-high' ? { ...s, status: 'paused' } : s
    ));
  };

  const handleResumeAll = () => {
    showToast('All sessions resumed', 'success');
    setStudents(prev => prev.map(s =>
      s.status === 'paused' ? { ...s, status: 'active' } : s
    ));
  };

  const handleStopAll = () => {
    if (window.confirm('Are you sure you want to stop all sessions?')) {
      showToast('All sessions stopped', 'info');
      setStudents(prev => prev.map(s =>
        s.status !== 'completed' && s.status !== 'waiting' ? { ...s, status: 'completed' } : s
      ));
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-[#0F2C4A]">Live Monitoring</h2>
          <p className="text-sm text-gray-500 mt-1">Session VIV-2024-043 — Data Structures</p>
        </div>
        <div className="flex gap-3">
          <button onClick={handlePauseAll} className="px-4 py-2.5 border-2 border-yellow-500 text-yellow-600 rounded-lg font-semibold text-sm hover:bg-yellow-50 transition flex items-center gap-2 cursor-pointer">
            <i className="fas fa-pause"></i> Pause All
          </button>
          <button onClick={handleResumeAll} className="px-4 py-2.5 border-2 border-green-500 text-green-600 rounded-lg font-semibold text-sm hover:bg-green-50 transition flex items-center gap-2 cursor-pointer">
            <i className="fas fa-play"></i> Resume
          </button>
          <button onClick={handleStopAll} className="px-4 py-2.5 bg-red-500 text-white rounded-lg font-semibold text-sm hover:bg-red-600 transition flex items-center gap-2 cursor-pointer">
            <i className="fas fa-stop"></i> Stop All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_320px] gap-6">
        <div className="grid grid-cols-3 gap-4">
          {students.map(s => (
            <StudentCard key={s.roll} student={s} onStatusChange={updateStatus} />
          ))}
        </div>
        <NotificationPanel />
      </div>
    </div>
  );
}
