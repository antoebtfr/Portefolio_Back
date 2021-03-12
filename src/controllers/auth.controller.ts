import { Application, Request, Response, Router } from "express";
import { AuthService } from "../services/Auth.service";

export const AuthController = (app: Application) => {
    const service = new AuthService;
    const router = Router();

    router.post('/login', async (req: Request, res: Response) => {

        res.send(await service.login(req.body));
    })

    router.post('/signup', async (req: Request, res: Response) => {

        const userInfo = req.body;

        try {
            await service.signup(userInfo);
            res.sendStatus(204);
        } catch (error) {
            if (error.id === 1) {
                res.status(408).send('Informations déjà utilisées');
                return;
            }

            res.send(409).send('Erreur lors de l\'inscription >>> Error : \n ' + error);
        }

    })


    router.get('/confirmation/:token', (req: Request, res: Response) => {
        const tokenStr = req.params.token;

        try {
            service.confirmation(tokenStr);
            res.sendStatus(204);
        } catch (error) {
            res.sendStatus(400);
        }
    });

    app.use('/auth', router);
}