import { useState, useEffect } from 'react';

const sampleNotifications = [
  { type: 'warning', title: 'Cheating Detected', desc: 'FA21-BSE-015 - Suspicious movement detected (67%)', time: 'Just now' },
  { type: 'success', title: 'Student Finished', desc: 'FA21-BSE-008 completed viva', time: '2 min ago' },
  { type: 'info', title: 'Risk Level Changed', desc: 'FA21-BSE-023 - Risk increased to HIGH', time: '5 min ago' },
];

export default function NotificationPanel() {
  const [notifications, setNotifications] = useState(sampleNotifications);

  useEffect(() => {
    const interval = setInterval(() => {
      const alerts = [
        { type: 'warning', title: 'Cheating Alert', desc: 'Suspicious movement detected', roll: 'FA21-BSE-015' },
        { type: 'success', title: 'Student Finished', desc: 'Viva completed', roll: 'FA21-BSE-022' },
        { type: 'info', title: 'Risk Changed', desc: 'Risk level increased', roll: 'FA21-BSE-033' },
      ];
      if (Math.random() > 0.7) {
        const n = alerts[Math.floor(Math.random() * alerts.length)];
        setNotifications(prev => [
          { type: n.type, title: n.title, desc: `${n.roll} - ${n.desc}`, time: 'Just now' },
          ...prev.slice(0, 9),
        ]);
      }
    }, 45000);
    return () => clearInterval(interval);
  }, []);

  const iconMap = {
    warning: 'fa-exclamation-triangle text-yellow-500',
    success: 'fa-check-circle text-green-500',
    info: 'fa-info-circle text-blue-500',
  };

  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
        <i className="fas fa-bell text-[#00B4D8]"></i>
        <span className="font-semibold text-[#0F2C4A]">Live Notifications</span>
        <span className="ml-auto bg-[#00B4D8] text-white text-xs px-2 py-0.5 rounded-full">{notifications.length}</span>
      </div>
      <div className="max-h-[400px] overflow-y-auto">
        {notifications.map((n, i) => (
          <div key={i} className="flex items-start gap-3 px-5 py-3 border-b border-gray-50 hover:bg-gray-50 transition">
            <i className={`fas ${iconMap[n.type]} mt-0.5`}></i>
            <div className="flex-1 min-w-0">
              <span className="text-sm font-semibold text-gray-700 block">{n.title}</span>
              <span className="text-xs text-gray-500 block truncate">{n.desc}</span>
              <span className="text-[10px] text-gray-400 block mt-0.5">{n.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
