import express from 'express';
import loaders from './loaders';


async function startServer() {
    const app = express();
    const PORT = 3000;

    await loaders(app);
    try {
        app.listen(PORT, () => {
            console.log("Server is listening on port " + PORT);
        });
    } catch (e){
        console.log('>>> Le serveur a rencontrer une erreur : ' + e);
    }

}

startServer();