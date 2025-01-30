//objects are variable too it can contain many value
const car = {
  type:"fiat", model:"500", color:"white", yearUsed: function() {
    return this.model+this.color;
  },
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
  }

};
car.color="green";//objects elements are mutable 
let age = car.yearUsed();
console.log(age);
//you can change remove or add properties in obj 
delete car.type;
console.log(car.myCars.car2);
//you can nest multiple objects in javascript

document.getElementById("demo").innerHTML = car.yearUsed();