export default class authUtil {
    hashPassword(password: any): Promise<any>;
    checkPassword(inputPassword: string, originalPassword: string): any;
}
