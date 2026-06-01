class Person {
    private firstName!: string;
    private lastName!: string;
    private age!: number;
    private country!: string;
    private city!: string;
    private hobbies!: string[];

    constructor(firstName: string,
                lastName: string,
                age: number,
                country: string,
                city: string,
                hobbies: string[]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
        this.city = city;
        this.hobbies = hobbies;
    }

    public getFullName(): string {
        return `${ this.firstName } ${ this.lastName }`;
    }
}

interface IPersonBuilder {
    firstName: string;
    lastName: string;
    age: number;
    country: string;
    city: string;
    hobbies: string[];

    setFistName(firstName: string): IPersonBuilder;
    setLastName(lastName: string): IPersonBuilder;
    setAge(age: number): IPersonBuilder;
    setCountry(country: string): IPersonBuilder;
    setCity(city: string): IPersonBuilder;
    addHobbies(hobby: string): IPersonBuilder;
    build(): Person;
}

class NormalPersonBuilder implements IPersonBuilder {
    firstName!: string;
    lastName!: string;
    age!: number;
    country!: string;
    city!: string;
    hobbies!: string[];

    constructor() {
        this.reset();
    }

    private reset(): void {
        this.firstName = '';
        this.lastName = '';
        this.age = 0;
        this.country = '';
        this.city = '';
        this.hobbies = [];
    }

    public setFistName(firstName: string): IPersonBuilder {
        this.firstName = firstName;
        return this;
    }

    setLastName(lastName: string): IPersonBuilder {
        this.lastName = lastName;
        return this;
    }

    setAge(age: number): IPersonBuilder {
        this.age = age;
        return this;
    }

    setCountry(country: string): IPersonBuilder {
        this.country = country;
        return this;
    }

    setCity(city: string): IPersonBuilder {
        this.city = city;
        return this;
    }

    addHobbies(hobby: string): IPersonBuilder {
        this.hobbies.push(hobby);
        return this;
    }

    build(): Person {
        const person = new Person(
            this.firstName, 
            this.lastName, 
            this.age, 
            this.country, 
            this.city, 
            this.hobbies
        );
        this.reset();
        return person;
    }
}


