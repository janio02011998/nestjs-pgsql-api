import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/database/typeorm-ex.module';
import { UserRepository } from 'src/users/users.repository';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
