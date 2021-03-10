import { Application, Request, Response, Router } from "express";
import { RessourceService } from "../services/Ressource.service";

export const RessourceController = (app: Application) => {
    const service = new RessourceService;
    const router = Router();

    router.get('', async (req: Request, res: Response) => {
        res.send(await service.get());
    })

    router.post('', async (req: Request, res: Response) => {
        res.send(await service.post(req.body));
    })

    app.use('/ressource', router);
}