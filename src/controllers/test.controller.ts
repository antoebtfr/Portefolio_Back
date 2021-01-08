import { Application, Request, Response, Router } from "express";
import { TestService } from "../services/Test.service";

export const TestController = (app: Application) => {
    const service = new TestService;
    const router = Router();

    router.get('', async (req: Request, res: Response) => {
        res.send(await service.get());
    })

    router.post('', async (req: Request, res: Response) => {
        res.send(await service.post(req.body));
    })

    app.use('/test', router);
}