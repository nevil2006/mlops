import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Dumbbell,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

const stages = [
  {
    number: "01",
    icon: Target,
    title: "DISCOVER",
    description:
      "Tell us your goal, experience and starting point.",
  },
  {
    number: "02",
    icon: Brain,
    title: "ANALYZE",
    description:
      "Our fitness engine turns your inputs into a personalized direction.",
  },
  {
    number: "03",
    icon: Dumbbell,
    title: "MATCH",
    description:
      "Find the program and trainer that fit your fitness path.",
  },
];

export default function FitnessEngine() {
  return (
    <section className="relative overflow-hidden px-6 py-32">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="max-w-4xl">

          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.35em] text-lime-400">
            <Sparkles size={15} />
            Fitness Engine
          </div>

          <h2 className="mt-6 text-5xl font-black leading-[0.95] md:text-7xl">

            DON'T JUST
            <br />

            <span className="text-white/25">
              JOIN A GYM.
            </span>

            <br />

            FIND YOUR PATH.

          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/45">
            A simple assessment transforms an ordinary gym visitor
            into a personalized fitness journey.
          </p>

        </div>

        {/* Process */}
        <div className="mt-20 grid gap-5 md:grid-cols-3">

          {stages.map((stage, index) => {

            const Icon = stage.icon;

            return (
              <motion.div
                key={stage.number}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  y: -10,
                }}
                transition={{
                  delay: index * 0.12,
                }}
                viewport={{
                  once: true,
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-8"
              >

                {/* Number */}
                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400 text-black">
                    <Icon size={22} />
                  </div>

                  <span className="text-5xl font-black text-white/[0.06]">
                    {stage.number}
                  </span>

                </div>

                <h3 className="mt-16 text-2xl font-black">
                  {stage.title}
                </h3>

                <p className="mt-4 leading-7 text-white/40">
                  {stage.description}
                </p>

                {/* Bottom line */}
                <div className="mt-8 h-px w-0 bg-lime-400 transition-all duration-500 group-hover:w-full" />

              </motion.div>
            );
          })}

        </div>

        {/* CTA */}
        <div className="mt-10">

          <Link
            to="/assessment"
            className="group inline-flex items-center gap-3 rounded-full bg-lime-400 px-7 py-4 font-black text-black transition hover:scale-105"
          >
            Experience the Engine

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />

          </Link>

        </div>

      </div>

    </section>
  );
}