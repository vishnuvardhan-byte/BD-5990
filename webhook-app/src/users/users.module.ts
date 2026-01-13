import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { Customer } from 'src/customer/entities/customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [UsersController],
})
export class UsersModule {}
