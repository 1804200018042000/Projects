let x = 3;
let y = 6;
let z = x / y;

//exploring the math obj
z = Math;
z = Math.PI;
z = Math.E;
z = Math.ceil;
z = Math.round(5.6);
z = Math.ceil(5.4);
z = Math.floor(5.7);
z = Math.floor(-5.7);
z = Math.abs(-5);
z = Math.sqrt(49);
z = Math.pow(2, 3);
z = Math.min(2, 3, 4, 2, 9, 27, 2, 6, 41, 2, 5, 4, 1, 2);
z = Math.max(2, 3, 4, 2, 9, 27, 2, 6, 41, 2, 5, 4, 1, 2);
z = Math.random(); // we get only numbers 0 to 1
z = 100 * Math.random(); // if we want any number other than 0 to 1 then we go for limit*Math.random();
z = 50 + (100 - 50) * Math.random(); // limit specifier

z = Math.ceil(50 + (100 - 50) * Math.random()); // if we want int we go for ceil,floor
//a = (0, 1)
//a100 = a * 100 = (0, 100);
//a10_100 = 10 + a * (100 - 10);
console.log(z);