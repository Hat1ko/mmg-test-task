import { Inject, Injectable } from '@nestjs/common'
import { APP_TESTS_SERVICE, IAppTestsService } from 'src/core'

@Injectable()
export class AppTestsController {
  @Inject(APP_TESTS_SERVICE)
  private readonly testsService: IAppTestsService
}
