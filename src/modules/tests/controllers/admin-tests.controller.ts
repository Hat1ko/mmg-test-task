import { Body, Controller, Get, Inject, Param, Post, UseGuards } from '@nestjs/common'
import { ADMIN_TESTS_SERVICE } from 'src/core/providers'
import { IAdminTestsService, TestDto } from 'src/core'
import { TestCreateDto } from 'src/modules/tests/dtos'
import { IPagination, ReqPagination } from 'src/helpers/helpers'
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger'
import { AuthGuard } from 'src/modules/auth/guards'

@ApiTags('Admin | Tests')
@Controller('admin/tests')
@UseGuards(AuthGuard)
export class AdminTestsController {
  @Inject(ADMIN_TESTS_SERVICE)
  private readonly testsService: IAdminTestsService

  @ApiBody({ required: true, description: 'Test name and questions', type: TestCreateDto })
  @ApiBadRequestResponse({ description: 'Incorrect data inserted into request body' })
  @ApiOkResponse({ description: 'Created a new test', type: TestDto })
  @Post()
  async createOne(@Body() dto: TestCreateDto) {
    return this.testsService.createOne(dto)
  }

  @ApiOkResponse({ description: 'Paginated data' })
  @Get()
  async getAll(@ReqPagination() pagination: IPagination) {
    return this.testsService.getAll(pagination)
  }

  @ApiParam({ description: 'Test id', name: 'testId' })
  @ApiNotFoundResponse({ description: 'Test was not found' })
  @ApiOkResponse({ description: 'Received existing test with answers', type: TestDto })
  @Get(':testId')
  async getTestByIdWithAnswers(@Param('testId') testId: string) {
    return this.testsService.getTestByIdWithAnswers(testId)
  }
}
