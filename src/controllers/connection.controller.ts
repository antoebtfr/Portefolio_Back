import { Application, Request, Response, Router } from "express";
import { ConnectionService } from "../services/Connection.service";

export const ConnectionController = (app: Application) => {
    const service = new ConnectionService;
    const router = Router();

    router.get('', async (req: Request, res: Response) => {
        res.send(await service.getAll());
    })

    router.post('', async (req: Request, res: Response) => {
        
        res.send(await service.logIp(req.body));
    })

    app.use('/connection-log', router);
}