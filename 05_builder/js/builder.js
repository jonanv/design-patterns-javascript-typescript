class Person {

    constructor(firstName, lastName, age, country, city, hobbies) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.hobbies = hobbies;
    }

    getFullName() {
        return `${ this.firstName } ${ this.lastName }`;
    }
}

class PersonBuilder {

    constructor() {
        this.reset();
    }

    reset() {
        this.firstName = '';
        this.lastName = '';
        this.age = 0;
        this.country = '';
        this.city = '';
        this.hobbies = [];
    }

    setFirstName(firstName) {
        this.firstName = firstName;
        return this;
    }

    setLastName(lastName) {
        this.lastName = lastName;
        return this;
    }

    setAge(age) {
        this.age = age;
        return this;
    }

    setCountry(country) {
        this.country = country;
        return this;
    }

    addHobbies(hobby) {
        this.hobbies.push(hobby);
        return this;
    }

    build() {
        const person = new Person(
            this.firstName,
            this.lastName,
            this.age,
            this.country,
            this.city,
            this.hobbies
        );
    }
}