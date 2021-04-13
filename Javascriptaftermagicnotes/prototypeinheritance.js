const proto = {
        slogan: function() {
            return 'this is the company is the best';
        },
        changeName: function(newName) {
            this.name = newName;

        }
    }
    // creating prototype
const harry = Object.create(proto);
console.log(harry);

const harry1 = Object.create(proto);
harry1.name = "sumair";
harry1.role = "procastinator";
harry1.changeName = "sumair2";
console.log(harry1);


//employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

//slogan  and adding function in employee prototype 
Employee.prototype.slogan = slogan = function() {
    return `this is the company is the best.Regards ,${this.name}`;
}


let harryobj = new Employee("harry", 890000, 87);
console.log(harry);

// we can add anything to this
let harry0 = new Employee("harry", 890000, 87);
console.log(harry0.slogan());

//inheritance
// programmer constructor
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

//inherit the prototype
Programmer.prototype = Object.create(Employee.prototype); //itne pe hi woh proto mein nahi dikhayega isiliye manually construcor karna padega

//manually set the constructor
Programmer.prototype.constructor = Programmer;




let su = new Programmer("hari", 2, 0, "js"); // by this we only employee accredits not its prototype
console.log(su);