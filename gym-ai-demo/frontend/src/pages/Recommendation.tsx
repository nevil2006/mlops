import { motion } from "framer-motion";
import { ArrowRight, Check, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import FitnessDNA from "../components/FitnessDNA";
import TrainerMatch from "../components/TrainerMatch";
import { generateFitnessPlan } from "../utils/recommendation";

import { trainers } from "../data/trainers";

export default function Recommendation() {
  const stored = localStorage.getItem(
    "fitnessAssessment"
  );

  const assessment = stored
    ? JSON.parse(stored)
    : {
        age: 21,
        height: 175,
        weight: 75,
        bmi: 24.5,
        goal: "Build Muscle",
        experience: "Beginner",
        trainingTime: "Evening",
      };

  const plan = generateFitnessPlan(assessment);

  const trainer =
    trainers.find(
      (item) => item.name === plan.trainer
    ) ?? trainers[0];

  return (
    <main className="bg-[#050505] text-white">

      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pb-32 pt-36">

        <div className="max-w-4xl">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
            Your Fitness Path
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 text-6xl font-black md:text-8xl"
          >
            {plan.title}
          </motion.h1>

          <p className="mt-6 max-w-2xl text-lg text-white/50">
            Based on your fitness goals, starting point and
            preferences, this is the training path we recommend
            for your demo profile.
          </p>

        </div>

        {/* SUMMARY */}
        <div className="mt-16 grid gap-4 md:grid-cols-4">

          {[
            ["BMI", assessment.bmi],
            ["Level", assessment.experience],
            ["Training", plan.frequency],
            ["Duration", plan.duration],
          ].map(([label, value]) => (

            <div
              key={String(label)}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
            >

              <p className="text-sm text-white/40">
                {label}
              </p>

              <p className="mt-3 text-2xl font-black">
                {value}
              </p>

            </div>

          ))}

        </div>

        {/* DNA */}
        <section className="mt-32">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
            Your Fitness DNA
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-6xl">
            THIS IS YOUR
            <br />
            STARTING SIGNATURE.
          </h2>

          <div className="mt-12">
            <FitnessDNA goal={assessment.goal} />
          </div>

        </section>

        {/* WHY */}
        <section className="mt-32">

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
              Why This Plan?
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              BUILT AROUND
              <br />
              <span className="text-white/30">
                YOUR INPUTS.
              </span>
            </h2>

          </div>

          <div className="mt-10 space-y-4">

            {[
              `Your goal is ${assessment.goal.toLowerCase()}.`,
              `Your current level is ${assessment.experience.toLowerCase()}.`,
              `${plan.frequency} fits your recommended training structure.`,
              `${plan.trainer} specializes in this training direction.`,
            ].map((text) => (

              <div
                key={text}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >

                <Check
                  className="text-lime-400"
                  size={20}
                />

                <span className="text-white/70">
                  {text}
                </span>

              </div>

            ))}

          </div>

        </section>

        {/* TRAINER */}
        <section className="mt-32">

          <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
            Trainer Match
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-6xl">
            WE FOUND
            <br />
            YOUR COACH.
          </h2>

          <div className="mt-12 max-w-xl">

            <TrainerMatch
              name={trainer.name}
              image={trainer.image}
              specialization={trainer.specialization}
              experience={trainer.experience}
              match={Number.parseInt(trainer.match)}
            />

          </div>

        </section>

        {/* CTA */}
        <section className="mt-32 rounded-[2rem] border border-lime-400/20 bg-lime-400 p-10 text-black md:p-16">

          <p className="text-sm font-black uppercase tracking-[0.3em]">
            Your next step
          </p>

          <h2 className="mt-5 text-5xl font-black md:text-7xl">
            READY TO
            <br />
            START?
          </h2>

          <p className="mt-6 max-w-xl text-black/60">
            Save your personalized fitness path and continue
            to your recommended membership.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/register"
              className="flex items-center gap-3 rounded-full bg-black px-7 py-4 font-black text-white"
            >
              I'm Interested
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/assessment"
              className="flex items-center gap-3 rounded-full border border-black/20 px-7 py-4 font-bold"
            >
              <RotateCcw size={18} />
              Retake Assessment
            </Link>

          </div>

        </section>

      </div>

    </main>
  );
}