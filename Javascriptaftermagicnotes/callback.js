//pretend that this server is coming from server
const students = [
    { name: "sumair", subject: "c" },
    { name: "harry", subject: "ml" }
]


//students.forEach()
function enrollStudent(student, callback) { //jo kar rahe the wo karte rahe ye background mein chalega (setTimeout) 3000 ke baad
    setTimeout(function() {
        students.push(student);
        console.log("Students has been enrolled");
        callback();

    }, 1000);
}

function getStudents() { // setTimeout isiliye use kiya ha kyu ki jab bhi aap enroll karoge to server time legi manlo 3 sec legi 
    setTimeout(function() {
        let str = "";
        students.forEach(function(student) {
            str += `<li> ${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students has been fetched");
    }, 3000);
}

let newStudent = { name: "Sunny", subject: "python" }
enrollStudent(newStudent, getStudents);
//getStudents(); if not commented out it would print the same as callback