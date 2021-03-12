import { randomBytes } from "crypto";
import { createTestAccount, createTransport, getTestMessageUrl } from "nodemailer";
import { getCustomRepository } from "typeorm";
import { Token } from "../entities/Token";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/user.repository";
import { Settings } from "../settings";
import { TokenService } from "./Token.service";

export class AuthService {

    
    protected repo = getCustomRepository(UserRepository);
    private settings = new Settings;
    private tokenService = new TokenService;

    async login(body : any){
        let users = await this.repo.find();
        let exist = false
        let user = {}
        for(let elm of users){
            if(elm.email == body.email){
                if(elm.password == this.hashCode(body)){
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

    private async getUserSensitive(email: string){
        if (await this.repo.findOne({where: {email}})) {
            return true; 
        }

        return false;
    }

    private hashCode = function(s : any){
        return s.password.split("").reduce(function(a : any,b : any){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
    }

    async signup(user: User){

        // Codes d'erreurs présents sur le WIKI - DRIVE
        
        if (await this.getUserSensitive(user.email)) {
            throw {id: 1};
        }
        
        if(!user.firstname){
            throw {id: 2};
        }

        if(!user.lastname){
            throw {id: 3};
        }

        if(!user.password){
            throw {id: 4};
        }
        
        user.password = this.hashCode(user);

        const tokenString = randomBytes(12).toString('hex');

        user = this.repo.create(user);
        user = await this.repo.save(user);

        await this.nodemailer(tokenString, user);

        const token = new Token;
        token.userId = user;
        token.key = tokenString;
        this.tokenService.post(token);

        console.log(user);
        console.log('\nThe user has been saved!');
        return true;
    }

    private async nodemailer(token: string, user: User) {
        const testAccount = await createTestAccount();

        const transporter = createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth : {
                user: testAccount.user,
                pass: testAccount.pass,
            }
        });

        const serverConfirmationLink = this.settings.getServerLink(3000) + '/auth/confirmation/' + token;

        const info = await transporter.sendMail({
            from: '<antoebt@hotmail.com>', //testws20 - Creer une adresse mail pour Opibus
            to: user.email,
            subject: 'OPIBUS - Lien de confirmation',
            text: 'Hello World',
            html: '<b> Veuillez confirmer votre compte en cliquant sur ce lien d\'activation de compte : <a href="'+ serverConfirmationLink + '"> Lien de confirmation</a></b> '
        });

        console.log('Message send to: %s', user.email);
        console.log('Preview URL: %s', getTestMessageUrl(info));
    }

}