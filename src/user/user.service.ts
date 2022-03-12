import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import { isEmpty } from 'lodash';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import {
  userLoginDTO,
  userDTO,
  userLoginSuccessDTO,
} from './model/user.model';
import { user } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<user>,
    // @InjectEntityManager('userDB') private entityManagerAdmin: EntityManager,
  ) { }
  
  public async getUser() {
    this.userRepository.find().then(result => {
      console.log(result);
      return result;
    });
  }

  public async userLogin(
    username: string,
    password: string,
  ): Promise<userLoginSuccessDTO> {
    try {
      const user = await this.userRepository.findOne({name: username});
      if (!user) {
        throw new NotFoundException('User does not exist');
      }
      console.log(user);
      await this.checkPassword(password, user.password).then((res) => {
        console.log(res);
        if (!res) {
          throw new BadRequestException('Invalid password');
        }
      });
      const token = this.getSignedJwtToken(user);
      return {
        userId: user.userId,
        name: user.name,
        token: token,
        tokenExpiration: process.env.JWT_EXPIRE,
      };
    } catch (BadRequestException) {
      throw BadRequestException;
    }
  }

  private getSignedJwtToken(loginUser: userLoginDTO) {
    return sign(
      { userId: loginUser.name, userPassword: loginUser.password },
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
