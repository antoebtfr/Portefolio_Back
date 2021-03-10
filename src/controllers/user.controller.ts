import { Application, Request, Response, Router } from "express";
import { UserService } from "../services/User.service";

export const UserController = (app: Application) => {
    const service = new UserService;
    const router = Router();

    router.get('', async (req: Request, res: Response) => {
        res.send(await service.get());
    })

    router.post('', async (req: Request, res: Response) => {
        res.send(await service.post(req.body));
    })

    app.use('/user', router);
}