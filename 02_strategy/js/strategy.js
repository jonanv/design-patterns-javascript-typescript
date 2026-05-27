class SaleContext {
    constructor(strategy) {
        this.strategy = strategy;
    }
    
    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculate(amount) {
        return this.strategy.calculate(amount);
    }
}

class RegularSaleStrategy {
    constructor(tax) {
        this.tax = tax;
    }

    calculate(amount) {
        return amount + (amount * this.tax);
    }
}

class DiscountSaleStrategy {
    constructor(tax, discount) {
        this.tax =  tax;
        this.discount =  discount;
    }

    calculate(amount) {
        return amount + (amount * this.tax) - this.discount;
    }
}

class ForeignSaleStrategy {
    constructor() {

    }

    calculate(amount) {
        return amount * this.getDollarPrice();
    }

    getDollarPrice() {
        return 20;
    }
}

const regularSale = new RegularSaleStrategy(0.19);
const sale = new SaleContext(regularSale);
console.log(sale.calculate(10));

const discountSale = new DiscountSaleStrategy(0.30, 2);
const sale2 = new SaleContext(discountSale);
console.log(sale2.calculate(10));

// Cambiar la estrategia de la misma instancia
sale.setStrategy(discountSale);
console.log(sale.calculate(10));

const foreignSale = new ForeignSaleStrategy();
sale.setStrategy(foreignSale);
console.log(sale.calculate(10));