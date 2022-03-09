import { UserService } from './user.service';
import { userLoginDTO } from './model/user.model';
export declare class userController {
    private readonly userService;
    constructor(userService: UserService);
    loginUser(body: {
        username: string;
        password: string;
    }): Promise<userLoginDTO>;
}
