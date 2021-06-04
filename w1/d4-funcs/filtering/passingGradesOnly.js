const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
const passingGradesOnly = grades.filter((grade) => {
  return (grade >= 70);
});

console.log("The passing grades only:", passingGradesOnly);

