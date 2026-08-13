import type { FitnessAssessment, FitnessPlan } from "../types";

export function generateFitnessPlan(
  assessment: FitnessAssessment
): FitnessPlan {
  const { goal, experience, trainingTime } = assessment;

  let title = "General Fitness Program";
  let duration = "3 Months";
  let frequency = "3 Days / Week";
  let trainer = "Rahul Kumar";
  let price = 2499;

  if (goal === "Build Muscle") {
    title = "Muscle Building Program";
    duration = "6 Months";
    frequency = "4 Days / Week";
    trainer = "Rahul Kumar";
    price = 4999;
  }

  if (goal === "Build Strength") {
    title = "Strength Performance Program";
    duration = "6 Months";
    frequency = "4 Days / Week";
    trainer = "Rahul Kumar";
    price = 4999;
  }

  if (goal === "Lose Fat") {
    title = "Fat Loss & Conditioning";
    duration = "3 Months";
    frequency = "4 Days / Week";
    trainer = "Priya Sharma";
    price = 2499;
  }

  if (goal === "Improve Fitness") {
    title = "Complete Fitness Program";
    duration = "3 Months";
    frequency = "3 Days / Week";
    trainer = "Priya Sharma";
    price = 2499;
  }

  let match = 84;

  if (experience === "Beginner") {
    match += 3;
  }

  if (trainingTime === "Evening") {
    match += 4;
  }

  return {
    title,
    duration,
    frequency,
    trainer,
    match: Math.min(match, 97),
    price,
  };
}