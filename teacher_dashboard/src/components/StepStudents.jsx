import { useState } from 'react';

export default function StepStudents({ onNext, onBack }) {
  const [students, setStudents] = useState(['FA21-BSE-001', 'FA21-BSE-002', 'FA21-BSE-003']);

  return (
    <div>
      <h3 className="text-lg font-semibold text-[#0F2C4A] mb-6">
        <i className="fas fa-user-graduate text-[#00B4D8] mr-3"></i> Step 3: Upload Student Roll Numbers
      </h3>
      <div className="border-2 border-dashed border-gray-300 rounded-xl py-12 text-center mb-6 hover:border-[#00B4D8] transition cursor-pointer">
        <i className="fas fa-file-csv text-5xl text-[#00B4D8] mb-4"></i>
        <p className="text-gray-700 mb-4">Upload CSV/Excel file with Roll Numbers</p>
        <button className="px-5 py-2.5 border-2 border-[#0F2C4A] text-[#0F2C4A] font-semibold rounded-lg hover:bg-[#0F2C4A] hover:text-white transition">Browse Files</button>
      </div>

      <div className="text-center my-6 relative">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200"></div>
        <span className="bg-white px-4 text-sm text-gray-400 relative">OR</span>
      </div>

      <h4 className="text-sm font-semibold text-[#0F2C4A] mb-3">Add Students Manually</h4>
      <div className="flex gap-3 mb-4">
        <input type="text" placeholder="Enter Roll Number" className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00B4D8]" />
        <button className="px-5 py-2.5 border-2 border-[#0F2C4A] text-[#0F2C4A] font-semibold rounded-lg hover:bg-[#0F2C4A] hover:text-white transition flex items-center gap-2 cursor-pointer">
          <i className="fas fa-plus"></i> Add
        </button>
      </div>

      <div className="space-y-2 mb-6">
        {students.map(s => (
          <div key={s} className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium">{s}</span>
            <button className="text-gray-400 hover:text-red-500 transition cursor-pointer"><i className="fas fa-times"></i></button>
          </div>
        ))}
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
