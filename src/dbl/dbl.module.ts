import { Global, Module } from '@nestjs/common'
import { TypeOrmModuleProvider } from './typeorm.provider'
import { ConfigService } from 'src/helpers/config/services'
import { ConfigModule } from 'src/helpers/config'

@Global()
@Module({
  imports: [TypeOrmModuleProvider],
  providers: [],
  exports: [],
})
export class DBLModule {}
