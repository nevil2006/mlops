import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Dumbbell,
  Sparkles,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SectionTitle from "../components/SectionTitle";
import TrainerMatch from "../components/TrainerMatch";
import MembershipCard from "../components/MembershipCard";
import FitnessDNA from "../components/FitnessDNA";
import Footer from "../components/Footer";

import { trainers } from "../data/trainers";
import { memberships } from "../data/memberships";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">

      {/* =====================================
          NAVBAR
      ===================================== */}

      <Navbar />

      {/* =====================================
          HERO
          Image controlled by Hero.tsx
      ===================================== */}

      <Hero />

      {/* =====================================
          AI FITNESS ENGINE
      ===================================== */}

      <section className="relative overflow-hidden px-6 py-32">

        {/* Background glow */}

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/5 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="The Difference"
            title="DON'T GUESS YOUR PLAN."
            description="Your fitness journey starts with understanding your goals, starting point and training preferences."
          />

          <div className="grid gap-5 md:grid-cols-3">

            {[
              {
                icon: Target,
                number: "01",
                title: "Understand",
                text: "Tell us where you are and where you want to go.",
              },
              {
                icon: Brain,
                number: "02",
                title: "Analyze",
                text: "Our fitness engine turns your inputs into a personalized path.",
              },
              {
                icon: Sparkles,
                number: "03",
                title: "Transform",
                text: "Get your program, trainer match and membership recommendation.",
              },
            ].map((item) => {

              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-lime-400/30"
                >

                  <div className="flex items-center justify-between">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400/10 text-lime-400">
                      <Icon size={26} />
                    </div>

                    <span className="text-sm font-black text-white/15">
                      {item.number}
                    </span>

                  </div>

                  <h3 className="mt-12 text-2xl font-black uppercase">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white/50">
                    {item.text}
                  </p>

                  <div className="mt-8 h-px w-0 bg-lime-400 transition-all duration-500 group-hover:w-full" />

                </motion.div>
              );
            })}

          </div>

          <div className="mt-12">

            <Link
              to="/assessment"
              className="group inline-flex items-center gap-3 rounded-full bg-lime-400 px-7 py-4 font-black text-black transition hover:scale-105"
            >
              Discover My Fitness Path

              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />

            </Link>

          </div>

        </div>

      </section>

      {/* =====================================
          GYM ENVIRONMENT IMAGE
          public/gym-interior.jpg
      ===================================== */}

      <section className="px-6 py-16">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10">

          <img
            src="/gym-interior.jpg"
            alt="Premium FORGE gym interior"
            className="h-[500px] w-full object-cover md:h-[650px]"
          />

          {/* Image overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

          {/* Content */}

          <div className="absolute bottom-10 left-8 max-w-3xl md:bottom-14 md:left-12">

            <p className="text-xs font-black uppercase tracking-[0.35em] text-lime-400">
              THE ENVIRONMENT
            </p>

            <h2 className="mt-4 text-5xl font-black uppercase leading-[0.9] md:text-7xl">

              TRAIN IN AN
              <br />

              ENVIRONMENT
              <br />

              <span className="text-lime-400">
                BUILT FOR YOU.
              </span>

            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              Modern equipment, focused spaces and an environment
              designed to keep you moving toward your goal.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================
          TRAINING IMAGE STORY
          public/training.jpg
      ===================================== */}

      <section className="px-6 py-24">

        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] md:grid-cols-2">

          {/* Image */}

          <div className="relative min-h-[450px] overflow-hidden md:min-h-[600px]">

            <img
              src="/training.jpg"
              alt="FORGE strength training"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40" />

            {/* Number */}

            <div className="absolute left-8 top-8 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/40 text-sm font-black backdrop-blur">
              02
            </div>

          </div>

          {/* Content */}

          <div className="flex flex-col justify-center p-8 md:p-14">

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400 text-black">
              <Dumbbell size={23} />
            </div>

            <p className="mt-8 text-xs font-black uppercase tracking-[0.35em] text-lime-400">
              TRAIN DIFFERENT
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] md:text-6xl">

              BUILT FOR
              <br />

              <span className="text-white/25">
                YOUR GOAL.
              </span>

            </h2>

            <p className="mt-7 max-w-lg leading-7 text-white/45">
              Your training shouldn't be random. FORGE connects
              your goal, experience, schedule and fitness profile
              to a training direction that actually makes sense.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                <p className="text-2xl font-black text-lime-400">
                  4+
                </p>

                <p className="mt-2 text-xs uppercase tracking-wider text-white/30">
                  Training Days
                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">

                <p className="text-2xl font-black text-lime-400">
                  1:1
                </p>

                <p className="mt-2 text-xs uppercase tracking-wider text-white/30">
                  Trainer Match
                </p>

              </div>

            </div>

            <Link
              to="/assessment"
              className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-lime-400 px-6 py-3 font-black text-black transition hover:scale-105"
            >
              Build My Plan

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />

            </Link>

          </div>

        </div>

      </section>

      {/* =====================================
          FITNESS DNA
      ===================================== */}

      <section className="px-6 py-32">

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="Fitness DNA"
            title="YOUR FITNESS HAS A SIGNATURE."
            description="Your assessment creates a visual snapshot of your strengths and the areas you can develop."
          />

          <FitnessDNA goal="Build Muscle" />

        </div>

      </section>

      {/* =====================================
          TRAINER MATCH
      ===================================== */}

      <section
        id="trainers"
        className="px-6 py-32"
      >

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="Trainer Match"
            title="MEET THE COACH WHO FITS YOUR GOAL."
            description="Your recommendation isn't only about a workout. Find a trainer whose specialization matches your direction."
          />

          <div className="grid gap-6 md:grid-cols-2">

            {trainers.map((trainer) => (

              <TrainerMatch
                key={trainer.id}
                name={trainer.name}
                image={trainer.image}
                specialization={trainer.specialization}
                experience={trainer.experience}
                match={Number.parseInt(trainer.match)}
              />

            ))}

          </div>

        </div>

      </section>

      {/* =====================================
          MEMBERSHIPS
      ===================================== */}

      <section
        id="plans"
        className="px-6 py-32"
      >

        <div className="mx-auto max-w-7xl">

          <SectionTitle
            eyebrow="Memberships"
            title="CHOOSE YOUR COMMITMENT."
            description="Start simple or commit to a longer transformation. Your recommended plan will be based on your assessment."
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {memberships.map((membership) => (

              <MembershipCard
                key={membership.duration}
                {...membership}
              />

            ))}

          </div>

        </div>

      </section>

      {/* =====================================
          FINAL CTA
      ===================================== */}

      <section className="px-6 py-32">

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-lime-400 p-10 text-center text-black md:p-20">

          {/* Decorative circle */}

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-black/10" />

          <div className="relative">

            <p className="text-xs font-black uppercase tracking-[0.35em]">
              60 SECOND ASSESSMENT
            </p>

            <h2 className="mt-5 text-5xl font-black uppercase leading-[0.9] md:text-7xl">

              FIND YOUR
              <br />

              FITNESS PATH.

            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-6 text-black/60 md:text-base">
              Answer a few questions about your body, goals and
              training preferences. FORGE will build your starting path.
            </p>

            <Link
              to="/assessment"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-black px-8 py-5 font-black text-white transition hover:scale-105"
            >
              Start Assessment

              <ArrowRight size={20} />

            </Link>

          </div>

        </div>

      </section>

      {/* =====================================
          FOOTER
      ===================================== */}

      <Footer />

    </main>
  );
}