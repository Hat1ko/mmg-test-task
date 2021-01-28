import { FactoryProvider } from '@nestjs/common'
import { Connection } from 'typeorm/index'
import { RESULTS_REPOSITORY } from 'src/core'
import { ResultsRepository } from '../repositories'

export const ResultsRepositoryProvider: FactoryProvider = {
  provide: RESULTS_REPOSITORY,
  inject: [Connection],
  useFactory: (connection: Connection) => connection.getCustomRepository(ResultsRepository),
}
