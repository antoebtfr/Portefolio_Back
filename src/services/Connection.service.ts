import { getCustomRepository } from "typeorm";
import { ConnectionRepository } from "../repositories/connection.repository";

export class ConnectionService {
    protected repo = getCustomRepository(ConnectionRepository);

    getAll(){
        return this.repo.find();
    }
}