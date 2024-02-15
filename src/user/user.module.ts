import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  imports: [], //modulos que quero importar
  controllers: [UserController],
  providers: [], //injectable
  exports: [],
})
export class UserModule {}
