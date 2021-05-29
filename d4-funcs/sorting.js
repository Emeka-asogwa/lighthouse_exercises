const array = [1, 3, 2, 5, 9, 10, 1];
array.sort((a, b) => a - b);


//console.log(array);



const students = [
  { id: 1, name: "bruce", age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex", age: 22 },
  { id: 4, name: "alex", age: 30 }
];

students.sort((student1, student2) => {
  if (student2.name === student1.name) {
    return student2.age - student1.age;
  } else if (student1.name < student2.name) {
    return -1;

  } else {
    return 1;
  }
});

console.log(students);