import { FactoryProvider } from '@nestjs/common'
import { Connection } from 'typeorm/index'
import { QuestionsRepository } from 'src/dbl'
import { QUESTIONS_REPOSITORY } from 'src/core'

export const QuestionsRepositoryProvider: FactoryProvider = {
  provide: QUESTIONS_REPOSITORY,
  inject: [Connection],
  useFactory: (connection: Connection) => connection.getCustomRepository(QuestionsRepository),
}
