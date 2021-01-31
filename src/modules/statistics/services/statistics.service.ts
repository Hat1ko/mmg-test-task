import { DBL_SERVICE, IStatisticsService } from 'src/core'
import { Inject, Injectable } from '@nestjs/common'
import { DBLService } from 'src/dbl'
import { NumberOfResultsDto } from 'src/modules/statistics/dtos'

@Injectable()
export class StatisticsService implements IStatisticsService {
  @Inject(DBL_SERVICE)
  private readonly dbl: DBLService

  async getAllResultsCount(): Promise<NumberOfResultsDto> {
    const [resultList, numOfResults] = await this.dbl.resultsRepository.findAndCount()
    return { count: numOfResults }
  }

  async getFinishedTestsStats(): Promise<NumberOfResultsDto> {
    const tests = await this.dbl.testsRepository.find({ relations: ['result'] })
    const numOfResults = tests.filter(test => test.questions && test.questions.length > 0).length
    return { count: numOfResults }
  }

  async getUnFinishedTestsStats(): Promise<NumberOfResultsDto> {
    const tests = await this.dbl.testsRepository.find({ relations: ['result'] })
    const numOfResults = tests.filter(test => test.questions && test.questions.length > 0).length
    return { count: tests.length - numOfResults }
  }
}
