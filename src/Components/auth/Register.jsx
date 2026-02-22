import { FaLock, FaUser } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Register = ({ open, setOpen }) => {
  const navigate = useNavigate();

  const handleRegister = async (e) => {
  e.preventDefault();

  const formData = {
    username: e.target[0].value,
    email: e.target[1].value,
    password: e.target[2].value,
  };

  try {
    const response = await fetch("http://127.0.0.1:8000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Registration successful!");
      navigate("/login");
    } else {
      alert(data.detail || "Registration failed");
    }

  } catch (error) {
    console.error("Error:", error);
    alert("Server error");
  }
};

  return (
    <div className={`transition-all duration-500 ease-in-out ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full absolute'}`}>
      <h2 className="text-3xl font-bold pb-6 text-center">Register</h2>

      <form className="flex flex-col items-center" onSubmit={handleRegister}>
        <div className="w-full relative">
          <input
            className="border border-gray-200 w-full rounded-full py-2 px-4 my-2 bg-transparent focus:outline-none focus:border-blue-400"
            placeholder="Username"
            type="text"
            required
          />
          <FaUser className="absolute top-[35%] right-3" />
        </div>

        <div className="w-full relative">
          <input
            className="border border-gray-200 w-full rounded-full py-2 px-4 my-2 bg-transparent focus:outline-none focus:border-blue-400"
            placeholder="Email"
            type="email"
            required
          />
          <MdMail className="absolute top-[35%] right-3" />
        </div>

        <div className="w-full relative">
          <input
            className="border border-gray-200 w-full rounded-full py-2 px-4 my-2 bg-transparent focus:outline-none focus:border-blue-400"
            placeholder="Password"
            type="password"
            required
          />
          <FaLock className="absolute top-[35%] right-3" />
        </div>

        <button type="submit" className="my-2 py-2 w-full rounded-full bg-blue-600 hover:bg-blue-700 transition-colors">
          Register
        </button>

        <span className="text-[14px]">
          Already have an account?
          <span
            className="font-semibold cursor-pointer hover:text-blue-400 ml-1"
            onClick={() => setOpen()}
          >
            Login
          </span>
        </span>
      </form>
    </div>
  );
};

export default Register;