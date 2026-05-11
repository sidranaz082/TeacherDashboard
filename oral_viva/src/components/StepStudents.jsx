import { useState, useRef } from 'react';

export default function StepStudents({ onNext, onBack }) {
  const [students, setStudents] = useState(['FA21-BSE-001', 'FA21-BSE-002', 'FA21-BSE-003']);
  const [inputVal, setInputVal] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const fileRef = useRef(null);

  const addStudent = () => {
    const val = inputVal.trim();
    if (val && !students.includes(val)) {
      setStudents(prev => [...prev, val]);
      setInputVal('');
    }
  };

  const removeStudent = (roll) => setStudents(prev => prev.filter(s => s !== roll));

  const handleFile = (f) => {
    const ext = f?.name?.split('.').pop()?.toLowerCase();
    if (ext === 'csv' || ext === 'xlsx') {
      setUploadedFile(f);
    } else {
      alert('Please upload a CSV or Excel file');
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold text-[#0F2C4A] mb-6">
        <i className="fas fa-user-graduate text-[#00B4D8] mr-3"></i> Step 3: Upload Student Roll Numbers
      </h3>

      <div
        onClick={() => fileRef.current?.click()}
        className={`border-2 border-dashed rounded-xl py-12 text-center mb-6 transition cursor-pointer ${
          uploadedFile ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-[#00B4D8]'
        }`}
      >
        {uploadedFile ? (
          <>
            <i className="fas fa-check-circle text-5xl text-green-500 mb-4"></i>
            <p className="text-green-600 font-semibold mb-2">{uploadedFile.name}</p>
            <span className="text-sm text-gray-400">Click to change file</span>
          </>
        ) : (
          <>
            <i className="fas fa-file-csv text-5xl text-[#00B4D8] mb-4"></i>
            <p className="text-gray-700 mb-4">Upload CSV/Excel file with Roll Numbers</p>
            <button type="button" onClick={(e) => { e.stopPropagation(); fileRef.current?.click(); }}
              className="px-5 py-2.5 border-2 border-[#0F2C4A] text-[#0F2C4A] font-semibold rounded-lg hover:bg-[#0F2C4A] hover:text-white transition cursor-pointer">
              Browse Files
            </button>
          </>
        )}
        <input ref={fileRef} type="file" accept=".csv,.xlsx" hidden onChange={e => { const f = e.target.files[0]; if (f) handleFile(f); }} />
      </div>

      <div className="text-center my-6 relative">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-200"></div>
        <span className="bg-white px-4 text-sm text-gray-400 relative">OR</span>
      </div>

      <h4 className="text-sm font-semibold text-[#0F2C4A] mb-3">Add Students Manually</h4>
      <div className="flex gap-3 mb-4">
        <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addStudent()}
          placeholder="Enter Roll Number"
          className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00B4D8]" />
        <button onClick={addStudent}
          className="px-5 py-2.5 border-2 border-[#0F2C4A] text-[#0F2C4A] font-semibold rounded-lg hover:bg-[#0F2C4A] hover:text-white transition flex items-center gap-2 cursor-pointer">
          <i className="fas fa-plus"></i> Add
        </button>
      </div>

      <div className="space-y-2 mb-6">
        {students.map(s => (
          <div key={s} className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg">
            <span className="text-sm font-medium">{s}</span>
            <button onClick={() => removeStudent(s)}
              className="text-gray-400 hover:text-red-500 transition cursor-pointer">
              <i className="fas fa-times"></i>
            </button>
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
