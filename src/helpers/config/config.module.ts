import { DynamicModule, Global, Module } from '@nestjs/common'
import { IConfigParams } from './interfaces'
import { configServiceProvider } from './providers'
import { CONFIG_SERVICE } from 'src/core/providers'

@Global()
@Module({})
export class ConfigModule {
  static forRoot(params: IConfigParams): DynamicModule {
    return {
      module: ConfigModule,
      imports: [],
      providers: [configServiceProvider(params.envPath)],
      exports: [CONFIG_SERVICE],
    }
  }
}
