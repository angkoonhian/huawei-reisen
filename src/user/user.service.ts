import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { isEmpty } from 'lodash';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import {
  userLoginDTO,
  userDTO,
} from './model/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectEntityManager('userDB') private entityManagerAdmin: EntityManager,
  ) {}

  public async userLogin(
    username: string,
    password: string,
  ): Promise<userLoginDTO> {
    try {
      const adminRepo = await this.entityManagerAdmin
        .createQueryBuilder()
        .select('users.username, users.password')
        .from('users', 'users')
        .where('users.username = :username', { username: username })
        .getRawMany();
      if (!adminRepo) {
        throw new NotFoundException('User does not exist');
      }
      await this.checkPassword(password, adminRepo[0].password).then((res) => {
        if (!res) {
          throw new BadRequestException('Invalid password');
        }
      });
      const token = this.getSignedJwtToken(adminRepo[0]);
      return {
        userId: adminRepo[0].userId,
        username: adminRepo[0].username,
        token: token,
        tokenExpiration: process.env.JWT_EXPIRE,
      };
    } catch (BadRequestException) {
      throw BadRequestException;
    }
  }

  private getSignedJwtToken(loginUser: userLoginDTO) {
    return sign(
      { userId: loginUser.username, userPassword: loginUser.password },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRE,
      },
    );
  }
  // Function to hash password when registering
  private async hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(password, salt);
    return hashedPassword;
  }
  // Function to check if password matches with bcrypt compare
  private checkPassword(inputPassword: string, originalPassword: string) {
    return bcrypt.compare(inputPassword, originalPassword);
  }
}
