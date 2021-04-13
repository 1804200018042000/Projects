let today = new Date();
console.log(today);
let otherDate = new Date('8-4-2003 04:54:00'); // mm-dd-yyyy
let otherDat = new Date('13 June 1976 ');
// console.log(otherDate);
// console.log(today);
// console.log(otherDat);
// console.log(typeof today);
let a;

let a4 = otherDate.getDay();
console.log(a4);

let a3 = otherDate.getDate();
console.log(a3);

let a0 = otherDate.getMinutes();
console.log(a0);

let a1 = otherDate.getSeconds();
console.log(a1);

let a2 = otherDate.getHours();
console.log(a2);

let a5 = otherDate.getTime(); // gives time from thr beginning of the date in seconds(timestamp)
console.log(a5);

let a6 = otherDate.getMilliseconds();
console.log(a6);

let a7 = otherDate.getMonth();
console.log(a7);



// set
otherDate.setDate(23);
console.log(otherDate);

otherDate.setDate(0);
console.log(otherDate);

otherDate.setFullYear(1900);
console.log(otherDate);

otherDate.setHours(1);
console.log(otherDate);

otherDate.setMinutes(1);
console.log(otherDate);

otherDate.setSeconds(1);
console.log(otherDate);