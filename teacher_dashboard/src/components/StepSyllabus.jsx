export default function StepSyllabus({ onNext, onBack }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[#0F2C4A] mb-6">
        <i className="fas fa-file-pdf text-[#00B4D8] mr-3"></i> Step 2: Upload Syllabus (PDF)
      </h3>
      <div className="border-2 border-dashed border-gray-300 rounded-xl py-16 text-center mb-6 hover:border-[#00B4D8] hover:bg-[#00B4D8]/5 transition cursor-pointer">
        <i className="fas fa-cloud-upload-alt text-5xl text-[#00B4D8] mb-4"></i>
        <p className="text-gray-700 mb-2">Drag & Drop your syllabus PDF here</p>
        <span className="text-sm text-gray-400 block mb-4">or</span>
        <button className="px-5 py-2.5 border-2 border-[#0F2C4A] text-[#0F2C4A] font-semibold rounded-lg hover:bg-[#0F2C4A] hover:text-white transition">Browse Files</button>
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
