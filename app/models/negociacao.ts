export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }

  get data(): Date {
    const data = new Date(this._data.getTime());
    return data;
  }

  public static criaDe(
    data: string,
    quantidadeStr: string,
    valorStr: string
  ): Negociacao {
    const exp = /-/g;
    const date = new Date(data.replace(exp, ","));
    const quantidade = parseInt(quantidadeStr);
    const valor = parseFloat(valorStr);
    return new Negociacao(date, quantidade, valor);
  }
}
