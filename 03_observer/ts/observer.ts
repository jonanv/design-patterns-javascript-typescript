interface IObserser<T> {
    refresh(value: T): void;
}

interface ISubject<T> {
    observers: IObserser<T>[];

    subscribe(observer: IObserser<T>): void;
    unsubscribe(observer: IObserser<T>): void;
    notify(value: T): void;
}

class Subject<T> implements ISubject<T> {
    observers!: IObserser<T>[];

    constructor() {
        this.observers = [];
    }

    subscribe(observer: IObserser<T>): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: IObserser<T>): void {
        this.observers.filter((obs) => obs !== observer);
    }

    notify(value: T): void {
        this.observers.forEach((observer) => {
            observer.refresh(value);
        });
    }
}

class Observer<T> implements IObserser<T> {
    private fn!: (value: T) => void;

    constructor(fn: (value: T) => void) {
        this.fn = fn;
    }

    refresh(value: T): void {
        this.fn(value);
    }
}

const subject = new Subject<number>();

const observer1 = new Observer<number>((n) => {
    console.log(`Hello ${ n }`);
});

const observer2 = new Observer<number>((n) => {
    console.log(`Hi ${ n }`);
});

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify(1.2);
subject.notify(30);



const subjectString = new Subject<string>();

const observer1String = new Observer<string>((chain) => {
    console.log(chain.toUpperCase());
});
const observer2String = new Observer<string>((chain) => {
    console.log(chain.toLowerCase());
});

subjectString.subscribe(observer1String);
subjectString.subscribe(observer2String);
subjectString.notify('Patron observer con cadenas');
subjectString.notify('PATRON OBSERVER CON CADENAS MINUSCULAS');