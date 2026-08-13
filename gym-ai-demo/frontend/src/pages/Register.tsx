import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function register() {
    localStorage.setItem(
      "demoUser",
      JSON.stringify({
        name,
        email,
      })
    );

    navigate("/checkout");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">

      <div className="w-full max-w-md">

        <p className="text-sm font-bold tracking-[0.3em] text-lime-400">
          CREATE ACCOUNT
        </p>

        <h1 className="mt-5 text-5xl font-black">
          SAVE YOUR
          <br />
          FITNESS PATH.
        </h1>

        <div className="mt-10 space-y-4">

          <input
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] p-5 outline-none focus:border-lime-400"
          />

          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] p-5 outline-none focus:border-lime-400"
          />

          <input
            placeholder="Phone number"
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] p-5 outline-none focus:border-lime-400"
          />

          <input
            placeholder="Password"
            type="password"
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] p-5 outline-none focus:border-lime-400"
          />

        </div>

        <button
          onClick={register}
          disabled={!name || !email}
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-lime-400 p-5 font-black text-black disabled:opacity-30"
        >
          Create Account
          <ArrowRight size={18} />
        </button>

        <p className="mt-6 text-center text-sm text-white/40">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-lime-400"
          >
            Login
          </Link>
        </p>

      </div>

    </main>
  );
}