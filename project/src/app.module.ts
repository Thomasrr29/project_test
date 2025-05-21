import { Module, Post } from '@nestjs/common';
import { PersistanceModule } from './config/persistance.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PersistanceModule, UserModule],
})
export class AppModule {}
