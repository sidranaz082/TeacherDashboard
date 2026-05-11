export default function Login({ onLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0F2C4A] to-[#0a1f35] p-8">
      <div className="bg-white p-12 rounded-2xl shadow-2xl w-full max-w-md animate-[slideUp_0.5s_ease]">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-[#0F2C4A] to-[#00B4D8] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <i className="fas fa-graduation-cap text-4xl text-white"></i>
          </div>
          <h1 className="text-3xl font-bold text-[#0F2C4A] mb-1">CodeViva</h1>
          <p className="text-gray-500 text-sm">AI-Powered Viva System</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block font-medium text-gray-700 mb-2 text-sm">
              <i className="fas fa-envelope text-[#00B4D8] mr-2"></i> Email
            </label>
            <input type="email" required placeholder="teacher@university.edu"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00B4D8] focus:ring-3 focus:ring-[#00B4D8]/20 transition" />
          </div>
          <div>
            <label className="block font-medium text-gray-700 mb-2 text-sm">
              <i className="fas fa-lock text-[#00B4D8] mr-2"></i> Password
            </label>
            <input type="password" required placeholder="Enter your password"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#00B4D8] focus:ring-3 focus:ring-[#00B4D8]/20 transition" />
          </div>
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-[#00B4D8] to-[#0090b0] text-white font-semibold rounded-lg hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#00B4D8]/40 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
            <i className="fas fa-sign-in-alt"></i> Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
