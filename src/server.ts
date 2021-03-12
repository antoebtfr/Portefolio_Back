import express from 'express';
import loaders from './loaders';
import { TestController } from './controllers/test.controller';
import { CountryController } from './controllers/country.controller';
import { UserController} from './controllers/user.controller';
import { CommentaryController } from './controllers/commentary.controller';
import { RelationController } from './controllers/relation.controller';
import { RessourceController } from './controllers/ressource.controller';
import { TokenController } from './controllers/token.controller';
import { TypeController } from './controllers/type.controller';
import { AuthController } from './controllers/auth.controller';



async function startServer() {
    const app = express();
    const PORT = 3000;

    await loaders(app);

    TestController(app);
    CountryController(app);
    UserController(app);
    CommentaryController(app);
    RelationController(app);
    RessourceController(app);
    TokenController(app);
    TypeController(app);
    AuthController(app);

    try {
        app.listen(PORT, () => {
            console.log("Server is listening on port " + PORT);
        });
    } catch (e){
        console.log('>>> Le serveur a rencontrer une erreur : ' + e);
    }


}

startServer();