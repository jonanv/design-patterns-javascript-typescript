class Form {

    constructor(action, controls) {
        this.action = action;
        this.controls = controls;
    }

    getContent() {
        return `
            <form method="post" action="${ this.action }">
                ${ this.controls.reduce((ac, control) => {
                    return ac + `
                        <div>
                            ${ this.getLabel(control) }
                            ${ this.getInput(control) }
                        </div>
                    `
                }, '')}
                <button type="submit">Enviar</button>
            </form>
        `;
    }

    getLabel(control) {
        return `<label>${ control.text }</label>`;
    }

    getInput(control) {
        return `
            <input
                type="${ control.type }"
                id="${ control.name }"
                name="${ control.name }"
            />`;
    }
}

class BuilderForm {

    constructor(action, controls) {
        this.reset();
    }

    reset() {
        this.action = '';
        this.controls = [];
    }

    setAction(action) {
        this.action = action;
        return this;
    }

    setText(name, text) {
        this.controls.push({
            name,
            text,
            type: 'text'
        });
        return this;
    }

    setEmail(name, text) {
        this.controls.push({
            name,
            text,
            type: 'email'
        });
        return this;
    }

    setCheckbox(name, text) {
        this.controls.push({
            name,
            text,
            type: 'checkbox'
        });
        return this;
    }

    setColor(name, text) {
        this.controls.push({
            name,
            text,
            type: 'color'
        });
        return this;
    }

    build() {
        const form = new Form(
            this.action,
            this.controls
        );

        this.reset();
        return form;
    }
}

const builderForm1 = new BuilderForm();
const formPeople = builderForm1.setAction('add.php')
                            .setText('firstName', 'Nombres')
                            .setText('lastName', 'Apellidos')
                            .setText('email', 'E-mail')
                            .setCheckbox('drinker', 'Eres bebedor?')
                            .setColor('favoriteColor', 'Color favorito')
                            .build();
console.log(formPeople);
form1.innerHTML = formPeople.getContent();

const formMail = new BuilderForm().setAction('send.php')
                                .setText('name', 'Nombre')
                                .setText('email', 'E-mail')
                                .build();
console.log(formMail);
form2.innerHTML = formMail.getContent();