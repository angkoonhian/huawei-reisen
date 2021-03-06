import { Repository } from 'typeorm';
import { userLoginSuccessDTO } from './model/user.model';
import { user } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<user>);
    getUserById(id: string): Promise<user>;
    updateUser(userDTO: any): Promise<any>;
    signUpUser(userSignUpDTO: any): Promise<void>;
    userLogin(username: string, password: string): Promise<userLoginSuccessDTO>;
    private getSignedJwtToken;
    private hashPassword;
    private checkPassword;
}
