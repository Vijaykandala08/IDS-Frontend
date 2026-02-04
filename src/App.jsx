import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/home/Navbar";
import AuthWrapper from "./Components/auth/AuthWrapper";
import Home from "./Components/home/Home";

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
      </Routes>
    </>
  );
};

export default App;