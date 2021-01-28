import { FactoryProvider } from '@nestjs/common'
import { TESTS_REPOSITORY } from 'src/core/providers'
import { Connection } from 'typeorm/index'
import { TestsRepository } from 'src/dbl/tests/repositories/tests.repository'

export const TestsRepositoryProvider: FactoryProvider = {
  provide: TESTS_REPOSITORY,
  inject: [Connection],
  useFactory: (connection: Connection) => connection.getCustomRepository(TestsRepository),
}
