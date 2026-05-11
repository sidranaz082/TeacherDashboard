import { useState, useRef } from 'react';

export default function StepSyllabus({ onNext, onBack }) {
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileRef = useRef(null);

  const handleFile = (f) => {
    if (f && f.type === 'application/pdf') {
      setFile(f);
    } else {
      alert('Please upload a PDF file');
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  };

  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => setIsDragging(false);

  return (
    <div>
      <h3 className="text-lg font-semibold text-[#0F2C4A] mb-6">
        <i className="fas fa-file-pdf text-[#00B4D8] mr-3"></i> Step 2: Upload Syllabus (PDF)
      </h3>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => fileRef.current?.click()}
        className={`border-2 border-dashed rounded-xl py-16 text-center mb-6 transition cursor-pointer ${
          isDragging
            ? 'border-[#00B4D8] bg-[#00B4D8]/10'
            : file
              ? 'border-green-500 bg-green-50'
              : 'border-gray-300 hover:border-[#00B4D8] hover:bg-[#00B4D8]/5'
        }`}
      >
        {file ? (
          <>
            <i className="fas fa-check-circle text-5xl text-green-500 mb-4"></i>
            <p className="text-green-600 font-semibold mb-2">{file.name}</p>
            <span className="text-sm text-gray-400">Click to change file</span>
          </>
        ) : (
          <>
            <i className="fas fa-cloud-upload-alt text-5xl text-[#00B4D8] mb-4"></i>
            <p className="text-gray-700 mb-2">Drag & Drop your syllabus PDF here</p>
            <span className="text-sm text-gray-400 block mb-4">or</span>
            <button type="button" onClick={(e) => { e.stopPropagation(); fileRef.current?.click(); }}
              className="px-5 py-2.5 border-2 border-[#0F2C4A] text-[#0F2C4A] font-semibold rounded-lg hover:bg-[#0F2C4A] hover:text-white transition cursor-pointer">
              Browse Files
            </button>
          </>
        )}
        <input ref={fileRef} type="file" accept=".pdf" hidden onChange={e => { const f = e.target.files[0]; if (f) handleFile(f); }} />
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
