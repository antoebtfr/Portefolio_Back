import { getCustomRepository, getRepository } from "typeorm";
import { Country } from "../entities/Country";
import { CountryRepository } from "../repositories/country.repsitory";

export class CountryService {
    protected repo = getCustomRepository(CountryRepository);

    get(){
        return this.repo.find();
    }

    post(Country: Country){
        console.log('Object has been added');
        return this.repo.save(Country);
    }

}