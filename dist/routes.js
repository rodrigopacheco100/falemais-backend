"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var logRequests_1 = __importDefault(require("./middlewares/logRequests"));
var data_1 = __importDefault(require("./database/data"));
var routes = express_1.Router();
routes.use(logRequests_1.default);
routes.get("/tarifas", function (request, response) {
    var tarifas = data_1.default.map(function (tarifa) {
        return { origem: tarifa.origem, destino: tarifa.destino };
    });
    return response.json(tarifas);
});
routes.get("/tarifa", function (request, response) {
    var _a = request.query, origem = _a.origem, destino = _a.destino, tempo = _a.tempo, plano = _a.plano;
    var numTempo = Number(tempo);
    var numPlano = Number(plano);
    var tarifa = data_1.default.find(function (tarifaItem) {
        return tarifaItem.origem === origem && tarifaItem.destino === destino;
    });
    console.log(tarifa);
    if (tarifa) {
        var tarifaComPlano = (tarifa.preco + tarifa.preco / 10) * (numTempo - numPlano);
        var tarifaSemPlano = tarifa.preco * numTempo;
        return response
            .json({
            tarifaComPlano: tarifaComPlano <= 0
                ? "R$ 0,00"
                : "R$ " + tarifaComPlano.toFixed(2),
            tarifaSemPlano: "R$ " + tarifaSemPlano.toFixed(2),
        })
            .status(200);
    }
    return response.status(400).json({ error: "Tarifa não encontrada" });
});
exports.default = routes;
