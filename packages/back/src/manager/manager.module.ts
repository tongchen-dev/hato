import { Module } from '@nestjs/common';
import { ManagerService } from './manager.service';
import { ManagerController } from './manager.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contribution } from '../Entity/contirbution';
import { contribution_info } from '../Entity/contribution_info';
import { Contributor } from '../Entity/contributor';
import { review_queue } from '../Entity/review';

@Module({
  controllers: [ManagerController],
  providers: [ManagerService],
  imports: [
    TypeOrmModule.forFeature([
      contribution_info,
      Contributor,
      Contribution,
      review_queue,
    ]),
  ],
})
export class ManagerModule {}
