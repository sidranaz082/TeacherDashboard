import { useApp } from '../context/AppContext';

export default function StepStart({ onBack, formData }) {
  const { showToast, navigate } = useApp();

  const handleStart = () => {
    showToast('Session started successfully!', 'success');
    setTimeout(() => {
      navigate('live-monitoring');
    }, 1000);
  };

  const summary = [
    { label: 'Course', value: formData?.courseName || 'Data Structures' },
    { label: 'Students', value: formData?.students?.length || '45' },
    { label: 'Difficulty', value: formData?.difficulty ? formData.difficulty.charAt(0).toUpperCase() + formData.difficulty.slice(1) : 'Moderate' },
    { label: 'Questions', value: formData?.questions || '5' },
    { label: 'Time Limit', value: formData?.time ? `${formData.time} min` : '15 min' },
    { label: 'Mode', value: formData?.scheduleMode === 'later' ? 'Scheduled' : 'Start Now' },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-[#0F2C4A] mb-6">
        <i className="fas fa-play-circle text-[#00B4D8] mr-3"></i> Step 6: Start Viva Session
      </h3>

      <div className="bg-gray-50 p-6 rounded-xl mb-6">
        <h4 className="font-semibold text-[#0F2C4A] mb-4">Session Summary</h4>
        <div className="grid grid-cols-3 gap-4">
          {summary.map(item => (
            <div key={item.label} className="bg-white p-4 rounded-lg">
              <span className="text-xs text-gray-400 block">{item.label}</span>
              <span className="text-sm font-semibold text-[#0F2C4A]">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3 text-sm text-green-600">
          <i className="fas fa-check-circle"></i>
          <span>Unique Session ID Generated</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-green-600">
          <i className="fas fa-check-circle"></i>
          <span>AI Questioning Engine Activated</span>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <button onClick={onBack} className="px-6 py-3 border-2 border-[#0F2C4A] text-[#0F2C4A] font-semibold rounded-lg hover:bg-[#0F2C4A] hover:text-white transition flex items-center gap-2 cursor-pointer">
          <i className="fas fa-arrow-left"></i> Back
        </button>
        <button onClick={handleStart} className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer">
          <i className="fas fa-play"></i> Start Viva Session
        </button>
      </div>
    </div>
  );
}
