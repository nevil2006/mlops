import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">

      <div className="w-full max-w-md">

        <p className="text-sm font-bold tracking-[0.3em] text-lime-400">
          WELCOME BACK
        </p>

        <h1 className="mt-5 text-5xl font-black">
          CONTINUE
          <br />
          YOUR PATH.
        </h1>

        <div className="mt-10 space-y-4">

          <input
            placeholder="Email or phone"
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] p-5 outline-none focus:border-lime-400"
          />

          <input
            placeholder="Password"
            type="password"
            className="w-full rounded-xl border border-white/10 bg-white/[0.04] p-5 outline-none focus:border-lime-400"
          />

        </div>

        <button
          onClick={() => navigate("/checkout")}
          className="mt-6 w-full rounded-xl bg-lime-400 p-5 font-black text-black"
        >
          Login
        </button>

        <p className="mt-6 text-center text-sm text-white/40">
          New here?{" "}
          <Link
            to="/register"
            className="text-lime-400"
          >
            Create account
          </Link>
        </p>

      </div>

    </main>
  );
}