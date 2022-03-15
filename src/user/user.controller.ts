import {
    Body,
    Controller,
    Get,
  Param,
  Post,
    Put
  } from '@nestjs/common';
  import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import {UserService} from './user.service';
import { userDTO, userLoginDTO, userSignUpDTO } from './model/user.model';
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
  
  @Get('/:id')
  @ApiOperation({ summary: 'get all user' })
  @ApiResponse({ status: 200, description: 'the found record', type: user })
  getUser(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Put('/updateUser')
  @ApiOperation({ summary: 'update user' })
  @ApiResponse({ status: 200, description: 'the found record', type: user })
  updateUser(@Body() userDTO: userDTO) {
    return this.userService.updateUser(userDTO);
  }

  @Post('/signUp')
  @ApiOperation({ summary: 'sign up user' })
  @ApiResponse({ status: 200, description: 'the found record', type: user })
  signUpUser(@Body() userLoginDTO: userLoginDTO) {
    return this.userService.signUpUser(userLoginDTO);
  }
  
} 