const students = [
    { name: "A", maths: 25, science: 65, social: 89 },
    { name: "B", maths: 75, science: 34, social: 89 },
    { name: "C", maths: 45, science: 65, social: 78 },
    { name: "D", maths: 45, science: 76, social: 89 },
    { name: "E", maths: 35, science: 65, social: 43 },
    { name: "F", maths: 90, science: 23, social: 89 },
    { name: "G", maths: 15, science: 65, social: 35 },
    { name: "H", maths: 98, science: 76, social: 89 },
    { name: "I", maths: 35, science: 65, social: 35 },
    { name: "J", maths: 98, science: 34, social: 89 },
];
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
    totalClass = 'green';
    if (student.maths < 35 || student.science < 35 || student.social < 35) {
        totalClass = 'red'
    }
    row += `<tr>
    <td>${student.name}</td>
    <td class="${student.maths > 35 ? 'green' : student.maths == 35 ? 'orange' : 'red'}">${student.maths}</td>
    <td class="${student.science > 35 ? 'green' : student.science == 35 ? 'orange' : 'red'}">${student.science}</td>
    <td class="${student.social > 35 ? 'green' : student.social == 35 ? 'orange' : 'red'}">${student.social}</td>
    <td class="${totalClass}">${student["total"]}</td>
    </tr>`;
});
document.querySelector("tbody").innerHTML = row;
