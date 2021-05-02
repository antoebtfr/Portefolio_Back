import { getCustomRepository, getRepository } from "typeorm";
import { Connection } from "../entities/Connection";
import { User } from "../entities/User";
import { ConnectionRepository } from "../repositories/connection.repository";
import { UserRepository } from "../repositories/user.repository";

export class UserService {
    protected repo = getCustomRepository(UserRepository);
    protected logRepo = getCustomRepository(ConnectionRepository);

    get() {
        return this.repo.find();
    }

    post(User: User) {
        console.log('Object has been added');
        return this.repo.save(User);
    }

    logIp(connectionLog: Connection) {
        return this.logRepo.save(connectionLog);
    }

    async activeUserAccount(user: User) {
        user.isConfirmed = true;
        this.repo.update(user.id, user);
    }

}