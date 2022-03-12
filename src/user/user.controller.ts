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
    
    @Post('login')
    @ApiResponse({ status: 200, description: 'the found record', type: user })
    loginUser(@Body() userLoginDTO: userLoginDTO) {
        return this.userService.userLogin(userLoginDTO.name, userLoginDTO.password);
  }
  
  @Get('testGetUser')
  @ApiOperation({ summary: 'get all user' })
  @ApiResponse({ status: 200, description: 'the found record', type: user })
  getUser() {
    return this.userService.getUser();
  }
} 