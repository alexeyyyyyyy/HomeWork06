const persons = [];

let inputData = prompt("Enter a name and info about your person");
while (inputData) {
    const details = prompt("Enter details about your character:Id,Name,LastName,Age");
    const [id, name, lastName, age] = details.split(",") && details.trim();
    const person = new Person(id, name, lastName, age);
    persons.push(person);
    const continueInput = confirm("Congrats, do u want to enter another person or press exit for quit");
    if (!continueInput) break;


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
