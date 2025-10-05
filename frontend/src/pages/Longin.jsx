import React, { useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Longin = () => {
  const { bachendURL, token, setToken } = useState(AppContext);
  const navigate = useNavigate();

  const [state, setState] = useState("singup");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Sign up") {
        const { data } = await axios.post(bachendURL + "/api/user/register", {
          name,
          password,
          email,
        });

        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(bachendURL + "/api/user/login", {
          password,
          email,
        });

        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "singup" ? "Create Account" : "Login"}
        </p>
        <p>
          Please <span>{state === "singup" ? "sing up" : "log in"}</span> to
          book appointment
        </p>
        {state === "singup" && (
          <div className="flex flex-col w-full">
            <label htmlFor="fullname">Full Name:</label>
            <input
              type="text"
              id="fullname"
              className=" border border-primary rounded w-full p-2 mt-1"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              required
            />
          </div>
        )}

        <div className="flex flex-col w-full">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className=" border border-primary rounded w-full p-2 mt-1"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className=" border border-primary rounded w-full p-2 mt-1"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary text-gray-50 w-full py-2 rounded-md text-base"
        >
          {state === "singup" ? "Create Account" : "Login"}
        </button>

        {state === "singup" ? (
          <p>
            Already have an account?
            <span
              className="text-blue-600 underline decoration-solid cursor-pointer"
              onClick={() => setState("login")}
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create an new account?
            <span
              className="text-blue-600 underline decoration-solid cursor-pointer"
              onClick={() => setState("singup")}
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Longin;
