import { Application, Request, Response, Router } from "express";
import { UserService } from "../services/User.service";

export const SignupController = (app: Application) => {
    const service = new UserService;
    const router = Router();

    router.post('', async (req: Request, res: Response) => {
        res.send(await service.post(req.body));
    })

    app.use('/signup', router);
}