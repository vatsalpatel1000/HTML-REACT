let num = Math.floor(Math.random()*6) +1;
console.log(num);

let car = {
    name : 'BMW',
    model : 'X7',
    color : 'Magenta'
}
console.log(car['name']);


let person = {
    name:'Vatsal',
    age : '27',
    city : 'Jaipur'
}
person.city = 'New York';
person.country = 'US';
console.log(person);