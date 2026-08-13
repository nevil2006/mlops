import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface TrainerMatchProps {
  name: string;
  image: string;
  specialization: string;
  experience: string;
  match: number;
}

export default function TrainerMatch({
  name,
  image,
  specialization,
  experience,
  match,
}: TrainerMatchProps) {
  return (
    <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">

      <div className="relative h-[420px] overflow-hidden">

        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <div className="absolute bottom-6 left-6 right-6">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
            Your Trainer Match
          </p>

          <h3 className="mt-2 text-4xl font-black">
            {name}
          </h3>

          <p className="mt-2 text-white/60">
            {specialization}
          </p>

        </div>

      </div>

      <div className="p-6">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm text-white/40">
              Experience
            </p>

            <p className="mt-1 font-bold">
              {experience}
            </p>
          </div>

          <div className="text-right">

            <p className="text-sm text-white/40">
              Match
            </p>

            <p className="text-3xl font-black text-lime-400">
              {match}%
            </p>

          </div>

        </div>

        <Link
          to="/trainers"
          className="mt-6 flex items-center justify-between rounded-xl border border-white/10 px-5 py-4 font-bold transition hover:bg-white/5"
        >
          Meet Trainer

          <ArrowRight size={18} />
        </Link>

      </div>

    </div>
  );
}