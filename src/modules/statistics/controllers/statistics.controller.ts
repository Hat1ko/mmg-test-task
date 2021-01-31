import { Controller, Get, Inject } from '@nestjs/common'
import { IStatisticsService, STATISTICS_SERVICE } from 'src/core'

@Controller('app/statistics')
export class StatisticsController {
  @Inject(STATISTICS_SERVICE)
  private readonly statisticsService: IStatisticsService

  @Get('all-time')
  async getAllResultsCount() {
    return this.statisticsService.getAllResultsCount()
  }

  @Get('finished')
  async getFinishedTestsStats() {
    return this.statisticsService.getFinishedTestsStats()
  }

  @Get('unfinished')
  async getUnFinishedTestsStats() {
    return this.statisticsService.getUnFinishedTestsStats()
  }
}
