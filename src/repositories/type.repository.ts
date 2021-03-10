import { EntityRepository, Repository } from "typeorm";
import { Type } from "../entities/Type";

@EntityRepository(Type)
export class TypeRepository extends Repository<Type>{
    
}