class EditorAbstraction {

    constructor(implementor) {
        this.implementor = implementor;
    }

    print(width, height, color) {
        this.implementor.setWidth(width);
        this.implementor.setHeight(height);
        this.implementor.setColor(color);
        this.implementor.print();
    }
}

class EditorWidthClearImplementor extends EditorAbstraction {

    constructor(implementor) {
        super(implementor);
    }

    clear() {
        this.implementor.setWidth(0);
        this.implementor.setHeight(0);
        this.implementor.print();
    }
}

class HTMLPainterImplementor {

    constructor(container) {
        this.container = container;
        this.width = '1px';
        this.height = '1px';
        this.color = '#FFFFFF';
    }

    setWidth(width) {
        this.width = width + 'px';
    }

    setHeight(height) {
        this.height = height + 'px';
    }

    setColor(color) {
        this.color = color;
    }

    print() {
        this.container.innerHTML = `
            <div style="width: ${this.width}; height: ${this.height}; background: ${this.color };">

            </div>
        `;
    }
}

class CanvasPainterImplementor {

    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');

        this.width = 1;
        this.height = 1;
        this.color = '#FFFFFF';
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }

    setColor(color) {
        this.color = color;
    }

    print() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.fillStyle = this.color;
        this.context.fillRect(0, 0, this.width, this.height);
    }
}

// const editor = new EditorAbstraction(new HTMLPainterImplementor(content));
// const editor = new EditorAbstraction(new CanvasPainterImplementor(canvas));

// const editor = new EditorWidthClearImplementor(new HTMLPainterImplementor(content));
const editor = new EditorWidthClearImplementor(new CanvasPainterImplementor(canvas));

range.addEventListener("input", (e) => {
    const width = e.target.value;
    const height = e.target.value;
    const color = editorColor.value;

    editor.print(width, height, color);
});

editorColor.addEventListener("input", (e) => {
    const width = range.value;
    const height = range.value;
    const color = e.target.value;

    editor.print(width, height, color);
});

buttonBorrar.addEventListener("click", () => {
    editor.clear();
});