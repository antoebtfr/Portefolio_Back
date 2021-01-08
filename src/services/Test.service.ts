import { getCustomRepository, getRepository } from "typeorm";
import { Test } from "../entities/Test";
import { TestRepository } from "../repositories/test.repository";

export class TestService {
    protected repo = getCustomRepository(TestRepository);

    get(){
        return this.repo.find();
    }

    post(test: Test){
        console.log('Object has been added');
        return this.repo.save(test);
    }

}