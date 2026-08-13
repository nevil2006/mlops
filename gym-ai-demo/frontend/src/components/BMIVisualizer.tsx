import { motion } from "framer-motion";

interface BMIVisualizerProps {
  bmi: number;
}

export default function BMIVisualizer({
  bmi,
}: BMIVisualizerProps) {
  const clampedBMI = Math.max(
    10,
    Math.min(bmi || 0, 40)
  );

  const position =
    ((clampedBMI - 10) / 30) * 100;

  let category = "Enter your details";
  let message = "Your BMI will appear here.";

  if (bmi > 0 && bmi < 18.5) {
    category = "Below Range";
    message = "Use this as one input when planning your fitness journey.";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal Range";
    message = "Your BMI is within the commonly used reference range.";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Above Range";
    message = "Use BMI alongside your goals and other fitness factors.";
  } else if (bmi >= 30) {
    category = "High Range";
    message = "BMI is only one metric and does not describe body composition.";
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
    >

      <div className="flex items-start justify-between">

        <div>

          <p className="text-xs font-black uppercase tracking-[0.25em] text-white/30">
            Your BMI
          </p>

          <div className="mt-3 flex items-end gap-3">

            <span className="text-6xl font-black text-lime-400">
              {bmi > 0 ? bmi : "--"}
            </span>

            {bmi > 0 && (
              <span className="pb-2 text-sm text-white/40">
                {category}
              </span>
            )}

          </div>

        </div>

        <div className="text-right text-xs text-white/20">
          <p>BODY</p>
          <p>METRIC</p>
        </div>

      </div>

      {/* Scale */}
      {bmi > 0 && (
        <div className="mt-8">

          <div className="relative h-3 overflow-visible rounded-full bg-gradient-to-r from-blue-400 via-lime-400 to-red-400">

            <motion.div
              initial={{
                left: "0%",
              }}
              animate={{
                left: `${position}%`,
              }}
              transition={{
                duration: 0.8,
              }}
              className="absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[#050505] bg-white shadow-lg"
            />

          </div>

          <div className="mt-3 flex justify-between text-[10px] uppercase tracking-wider text-white/25">

            <span>Below</span>
            <span>Normal</span>
            <span>Above</span>
            <span>High</span>

          </div>

        </div>
      )}

      <p className="mt-6 text-sm leading-6 text-white/35">
        {message}
      </p>

    </motion.div>
  );
}