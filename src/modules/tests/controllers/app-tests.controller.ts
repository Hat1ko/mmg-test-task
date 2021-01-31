import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common'
import { APP_TESTS_SERVICE, IAppTestsService, ResultDto, TestDto } from 'src/core'
import { TestPassDto } from 'src/modules/tests/dtos'
import { ApiBody, ApiNotFoundResponse, ApiOkResponse, ApiParam } from '@nestjs/swagger'

@Controller('app/tests')
export class AppTestsController {
  @Inject(APP_TESTS_SERVICE)
  private readonly testsService: IAppTestsService

  @ApiParam({ description: 'Test id', name: 'testId' })
  @ApiNotFoundResponse({ description: 'Test was not found' })
  @ApiOkResponse({ description: 'Received existing test', type: TestDto })
  @Get(':testId')
  async getTest(@Param('testId') testId: string) {
    return this.testsService.getTest(testId)
  }

  @ApiParam({ description: 'Test id', name: 'testId' })
  @ApiBody({ required: true, type: TestPassDto })
  @ApiNotFoundResponse({ description: 'Test was not found' })
  @ApiOkResponse({ description: 'Received passed test result', type: ResultDto })
  @Post(':testId')
  async postTest(@Param('testId') testId: string, @Body() dto: TestPassDto) {
    return this.testsService.passTest(testId, dto)
  }
}
