import { Application, Request, Response, Router } from "express";
import { CountryService } from "../services/Country.service";

export const CountryController = (app: Application) => {
    const service = new CountryService;
    const router = Router();

    router.get('', async (req: Request, res: Response) => {
        res.send(await service.get());
    })

    router.post('', async (req: Request, res: Response) => {
        res.send(await service.post(req.body));
    })

    app.use('/country', router);
}