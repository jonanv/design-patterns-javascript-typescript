interface Strategy {
    login(user: string, password: string): boolean;
}

class LoginContext {

    private strategy!: Strategy;

    constructor(strategy: Strategy) {
        this.setStrategy(strategy);
    }

    public setStrategy(strategy: Strategy): void {
        this.strategy = strategy;
    }

    public login(user: string, password: string): boolean {
        return this.strategy.login(user, password);
    }
}

class LoginDBStrategy implements Strategy {

    public login(user: string, password: string): boolean {
        console.log('Nos dirigimos a la base de datos');

        if (user === 'admin' && password === '1234') {
            return true;
        }
        return false;
    }
}

class LoginServiceStrategy implements Strategy {

    public login(user: string, password: string): boolean {
        console.log('Nos dirigimos a un servicio de autentificación');

        if (user === 'admin' && password === '1234') {
            return true;
        }
        return false;
    }
}

class LoginGoogleStrategy implements Strategy {

    public login(user: string, password: string): boolean {
        console.log('Nos dirigimos a la autentificación de Google');

        if (user === 'admin' && password === '1234') {
            return true;
        }
        return false;
    }
}

const auth = new LoginContext(new LoginDBStrategy());
console.log(auth.login('admin', '1234'));

auth.setStrategy(new LoginServiceStrategy());
console.log(auth.login('admin', '1234'));

auth.setStrategy(new LoginGoogleStrategy());
console.log(auth.login('admin', '1234'));