const name = "John";
const age = 30;
const person = {
    name,
    age,
    greet(){
        return `"Hi, I'm ${name} and I'm ${age} years old."`;
    }
}
console.log(person.greet())