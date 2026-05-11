import { useApp } from '../context/AppContext';

const navItems = [
  { id: 'overview', label: 'Overview', icon: 'fa-home' },
  { id: 'new-session', label: 'New Viva', icon: 'fa-plus-circle' },
  { id: 'live-monitoring', label: 'Live Monitoring', icon: 'fa-video' },
  { id: 'analytics', label: 'Analytics', icon: 'fa-chart-bar' },
  { id: 'history', label: 'History', icon: 'fa-history' },
];

export default function Sidebar({ onLogout }) {
  const { currentPage, navigate, showToast } = useApp();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      onLogout();
    }
  };

  return (
    <aside className="fixed left-0 top-0 w-[260px] h-screen bg-[#0F2C4A] text-white flex flex-col z-50">
      <div className="flex items-center gap-4 px-6 py-6 border-b border-white/10">
        <div className="w-10 h-10 bg-gradient-to-r from-[#00B4D8] to-[#0090b0] rounded-lg flex items-center justify-center">
          <i className="fas fa-graduation-cap text-white"></i>
        </div>
        <span className="text-xl font-bold">CodeViva</span>
      </div>

      <nav className="flex-1 px-4 py-4 overflow-y-auto space-y-1">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => navigate(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition cursor-pointer ${
              currentPage === item.id
                ? 'bg-[#00B4D8] text-white'
                : 'text-white/70 hover:bg-white/10 hover:text-white'
            }`}
          >
            <i className={`fas ${item.icon} w-6 text-center`}></i>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="px-4 py-4 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#00B4D8] rounded-full flex items-center justify-center font-bold">T</div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Dr. Teacher</span>
            <span className="text-xs text-white/70">Professor</span>
          </div>
        </div>
        <button onClick={handleLogout}
          className="text-white/70 hover:text-red-400 transition cursor-pointer p-2 rounded-lg hover:bg-white/10">
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </aside>
  );
}
