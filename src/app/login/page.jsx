"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [role, setRole] = useState("");
  const router = useRouter();

  const login = () => {
    if (role === "admin") {
      localStorage.setItem("user_type", "admin");
      router.push("/admin");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={login}
        className="global-bg text-white px-6 py-3 rounded-lg"
      >
        Login as Admin
      </button>
    </div>
  );
}
