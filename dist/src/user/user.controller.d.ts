import { UserService } from './user.service';
import { userDTO, userLoginDTO, userSignUpDTO } from './model/user.model';
export declare class userController {
    private readonly userService;
    constructor(userService: UserService);
    loginUser(userLoginDTO: userLoginDTO): Promise<import("./model/user.model").userLoginSuccessDTO>;
    getUser(): Promise<void>;
    updateUser(userDTO: userDTO): Promise<any>;
    signUpUser(userSignUpDTO: userSignUpDTO): Promise<void>;
}
