import { NegociacoesDoDia } from "../interfaces/negociacao-do-dia";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
  public async negociacoesDoDia(): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((res) => res.json())
      .then((dados: NegociacoesDoDia[]) => {
        return dados.map((dado: NegociacoesDoDia) => {
          return new Negociacao(new Date(), dado.vezes, dado.montante);
        });
      });
  }
}
