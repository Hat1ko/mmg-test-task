import { Global, Module } from '@nestjs/common'
import { TypeOrmModuleProvider } from './typeorm.provider'
import { QuestionsRepositoryProvider } from './questions'
import { ResultsRepositoryProvider } from './results'
import { DBLServiceProvider } from './dbl.service'
import { DBL_SERVICE } from 'src/core'

@Global()
@Module({
  imports: [TypeOrmModuleProvider],
  providers: [QuestionsRepositoryProvider, ResultsRepositoryProvider, DBLServiceProvider],
  exports: [DBL_SERVICE],
})
export class DBLModule {}
