import {
  ArrowUpRight,
  Dumbbell,
  Mail,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-black">
                <Dumbbell size={20} />
              </div>

              <span className="text-2xl font-black">
                FORGE<span className="text-lime-400">.</span>
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/35">
              A smarter way to discover your fitness path.
              Understand your goals, find your training direction
              and connect with the right coach.
            </p>

            <Link
              to="/assessment"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-3 text-sm font-black text-black transition hover:bg-lime-300"
            >
              Start Assessment
              <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-white/30">
              Explore
            </p>

            <div className="mt-5 space-y-4">

              <Link
                to="/"
                className="block text-sm text-white/50 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/trainers"
                className="block text-sm text-white/50 transition hover:text-white"
              >
                Trainers
              </Link>

              <Link
                to="/memberships"
                className="block text-sm text-white/50 transition hover:text-white"
              >
                Memberships
              </Link>

              <Link
                to="/trial"
                className="block text-sm text-white/50 transition hover:text-white"
              >
                Free Trial
              </Link>

            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-white/30">
              Connect
            </p>

            <div className="mt-5 space-y-4">

              <a
                href="#"
                aria-label="Instagram"
                className="flex items-center gap-3 text-sm text-white/50 transition hover:text-white"
              >
                <FaInstagram size={17} />
                Instagram
              </a>

              <a
                href="mailto:hello@forgegym.demo"
                className="flex items-center gap-3 text-sm text-white/50 transition hover:text-white"
              >
                <Mail size={17} />
                hello@forgegym.demo
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/25 md:flex-row">

          <p>
            © 2026 FORGE. Frontend demonstration.
          </p>

          <p>
            Your body. Your goal. Your plan.
          </p>

        </div>

      </div>
    </footer>
  );
}