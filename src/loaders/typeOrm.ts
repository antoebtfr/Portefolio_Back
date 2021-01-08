import { createConnection } from "typeorm"
import { Test } from "../entities/Test";

export default async () => {
    await createConnection({
        type: 'mysql',
        host: 'localhost',
        username: 'root',
        password: 'Livredepoche18;',
        database: 'paul',
        entities : [
            Test
        ],
        synchronize: true,
        logging: false,
    }).then(connection => {


        console.log('typeOrm initialized');
    }).catch(err => {
        console.log('Something wrong happened with TYPEORM : ' + err);
    })
        
}