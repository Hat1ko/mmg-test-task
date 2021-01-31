import { ClassProvider } from '@nestjs/common'
import { ADMIN_TESTS_SERVICE } from 'src/core'
import { AdminTestsService } from '../services'

export const AdminTestsServiceProvider: ClassProvider = {
  provide: ADMIN_TESTS_SERVICE,
  useClass: AdminTestsService,
}
