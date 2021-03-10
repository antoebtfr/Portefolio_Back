import { Application, Request, Response, Router } from "express";
import { TypeService } from "../services/type.service";

export const TypeController = (app: Application) => {
    const service = new TypeService;
    const router = Router();

    router.get('', async (req: Request, res: Response) => {
        res.send(await service.get());
    })

    router.post('', async (req: Request, res: Response) => {
        res.send(await service.post(req.body));
    })

    app.use('/type', router);
}