import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const analysisSteps = [
  "Reading your body metrics",
  "Understanding your fitness goal",
  "Analyzing your experience",
  "Matching your training preference",
  "Building your fitness path",
];

export default function AIAnalysisPage() {
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(0);

  useEffect(() => {
    const duration = 4200;
    const interval = 40;
    const increment = 100 / (duration / interval);

    const progressTimer = setInterval(() => {
      setProgress((previous) => {
        const next = Math.min(previous + increment, 100);

        setCompletedSteps(
          Math.min(
            Math.floor(next / 20),
            analysisSteps.length
          )
        );

        return next;
      });
    }, interval);

    const navigationTimer = setTimeout(() => {
      navigate("/recommendation");
    }, 4700);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(navigationTimer);
    };
  }, [navigate]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6 text-white">

      {/* Ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute h-[500px] w-[500px] rounded-full bg-lime-400/20 blur-[140px]"
      />

      <div className="relative z-10 w-full max-w-2xl text-center">

        {/* AI Orb */}
        <div className="relative mx-auto h-36 w-36">

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border border-lime-400/40 border-t-lime-400"
          />

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="absolute inset-6 flex items-center justify-center rounded-full bg-lime-400 text-black shadow-[0_0_80px_rgba(163,230,53,0.35)]"
          >
            <Sparkles size={34} />
          </motion.div>

        </div>

        <p className="mt-12 text-xs font-bold uppercase tracking-[0.4em] text-lime-400">
          FORGE AI ENGINE
        </p>

        <h1 className="mt-5 text-5xl font-black tracking-tight md:text-7xl">
          ANALYZING
          <br />
          <span className="text-white/30">
            YOUR PROFILE.
          </span>
        </h1>

        {/* Progress */}
        <div className="mx-auto mt-12 max-w-lg">

          <div className="mb-3 flex justify-between text-xs text-white/40">
            <span>BUILDING YOUR PLAN</span>
            <span>{Math.round(progress)}%</span>
          </div>

          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">

            <motion.div
              className="h-full rounded-full bg-lime-400"
              style={{ width: `${progress}%` }}
            />

          </div>

        </div>

        {/* Analysis steps */}
        <div className="mt-10 space-y-3 text-left">

          {analysisSteps.map((step, index) => {

            const completed = index < completedSteps;

            return (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -15 }}
                animate={{
                  opacity: completed || index === completedSteps
                    ? 1
                    : 0.3,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4"
              >

                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                    completed
                      ? "bg-lime-400 text-black"
                      : "bg-white/10 text-white/30"
                  }`}
                >
                  {completed ? (
                    <Check size={16} />
                  ) : (
                    <span className="text-xs">
                      0{index + 1}
                    </span>
                  )}
                </div>

                <span className="text-sm">
                  {step}
                </span>

              </motion.div>
            );
          })}

        </div>

        <p className="mt-8 text-xs uppercase tracking-[0.25em] text-white/20">
          Your fitness path is being generated
        </p>

      </div>

    </main>
  );
}