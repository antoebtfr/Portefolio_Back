import { createConnection } from "typeorm"

export default async () => {
    await createConnection({
        type: 'mysql',
        host: 'localhost',
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        entities : [
            
        ],
        synchronize: true,
        logging: false,
    }).then(connection => {


        console.log('typeOrm initialized');
    }).catch(err => console.log('Something wrong happened with TYPEORM : ' + err));
}