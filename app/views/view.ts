import { Negociacoes } from "../models/negociacoes";

export class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  update(model: T): void {
    this.elemento.innerHTML = this.template(model);
  }

  template(model: T): string {
    throw Error("É necessário implementar o método template");
  }
}
