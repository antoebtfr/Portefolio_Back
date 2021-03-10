import { getCustomRepository, getRepository } from "typeorm";
import { Commentary } from "../entities/Commentary";
import { CommentaryRepository } from "../repositories/commentary.repository";

export class CommentaryService {
    protected repo = getCustomRepository(CommentaryRepository);

    get(){
        return this.repo.find();
    }

    post(Commentary: Commentary){
        console.log('Object has been added');
        return this.repo.save(Commentary);
    }

}