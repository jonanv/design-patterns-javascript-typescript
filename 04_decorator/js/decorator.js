// Component
class ProductComponent {

    constructor(name) {
        this.name = name;
    }

    getDetail() {
        return `${ this.name }`;
    }
}

// Decorator
class ProductDecorator {

    constructor(productComponent) {
        this.productComponent = productComponent;
    }

    getDetail() {
        return this.productComponent.getDetail();
    }
}

class ComercialInfoProductDecorator extends ProductDecorator {

    constructor(productComponent, tradename, brand) {
        super(productComponent);
        this.tradename = tradename;
        this.brand = brand;
    }

    getDetail() {
        return `${ this.tradename } ${ this.brand } ${ super.getDetail() }`;
    }
}

class StoreProductDecorator extends ProductDecorator {

    constructor(productComponent, price) {
        super(productComponent);
        this.price = price;
    }

    getDetail() {
        return `${ super.getDetail() } $${ this.price }`;
    }
}

class HTMLProductDecorator extends ProductDecorator {

    getDetail() {
        return `
            <h1>Informacion del producto</h1>
            <p>
                ${ super.getDetail() }
            </p>
        `;
    }
}

// Ejecucion
// Component
const productComponent = new ProductComponent('Cerveza');
console.log(productComponent.getDetail());

// Decorador 1 con component
const comercialInfoProduct = new ComercialInfoProductDecorator(productComponent, "London Porter", "Fuller's");
console.log(comercialInfoProduct.getDetail());

// Decorador 2 con component
const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetail());

// Decorador 2 con decorador 1
const product = new StoreProductDecorator(comercialInfoProduct, 15.5);
console.log(product.getDetail());

// Decorador 3 con decorador 2 con decorador 1
const htmlProduct = new HTMLProductDecorator(product);
myDiv.innerHTML = htmlProduct.getDetail();