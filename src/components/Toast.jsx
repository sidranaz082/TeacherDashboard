import { useApp } from '../context/AppContext';

export default function Toast() {
  const { toasts } = useApp();

  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col gap-3">
      {toasts.map(t => (
        <div key={t.id} className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg bg-white min-w-[280px] border-l-4 animate-slide-in ${
          t.type === 'success' ? 'border-green-500' :
          t.type === 'error' ? 'border-red-500' :
          t.type === 'warning' ? 'border-yellow-500' : 'border-blue-500'
        }`}>
          <i className={`fas ${
            t.type === 'success' ? 'fa-check-circle text-green-500' :
            t.type === 'error' ? 'fa-exclamation-circle text-red-500' :
            t.type === 'warning' ? 'fa-exclamation-triangle text-yellow-500' : 'fa-info-circle text-blue-500'
          } text-lg`}></i>
          <span className="text-gray-700 text-sm">{t.message}</span>
        </div>
      ))}
    </div>
  );
}
