import { EntityRepository, Repository } from "typeorm";
import { Test } from "../entities/Test";

@EntityRepository(Test)
export class TestRepository extends Repository<Test>{
    
}