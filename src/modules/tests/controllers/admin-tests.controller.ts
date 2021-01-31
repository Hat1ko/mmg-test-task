import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common'
import { ADMIN_TESTS_SERVICE } from 'src/core/providers'
import { IAdminTestsService } from 'src/core'
import { TestCreateDto } from 'src/modules/tests/dtos'
import { IPagination, ReqPagination } from 'src/helpers/helpers'

@Controller('admin/tests')
export class AdminTestsController {
  @Inject(ADMIN_TESTS_SERVICE)
  private readonly testsService: IAdminTestsService

  @Post()
  async createOne(@Body() dto: TestCreateDto) {
    return this.testsService.createOne(dto)
  }

  @Get()
  async getAll(@ReqPagination() pagination: IPagination) {
    return this.testsService.getAll(pagination)
  }

  @Get(':testId')
  async getTestByIdWithAnswers(@Param('testId') testId: string) {
    return this.testsService.getTestByIdWithAnswers(testId)
  }
}
