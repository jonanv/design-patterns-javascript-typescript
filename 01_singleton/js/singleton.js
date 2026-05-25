class Singleton {

    constructor() {

        this.random = Math.random();

        console.log('Entrando al contructor');
        if (Singleton.instance) {
            console.log('Ya existe');
            return Singleton.instance;
        }

        console.log('No existe y se crea');
        Singleton.instance = this;
    }

    static getInstance() {
        return Singleton.instance;
    }

}

const singleton1 = new Singleton();
console.log(singleton1.random);

const singleton2 = new Singleton();
console.log(singleton2.random);

const singleton3 = new Singleton();
console.log(singleton3.random);

console.log(singleton1 === singleton2);
console.log(singleton2 === singleton3);

console.log(singleton1.getInstance() === singleton2.getInstance());