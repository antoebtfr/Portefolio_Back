import { getCustomRepository, getRepository } from "typeorm";
import { Ressource } from "../entities/Ressource";
import { RessourceRepository } from "../repositories/ressource.repository";

export class RessourceService {
    protected repo = getCustomRepository(RessourceRepository);

    get(){
        return this.repo.find();
    }

    post(Ressource: Ressource){
        console.log('Object has been added');
        return this.repo.save(Ressource);
    }

    getAllByUserId(userId: number){
        return this.repo.find({where: {typeId : userId}})
    }

}