import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { UserRepository } from './users.repository';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { TypeOrmExModule } from 'src/database/typeorm-ex.module';

@Module({
  imports: [
    TypeOrmExModule.forCustomRepository([UserRepository]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
