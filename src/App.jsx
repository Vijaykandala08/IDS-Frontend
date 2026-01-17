import { FaLock, FaUser } from "react-icons/fa";
import { MdInbox, MdMail } from "react-icons/md";
import { useState } from "react";
const App = () => {

  const [open,setOpen] = useState(false);


  return (
    <div className="h-screen flex flex-col items-center bg-background bg-cover bg-center bg-no-repeat justify-center text-white"
    style={{ backgroundImage: "url('/bgImage.jpg')" }}>
      <div className="h-97.5 w-80 bg-blue-1000/5 border-blue-700/20 backdrop-blur-md rounded-lg px-6 my-4 overflow-hidden">
        <div className={`${open ? 'translate-y-6.25 transition-all' : 'translate-y-100 transition-all'}`}>
          <h2 className="text-3xl font-bold pb-6 text-center">Register</h2>
          <form className="flex flex-col items-center" action= "">
            <div className="w-full relative">
              <input className="border border-gray-200 w-full rounded-full py-2 px-4 my-2 bg-transparent" placeholder="Username"
               type="text"/>
              <FaUser className="absolute top-[35%] right-3" />
            </div>
            <div className="w-full relative">
              <input className="border border-gray-200 w-full rounded-full py-2 px-4 my-2 bg-transparent" placeholder="Email" type="email"/>
              <MdMail className="absolute top-[35%] right-3" />
            </div>
            <div className="w-full relative">
              <input className="border border-gray-200 w-full rounded-full py-2 px-4 my-2 bg-transparent" placeholder="Password" type="password"/>
              <FaLock className="absolute top-[35%] right-3" />
            </div>
            <button className="my-2 py-2 w-full rounded-full bg-blue-600 ">Register</button>
            <span className="text-[14px]">Already have an account? <span
            className="font-semibold cursor-pointer" onClick={()=>setOpen(!open)}> Login</span></span>

          </form>
        </div>
        <div className={`${!open ? '-translate-y-62.5 transition-all' : 'translate-y-100  transition-all'}`}>
          <h2 className="text-3xl font-bold pb-6 text-center">Login</h2>
          <form className="flex flex-col items-center" action= "">
            <div className="w-full relative">
              <input className="border border-gray-200 w-full rounded-full py-2 px-4 my-2 bg-transparent" placeholder="Email" type="email"/>
              <MdMail className="absolute top-[35%] right-3" />
            </div>
            <div className="w-full relative">
              <input className="border border-gray-200 w-full rounded-full py-2 px-4 my-2 bg-transparent" placeholder="Password" type="password"/>
              <FaLock className="absolute top-[35%] right-3" />
              </div>
              <div className="flex justify-between w-full">
                <div className="text-[14px] flex gap-2">
                <input type="checkbox" name="" id=""/>
                <label htmlFor="">Remember Me</label>
              </div>
              <span className="text-[14px]">Forget Password</span>
              </div>
            <button className="my-2 py-2 w-full rounded-full bg-blue-600 ">Login</button>
            <span className="text-[14px]">Don&apos;t have an account?<span className="font-semibold cursor-pointer" onClick={()=>setOpen(!open)}> Register</span></span>

          </form>
        </div>
      </div>
    </div>

  );
}

export default App
