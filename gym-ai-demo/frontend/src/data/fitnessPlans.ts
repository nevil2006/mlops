export interface FitnessGoal {
  id: string;
  icon: string;
  title: string;
  description: string;
  plan: string;
  duration: string;
  frequency: string;
  trainer: string;
  price: number;
}

export interface ExperienceLevel {
  id: string;
  title: string;
  description: string;
}

export interface TrainingTime {
  id: string;
  title: string;
  time: string;
}

export interface FitnessDNAScore {
  name: string;
  value: number;
}

/* --------------------------------
   FITNESS GOALS
--------------------------------- */

export const fitnessGoals: FitnessGoal[] = [
  {
    id: "fat-loss",
    icon: "🔥",
    title: "Lose Fat",
    description: "Improve conditioning and body composition",
    plan: "Fat Loss & Conditioning",
    duration: "3 Months",
    frequency: "4 Days / Week",
    trainer: "Priya Sharma",
    price: 2499,
  },

  {
    id: "muscle-gain",
    icon: "💪",
    title: "Build Muscle",
    description: "Build strength, size and consistency",
    plan: "Muscle Building Program",
    duration: "6 Months",
    frequency: "4 Days / Week",
    trainer: "Rahul Kumar",
    price: 4999,
  },

  {
    id: "strength",
    icon: "⚡",
    title: "Build Strength",
    description: "Develop power and training performance",
    plan: "Strength Performance Program",
    duration: "6 Months",
    frequency: "4 Days / Week",
    trainer: "Rahul Kumar",
    price: 4999,
  },

  {
    id: "fitness",
    icon: "🏃",
    title: "Improve Fitness",
    description: "Build energy, endurance and movement",
    plan: "Complete Fitness Program",
    duration: "3 Months",
    frequency: "3 Days / Week",
    trainer: "Priya Sharma",
    price: 2499,
  },
];

/* --------------------------------
   EXPERIENCE LEVELS
--------------------------------- */

export const experienceLevels: ExperienceLevel[] = [
  {
    id: "beginner",
    title: "Beginner",
    description: "I'm starting my fitness journey",
  },

  {
    id: "intermediate",
    title: "Intermediate",
    description: "I train regularly",
  },

  {
    id: "advanced",
    title: "Advanced",
    description: "I train with structured goals",
  },
];

/* --------------------------------
   TRAINING TIMES
--------------------------------- */

export const trainingTimes: TrainingTime[] = [
  {
    id: "morning",
    title: "Morning",
    time: "5:00 AM — 10:00 AM",
  },

  {
    id: "afternoon",
    title: "Afternoon",
    time: "12:00 PM — 4:00 PM",
  },

  {
    id: "evening",
    title: "Evening",
    time: "5:00 PM — 9:00 PM",
  },
];

/* --------------------------------
   FITNESS DNA
--------------------------------- */

export const fitnessDNA = {
  default: [
    {
      name: "Strength",
      value: 82,
    },
    {
      name: "Consistency",
      value: 76,
    },
    {
      name: "Endurance",
      value: 64,
    },
    {
      name: "Mobility",
      value: 58,
    },
  ],

  fatLoss: [
    {
      name: "Strength",
      value: 68,
    },
    {
      name: "Consistency",
      value: 84,
    },
    {
      name: "Endurance",
      value: 88,
    },
    {
      name: "Mobility",
      value: 72,
    },
  ],

  strength: [
    {
      name: "Strength",
      value: 94,
    },
    {
      name: "Consistency",
      value: 86,
    },
    {
      name: "Endurance",
      value: 68,
    },
    {
      name: "Mobility",
      value: 62,
    },
  ],

  fitness: [
    {
      name: "Strength",
      value: 72,
    },
    {
      name: "Consistency",
      value: 82,
    },
    {
      name: "Endurance",
      value: 84,
    },
    {
      name: "Mobility",
      value: 78,
    },
  ],
} satisfies Record<string, FitnessDNAScore[]>;

/* --------------------------------
   ASSESSMENT QUESTIONS
--------------------------------- */

export const assessmentQuestions = [
  {
    id: 1,
    label: "Your Goal",
    question: "What are you chasing?",
  },

  {
    id: 2,
    label: "Starting Point",
    question: "Where are you starting?",
  },

  {
    id: 3,
    label: "Experience",
    question: "Where do you stand?",
  },

  {
    id: 4,
    label: "Schedule",
    question: "When do you train?",
  },
];

/* --------------------------------
   AI ANALYSIS STEPS
--------------------------------- */

export const aiAnalysisSteps = [
  "Reading your body metrics",
  "Understanding your fitness goal",
  "Analyzing your experience",
  "Matching your training preference",
  "Building your fitness path",
];

/* --------------------------------
   FITNESS PLAN BENEFITS
--------------------------------- */

export const planBenefits = [
  "Personalized training direction",
  "Trainer recommendation",
  "Weekly training structure",
  "Fitness progress tracking",
];

/* --------------------------------
   HELPER
--------------------------------- */

export function getFitnessGoal(
  goalId: string
): FitnessGoal | undefined {
  return fitnessGoals.find(
    (goal) => goal.id === goalId
  );
}