interface ListImplementor {
    elements: number[];

    add(element: number): void;
    getElements(): number[];
}

class OrderedList implements ListImplementor {
    elements: number[] = [];

    public add(element: number): void {
        this.elements.push(element);
        this.elements.sort();
    }

    public getElements(): number[] {
        return this.elements;
    }
}

class UniqueList implements ListImplementor {
    elements: number[] = [];

    public add(element: number): void {
        if (!this.elements.includes(element)) {
            this.elements.push(element);
        }
    }

    public getElements(): number[] {
        return this.elements;
    }
}

interface DataAbstraction {
    implementor: ListImplementor;

    add(element: number): void;
    get(): number[];
    operation(fn: (n: number) => number): number[];
}

class DataRefinedAbstraction implements DataAbstraction {
    implementor: ListImplementor;

    constructor(implementor: ListImplementor) {
        this.implementor = implementor;
    }

    public add(element: number): void {
        this.implementor.add(element);
    }

    public get(): number[] {
        return this.implementor.getElements();
    }

    public operation(fn: (n: number) => number): number[] {
        return this.implementor.getElements().map(fn);
    }
}

const uniqueData = new DataRefinedAbstraction(new UniqueList());
const orderedData = new DataRefinedAbstraction(new OrderedList());

uniqueData.add(3);
uniqueData.add(3);
uniqueData.add(1);
uniqueData.add(1);
uniqueData.add(2);
console.log(uniqueData.get());

orderedData.add(3);
orderedData.add(3);
orderedData.add(1);
orderedData.add(1);
orderedData.add(2);
console.log(orderedData.get());

const uniqueItems = uniqueData.operation((e: number) => e * 2);
const orderedItems = orderedData.operation((e: number) => e * 2);

console.log(uniqueItems);
console.log(orderedItems);