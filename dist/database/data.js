"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Tarifa_1 = __importDefault(require("../models/Tarifa"));
var tarifas = [
    new Tarifa_1.default("11", "16", 1.9),
    new Tarifa_1.default("16", "11", 2.9),
    new Tarifa_1.default("11", "17", 1.7),
    new Tarifa_1.default("17", "11", 2.7),
    new Tarifa_1.default("11", "18", 0.9),
    new Tarifa_1.default("18", "11", 1.9),
];
exports.default = tarifas;
