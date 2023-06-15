export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criaDe(data, quantidadeStr, valorStr) {
        const exp = /-/g;
        const date = new Date(data.replace(exp, ","));
        const quantidade = parseInt(quantidadeStr);
        const valor = parseFloat(valorStr);
        return new Negociacao(date, quantidade, valor);
    }
}
