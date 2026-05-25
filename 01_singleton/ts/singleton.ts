class SingletonTS {
    private static instance: SingletonTS;
    private random: number;

    private constructor() {
        this.random = Math.random();
    }

    public static getInstance(): SingletonTS {
        if (!this.instance) {
            this.instance = new SingletonTS();
        }

        return this.instance;
    }

    public getRandom(): number {
        return this.random;
    }
}

const singletonTs1 = SingletonTS.getInstance();
console.log(singletonTs1.getRandom());

const singletonTs2 = SingletonTS.getInstance();
console.log(singletonTs2.getRandom());

const singletonTs3 = SingletonTS.getInstance();
console.log(singletonTs3.getRandom());