import { ClassProvider, Inject, Injectable } from '@nestjs/common'
import {
  DBL_SERVICE,
  IQuestionsRepository,
  IResultsRepository,
  ITestsRepository,
  QUESTIONS_REPOSITORY,
  RESULTS_REPOSITORY,
  TESTS_REPOSITORY,
} from 'src/core'

@Injectable()
export class DBLService {
  @Inject(QUESTIONS_REPOSITORY)
  public readonly questionsRepository: IQuestionsRepository
  @Inject(RESULTS_REPOSITORY)
  public readonly resultsRepository: IResultsRepository
  @Inject(TESTS_REPOSITORY)
  public readonly testsRepository: ITestsRepository
}

export const DBLServiceProvider: ClassProvider = {
  provide: DBL_SERVICE,
  useClass: DBLService,
}
