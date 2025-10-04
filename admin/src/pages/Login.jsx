import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";

const Login = () => {
  const [state, setState] = useState("Admin");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAToken, backendURL } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.perventDefault();
    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendURL + "/api/admin/login", {
          email,
          password,
        });
        if (data.success) {
          console.log(data.token);
        }
      } else {
      }
    } catch (error) {}
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-gray-400 rounded-xl text-[#5E5E5E] text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-primary">{state}</span> Login
        </p>
        <div className="w-full">
          <label htmlFor="email">Email</label>
          <input
            className="border border-secondary rounded w-full p-2 mt-1"
            onClick={() => setEmail(email.targer.value)}
            value={email}
            type="email"
            name=""
            id="eamil"
            required
          />
        </div>

        <div className="w-full">
          <label htmlFor="password">Password</label>
          <input
            className="border border-secondary rounded w-full p-2 mt-1"
            onClick={() => setPassword(password.targer.value)}
            value={password}
            type="password"
            name=""
            id="password"
          />
        </div>

        <button className="bg-primary text-white w-full py-2 rounded-md text-base cursor-pointer">
          Login
        </button>
        {state === "Admin" ? (
          <p>
            Doctor Login?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Doctor")}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Admin Login?{" "}
            <span
              className="text-primary underline cursor-pointer"
              onClick={() => setState("Admin")}
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
