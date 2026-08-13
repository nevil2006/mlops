import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import { calculateBMI, getBMICategory } from "../utils/bmi";

const goals = [
  ["🔥", "Lose Fat"],
  ["💪", "Build Muscle"],
  ["⚡", "Build Strength"],
  ["🏃", "Improve Fitness"],
];

export default function Assessment() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [goal, setGoal] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [experience, setExperience] = useState("");
  const [trainingTime, setTrainingTime] = useState("");

  const bmi = calculateBMI(
    Number(weight),
    Number(height)
  );

  const canContinue =
    (step === 1 && goal) ||
    (step === 2 && age && height && weight) ||
    (step === 3 && experience) ||
    (step === 4 && trainingTime);

  function nextStep() {
    if (step < 4) {
      setStep(step + 1);
    } else {
      localStorage.setItem(
        "fitnessAssessment",
        JSON.stringify({
          age: Number(age),
          height: Number(height),
          weight: Number(weight),
          bmi,
          goal,
          experience,
          trainingTime,
        })
      );

      navigate("/ai-analysis");
    }
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <Navbar />

      <div className="mx-auto max-w-5xl px-6 pb-20 pt-36">

        {/* PROGRESS */}
        <div className="mb-16">

          <div className="mb-3 flex justify-between text-sm text-white/40">

            <span>
              ASSESSMENT
            </span>

            <span>
              0{step} / 04
            </span>

          </div>

          <div className="h-1 overflow-hidden rounded-full bg-white/10">

            <motion.div
              animate={{
                width: `${(step / 4) * 100}%`,
              }}
              className="h-full bg-lime-400"
            />

          </div>

        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <motion.section
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
              01 — Your Goal
            </p>

            <h1 className="mt-5 text-5xl font-black md:text-7xl">
              WHAT ARE
              <br />
              YOU CHASING?
            </h1>

            <div className="mt-12 grid gap-4 md:grid-cols-2">

              {goals.map(([icon, value]) => (

                <button
                  key={value}
                  onClick={() => setGoal(value)}
                  className={`rounded-3xl border p-7 text-left transition ${
                    goal === value
                      ? "border-lime-400 bg-lime-400 text-black"
                      : "border-white/10 bg-white/[0.03] hover:border-white/30"
                  }`}
                >

                  <span className="text-4xl">
                    {icon}
                  </span>

                  <p className="mt-6 text-xl font-black">
                    {value}
                  </p>

                </button>

              ))}

            </div>

          </motion.section>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <motion.section
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
              02 — Starting Point
            </p>

            <h1 className="mt-5 text-5xl font-black md:text-7xl">
              WHERE ARE
              <br />
              YOU STARTING?
            </h1>

            <div className="mt-12 grid gap-4 md:grid-cols-3">

              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 outline-none focus:border-lime-400"
              />

              <input
                type="number"
                placeholder="Height (cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 outline-none focus:border-lime-400"
              />

              <input
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 outline-none focus:border-lime-400"
              />

            </div>

            {bmi > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8"
              >

                <p className="text-sm text-white/40">
                  YOUR BMI
                </p>

                <div className="mt-2 flex items-end gap-4">

                  <span className="text-6xl font-black text-lime-400">
                    {bmi}
                  </span>

                  <span className="pb-2 text-white/40">
                    {getBMICategory(bmi)}
                  </span>

                </div>

              </motion.div>
            )}

          </motion.section>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <motion.section
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
              03 — Experience
            </p>

            <h1 className="mt-5 text-5xl font-black md:text-7xl">
              WHERE DO
              <br />
              YOU STAND?
            </h1>

            <div className="mt-12 space-y-4">

              {[
                "Beginner",
                "Intermediate",
                "Advanced",
              ].map((item) => (

                <button
                  key={item}
                  onClick={() => setExperience(item)}
                  className={`w-full rounded-2xl border p-6 text-left text-xl font-bold transition ${
                    experience === item
                      ? "border-lime-400 bg-lime-400 text-black"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  {item}
                </button>

              ))}

            </div>

          </motion.section>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <motion.section
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >

            <p className="text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
              04 — Schedule
            </p>

            <h1 className="mt-5 text-5xl font-black md:text-7xl">
              WHEN DO
              <br />
              YOU TRAIN?
            </h1>

            <div className="mt-12 grid gap-4 md:grid-cols-3">

              {[
                "Morning",
                "Afternoon",
                "Evening",
              ].map((item) => (

                <button
                  key={item}
                  onClick={() => setTrainingTime(item)}
                  className={`rounded-3xl border p-8 text-xl font-black transition ${
                    trainingTime === item
                      ? "border-lime-400 bg-lime-400 text-black"
                      : "border-white/10 bg-white/[0.03]"
                  }`}
                >
                  {item}
                </button>

              ))}

            </div>

          </motion.section>
        )}

        {/* NAVIGATION */}
        <div className="mt-16 flex justify-between">

          <button
            onClick={() =>
              step > 1 && setStep(step - 1)
            }
            className="flex items-center gap-2 text-white/40"
          >
            <ArrowLeft size={18} />
            Back
          </button>

          <button
            disabled={!canContinue}
            onClick={nextStep}
            className="flex items-center gap-3 rounded-full bg-lime-400 px-7 py-4 font-black text-black disabled:opacity-20"
          >
            {step === 4
              ? "Generate My Fitness Path"
              : "Continue"}

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </main>
  );
}