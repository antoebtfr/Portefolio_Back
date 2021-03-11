import { Application, Request, Response, Router } from "express";
import { AuthService } from "../services/Auth.service";

export const LoginController = (app: Application) => {
    const service = new AuthService;
    const router = Router();

    router.post('', async (req: Request, res: Response) => {
        res.send(await service.login(req.body))
    })

    app.use('/login', router);
}