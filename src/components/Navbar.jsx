import { NavLink } from "react-router-dom";

export function Navbar({ siteTitle = "React Master", currentVersion = "v1.0" }) {
 

  return (
    <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-white/10 text-white p-4 z-50">
      <div className="w-full mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Title passed via Props */}
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            {siteTitle}
          </span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-mono shadow-inner shadow-indigo-500/10">
            {currentVersion}
          </span>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:max-w-xs group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search routing concepts..."
            className="w-full bg-slate-800/50 border border-slate-700/50 rounded-full pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:bg-slate-800 transition-all shadow-inner"
          />
        </div>

        {/* Route Links */}
        
      </div>
    </header>
  );
}
