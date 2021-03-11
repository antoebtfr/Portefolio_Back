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
            if(elm.email == req.body.email){
                if(elm.password == req.body.password){
                    user = elm;
                }else{
                    user = {
                        'error':'Le mot de passe saisi est incorrect'
                    };
                }
                exist = true
            }
        }
        if(!exist){
            user = {
                'error':'Aucun compte n\'est enregistré avec cette adresse'
            }
        }
        res.send(user)
    })

    app.use('/login', router);
}