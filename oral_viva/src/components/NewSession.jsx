import { useState } from 'react';
import StepCourse from './StepCourse';
import StepSyllabus from './StepSyllabus';
import StepStudents from './StepStudents';
import StepSettings from './StepSettings';
import StepSchedule from './StepSchedule';
import StepStart from './StepStart';

const steps = ['Course Details', 'Upload Syllabus', 'Add Students', 'Settings', 'Schedule', 'Start'];

export default function NewSession() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const updateData = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const next = () => setStep(p => Math.min(p + 1, 6));
  const prev = () => setStep(p => Math.max(p - 1, 1));

  const handleNextWithData = (data) => {
    updateData(data);
    next();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#0F2C4A]">Create New Viva Session</h2>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm">
        {/* Steps Indicator */}
        <div className="flex items-center justify-between mb-6 pb-2">
          {steps.map((label, i) => {
            const idx = i + 1;
            return (
              <div key={label} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center gap-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all
                    ${idx === step ? 'bg-[#00B4D8] text-white' :
                      idx < step ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`
                  }>
                    {idx < step ? <i className="fas fa-check"></i> : idx}
                  </div>
                  <span className={`text-[10px] text-center whitespace-nowrap ${
                    idx === step ? 'text-[#0F2C4A] font-semibold' : 'text-gray-400'
                  }`}>{label}</span>
                </div>
                {idx < 6 && (
                  <div className={`flex-1 h-0.5 mx-1 mt-[-16px] ${idx < step ? 'bg-green-500' : 'bg-gray-200'}`}></div>
                )}
              </div>
            );
          })}
        </div>

        {step === 1 && <StepCourse onNext={() => handleNextWithData({})} />}
        {step === 2 && <StepSyllabus onNext={next} onBack={prev} />}
        {step === 3 && <StepStudents onNext={next} onBack={prev} />}
        {step === 4 && <StepSettings onNext={next} onBack={prev} />}
        {step === 5 && <StepSchedule onNext={next} onBack={prev} />}
        {step === 6 && <StepStart onBack={prev} formData={formData} />}
      </div>
    </div>
  );
}
