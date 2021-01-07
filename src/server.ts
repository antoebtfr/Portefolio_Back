import express from 'express';


function startServer(): void {
    const app = express();
    const PORT = 3000;


    try {
        app.listen(PORT, () => {
            console.log("Server is listening on port " + PORT);
        });
    } catch (e){
        console.log('>>> Le serveur a rencontrer une erreur : ' + e);
    }

}

startServer();