import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">

      {/* HERO IMAGE */}
      <img
        src="/hero-gym.jpg"
        alt="Gym training"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* LIGHTER OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      {/* TEXT READABILITY GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

      {/* BOTTOM FADE */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* EYEBROW */}
          <div className="mb-7 flex items-center gap-2 text-sm font-bold tracking-[0.25em] text-lime-400">

            <Sparkles size={16} />

            AI FITNESS ENGINE

          </div>

          {/* HEADING */}
          <h1 className="max-w-5xl text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">

            YOUR BODY.
            <br />

            YOUR GOAL.
            <br />

            <span className="text-lime-400">
              YOUR PLAN.
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-white/80">

            Discover your fitness profile and get a personalized
            training path in under 60 seconds.

          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/assessment"
              className="group flex items-center gap-3 rounded-full bg-lime-400 px-7 py-4 font-black text-black transition hover:scale-105"
            >

              Start My Assessment

              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />

            </Link>

            <Link
              to="/memberships"
              className="rounded-full border border-white/30 bg-black/20 px-7 py-4 font-bold backdrop-blur-md transition hover:bg-white/10"
            >

              Explore Plans

            </Link>

          </div>

          {/* STATS */}
          <div className="mt-8 flex gap-8 text-sm text-white/60">

            <span>60 seconds</span>

            <span>5 questions</span>

            <span>Personalized path</span>

          </div>

        </motion.div>

      </div>

      {/* IMAGE VISIBILITY LABEL */}
      <div className="absolute bottom-10 right-10 hidden md:block">

        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-white/50">

          <span className="h-px w-10 bg-lime-400" />

          TRAIN. TRANSFORM. REPEAT.

        </div>

      </div>

    </section>
  );
}