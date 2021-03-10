import { Application, Request, Response, Router } from "express";
import { TokenService } from "../services/Token.service";

export const TokenController = (app: Application) => {
    const service = new TokenService;
    const router = Router();

    router.get('', async (req: Request, res: Response) => {
        res.send(await service.get());
    })

    router.post('', async (req: Request, res: Response) => {
        res.send(await service.post(req.body));
    })

    app.use('/token', router);
}