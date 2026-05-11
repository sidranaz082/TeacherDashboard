import { useState } from 'react';

export default function StepCourse({ onNext }) {
  const [name, setName] = useState('');
  const [code, setCode] = useState('');
  const [semester, setSemester] = useState('');
  const [section, setSection] = useState('');

  return (
    <div>
      <h3 className="text-lg font-semibold text-[#0F2C4A] mb-6">
        <i className="fas fa-book text-[#00B4D8] mr-3"></i> Step 1: Enter Course Details
      </h3>
      <div className="grid grid-cols-2 gap-5 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Course Name *</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="e.g., Data Structures"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00B4D8] focus:ring-3 focus:ring-[#00B4D8]/20 transition" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Course Code *</label>
          <input type="text" value={code} onChange={e => setCode(e.target.value)} placeholder="e.g., CS201"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00B4D8] focus:ring-3 focus:ring-[#00B4D8]/20 transition" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Semester</label>
          <select value={semester} onChange={e => setSemester(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00B4D8] focus:ring-3 focus:ring-[#00B4D8]/20 transition">
            <option value="">Select Semester</option>
            <option>Fall 2024</option>
            <option>Spring 2024</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Section (Optional)</label>
          <input type="text" value={section} onChange={e => setSection(e.target.value)} placeholder="e.g., A, B, C"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00B4D8] focus:ring-3 focus:ring-[#00B4D8]/20 transition" />
        </div>
      </div>
      <button onClick={onNext} className="bg-gradient-to-r from-[#00B4D8] to-[#0090b0] text-white px-6 py-3 rounded-lg font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 flex items-center gap-2 ml-auto cursor-pointer">
        Next <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
}
