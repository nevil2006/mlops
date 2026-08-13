import { motion } from "framer-motion";

interface FitnessDNAProps {
  goal: string;
}

export default function FitnessDNA({
  goal,
}: FitnessDNAProps) {
  const scores =
    goal === "Lose Fat"
      ? {
          strength: 68,
          consistency: 84,
          endurance: 88,
          mobility: 72,
        }
      : {
          strength: 82,
          consistency: 76,
          endurance: 64,
          mobility: 58,
        };

  const items = [
    ["Strength", scores.strength],
    ["Consistency", scores.consistency],
    ["Endurance", scores.endurance],
    ["Mobility", scores.mobility],
  ];

  return (
    <div className="grid gap-5 md:grid-cols-4">

      {items.map(([name, value], index) => (
        <motion.div
          key={String(name)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
        >

          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm text-white/50">
              {name}
            </span>

            <span className="text-2xl font-black text-lime-400">
              {value}%
            </span>
          </div>

          <div className="h-2 overflow-hidden rounded-full bg-white/10">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${value}%` }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="h-full rounded-full bg-lime-400"
            />

          </div>

        </motion.div>
      ))}

    </div>
  );
}