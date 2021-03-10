import { Application, Request, Response, Router } from "express";
import { RelationService } from "../services/Relation.service";

export const RelationController = (app: Application) => {
    const service = new RelationService;
    const router = Router();

    router.get('', async (req: Request, res: Response) => {
        res.send(await service.get());
    })

    router.post('', async (req: Request, res: Response) => {
        res.send(await service.post(req.body));
    })

    app.use('/relation', router);
}