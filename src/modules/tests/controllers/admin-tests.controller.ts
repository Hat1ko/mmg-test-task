import { Controller, Inject } from '@nestjs/common'
import { ADMIN_TESTS_SERVICE } from 'src/core/providers'
import { IAdminTestsService } from 'src/core'

@Controller()
export class AdminTestsController {
  @Inject(ADMIN_TESTS_SERVICE)
  private readonly testsService: IAdminTestsService
}
