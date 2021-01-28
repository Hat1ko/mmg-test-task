import { ClassProvider, Inject, Injectable } from '@nestjs/common'
import {
  DBL_SERVICE,
  IQuestionsRepository,
  IResultsRepository,
  QUESTIONS_REPOSITORY,
  RESULTS_REPOSITORY,
} from 'src/core'

@Injectable()
export class DBLService {
  @Inject(QUESTIONS_REPOSITORY)
  public readonly questionsRepository: IQuestionsRepository
  @Inject(RESULTS_REPOSITORY)
  public readonly resultsRepository: IResultsRepository
}

export const DBLServiceProvider: ClassProvider = {
  provide: DBL_SERVICE,
  useClass: DBLService,
}
