import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AIAnalysisPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/recommendation");
    }, 4500);

    return () => clearTimeout(timer);
  }, [navigate]);

  const items = [
    "Body metrics",
    "Fitness goal",
    "Training experience",
    "Schedule preference",
  ];

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">

      <div className="w-full max-w-xl text-center">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-lime-400/30"
        >

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-lime-400 text-black">
            <Sparkles size={30} />
          </div>

        </motion.div>

        <p className="mt-12 text-sm font-bold uppercase tracking-[0.3em] text-lime-400">
          AI FITNESS ENGINE
        </p>

        <h1 className="mt-5 text-4xl font-black md:text-6xl">
          ANALYZING
          <br />
          YOUR PROFILE
        </h1>

        <div className="mt-12 space-y-4 text-left">

          {items.map((item, index) => (

            <motion.div
              key={item}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.7 }}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >

              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-400 text-black">
                <Check size={16} />
              </div>

              <span>
                {item}
              </span>

            </motion.div>

          ))}

        </div>

        <p className="mt-10 text-sm text-white/30">
          BUILDING YOUR FITNESS PATH...
        </p>

      </div>

    </main>
  );
}