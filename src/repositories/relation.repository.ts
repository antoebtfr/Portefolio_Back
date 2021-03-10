import { EntityRepository, Repository } from "typeorm";
import { Relation } from "../entities/Relation";

@EntityRepository(Relation)
export class RelationRepository extends Repository<Relation>{
    
}