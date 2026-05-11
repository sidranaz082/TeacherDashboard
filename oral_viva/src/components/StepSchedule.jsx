import { useState } from 'react';

export default function StepSchedule({ onNext, onBack }) {
  const [scheduleMode, setScheduleMode] = useState('now');

  return (
    <div>
      <h3 className="text-lg font-semibold text-[#0F2C4A] mb-6">
        <i className="fas fa-calendar-alt text-[#00B4D8] mr-3"></i> Step 5: Schedule Viva Session
      </h3>

      <div className="grid grid-cols-2 gap-5 mb-6">
        {[
          { id: 'now', icon: 'fa-bolt', title: 'Start Immediately', desc: 'Begin the session right now' },
          { id: 'later', icon: 'fa-clock', title: 'Schedule for Later', desc: 'Set date and time' },
        ].map(opt => (
          <div key={opt.id} onClick={() => setScheduleMode(opt.id)}
            className={`p-6 rounded-xl border-2 text-center transition cursor-pointer ${
              scheduleMode === opt.id
                ? 'border-[#00B4D8] bg-[#00B4D8]/10'
                : 'border-gray-200 bg-gray-50 hover:border-[#00B4D8]'
            }`}>
            <i className={`fas ${opt.icon} text-3xl text-[#00B4D8] block mb-3`}></i>
            <span className="block font-semibold text-[#0F2C4A]">{opt.title}</span>
            <span className="text-sm text-gray-500">{opt.desc}</span>
          </div>
        ))}
      </div>

      {scheduleMode === 'later' && (
        <div className="grid grid-cols-2 gap-5 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
            <input type="date" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00B4D8]" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time</label>
            <input type="time" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00B4D8]" />
          </div>
        </div>
      )}

      <div className="bg-gray-50 p-5 rounded-lg flex items-center gap-4 mb-6">
        <i className="fas fa-bell text-2xl text-[#00B4D8]"></i>
        <p className="text-sm text-gray-500">Students will be notified via email/app when the session is scheduled</p>
      </div>

      <div className="flex justify-end gap-3">
        <button onClick={onBack} className="px-6 py-3 border-2 border-[#0F2C4A] text-[#0F2C4A] font-semibold rounded-lg hover:bg-[#0F2C4A] hover:text-white transition flex items-center gap-2 cursor-pointer">
          <i className="fas fa-arrow-left"></i> Back
        </button>
        <button onClick={onNext} className="bg-gradient-to-r from-[#00B4D8] to-[#0090b0] text-white px-6 py-3 rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer">
          Next <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
