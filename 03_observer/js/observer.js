class Subject {

    constructor() {
        this.observers= [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer);
    }

    notify(data) {
        this.observers.forEach(observer => {
            observer.refresh(data)
        });
    }
}

class Observer {

    constructor(fn) {
        this.fn = fn;
    }

    refresh(data) {
        this.fn(data);
    }
}

const subject1 = new Subject();

const observer1 = new Observer(d => console.log('Hola soy el observador 1: ' + d));

const observer2 = new Observer((d) => {
    div1.innerHTML = d; 
});

const observer3 = new Observer((d) => {
    div2.innerHTML = d.split('').reverse().join('');
});

subject1.subscribe(observer1);
subject1.subscribe(observer2);
subject1.subscribe(observer3);

// subject1.unsubscribe(observer1);

function change() {
    subject1.notify(myInputText.value);
}