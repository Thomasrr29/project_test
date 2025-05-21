import { Module, Post } from '@nestjs/common';
import { PersistanceModule } from './config/persistance.module';
import { AnimalsModule } from './animals/animals.module';

@Module({
  imports: [
    PersistanceModule, 
    AnimalsModule
  ]
})
export class AppModule {}
