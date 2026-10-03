import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { ProductDetail } from "./pages/ProductDetail";

export default function App() {
  const appConfig = {
    siteTitle: "React Router Academy",
    author: "React Learner",
    year: 2026
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
        <Navbar siteTitle={appConfig.siteTitle} />

        <main className="flex-1 w-full pt-[90px]">
          <Routes>
            <Route path="/" element={<Home learningGoal="Master React Router" />}/>
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/props" element={<ProductDetail id="props" />} />
            <Route path="/hooks" element={<ProductDetail id="hooks" />} />
            <Route path="/routes" element={<ProductDetail id="routes" />}/>
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
