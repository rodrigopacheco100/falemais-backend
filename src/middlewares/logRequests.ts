import { Request, Response, NextFunction } from "express";

export default (request: Request, response: Response, next: NextFunction) => {
   const { method, url, body, params, query, headers } = request;
   const logLabel = `[${method.toUpperCase()}] - ${url}`;
   console.log(logLabel);

   return next();
};
