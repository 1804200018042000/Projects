//object literal
let obj = {
    name: "sumair",
    channel: "code with harry",
    address: "mars"

}
console.log(obj);

//creating another obj literal with constructors

function Obj(givenName) {
    this.name = givenName
}
let obj3 = new Obj("name1");
console.log(obj3);

function Obj(givenName) {
    this.name = givenName
}
Obj.prototype.getName = function() {
    return this.name;
}

Obj.prototype.setName = function(newName) {
    this.name = newName;
}
let obj2 = new Obj("rajvansha");
console.log(obj2);