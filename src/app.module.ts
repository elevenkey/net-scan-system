import { Module } from '@nestjs/common';
import { AppController, AppController2 } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, AuthModule], // 导入其它module
  controllers: [AppController, AppController2],
  providers: [AppService],
})
export class AppModule {}
