const data = [
    {
        price: "$8.99",
        name: "Erdinger Weissbier",
        country: "Alemania",
        image: "https://www.totalwine.com/media/sys_master/twmmedia/h61/hda/8820602109982.png",
    },
    {
        price: "$18.99",
        name: "Delirium Tremens",
        country: "Belgica",
        image: "https://www.totalwine.com/media/sys_master/twmmedia/h05/ha0/8804687970334.png",
    },
    {
        price: "$13.99",
        name: "Blue Moon Belgian White Belgian-Style Wheat Ale",
        country: "Belgica",
        image: "https://www.totalwine.com/media/sys_master/twmmedia/he8/h67/11931543830558.png",
    }
];

class InfoContext {

    constructor(strategy, data, element) {
        this.setStrategy(strategy);
        this.data = data;
        this.element = element;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    show() {
        this.strategy.show(this.data, this.element);
    }
}

class ListStrategy {

    show(data, element) {
        element.innerHTML = '';

        for (const beer of data) {
            element.innerHTML += `
                <div>
                    <h2>${ beer.name }</>
                    <p>${ beer.country }</p>
                </div>
                <hr>
            `;
        }
    }
}

class DetailListStrategy {

    show(data, element) {
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `
                <div>
                    <h2>${ beer.name }</>
                    <p>${ beer.price }</p>
                </div>
                <hr>
            `
        }, '');
    }
}

class ListWithImageStrategy {

    show(data, element) {
        element.innerHTML = data.reduce((ac, beer) => {
            return ac + `
                <div>
                    <h2>${ beer.name }</>
                    <p>${ beer.price }</p>
                    <img src="${ beer.image }" alt="${ beer.name }">
                </div>
                <hr>
            `
        }, '');
    }
}

const strategies = [
    new ListStrategy(),
    new DetailListStrategy(),
    new ListWithImageStrategy()
]

const info = new InfoContext(new ListStrategy(), data, content);
info.show();

slcOptions.addEventListener('change', (event) => {
    const option = event.target.value;

    info.setStrategy(strategies[option]);
    info.show();
});