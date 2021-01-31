import { TestDto } from 'src/core'
import { TestCreateDto } from 'src/modules/tests'
import { IPagination, IPaginationList } from 'src/helpers/helpers'

export interface IAdminTestsService {
  getTestByIdWithAnswers(id: string): Promise<TestDto>
  createOne(dto: TestCreateDto): Promise<TestDto>
  getAll(pagination: IPagination): Promise<IPaginationList<TestDto>>
}
