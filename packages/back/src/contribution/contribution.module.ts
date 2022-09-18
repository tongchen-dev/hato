import { Module } from '@nestjs/common';
import { ContributionService } from './contribution.service';
import { ContributionController } from './contribution.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { contribution_info } from '../Entity/contribution_info';
import { Contributor } from '../Entity/contributor';
import { Contribution } from '../Entity/contirbution';
import { review_queue } from '../Entity/review';

@Module({
  controllers: [ContributionController],
  providers: [ContributionService],
  imports: [
    TypeOrmModule.forFeature([
      contribution_info,
      Contributor,
      Contribution,
      review_queue,
    ]),
  ],
})
export class ContributionModule {}
