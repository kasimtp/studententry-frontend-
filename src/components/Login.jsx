import React, { useContext } from "react";
import { useState } from "react";
import { apiClient } from "../utils/api";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const Login = () => {

const navigate = useNavigate();

 const [state, setState] = useState("Sign Up");
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const  {token, setToken } = useContext(AppContext)


 const handleRegister = async () => {
  try { 
    const {data} = await apiClient.post("/user/register", {
      name,email,password,
    });

    if  ( data.success ) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("id", data.user._id);
      setToken(data.token);
      toast.success("Registered Successfully");
    } else {
      toast.error(data.message || "regstration failed");
    } 
  } catch (error) {
    toast.error("Something went wrong");
  }
  
 }


 const handieLogin = async () => {
  try {
    const { data } = await apiClient.post("/user/login",{ email, password });
    if (data.success) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("id", data.user._id);
      setToken(data.token);
      toast.success("Login Successful");
      navigate("/");
    } else {
      toast.error(data.message || "Login failed");
    }
  } catch (error) {
    toast.error("Something went wrong");
  }
 };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-indigo-600">
          {state === "Sign Up" ? "Create an Account" : "Welcome Back"}
        </h2>

        {/* Form */}
        <form className="mt-6">

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter Email"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              placeholder="Enter Password"
            />
          </div>

          {/* Login Button */}
          <button
            type="button"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Login
          </button>
        </form>

        {/* Forgot password */}
        <p className="text-center text-gray-600 text-sm mt-4">
          Forgot password?{" "}
          <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
            Click here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
