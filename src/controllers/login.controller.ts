import { Application, Request, Response, Router } from "express";
import { UserService } from "../services/User.service";

export const LoginController = (app: Application) => {
    const service = new UserService;
    const router = Router();

    router.post('', async (req: Request, res: Response) => {
        let users = await service.get();
        let exist = false
        let user = {}
        for(let elm of users){
            if(elm.email == req.body.email && elm.password == req.body.password){
                if(elm.password == req.body.password){
                    user = elm;
                }else{
                    user = {
                        'error':'Wrong password.'
                    };
                }
                exist = true
            }
        }
        if(!exist){
            user = {
                'error':'Unknown user.'
            }
        }
        res.send(user)
    })

    app.use('/login', router);
}