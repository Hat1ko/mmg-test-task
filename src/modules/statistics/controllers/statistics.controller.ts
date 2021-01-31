import { Controller, Inject } from '@nestjs/common'
import { IStatisticsService } from 'src/core/interfaces/statistics/services'

@Controller()
export class StatisticsController {
  // TODO: insert provide token
  @Inject()
  private readonly statisticsService: IStatisticsService
}
