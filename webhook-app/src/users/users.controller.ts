import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Customer } from 'src/customer/entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('users')
export class UsersController {
  constructor(
    @InjectRepository(Customer) private readonly customerRepository: Customer,
  ) {}
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log('Creating user:', createUserDto);
    return {
      message: 'User created successfully',
      data: createUserDto,
    };
  }
}
