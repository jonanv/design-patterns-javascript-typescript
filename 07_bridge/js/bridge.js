class EncoderTextAbastraction {

    constructor(encoder) {
        this.encoder = encoder;
    }

    encode(str) {
        return this.encoder.encode(str);
    }

    decode(str) {
        return this.encoder.decode(str);
    }
}

class Base64EncoderImplementor {

    encode(str) {
        return window.btoa(unescape(encodeURIComponent(str)));
    }

    decode(str) {
        return decodeURIComponent(escape(window.atob(str)));
    }
}

const encode1 =  new EncoderTextAbastraction(new Base64EncoderImplementor());
console.log(encode1.encode('Pato'));
console.log(encode1.decode('UGF0bw=='));