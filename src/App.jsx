import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";

export default function App() {
  const appConfig = {
    siteTitle: "React Router Academy",
    version: "v1.0",
    author: "React Learner",
    year: 2026
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
        <Navbar siteTitle={appConfig.siteTitle} currentVersion={appConfig.version} />

        <main className="flex-1 w-full">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  appTitle={appConfig.siteTitle}
                  learningGoal="Master React Router"
                />
              }
            />
            
            <Route 
              path="/props" 
              element={
                <div className="w-full min-h-[60vh] flex flex-col items-center justify-center p-8">
                  <h1 className="text-4xl font-bold text-emerald-400 mb-4">📦 Props Practice</h1>
                  <p className="text-slate-400 text-lg">Props learning module coming soon.</p>
                </div>
              } 
            />
            
            <Route 
              path="/hooks" 
              element={
                <div className="w-full min-h-[60vh] flex flex-col items-center justify-center p-8">
                  <h1 className="text-4xl font-bold text-purple-400 mb-4">⚓ Hooks Practice</h1>
                  <p className="text-slate-400 text-lg">Hooks learning module coming soon.</p>
                </div>
              } 
            />
            
            <Route 
              path="/routes" 
              element={
                <div className="w-full min-h-[60vh] flex flex-col items-center justify-center p-8">
                  <h1 className="text-4xl font-bold text-indigo-400 mb-4">🧭 Routes Practice</h1>
                  <p className="text-slate-400 text-lg">Routes learning module coming soon.</p>
                </div>
              } 
            />
          </Routes>
        </main>

        <Footer author={appConfig.author} year={appConfig.year} />
      </div>
    </BrowserRouter>
  );
}
