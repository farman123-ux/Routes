import { Link } from "react-router-dom";

export function Home({ appTitle = "React Learning Hub", learningGoal = "Master Props, Hooks & Routes" }) {
  return (
    <div className="flex flex-col space-y-24 pb-20 w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 sm:px-12 py-20 w-full flex flex-col items-center text-center">
        <div className="absolute inset-0 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 z-10">
          Master the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-500">Route</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-12 z-10 leading-relaxed">
          Navigate your React applications with precision. {learningGoal}. Discover dynamic routing, nested views, and programmatic navigation seamlessly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 z-10">
          <Link
            to="/routes"
            className="px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:shadow-[0_0_40px_rgba(99,102,241,0.7)] hover:-translate-y-1"
          >
            Start Routing →
          </Link>
          <a
            href="#product"
            className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold transition-all border border-slate-700 hover:border-slate-500"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Product / Understand The Route Section */}
      <section id="product" className="px-6 sm:px-12 w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">React Learning Hub: Props, Hooks & Routes</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Everything you need to build robust and dynamic React products.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Props */}
          <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-emerald-500/50 p-8 rounded-3xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-24 h-24 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
            </div>
            <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform">
              <span className="text-2xl">📦</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">React Props</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Pass data between components efficiently. Learn to structure your app dynamically and handle callbacks to manage state across the component tree.
            </p>
          </div>

          {/* Feature 2: Hooks */}
          <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 p-8 rounded-3xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-24 h-24 text-purple-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            </div>
            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
              <span className="text-2xl">⚓</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">React Hooks</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Master stateful logic with <code>useState</code> and handle side effects with <code>useEffect</code> to power your interactive components.
            </p>
          </div>

          {/* Feature 3: Routes */}
          <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-indigo-500/50 p-8 rounded-3xl transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-24 h-24 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z"/></svg>
            </div>
            <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🧭</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">React Router</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Build seamless single-page applications. Utilize dynamic parameters and programmatic navigation to guide users.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
