const person = {
  name: "jhon",
  age: 30,
  city: "New York"
};
let text = "";
for(let x in person){
  text += person[x] + " ";
};


let myString = JSON.stringify(person);
//document.body.innerHTML=myString;