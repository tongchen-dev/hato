import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { MethodNotAllowed } from '../shared/Exception/customException';
import { ContributionService } from './contribution.service';
import { contribution, updateContribution } from './dto/contribution.dto';

@Controller('contribution')
export class ContributionController {
  constructor(private readonly contributionService: ContributionService) {}

  @Get('/')
  async getAll() {
    return await this.contributionService.getAll();
  }
  @Post('/')
  async contribution(@Body() dto: contribution) {
    if (dto.type !== 'feat') {
      throw new MethodNotAllowed();
    }
    await this.contributionService.contribution(dto);
    return '';
  }
  @Put('/')
  async updateEvnt(@Body() dto: updateContribution) {
    await this.contributionService.updateContribution(dto);
  }
}
