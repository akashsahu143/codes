function calculateBMI(weight, height) {
  // Validate input
  if (weight <= 0 || height <= 0) {
    return "Invalid input: Weight and height must be positive values.";
  }

  // Calculate BMI
  const bmi = weight / (height * height);

  // Determine health classification
  let classification;
  if (bmi < 18.5) {
    classification = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    classification = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    classification = "Overweight";
  } else {
    classification = "Obese";
  }

  // Return result with weight and height
  return `Weight: ${weight} kg, Height: ${height} m, BMI: ${bmi.toFixed(2)}, Classification: ${classification}`;
}

// Example usage
const weight1 = 65;
const height1 = 1.75;
console.log(calculateBMI(weight1, height1)); //output  "normal weight"

const weight2 = 45;
const height2 = 1.60;
console.log(calculateBMI(weight2, height2)); // under weight