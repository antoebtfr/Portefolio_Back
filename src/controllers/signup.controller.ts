import { Application, Request, Response, Router } from "express";
import { AuthService } from "../services/Auth.service";

export const SignupController = (app: Application) => {
    const service = new AuthService;
    const router = Router();

    router.post('', async (req: Request, res: Response) => {
        res.send(await service.signup(req.body));
    })

    app.use('/signup', router);
}