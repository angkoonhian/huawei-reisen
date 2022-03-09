import { EntityManager } from 'typeorm';
import { userLoginDTO } from './model/user.model';
export declare class UserService {
    private entityManagerAdmin;
    constructor(entityManagerAdmin: EntityManager);
    userLogin(username: string, password: string): Promise<userLoginDTO>;
    private getSignedJwtToken;
    private hashPassword;
    private checkPassword;
}
