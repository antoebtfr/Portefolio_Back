import { Application, Request, Response, Router } from "express";
import { AuthService } from "../services/Auth.service";

export const AuthController = (app: Application) => {
    const service = new AuthService;
    const router = Router();

    router.post('/login', async (req: Request, res: Response) => {

        res.send(await service.login(req.body));
    })

    app.use('/auth', router);
}