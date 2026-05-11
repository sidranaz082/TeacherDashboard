import { useState } from 'react';

export default function StepSettings({ onNext, onBack }) {
  const [difficulty, setDifficulty] = useState('moderate');
  const [questions, setQuestions] = useState(5);
  const [time, setTime] = useState(15);

  return (
    <div>
      <h3 className="text-lg font-semibold text-[#0F2C4A] mb-6">
        <i className="fas fa-cog text-[#00B4D8] mr-3"></i> Step 4: Configure Viva Settings
      </h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-5 rounded-xl">
          <label className="block text-sm font-semibold text-[#0F2C4A] mb-3">Difficulty Level</label>
          <div className="flex gap-2">
            {['easy', 'moderate', 'hard'].map(d => (
              <button key={d} onClick={() => setDifficulty(d)}
                className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-medium border-2 transition cursor-pointer ${
                  difficulty === d
                    ? 'border-[#00B4D8] bg-[#00B4D8]/15 text-[#00B4D8] font-semibold'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-[#00B4D8] hover:bg-[#00B4D8]/5'
                }`}>
                {d.charAt(0).toUpperCase() + d.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-5 rounded-xl">
          <label className="block text-sm font-semibold text-[#0F2C4A] mb-3">Question Limit</label>
          <div className="flex items-center gap-3">
            <button onClick={() => setQuestions(Math.max(1, questions - 1))}
              className="w-10 h-10 border-2 border-gray-200 bg-white rounded-lg text-lg cursor-pointer hover:border-[#00B4D8] hover:bg-[#00B4D8]/5 transition">-</button>
            <input type="number" value={questions} readOnly className="w-16 text-center py-2 border-2 border-gray-200 rounded-lg font-semibold" />
            <button onClick={() => setQuestions(Math.min(20, questions + 1))}
              className="w-10 h-10 border-2 border-gray-200 bg-white rounded-lg text-lg cursor-pointer hover:border-[#00B4D8] hover:bg-[#00B4D8]/5 transition">+</button>
          </div>
        </div>

        <div className="bg-gray-50 p-5 rounded-xl">
          <label className="block text-sm font-semibold text-[#0F2C4A] mb-3">Time Limit (minutes)</label>
          <div className="flex items-center gap-3">
            <button onClick={() => setTime(Math.max(5, time - 5))}
              className="w-10 h-10 border-2 border-gray-200 bg-white rounded-lg text-lg cursor-pointer hover:border-[#00B4D8] hover:bg-[#00B4D8]/5 transition">-</button>
            <input type="number" value={time} readOnly className="w-16 text-center py-2 border-2 border-gray-200 rounded-lg font-semibold" />
            <button onClick={() => setTime(Math.min(60, time + 5))}
              className="w-10 h-10 border-2 border-gray-200 bg-white rounded-lg text-lg cursor-pointer hover:border-[#00B4D8] hover:bg-[#00B4D8]/5 transition">+</button>
          </div>
        </div>

        <div className="bg-gray-50 p-5 rounded-xl">
          <label className="block text-sm font-semibold text-[#0F2C4A] mb-3">Allow Re-Viva</label>
          <label className="relative inline-block w-14 h-7 cursor-pointer">
            <input type="checkbox" defaultChecked className="sr-only peer" />
            <div className="absolute inset-0 bg-gray-200 rounded-full peer-checked:bg-[#00B4D8] transition"></div>
            <div className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow peer-checked:translate-x-7 transition"></div>
          </label>
        </div>
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
