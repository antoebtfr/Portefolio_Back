import { EntityRepository, Repository } from "typeorm";
import { Ressource } from "../entities/Ressource";

@EntityRepository(Ressource)
export class RessourceRepository extends Repository<Ressource>{
    
}