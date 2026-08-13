import { motion } from "framer-motion";

interface AssessmentProgressProps {
  currentStep: number;
  totalSteps?: number;
}

export default function AssessmentProgress({
  currentStep,
  totalSteps = 4,
}: AssessmentProgressProps) {
  const progress =
    (currentStep / totalSteps) * 100;

  const labels = [
    "GOAL",
    "START",
    "LEVEL",
    "SCHEDULE",
  ];

  return (
    <div className="w-full">

      <div className="mb-5 flex items-end justify-between">

        <div>

          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-lime-400">
            Fitness Assessment
          </p>

          <p className="mt-2 text-sm text-white/40">
            Step {currentStep} of {totalSteps}
          </p>

        </div>

        <span className="text-2xl font-black">
          {Math.round(progress)}%
        </span>

      </div>

      {/* Main progress */}
      <div className="relative h-1.5 rounded-full bg-white/10">

        <motion.div
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="absolute left-0 top-0 h-full rounded-full bg-lime-400"
        />

      </div>

      {/* Step indicators */}
      <div className="mt-5 grid grid-cols-4">

        {labels.map((label, index) => {

          const stepNumber = index + 1;
          const active = stepNumber <= currentStep;

          return (
            <div
              key={label}
              className={`flex items-center gap-2 ${
                index > 0
                  ? "justify-center"
                  : "justify-start"
              } ${
                index === labels.length - 1
                  ? "justify-end"
                  : ""
              }`}
            >

              <motion.div
                animate={{
                  scale: active ? 1 : 0.8,
                }}
                className={`h-2 w-2 rounded-full ${
                  active
                    ? "bg-lime-400"
                    : "bg-white/20"
                }`}
              />

              <span
                className={`hidden text-[9px] font-bold tracking-[0.15em] sm:block ${
                  active
                    ? "text-white/70"
                    : "text-white/20"
                }`}
              >
                {label}
              </span>

            </div>
          );
        })}

      </div>

    </div>
  );
}