import { ClassProvider } from '@nestjs/common'
import { STATISTICS_SERVICE } from 'src/core'
import { StatisticsService } from '../services'

export const StatisticsServiceProvider: ClassProvider = {
  provide: STATISTICS_SERVICE,
  useClass: StatisticsService,
}
