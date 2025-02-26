// Student 1 Me
const student1 = {
    firstName: "Kim Carlos",
    middleName: "Ayon",
    lastName: "Gaston",
    birthdate: "December 25, 2005",
    birthplace: "Paypayad, Candon City, Ilocos Sur, Philippines 2710",
    address: "Paypayad, Candon City, Ilocos Sur, Philippines 2710",
    courseYear: "BS Computer Science - 1st Year",
    dreamJob: "Software Engineer"
};

// Student 2 Charme
const student2 = {
    firstName: "Charme Krish",
    middleName: "Astucia",
    lastName: "Villanueva",
    birthdate: "March 24, 2006",
    birthplace: "San Agustin, Candon City, Ilocos Sur, Philippines 2710",
    address: "San Agustin, Candon City, Ilocos Sur, Philippines 2710",
    courseYear: "BS Computer Science - 1st Year",
    dreamJob: "Cybersecurity Specialist"
};

// Function to format and print student info
function formatStudentInfo(student) {
    return `${student.firstName.toUpperCase()} ${student.middleName.toUpperCase()} ${student.lastName.toUpperCase()} was born ${student.birthdate} at ${student.birthplace}, and currently living at ${student.address}. ${student.firstName.toLowerCase()} ${student.middleName.toLowerCase()} ${student.lastName.toLowerCase()} is taking up ${student.courseYear.toLowerCase()} and dreams to be ${student.dreamJob} after graduation.`;
}

// Print the formatted student info
console.log(formatStudentInfo(student1));
console.log(formatStudentInfo(student2));