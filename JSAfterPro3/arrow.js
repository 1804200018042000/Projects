//normal function
function harry() {
    console.log("this");
}
harry();



//function
const harry0 = function() {
    console.log("this is");
}
harry0();

//use of arrow functions (=>)
const harry1 = () => {
    console.log("this is good");
}
harry1();


//
const greet = function() {
    return "GOOD";
}
greet();



//using return with function
const greet0 = function() {
    return "GOOD0";
}
console.log(greet0());

//using return with arrow function
const greet1 = () => {
    return "GOOD1";
}
console.log(greet1());



//one liners --dont need return and braces they will have automatic return
const greet2 = () => "GOOD2";
console.log(greet2());


//function with object literal
const greet3 = () => ({ name: "harry" });
console.log(greet3());


//arrow functions shortens the length of code
const greet4 = (name) => "Good Morning " + name;
console.log(greet4('harry '));