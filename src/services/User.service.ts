import { getCustomRepository, getRepository } from "typeorm";
import { Connection } from "../entities/Connection";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/user.repository";

export class UserService {
    protected repo = getCustomRepository(UserRepository);

    get(){
        return this.repo.find();
    }

    post(User: User){
        console.log('Object has been added');
        return this.repo.save(User);
    }

    logIp(connectionLog: Connection){
        console.log('testws20')
        this.repo.save(connectionLog);
        console.log('good');
        }

    async activeUserAccount(user: User){
        user.isConfirmed = true; 
        this.repo.update(user.id, user);
    }

}