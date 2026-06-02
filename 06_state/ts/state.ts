interface State {
    next(ticket: Ticket): number | null;
    add(ticket: Ticket, quantity: number): void;
}

class Ticket {
    private state!: State;
    public quantity!: number;
    public readonly limit!: number;
    private number!: number;

    constructor(limit: number) {
        this.limit = limit;
        this.quantity = 0;
        this.number = 0;
        this.state =  new EmptyState();
    }

    public get getNumber(): number {
        return this.number++;
    }

    public set setState(state: State) {
        this.state = state;
    }

    public get getState(): State {
        return this.state;
    }

    public next(): number | null {
        return this.state.next(this);
    }

    public add(quantity: number): void {
        this.state.add(this, quantity);
    }
}

class EmptyState implements State {

    public next(ticket: Ticket): number | null {
        return null;
    }

    public add(ticket: Ticket, quantity: number): void {
        if (quantity < ticket.limit) {
            ticket.quantity = quantity;
            ticket.setState =  new WithDataState();
        } else if (quantity === ticket.limit) {
            ticket.quantity = quantity;
            ticket.setState =  new FullState();
        }
    }
}

class WithDataState implements State {

    public next(ticket: Ticket): number | null {
        ticket.quantity--;
        if (ticket.quantity <= 0) {
            ticket.setState =  new EmptyState();
        }
        return ticket.getNumber;
    }

    public add(ticket: Ticket, quantity: number): void {
        if ((ticket.quantity + quantity) < ticket.limit) {
            ticket.quantity += quantity;
        } else if ((ticket.quantity + quantity) === ticket.limit) {
            ticket.quantity += quantity;
            ticket.setState =  new FullState();
        }
    }
}

class FullState implements State {

    public next(ticket: Ticket): number | null {
        ticket.quantity--;
        if (ticket.quantity <= 0) {
            ticket.setState = new EmptyState();
        } else {
            ticket.setState =  new WithDataState();
        }
        return ticket.getNumber;
    }

    public add(ticket: Ticket, quantity: number): void {
        console.log('Ticket lleno');
    }
}

// Ejecucion
const ticket = new Ticket(5);
console.log(ticket.getState);
console.log(ticket.next());
ticket.add(6);
console.log(ticket.getState);
console.log(ticket.next());
ticket.add(4); // No esta lleno, falta 1
console.log(ticket.getState);
console.log(ticket.next()); // resta 1
console.log(ticket.next()); // resta 1
ticket.add(3); // Con 3 queda lleno 5
console.log(ticket.getState);
ticket.add(1); // No se agregan ya que esta lleno
console.log(ticket.next()); // resta 1
console.log(ticket.getState);
console.log(ticket.next()); // resta 1
console.log(ticket.next()); // resta 1
console.log(ticket.next()); // resta 1
console.log(ticket.next()); // resta 1
console.log(ticket.getState);
console.log(ticket.next()); // Ya no hay tickets