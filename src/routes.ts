import { Router, Request, Response } from "express";
import logRequests from "./middlewares/logRequests";
import data from "./database/data";

const routes = Router();

routes.use(logRequests);

routes.get("/tarifas", (request: Request, response: Response) => {
   const tarifas = data.map((tarifa) => {
      return { origem: tarifa.origem, destino: tarifa.destino };
   });
   return response.json(tarifas);
});

routes.get("/tarifa", (request: Request, response: Response) => {
   const { origem, destino, tempo, plano } = request.query;
   const numTempo = Number(tempo);
   const numPlano = Number(plano);
   const tarifa = data.find(
      (tarifaItem) =>
         tarifaItem.origem === origem && tarifaItem.destino === destino
   );
   console.log(tarifa);

   if (tarifa) {
      const tarifaComPlano =
         (tarifa.preco + tarifa.preco / 10) * (numTempo - numPlano);

      const tarifaSemPlano = tarifa.preco * numTempo;

      return response
         .json({
            tarifaComPlano:
               tarifaComPlano <= 0
                  ? "R$ 0,00"
                  : `R$ ${tarifaComPlano.toFixed(2)}`,
            tarifaSemPlano: `R$ ${tarifaSemPlano.toFixed(2)}`,
         })
         .status(200);
   }
   return response.status(400).json({ error: "Tarifa não encontrada" });
});

export default routes;
