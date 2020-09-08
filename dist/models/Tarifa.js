"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tarifa = /** @class */ (function () {
    function Tarifa(origem, destino, preco) {
        if (origem === void 0) { origem = ""; }
        if (destino === void 0) { destino = ""; }
        if (preco === void 0) { preco = 0; }
        this.origem = origem;
        this.destino = destino;
        this.preco = preco;
    }
    return Tarifa;
}());
exports.default = Tarifa;
