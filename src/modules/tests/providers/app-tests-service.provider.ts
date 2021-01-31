import { ClassProvider } from '@nestjs/common'
import { APP_TESTS_SERVICE } from 'src/core'
import { AppTestsService } from '../services'

export const AppTestsServiceProvider: ClassProvider = {
  provide: APP_TESTS_SERVICE,
  useClass: AppTestsService,
}
