import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config/config';
import { conf } from './config/config';
import { ContributionModule } from './contribution/contribution.module';
import { Contribution } from './Entity/contirbution';
import { contribution_info } from './Entity/contribution_info';
import { Contributor } from './Entity/contributor';
import { review_queue } from './Entity/review';
import { ManagerModule } from './manager/manager.module';
@Module({
  imports: [
    ContributionModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      ...conf.db,
      entities: [Contribution, Contributor, review_queue, contribution_info],
    }),
    ManagerModule,
    MailerModule.forRoot(conf.mail),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
