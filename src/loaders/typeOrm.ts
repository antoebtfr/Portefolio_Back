import { Connection, createConnection } from "typeorm"
import { Commentary } from "../entities/Commentary";
import { Country } from "../entities/Country";
import { Relation } from "../entities/Relation";
import { Ressource } from "../entities/Ressource";
import { Token } from "../entities/Token";
import { Type } from "../entities/Type";
import { User } from "../entities/User";

export default async () => {
    await createConnection({
        type: 'mysql',
        host: 'sql4.freemysqlhosting.net',
        username: 'sql4408789',
        password: 'dqBCNMaKu2',
        database: 'sql4408789',
        entities: [
            Country,
            Token,
            User,
            Commentary,
            Ressource,
            Type,
            Relation,
            Connection
        ],
        synchronize: true,
        logging: false,
    }).then(connection => {
        console.log('typeOrm initialized');
    }).catch(err => {
        console.log('Something wrong happened with TYPEORM : ' + err);
    })

}