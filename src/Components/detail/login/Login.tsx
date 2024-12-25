import React,{
  FormEvent,
  ChangeEvent,
  ReactElement,
  useState,
} from "react";
import "./login.css";
import { toast } from "react-toastify";

function Login(): ReactElement {
  interface AvatarState {
    file: File | null;
    url: string;
  }
  const [avater, setAvater] = useState<AvatarState>({ file: null, url: "" });

  const handleAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    if (e.target.files?.length) {
      setAvater({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Login successful")
    

  };
  return (
    <div className="flex items-center justify-center w-full h-screen gap-10 bg-gradient-to-r from-purple-500 to-blue-500 p-4">
      <div
        className="flex flex-1 max-w-md flex-col items-center justify-center
                      bg-white/20 backdrop-blur-md rounded-lg p-8"
      >
        <h2 className="text-2xl font-semibold text-white mb-4">Welcome Back</h2>
        <form
          className="flex flex-col w-full items-center gap-4"
          onSubmit={handleLogin}
        >
          <input
            className="w-full p-2 text-xl bg-white/30 text-white rounded-md
                       outline-none border-none focus:ring-2 focus:ring-white placeholder-white/70"
            type="text"
            placeholder="Email"
          />
          {/* Password */}
          <input
            className="w-full p-2 text-xl bg-white/30 text-white rounded-md
                       outline-none border-none focus:ring-2 focus:ring-white placeholder-white/70"
            type="password"
            placeholder="Password"
          />
          {/* Submit Button */}
          <button
            className="mt-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 
                       text-white text-lg rounded-md transition-colors"
          >
            Sign in
          </button>
        </form>
      </div>

      {/* -- VERTICAL SEPARATOR -- */}
      <div className="h-[70%] w-px bg-white/40" />

      {/* -- CREATE ACCOUNT PANEL -- */}
      <div
        className="flex flex-1 max-w-md flex-col items-center justify-center
                      bg-white/20 backdrop-blur-md rounded-lg p-8"
      >
        <h2 className="text-2xl font-semibold text-white mb-4">
          Create an Account
        </h2>
        <form className="flex flex-col w-full items-center gap-4">
          {/* Upload Image */}
          <label
            htmlFor="file2"
            className="w-full flex flex-col items-center cursor-pointer mb-2"
          >
            <span className="text-white mb-1">Upload an Image</span>
            <img
              src={avater.url || "./avatar.png"}
              alt="Avatar"
              className="w-16 h-16 object-cover rounded-full border-2 border-white/50"
            />
          </label>
          <input type="file" id="file2" hidden onChange={handleAvatar} />

          {/* Username */}
          <input
            className="w-full p-2 bg-white/30 text-white text-xl rounded-md
                       outline-none border-none focus:ring-2 focus:ring-white placeholder-white/70"
            type="text"
            placeholder="Username"
          />
          {/* Email */}
          <input
            className="w-full p-2 bg-white/30 text-white text-xl rounded-md
                       outline-none border-none focus:ring-2 focus:ring-white placeholder-white/70"
            type="text"
            placeholder="Email"
          />
          {/* Password */}
          <input
            className="w-full p-2 bg-white/30 text-white text-xl rounded-md
                       outline-none border-none focus:ring-2 focus:ring-white placeholder-white/60"
            type="password"
            placeholder="Password"
          />
          {/* Submit Button */}
          <button
            className="mt-2 px-6 py-4 bg-green-600 hover:bg-green-700
                       text-white text-lg rounded-md transition-colors"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
