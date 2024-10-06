import { Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';

@Controller('user')
export class UserController {
  @Post()
  create(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return { message: `user ${createUserDto?.name} saved` };
  }
}
