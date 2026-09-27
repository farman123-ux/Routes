export function Footer({ author = "React Developer", year = 2026 }) {
  return (
    <footer className="bg-slate-900 border-t border-white/5 p-6 text-center text-sm text-slate-500 mt-auto w-full">
      <div className="w-full mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          React Router, Hooks & Props Practice Website
        </span>
        <span className="flex items-center gap-1">
          © {year} Built by <strong className="text-slate-300 ml-1 hover:text-indigo-400 transition-colors cursor-pointer">{author}</strong>
        </span>
      </div>
    </footer>
  );
}
