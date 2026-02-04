import { useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const AuthWrapper = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isRegister = location.pathname === "/register";

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('/bgImage.jpg')",
        backgroundColor: "#0a0e1a" // Fallback color if image doesn't load
      }}
    >
      <div className="h-auto w-full max-w-md bg-blue-1000/5 border border-blue-700/20 backdrop-blur-md rounded-lg px-6 py-8 overflow-hidden relative mx-4">

        {/* Register */}
        <Register
          open={isRegister}
          setOpen={() => navigate("/login")} // Navigate to login
        />

        {/* Login */}
        <Login
          open={!isRegister}
          setOpen={() => navigate("/register")} // Navigate to register
        />

      </div>
    </div>
  );
};

export default AuthWrapper;