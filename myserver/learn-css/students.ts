import { students } from "./students.data";

let studentsWithTotal = students.forEach(
  (student) =>
    (student["total"] = student.maths + student.science + student.social)
  //   Object.defineProperty(student, "total", {
  // value: student.maths + student.science + student.social,
);

// console.log(studentsWithTotal, students);
students.sort((a, b) => {
  return a["total"] - b["total"];
});

console.log(students);

let row = "";
students.forEach((student) => {
  row += `<tr>
    <td>${student.name}</td>
    <td>${student.maths}</td>
    <td>${student.science}</td>
    <td>${student.social}</td>
    <td>${student["total"]}</td>
    </tr>`;
});
document.querySelector("tbody").innerHTML = row;
