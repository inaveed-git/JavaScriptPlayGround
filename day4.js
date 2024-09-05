// Function Requirement:

// Function Name: checkTriangleType

// Purpose: To determine the type of triangle based on the lengths of its three sides.

// Parameters:

// side1 (number): Length of the first side of the triangle.
// side2 (number): Length of the second side of the triangle.
// side3 (number): Length of the third side of the triangle.
// Return Values:

// "Equilateral": If all three sides are equal.
// "Isosceles": If exactly two sides are equal.
// "Scalene": If all three sides are different.
// Requirements:

// Equilateral: All sides are equal.
// Isosceles: Exactly two sides are equal.
// Scalene: All sides are different

let checkTriangleType = (side1, side2, side3) => {
  if (side1 == side2 && side2 == side3) {
    return "Equilateral ";
  } else if (side1 == side2 || side1 == side3 || side3 == side2) {
    return "isoscale";
  } else if (side1 !== side2 && side1 !== side3 && side3 !== side2) {
    return "Scalene";
  }
};

console.log(checkTriangle(4, 4, 0));
