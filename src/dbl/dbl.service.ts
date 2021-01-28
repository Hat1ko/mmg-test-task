import { ClassProvider, Inject, Injectable } from '@nestjs/common'
import { DBL_SERVICE, IQuestionsRepository, QUESTIONS_REPOSITORY } from 'src/core'

@Injectable()
export class DBLService {
  @Inject(QUESTIONS_REPOSITORY)
  public readonly questionsRepository: IQuestionsRepository
}

export const DBLServiceProvider: ClassProvider = {
  provide: DBL_SERVICE,
  useClass: DBLService,
}
