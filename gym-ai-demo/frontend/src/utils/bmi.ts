export function calculateBMI(
  weight: number,
  heightCm: number
): number {
  if (!weight || !heightCm) {
    return 0;
  }

  const heightMeters = heightCm / 100;

  return Number(
    (weight / (heightMeters * heightMeters)).toFixed(1)
  );
}

export function getBMICategory(bmi: number): string {
  if (bmi === 0) return "";

  if (bmi < 18.5) {
    return "Below Range";
  }

  if (bmi < 25) {
    return "Normal Range";
  }

  if (bmi < 30) {
    return "Above Range";
  }

  return "High Range";
}