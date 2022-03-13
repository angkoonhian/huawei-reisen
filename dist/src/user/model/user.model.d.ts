export declare class userLoginDTO {
    name: string;
    password: string;
}
export declare class userLoginSuccessDTO {
    userId: string;
    name: string;
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