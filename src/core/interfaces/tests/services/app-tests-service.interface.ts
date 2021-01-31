import { TestPassDto } from 'src/modules/tests/dtos'
import { ResultDto } from 'src/core'

export interface IAppTestsService {
  getTest(id: string)
  passTest(id: string, dto: TestPassDto): Promise<ResultDto>
}
