import { UserService } from './user.service';
import { userDTO, userLoginDTO } from './model/user.model';
import { user } from './user.entity';
export declare class userController {
    private readonly userService;
    constructor(userService: UserService);
    loginUser(userLoginDTO: userLoginDTO): Promise<import("./model/user.model").userLoginSuccessDTO>;
    getUser(id: string): Promise<user>;
    updateUser(userDTO: userDTO): Promise<any>;
    signUpUser(userLoginDTO: userLoginDTO): Promise<void>;
}
