import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common'
import { APP_TESTS_SERVICE, IAppTestsService } from 'src/core'
import { TestPassDto } from 'src/modules/tests/dtos'

@Controller('app/tests')
export class AppTestsController {
  @Inject(APP_TESTS_SERVICE)
  private readonly testsService: IAppTestsService

  @Get(':testId')
  async getTest(@Param('testId') testId: string) {
    return this.testsService.getTest(testId)
  }

  @Post(':testId')
  async postTest(@Param('testId') testId: string, @Body() dto: TestPassDto) {
    return this.testsService.passTest(testId, dto)
  }
}
