import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/home/Navbar";
import AuthWrapper from "./Components/auth/AuthWrapper";
import Home from "./Components/home/Home";
import Prediction from "./Components/home/Prediction";

const App = () => {
  const location = useLocation();
  
  // Don't show navbar on auth pages
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthWrapper />} />
        <Route path="/register" element={<AuthWrapper />} />
        <Route path="/prediction" element={<Prediction />} />
        {/* Add other routes as needed */}
        <Route path="/features" element={<div className="min-h-screen bg-[#0a0e1a] text-white p-8"><h1>Features Page</h1></div>} />
        <Route path="/tools" element={<div className="min-h-screen bg-[#0a0e1a] text-white p-8"><h1>Tools Page</h1></div>} />
        <Route path="/team" element={<div className="min-h-screen bg-[#0a0e1a] text-white p-8"><h1>Team Page</h1></div>} />
        <Route path="/analysis" element={<div className="min-h-screen bg-[#0a0e1a] text-white p-8"><h1>Analysis Page</h1></div>} />
      </Routes>
    </>
  );
};

export default App;