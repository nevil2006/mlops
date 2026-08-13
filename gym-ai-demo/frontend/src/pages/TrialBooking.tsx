import { useState } from "react";
import { Check } from "lucide-react";
import Navbar from "../components/Navbar";

export default function TrialBooking() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  if (confirmed) {
    return (
      <main className="min-h-screen bg-[#050505] text-white">

        <Navbar />

        <div className="flex min-h-screen items-center justify-center px-6 text-center">

          <div>

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lime-400 text-black">
              <Check size={35} />
            </div>

            <h1 className="mt-8 text-5xl font-black">
              TRIAL BOOKED.
            </h1>

            <p className="mt-5 text-white/40">
              Your free trial request has been recorded.
            </p>

          </div>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <Navbar />

      <div className="mx-auto max-w-3xl px-6 pb-32 pt-36">

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
          Free Trial
        </p>

        <h1 className="mt-5 text-6xl font-black">
          TRY BEFORE
          <br />
          YOU COMMIT.
        </h1>

        <div className="mt-16">

          <label className="text-sm text-white/40">
            Choose a date
          </label>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.04] p-5 text-white"
          />

        </div>

        <div className="mt-10">

          <p className="text-sm text-white/40">
            Choose a time
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-5">

            {[
              "06:00 AM",
              "07:00 AM",
              "05:00 PM",
              "06:00 PM",
              "07:00 PM",
            ].map((item) => (

              <button
                key={item}
                onClick={() => setTime(item)}
                className={`rounded-xl border p-4 text-sm ${
                  time === item
                    ? "border-lime-400 bg-lime-400 text-black"
                    : "border-white/10"
                }`}
              >
                {item}
              </button>

            ))}

          </div>

        </div>

        <button
          disabled={!date || !time}
          onClick={() => setConfirmed(true)}
          className="mt-10 w-full rounded-xl bg-lime-400 p-5 font-black text-black disabled:opacity-20"
        >
          Confirm Free Trial
        </button>

      </div>

    </main>
  );
}