import { getCustomRepository, getRepository } from "typeorm";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/user.repository";

export class AuthService {
    protected repo = getCustomRepository(UserRepository);

    async login(body : any){
        let users = await this.repo.find();
        let exist = false
        let user = {}
        for(let elm of users){
            if(elm.email == body.email){
                if(elm.password == body.password){
                    user = {
                        'id':elm.id,
                        'lastname':elm.lastname,
                        'firstname':elm.firstname,
                        'role':elm.role,
                        'countryId':elm.countryId,
                        'phonenumber':elm.phonenumber,
                        'email':elm.email,
                        'birthdate':elm.birthdate,
                        'createdAt':elm.createdAt,
                        'updatedAt':elm.updatedAt,
                        'isConfirmed':elm.isConfirmed
                    };
                }else{
                    user = {
                        'error':'Le mot de passe est incorrect',
                    };
                }
                exist = true
            }
        }
        if(!exist){
            user = {
                'error':'L\'adresse mail saisie n\'est associée à aucun compte',
            };
        }
        return user;
    }

    signup(User: User){
        return this.repo.save(User)
    }

}