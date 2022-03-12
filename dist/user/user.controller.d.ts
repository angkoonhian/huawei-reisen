import { UserService } from './user.service';
import { userLoginDTO } from './model/user.model';
export declare class userController {
    private readonly userService;
    constructor(userService: UserService);
    loginUser(userLoginDTO: userLoginDTO): Promise<import("./model/user.model").userLoginSuccessDTO>;
    getUser(): Promise<void>;
}
