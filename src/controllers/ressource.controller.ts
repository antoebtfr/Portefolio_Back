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

    router.get('/:id', async (req: Request, res: Response) => {
        res.send(await service.getAllByUserId(Number(req.params.id)));
    })

    app.use('/ressource', router);
}