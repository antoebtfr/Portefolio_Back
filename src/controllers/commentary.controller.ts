import { Application, Request, Response, Router } from "express";
import { CommentaryService } from "../services/Commentary.service";

export const CommentaryController = (app: Application) => {
    const service = new CommentaryService;
    const router = Router();

    router.get('', async (req: Request, res: Response) => {
        res.send(await service.get());
    })

    router.post('', async (req: Request, res: Response) => {
        res.send(await service.post(req.body));
    })

    app.use('/commentary', router);
}