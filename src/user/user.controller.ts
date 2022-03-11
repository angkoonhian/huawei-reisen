import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
  } from '@nestjs/common';
  import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import {UserService} from './user.service';
import { userDTO, userLoginDTO } from './model/user.model';
import { user } from './user.entity';

@ApiTags('user')
@Controller('user')
export class userController {
    constructor(private readonly userService: UserService) { }
    
    // @Post('/login')
    // @ApiOperation({ summary: 'Login user' })
    // @ApiResponse({ status: 200, description: 'the found record', type: user })
    // loginUser(@Body() body: {username: string, password: string}) {
    //     return this.userService.userLogin(body.username, body.password);
    // }
}