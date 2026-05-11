import { useApp } from '../context/AppContext';

const statusStyles = {
  active: { border: 'border-[#00B4D8]', badge: 'bg-[#00B4D8]', label: 'Live', icon: 'fa-circle' },
  paused: { border: 'border-yellow-500', badge: 'bg-yellow-500', label: 'Paused', icon: 'fa-pause' },
  'risk-high': { border: 'border-red-500', badge: 'bg-red-500', label: 'High Risk', icon: 'fa-exclamation' },
  completed: { border: 'border-green-500', badge: 'bg-green-500', label: 'Done', icon: 'fa-check' },
  waiting: { border: 'border-gray-300', badge: 'bg-gray-400', label: 'Waiting', icon: 'fa-hourglass-half' },
};

const statusBg = {
  active: 'bg-[#0F2C4A]',
  paused: 'bg-gray-500',
  'risk-high': 'bg-red-600',
  completed: 'bg-green-600',
  waiting: 'bg-gray-300',
};

export default function StudentCard({ student }) {
  const { showToast } = useApp();
  const style = statusStyles[student.status] || statusStyles.waiting;

  const handlePause = () => showToast(`Session paused for ${student.roll}`, 'warning');
  const handleResume = () => showToast(`Session resumed for ${student.roll}`, 'success');
  const handleStop = () => {
    if (window.confirm(`Stop session for ${student.roll}?`)) {
      showToast(`Session stopped for ${student.roll}`, 'info');
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm border-2 ${style.border} overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300`}>
      <div className={`h-32 ${statusBg[student.status]} relative flex items-center justify-center`}>
        <span className="text-white/30 text-2xl font-bold">{student.roll}</span>
        <div className="absolute top-2 right-2">
          <span className={`${style.badge} text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1`}>
            <i className={`fas ${style.icon} ${student.status === 'active' ? 'animate-pulse' : ''}`}></i>
            {style.label}
          </span>
        </div>
      </div>
      <div className="p-4">
        <span className="font-semibold text-sm text-[#0F2C4A]">{student.roll}</span>
        <div className="flex items-center gap-3 mt-2 text-xs text-gray-500">
          {student.time && <span><i className="fas fa-clock mr-1"></i>{student.time}</span>}
          {student.risk && (
            <span className={`flex items-center gap-1 ${
              student.risk === 'low' ? 'text-green-600' :
              student.risk === 'medium' ? 'text-yellow-600' : 'text-red-600'
            }`}>
              <i className="fas fa-shield-alt"></i> {student.risk === 'high' ? student.riskPct || 'High' : student.risk.charAt(0).toUpperCase() + student.risk.slice(1)}
            </span>
          )}
          {student.score && <span><i className="fas fa-star mr-1 text-yellow-500"></i>{student.score}</span>}
        </div>
      </div>
      <div className="px-4 pb-4 flex gap-2">
        {student.status === 'active' && (
          <>
            <button onClick={handlePause} className="flex-1 py-2 border-2 border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:border-yellow-500 hover:text-yellow-600 transition cursor-pointer">
              <i className="fas fa-pause mr-1"></i> Pause
            </button>
            <button onClick={handleStop} className="flex-1 py-2 border-2 border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:border-red-500 hover:text-red-600 transition cursor-pointer">
              <i className="fas fa-stop mr-1"></i> Stop
            </button>
          </>
        )}
        {student.status === 'paused' && (
          <>
            <button onClick={handleResume} className="flex-1 py-2 border-2 border-green-500 rounded-lg text-xs font-semibold text-green-600 hover:bg-green-50 transition cursor-pointer">
              <i className="fas fa-play mr-1"></i> Resume
            </button>
            <button onClick={handleStop} className="flex-1 py-2 border-2 border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:border-red-500 hover:text-red-600 transition cursor-pointer">
              <i className="fas fa-stop mr-1"></i> Stop
            </button>
          </>
        )}
        {student.status === 'risk-high' && (
          <>
            <button onClick={handlePause} className="flex-1 py-2 border-2 border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:border-yellow-500 hover:text-yellow-600 transition cursor-pointer">
              <i className="fas fa-pause mr-1"></i> Pause
            </button>
            <button onClick={handleStop} className="flex-1 py-2 border-2 border-red-500 rounded-lg text-xs font-semibold text-red-600 hover:bg-red-50 transition cursor-pointer">
              <i className="fas fa-stop mr-1"></i> Stop
            </button>
          </>
        )}
        {student.status === 'completed' && (
          <button className="flex-1 py-2 border-2 border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:border-[#00B4D8] hover:text-[#00B4D8] transition cursor-pointer" title="View Report">
            <i className="fas fa-file-alt mr-1"></i> Report
          </button>
        )}
        {student.status === 'waiting' && (
          <button className="flex-1 py-2 bg-gradient-to-r from-[#00B4D8] to-[#0090b0] text-white rounded-lg text-xs font-semibold hover:-translate-y-0.5 transition cursor-pointer">
            <i className="fas fa-play mr-1"></i> Start
          </button>
        )}
      </div>
    </div>
  );
}
