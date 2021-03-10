import express from 'express';
import { TestController } from './controllers/test.controller';
import { CountryController } from './controllers/country.controller';
import { UserController} from './controllers/user.controller';
import loaders from './loaders';
import { User } from './entities/User';


async function startServer() {
    const app = express();
    const PORT = 3000;

    await loaders(app);

    TestController(app);
    CountryController(app);
    UserController(app);

    try {
        app.listen(PORT, () => {
            console.log("Server is listening on port " + PORT);
        });
    } catch (e){
        console.log('>>> Le serveur a rencontrer une erreur : ' + e);
    }


}

startServer();