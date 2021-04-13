// object literal for creating object literals
let car = {
    name: 'Tata ',
    topSpeed: 89,
    run: function() {
        console.log('car is running');
    }
}


//constructors 
// ye ek templates hote hain isseobj create kar sakte
//creating a constructor for car
function GeneralCar(givenName, givenSpeed) {
    this.name = givenName;
    this.topspeed = givenSpeed;
    this.run = function() {
        console(`${this.name}is running`);
    }
    this.analyze = function() {
        console.log(`
                    this car is slwoer $ { 200 - this.topspeed }
                    than bmw `);
    }
}
car1 = new GeneralCar('Nissan', 189);
car2 = new GeneralCar('Maruti', 180);
console.log(car2);