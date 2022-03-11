export declare class userLoginDTO {
    username: string;
    password: string;
}
export declare class userLoginSuccessDTO {
    userId: number;
    username: string;
    token: string;
    tokenExpiration: string;
}
export declare class userDTO {
    userId: string;
    name: string;
    nationality: string;
    age: number;
    interest: [string];
    currentItenary: string;
}
