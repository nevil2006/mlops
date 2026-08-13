export interface FitnessAssessment {
  age: number;
  height: number;
  weight: number;
  bmi: number;
  goal: string;
  experience: string;
  trainingTime: string;
}

export interface FitnessPlan {
  title: string;
  duration: string;
  frequency: string;
  trainer: string;
  match: number;
  price: number;
}