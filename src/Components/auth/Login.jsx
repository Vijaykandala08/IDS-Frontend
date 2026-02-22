import { FaLock } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Login = ({ open, setOpen }) => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
  e.preventDefault();

  const formData = {
    email: e.target[0].value,
    password: e.target[1].value,
  };

  try {
    const response = await fetch("http://127.0.0.1:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.access_token);
      navigate("/");
    } else {
      alert(data.detail || "Login failed");
    }

  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className={`transition-all duration-500 ease-in-out ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full absolute'}`}>
      <h2 className="text-3xl font-bold pb-6 text-center">Login</h2>

      <form className="flex flex-col items-center" onSubmit={handleLogin}>
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

        <div className="flex justify-between w-full">
          <div className="text-[14px] flex gap-2">
            <input type="checkbox" />
            <label>Remember Me</label>
          </div>
          <span className="text-[14px] cursor-pointer hover:text-blue-400">Forget Password</span>
        </div>

        <button type="submit" className="my-2 py-2 w-full rounded-full bg-blue-600 hover:bg-blue-700 transition-colors">
          Login
        </button>

        <span className="text-[14px]">
          Don&apos;t have an account?
          <span
            className="font-semibold cursor-pointer hover:text-blue-400 ml-1"
            onClick={() => setOpen()}
          >
            Register
          </span>
        </span>
      </form>
    </div>
  );
};

export default Login;