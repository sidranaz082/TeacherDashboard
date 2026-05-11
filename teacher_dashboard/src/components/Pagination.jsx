export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="w-10 h-10 flex items-center justify-center border-2 border-gray-200 rounded-lg text-gray-500 hover:border-[#00B4D8] hover:text-[#00B4D8] disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
      >
        <i className="fas fa-chevron-left text-sm"></i>
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-lg text-sm font-semibold transition cursor-pointer ${
            page === currentPage
              ? 'bg-[#00B4D8] text-white'
              : 'border-2 border-gray-200 text-gray-500 hover:border-[#00B4D8] hover:text-[#00B4D8]'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="w-10 h-10 flex items-center justify-center border-2 border-gray-200 rounded-lg text-gray-500 hover:border-[#00B4D8] hover:text-[#00B4D8] disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
      >
        <i className="fas fa-chevron-right text-sm"></i>
      </button>
    </div>
  );
}
