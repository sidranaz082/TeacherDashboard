export default function StepSchedule({ onNext, onBack }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#0F2C4A] mb-6">
        <i className="fas fa-calendar-alt text-[#00B4D8] mr-3"></i> Step 5: Schedule Viva Session
      </h3>

      <div className="grid grid-cols-2 gap-5 mb-6">
        {['Start Immediately', 'Schedule for Later'].map((opt, i) => (
          <div key={opt}
            className={`p-6 rounded-xl border-2 text-center transition cursor-pointer ${
              i === 0 ? 'border-[#00B4D8] bg-[#00B4D8]/10' : 'border-gray-200 bg-gray-50 hover:border-[#00B4D8]'
            }`}>
            <i className={`fas ${i === 0 ? 'fa-bolt' : 'fa-clock'} text-3xl text-[#00B4D8] block mb-3`}></i>
            <span className="block font-semibold text-[#0F2C4A]">{opt}</span>
            <span className="text-sm text-gray-500">{i === 0 ? 'Begin the session right now' : 'Set date and time'}</span>
          </div>
        ))}
      </div>

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
