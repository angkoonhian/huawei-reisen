<<<<<<< HEAD
import { Repository } from 'typeorm';
import { userLoginSuccessDTO } from './model/user.model';
import { user } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<user>);
    getUser(): Promise<void>;
=======
import { EntityManager } from 'typeorm';
import { userLoginSuccessDTO } from './model/user.model';
export declare class UserService {
    private entityManagerAdmin;
    constructor(entityManagerAdmin: EntityManager);
>>>>>>> ccb39d3a3bc96032d9dadd00e9443704d5fa12b7
    userLogin(username: string, password: string): Promise<userLoginSuccessDTO>;
    private getSignedJwtToken;
    private hashPassword;
    private checkPassword;
}
