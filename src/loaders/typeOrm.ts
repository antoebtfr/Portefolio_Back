import { createConnection } from "typeorm"
import { Commentary } from "../entities/Commentary";
import { Country } from "../entities/Country";
import { Relation } from "../entities/Relation";
import { Ressource } from "../entities/Ressource";
import { Test } from "../entities/Test";
import { Token } from "../entities/Token";
import { Type } from "../entities/Type";
import { User } from "../entities/User";

export default async () => {
    await createConnection({
        type: 'mysql',
        host: 'db4free.net',
        username: 'dev_cube',
        password: 'Livredepoche18',
        database: 'projet_cube',
        entities: [
            Test,
            Country,
            Token,
            User,
            Commentary,
            Ressource,
            Type,
            Relation
        ],
        synchronize: true,
        logging: false,
    }).then(connection => {


        console.log('typeOrm initialized');
    }).catch(err => {
        console.log('Something wrong happened with TYPEORM : ' + err);
    })

}