export class userLoginDTO {
    username: string;
    password: string;
}

export class userLoginSuccessDTO {
    userId: number;
    username: string;
    token: string;
    tokenExpiration: string;
}

export class userDTO {
    userId: string;
    name: string;
    nationality: string;
    age: number;
    interest: [string];
    currentItenary: string;
}