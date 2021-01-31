import { Module } from '@nestjs/common'
import { TESTS_CONTROLLERS } from './controllers'
import { TEST_SERVICES_PROVIDERS } from './providers'

@Module({
  controllers: TESTS_CONTROLLERS,
  providers: TEST_SERVICES_PROVIDERS,
})
export class TestsModule {}
