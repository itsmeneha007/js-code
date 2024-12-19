const students = [
    { name: "Alice", age: 19, marks: { math: 85, science: 90, english: 92 } },
    { name: "john", age: 22, marks: { math: 78, science: 82, english: 75 } },
    { name: "joni", age: 20, marks: { math: 92, science: 86, english: 84 } },
  ];
  
  students.push({ name: "David", age: 21, marks: { math: 75, science: 85, english: 80 } });
  
  students.forEach(student => {
    const { math, science, english } = student.marks;
    const average = (math + science + english) / 3; 
    student.averageMarks = average; 
    console.log(`${student.name}'s average: ${average.toFixed(2)}`);
  });
  
  let topStudent = students[0];
  students.forEach(student => {
    if (student.averageMarks > topStudent.averageMarks) {
      topStudent = student;
    }
  });
  console.log(`Top student: ${topStudent.name} (${topStudent.averageMarks.toFixed(2)})`);