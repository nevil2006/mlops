import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface MembershipCardProps {
  duration: string;
  price: number;
  description: string;
  popular?: boolean;
}

export default function MembershipCard({
  duration,
  price,
  description,
  popular,
}: MembershipCardProps) {
  return (
    <div
      className={`relative rounded-3xl border p-8 ${
        popular
          ? "border-lime-400 bg-lime-400 text-black"
          : "border-white/10 bg-white/[0.04]"
      }`}
    >

      {popular && (
        <div className="absolute right-6 top-6 rounded-full bg-black px-3 py-1 text-xs font-bold text-lime-400">
          MOST POPULAR
        </div>
      )}

      <p
        className={`text-sm uppercase tracking-[0.2em] ${
          popular ? "text-black/50" : "text-white/40"
        }`}
      >
        {duration}
      </p>

      <h3 className="mt-5 text-5xl font-black">
        ₹{price.toLocaleString("en-IN")}
      </h3>

      <p
        className={`mt-4 min-h-[48px] ${
          popular ? "text-black/60" : "text-white/50"
        }`}
      >
        {description}
      </p>

      <div className="my-8 space-y-3">

        {[
          "Gym access",
          "Fitness guidance",
          "Progress tracking",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <Check size={17} />
            {item}
          </div>
        ))}

      </div>

      <Link
        to="/checkout"
        className={`block rounded-xl py-4 text-center font-black ${
          popular
            ? "bg-black text-white"
            : "bg-white text-black"
        }`}
      >
        Choose Plan
      </Link>

    </div>
  );
}