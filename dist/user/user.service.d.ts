import { EntityManager } from 'typeorm';
import { userLoginSuccessDTO } from './model/user.model';
export declare class UserService {
    private entityManagerAdmin;
    constructor(entityManagerAdmin: EntityManager);
    userLogin(username: string, password: string): Promise<userLoginSuccessDTO>;
    private getSignedJwtToken;
    private hashPassword;
    private checkPassword;
}
