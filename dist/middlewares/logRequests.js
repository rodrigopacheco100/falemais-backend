"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (request, response, next) {
    var method = request.method, url = request.url, body = request.body, params = request.params, query = request.query, headers = request.headers;
    var logLabel = "[" + method.toUpperCase() + "] - " + url;
    console.log(logLabel);
    return next();
});
