import { useParams, Link } from "react-router-dom";

export function ProductDetail() {
  const { id } = useParams();

  const productInfo = {
    props: {
      title: "React Props",
      color: "emerald",
      description: "Props (short for properties) are the standard way to pass data between React components. They flow downwards from parent to child components, allowing you to create reusable and dynamic UI elements.",
      features: ["Read-only (immutable) inside the child", "Can pass strings, numbers, arrays, objects, and functions", "Used to trigger state changes in parents via callback functions"],
      codeSnippet: `function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default function App() {
  return (
    <div>
      <Welcome name="Farman" />
      <Welcome name="Khan" />
    </div>
  );
}`
    },
    hooks: {
      title: "React Hooks",
      color: "purple",
      description: "Hooks let you use state and other React features without writing a class. They allow you to reuse stateful logic and manage side effects directly inside functional components.",
      features: ["useState for local component state", "useEffect for API calls and side effects", "Custom hooks to share logic across multiple components"],
      codeSnippet: `import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div className="p-4 bg-slate-800 rounded">
      <p>You clicked {count} times</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="mt-2 px-4 py-2 bg-purple-600 rounded"
      >
        Click me
      </button>
    </div>
  );
}`
    },
    routes: {
      title: "React Router",
      description: "React Router enables client-side routing, allowing your app to update the URL and UI without requesting a new document from the server. This creates a seamless, fast user experience.",
      features: ["Dynamic routing with URL parameters (:id)", "Nested routes using <Outlet />", "Programmatic navigation using useNavigate()"],
      codeSnippet: `import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}`
    }
  };

  const product = productInfo[id] || {
    title: "Unknown Product",
    color: "slate",
    description: "We couldn't find the details for this topic.",
    features: [],
    codeSnippet: `// No code available`
  };

  const colorStyles = {
    emerald: "from-emerald-500/20 to-emerald-900/20 text-emerald-400 border-emerald-500/50",
    purple: "from-purple-500/20 to-purple-900/20 text-purple-400 border-purple-500/50",
    indigo: "from-indigo-500/20 to-indigo-900/20 text-indigo-400 border-indigo-500/50",
    slate: "from-slate-500/20 to-slate-900/20 text-slate-400 border-slate-500/50",
  };

  const themeClass = colorStyles[product.color];

  return (
    <div className="w-full min-h-[calc(100vh-140px)] flex flex-col pt-12 px-6 sm:px-12">
      <Link to="/" className="text-slate-400 hover:text-white flex items-center gap-2 mb-8 w-fit transition-colors">
        <span>←</span> Back to Home
      </Link>
      
      <div className={`w-full flex-1 rounded-3xl border bg-gradient-to-br ${themeClass} backdrop-blur-md p-8 sm:p-16 flex flex-col md:flex-row gap-12 items-start`}>
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-6">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight">{product.title}</h1>
          </div>
          
          <p className="text-xl text-slate-200 leading-relaxed max-w-2xl">
            {product.description}
          </p>
          
          <div className="space-y-4 pt-4">
            <h3 className="text-2xl font-bold text-white border-b border-white/10 pb-2">Key Features</h3>
            <ul className="space-y-3">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-lg text-slate-300">
                  <span className="mt-1"></span> {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-xl bg-slate-950/80 rounded-3xl p-6 border border-white/10 shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center gap-2 mb-4 px-2">
            <div className="w-3 h-3 rounded-full bg-rose-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="ml-2 text-xs text-slate-500 font-mono">example.jsx</span>
          </div>
          <pre className="text-sm font-mono text-slate-300 overflow-x-auto p-4 bg-slate-900/50 rounded-xl leading-relaxed">
            <code>{product.codeSnippet}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
