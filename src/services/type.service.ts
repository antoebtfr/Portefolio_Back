import { getCustomRepository, getRepository } from "typeorm";
import { Type } from "../entities/Type";
import { TypeRepository } from "../repositories/type.repository";

export class TypeService {
    protected repo = getCustomRepository(TypeRepository);

    get(){
        return this.repo.find();
    }

    post(Type: Type){
        console.log('Object has been added');
        return this.repo.save(Type);
    }

}