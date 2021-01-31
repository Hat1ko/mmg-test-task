import { Module } from '@nestjs/common'
import { STATISTICS_CONTROLLERS } from './controllers'
import { STATISTICS_SERVICE_PROVIDERS } from './providers'

@Module({
  controllers: STATISTICS_CONTROLLERS,
  providers: STATISTICS_SERVICE_PROVIDERS,
})
export class StatisticsModule {}
