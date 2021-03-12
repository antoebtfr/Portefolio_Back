import { getCustomRepository, getRepository } from "typeorm";
import { Token } from "../entities/Token";
import { TokenRepository } from "../repositories/token.repository";

export class TokenService {
    protected repo = getCustomRepository(TokenRepository);

    get(token: string){
        return this.repo.findOne({key: token}, {relations: ['user']});
    }

    post(Token: Token){
        console.log('Object has been added');
        return this.repo.save(Token);
    }

}