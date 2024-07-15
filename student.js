const students = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
    { name: "Charlie", grade: 92 }
  ];
  let sum = 0;
  for (const student of students){
    console.log(`${student.name}: ${student.grade}`)
  }