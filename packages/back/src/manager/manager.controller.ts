import { Body, Controller, Get, Post } from '@nestjs/common';
import { FeatPayload } from 'src/interface/public';
import { sendContributionNotice } from '../mail/mail';
import { SubmitData, SubmitFeat, SubmitFix } from './dto/accept';
import { ManagerService } from './manager.service';

@Controller('manager')
export class ManagerController {
  constructor(private readonly managerService: ManagerService) {}
  @Get('/reivew/event')
  async getAllEvent() {
    return await this.managerService.getAllEvent();
  }
  @Post('/review/accept')
  async accept(@Body() dto: SubmitData) {
    let mailerInfo;
    if (dto.type === 'feat') {
      mailerInfo = await this.acceptFeat({
        id: dto.id,
        accept: dto.featPayload.accept,
        refuse: dto.featPayload.refuse,
        contributor: dto.contributor,
      });
    } else {
      mailerInfo = await this.acceptFix({
        id: dto.id,
        accept: dto.fixPayload.accept,
        refuse: dto.fixPayload.refuse,
        contributor: dto.contributor,
      });
    }
    return sendContributionNotice(mailerInfo);
    // return this.managerService.getAllContribution(
    //   'GaoNeng',
    //   'gaonenggg@outlook.com',
    // );
  }
  @Post('/review/accept/feat')
  async acceptFeat(@Body() dto: SubmitFeat) {
    return await this.managerService.acceptFeat(dto);
  }
  @Post('/review/accept/fix')
  async acceptFix(@Body() dto: SubmitFix) {
    return await this.managerService.acceptFix(dto);
  }
}
