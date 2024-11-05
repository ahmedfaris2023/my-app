"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "") return toast.error("Email is required");
    if (password === "") return toast.error("password is required");

    console.log({ email, password });
    router.replace("/");
    toast.success("secces");
  };
  return (
    <form onSubmit={formSubmitHandler} className="flex flex-col">
      <input
        type="email"
        className="mb-4 border rounded p-2 text-xl"
        placeholder="Enter your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="mb-4 border rounded p-2 text-xl"
        placeholder="Enter your Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="text-2xl text-white bg-blue-800 p-2 rounded-lg font-bold"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
