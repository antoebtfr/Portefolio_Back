import { Application, Request, Response, Router } from "express";
import { UserService } from "../services/User.service";

export const LoginController = (app: Application) => {
    const service = new UserService;
    const router = Router();

    router.post('', async (req: Request, res: Response) => {
        let users = await service.get();
        let login = false
        for(let elm of users){
            if(elm.email == req.body.email && elm.password == req.body.password){
                login = true
                break
            }
        }
        res.send(login)
    })

    app.use('/login', router);
}