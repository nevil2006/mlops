import Navbar from "../components/Navbar";
import MembershipCard from "../components/MembershipCard";
import { memberships } from "../data/memberships";
import { Link } from "react-router-dom";

export default function Memberships() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36">

        <div className="max-w-3xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
            Memberships
          </p>

          <h1 className="mt-5 text-6xl font-black md:text-8xl">
            CHOOSE YOUR
            <br />
            COMMITMENT.
          </h1>

        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {memberships.map((membership) => (
            <MembershipCard
              key={membership.duration}
              {...membership}
            />
          ))}

        </div>

        <div className="mt-20 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">

          <p className="text-white/50">
            Not sure which plan fits you?
          </p>

          <Link
            to="/assessment"
            className="mt-5 inline-block rounded-full bg-lime-400 px-7 py-4 font-black text-black"
          >
            ✦ Let AI Find My Plan
          </Link>

        </div>

      </div>

    </main>
  );
}