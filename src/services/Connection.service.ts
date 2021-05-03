import { getCustomRepository } from "typeorm";
import { Connection } from "../entities/Connection";
import { ConnectionRepository } from "../repositories/connection.repository";

export class ConnectionService {
    protected repo = getCustomRepository(ConnectionRepository);

    getAll(){
        return this.repo.find();
    }

    logIp(connectionLog: Connection) {
        return this.repo.save(connectionLog);
    }
}