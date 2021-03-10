import { getCustomRepository, getRepository } from "typeorm";
import { Relation } from "../entities/Relation";
import { RelationRepository } from "../repositories/relation.repository";

export class RelationService {
    protected repo = getCustomRepository(RelationRepository);

    get(){
        return this.repo.find();
    }

    post(Relation: Relation){
        console.log('Object has been added');
        return this.repo.save(Relation);
    }

}