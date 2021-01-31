import { Controller, Get, Inject } from '@nestjs/common'
import { IStatisticsService, STATISTICS_SERVICE } from 'src/core'
import { ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { NumberOfResultsDto } from 'src/modules/statistics/dtos'

@ApiTags('App | Statistics')
@Controller('app/statistics')
export class StatisticsController {
  @Inject(STATISTICS_SERVICE)
  private readonly statisticsService: IStatisticsService

  @ApiOkResponse({ description: 'Number of all tests results', type: NumberOfResultsDto })
  @Get('all-time')
  async getAllResultsCount() {
    return this.statisticsService.getAllResultsCount()
  }

  @ApiOkResponse({ description: 'Number of all finished tests', type: NumberOfResultsDto })
  @Get('finished')
  async getFinishedTestsStats() {
    return this.statisticsService.getFinishedTestsStats()
  }

  @ApiOkResponse({ description: 'Number of all unfinished tests', type: NumberOfResultsDto })
  @Get('unfinished')
  async getUnFinishedTestsStats() {
    return this.statisticsService.getUnFinishedTestsStats()
  }
}
