export default class Tarifa {
   constructor(origem = "", destino = "", preco = 0) {
      this.origem = origem;
      this.destino = destino;
      this.preco = preco;
   }

   origem!: string;

   destino!: string;

   preco!: number;
}
