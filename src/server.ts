import express from 'express';
import { TestController } from './controllers/test.controller';
import loaders from './loaders';


async function startServer() {
    const app = express();
    const PORT = 3000;

    
    await loaders(app);

    TestController(app);

    try {
        app.listen(PORT, () => {
            console.log("Server is listening on port " + PORT);
        });
    } catch (e){
        console.log('>>> Le serveur a rencontrer une erreur : ' + e);
    }


}

startServer();