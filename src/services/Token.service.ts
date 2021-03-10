import { getCustomRepository, getRepository } from "typeorm";
import { Token } from "../entities/Token";
import { TokenRepository } from "../repositories/token.repository";

export class TokenService {
    protected repo = getCustomRepository(TokenRepository);

    get(){
        return this.repo.find();
    }

    post(Token: Token){
        console.log('Object has been added');
        return this.repo.save(Token);
    }

}