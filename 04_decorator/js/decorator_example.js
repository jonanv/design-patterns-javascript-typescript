class ClientComponent {

    constructor(url) {
        this.url = url;
    }

    async getData() {
        const res = await fetch(this.url);
        const data = await res.json();
        return data;
    }
}

// decorator
class ClientDecorator {

    constructor(clientComponent) {
        this.clientComponent = clientComponent;
    }

    async getData() {
        return await this.clientComponent.getData();
    }
}

// decorador 1
class UpperCaseClienteDecorator extends ClientDecorator {
    
    async getData() {
        const data = await super.getData();

        const newData = data.map((element) => {
            element.title = element.title.toUpperCase();
            return element;
        });
        return newData;
    }
}

// decorador 2
class HtmlClientDecorator extends ClientDecorator {

    async getData() {
        const data = await super.getData();

        const newData = data.map((element) => {
            element.title = `<h1>${ element.title }</h1>`
            element.thumbnailUrl = `<img src="${ element.thumbnailUrl }"/>`
            return element;
        });
        return newData;
    }
}

(async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';

    const clientComponent = new ClientComponent(url);
    const data = await clientComponent.getData();
    console.log(data);

    const upperCaseClient = new UpperCaseClienteDecorator(clientComponent);
    const data2 = await upperCaseClient.getData();
    console.log(data2);

    const htmlClient = new HtmlClientDecorator(upperCaseClient);
    const data3 = await htmlClient.getData();
    // console.log(data3);
    divContent1.innerHTML = data3.reduce((ac, e) => {
        return ac +  e.title + e.thumbnailUrl;
    }, '');

    const htmlClient2 = new HtmlClientDecorator(clientComponent);
    const data4 = await htmlClient2.getData();
    // console.log(data4);
    divContent2.innerHTML = data4.reduce((ac, e) => {
        return ac +  e.title + e.thumbnailUrl;
    }, '');
})();