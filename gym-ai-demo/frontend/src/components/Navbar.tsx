import { motion } from "framer-motion";
import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Trainers",
    path: "/trainers",
  },
  {
    label: "Memberships",
    path: "/memberships",
  },
  {
    label: "Free Trial",
    path: "/trial",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.06] bg-black/40 px-5 py-4 backdrop-blur-xl md:px-8">

        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2"
          >

            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-lime-400 text-black transition group-hover:rotate-[-8deg]">
              <Dumbbell size={19} />
            </div>

            <span className="text-xl font-black tracking-tight">
              FORGE<span className="text-lime-400">.</span>
            </span>

          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">

            {links.map((link) => {

              const active =
                location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition ${
                    active
                      ? "text-white"
                      : "text-white/45 hover:text-white"
                  }`}
                >

                  {link.label}

                  {active && (
                    <motion.span
                      layoutId="navbar-active"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-lime-400"
                    />
                  )}

                </Link>
              );
            })}

          </div>

          {/* Desktop CTA */}
          <Link
            to="/assessment"
            className="hidden rounded-full bg-lime-400 px-5 py-2.5 text-sm font-black text-black transition hover:scale-105 md:block"
          >
            Find My Plan
          </Link>

          {/* Mobile menu */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 md:hidden"
          >
            {mobileOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>

        </div>

        {/* Mobile navigation */}
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            className="border-t border-white/10 md:hidden"
          >

            <div className="space-y-2 pb-4 pt-5">

              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-4 py-3 text-white/60 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/assessment"
                onClick={() => setMobileOpen(false)}
                className="mt-3 block rounded-xl bg-lime-400 px-4 py-3 text-center font-black text-black"
              >
                Find My Plan
              </Link>

            </div>

          </motion.div>
        )}

      </nav>
    </>
  );
}