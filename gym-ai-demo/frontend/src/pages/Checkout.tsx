import { Check, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Checkout() {
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-center text-white">

        <div>

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lime-400 text-black">
            <Check size={36} />
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
            You're In
          </p>

          <h1 className="mt-5 text-5xl font-black md:text-7xl">
            YOUR FITNESS
            <br />
            JOURNEY STARTS.
          </h1>

          <p className="mt-6 text-white/40">
            Membership request #FORGE-2026-1042
          </p>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] px-6 py-20 text-white">

      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
          Membership
        </p>

        <h1 className="mt-5 text-5xl font-black md:text-7xl">
          YOUR PLAN
          <br />
          IS READY.
        </h1>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          <div className="rounded-3xl border border-lime-400 bg-lime-400 p-8 text-black">

            <Sparkles size={25} />

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em]">
              Recommended
            </p>

            <h2 className="mt-3 text-4xl font-black">
              6 Month
              <br />
              Muscle Building
            </h2>

            <p className="mt-5 text-5xl font-black">
              ₹4,999
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

            <h3 className="text-2xl font-black">
              What's included
            </h3>

            <div className="mt-8 space-y-5">

              {[
                "Gym access",
                "4 training days / week",
                "Trainer matching",
                "Progress tracking",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <Check
                    size={18}
                    className="text-lime-400"
                  />

                  {item}

                </div>

              ))}

            </div>

            <button
              onClick={() => setConfirmed(true)}
              className="mt-10 w-full rounded-xl bg-lime-400 p-5 font-black text-black"
            >
              Confirm Membership
            </button>

            <p className="mt-4 text-center text-xs text-white/30">
              Demo mode — no real payment
            </p>

          </div>

        </div>

      </div>

    </main>
  );
}