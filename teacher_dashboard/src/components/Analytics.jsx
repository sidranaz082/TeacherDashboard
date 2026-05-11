export default function Analytics() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#0F2C4A]">Analytics Dashboard</h2>
        <select className="px-4 py-2.5 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00B4D8]">
          <option>All Sessions</option>
          <option>Data Structures</option>
          <option>Algorithm Design</option>
          <option>Database Systems</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-[#0F2C4A] mb-6 flex items-center gap-2">
            <i className="fas fa-chart-bar text-[#00B4D8]"></i> Class Performance Overview
          </h3>
          <div>
            <div className="flex items-end justify-around h-48 mb-3 gap-3">
              {[
                { label: 'Arrays', pct: 75 },
                { label: 'Linked Lists', pct: 60 },
                { label: 'Trees', pct: 85 },
                { label: 'Graphs', pct: 45 },
                { label: 'Sorting', pct: 70 },
              ].map(topic => (
                <div key={topic.label} className="flex flex-col items-center flex-1">
                  <div className="w-full bg-gray-100 rounded-lg relative" style={{ height: '180px' }}>
                    <div
                      className="absolute bottom-0 w-full bg-gradient-to-t from-[#00B4D8] to-[#0090b0] rounded-lg transition-all duration-500"
                      style={{ height: `${topic.pct}%` }}
                    >
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-[#0F2C4A]">{topic.pct}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-around mt-2">
              {['Arrays', 'Linked Lists', 'Trees', 'Graphs', 'Sorting'].map(l => (
                <span key={l} className="text-xs text-gray-500 text-center flex-1">{l}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-[#0F2C4A] mb-4 flex items-center gap-2">
              <i className="fas fa-trophy text-yellow-500"></i> Average Class Score
            </h3>
            <div className="text-5xl font-bold text-[#0F2C4A] mb-2">78%</div>
            <div className="text-sm text-green-600 flex items-center gap-1">
              <i className="fas fa-arrow-up"></i> +5% from last session
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-semibold text-[#0F2C4A] mb-4 flex items-center gap-2">
              <i className="fas fa-exclamation-circle text-red-500"></i> Most Failed Concept
            </h3>
            <div className="text-3xl font-bold text-red-500 mb-2">Graphs</div>
            <div className="text-sm text-gray-500">45% average score in this topic</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-[#0F2C4A] mb-4 flex items-center gap-2">
            <i className="fas fa-shield-alt text-yellow-500"></i> Avg Cheating %
          </h3>
          <div className="text-5xl font-bold text-yellow-500 mb-2">12%</div>
          <div className="text-sm text-gray-500">2 students flagged</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-[#0F2C4A] mb-4 flex items-center gap-2">
            <i className="fas fa-users text-red-500"></i> High Risk Students
          </h3>
          <div className="space-y-3">
            {[
              { roll: 'FA21-BSE-015', pct: '67%', level: 'high' },
              { roll: 'FA21-BSE-023', pct: '54%', level: 'high' },
              { roll: 'FA21-BSE-041', pct: '38%', level: 'medium' },
            ].map(s => (
              <div key={s.roll} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{s.roll}</span>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  s.level === 'high' ? 'bg-red-100 text-red-600' : 'bg-yellow-100 text-yellow-600'
                }`}>{s.pct}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-[#0F2C4A] mb-4 flex items-center gap-2">
            <i className="fas fa-download text-[#00B4D8]"></i> Export Options
          </h3>
          <div className="space-y-3">
            {[
              { icon: 'fa-file-excel', label: 'Excel Sheet', color: 'green' },
              { icon: 'fa-file-pdf', label: 'Full Report (PDF)', color: 'red' },
              { icon: 'fa-chart-pie', label: 'Cheating Analytics', color: 'blue' },
            ].map(opt => (
              <button key={opt.label} className="w-full flex items-center gap-3 px-4 py-3 border-2 border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:border-[#00B4D8] hover:text-[#00B4D8] transition cursor-pointer">
                <i className={`fas ${opt.icon} text-${
                  opt.color === 'green' ? 'green-600' : opt.color === 'red' ? 'red-500' : 'blue-500'
                }`}></i>
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
