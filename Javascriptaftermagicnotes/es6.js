 class Employee {

     constructor(givenName, givenExperience, givenDivision) {

         this.name = givenName;
         this.experience = givenExperience;
         this.division = givenDivision;

     }

     slogan() {
         return `this company ${this.name} is the best`; // values bharne ke liye kaam ata hain
     }

     joining_year() {
         return 2000 - this.experience;

     }

     //static method  (bina obj banaye use karte)
     static add(a, b) {
         return a + b;
     }
 }

 let sumair = new Employee("sumair", 70, "Division ");
 console.log(sumair);

 console.log(sumair.joining_year());
 console.log(Employee.add(34, 5)); //static method 


 //inheritance
 class Programmer extends Employee {
     constructor(givenName, givenExperience, givenDivision, language, github) {

         super(givenName, givenExperience, givenDivision);
         this.language = language;
         this.github = github;

     }
     favoriteLanguage() {
         if (this.language == 'python') {
             return 'Python';
         } else {
             return 'JavaScript';
         }
     }
     static multiply(a, b) {
         return a * b;
     }
 }

 sumair = new Programmer("sumair", 3, "lays", "go", "sumair4");

 console.log(sumair);

 console.log(sumair.favoriteLanguage());

 console.log(Programmer.multiply(5, 7));