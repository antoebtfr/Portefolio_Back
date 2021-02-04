import { createConnection } from "typeorm"
import { Test } from "../entities/Test";

export default async () => {
    await createConnection({
        type: 'mysql',
        host: 'db4free.net',
        username: 'dev_cube',
        password: 'Livredepoche18',
        database: 'projet_cube',
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