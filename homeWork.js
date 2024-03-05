const persons = [];

let inputData = prompt("Enter a name and info about your person");
while (inputData) {
    const date = inputData.split(",");
    const person = new Person( date[0], date[1].trim(), date[2].trim(), date[3]);
    persons.push(person);
    inputData = prompt("Enter your Person Info:");
}

console.log(persons);

function Person(id, name, lastName, age) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function () {
        return `${this.name} ${this.lastName}`;
    };
}
