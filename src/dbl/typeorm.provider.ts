import { DynamicModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CONFIG_SERVICE, IConfigService } from 'src/core'
import { Entities } from './entities'

export const TypeOrmModuleProvider: DynamicModule = TypeOrmModule.forRootAsync({
  inject: [CONFIG_SERVICE],
  useFactory: async (cs: IConfigService) => ({
    type: cs.getOrDef('DATABASE_TYPE', 'postgres'),
    host: cs.getOrDef('DATABASE_HOST', 'localhost'),
    port: cs.getOrDef('DATABASE_PORT', 3306),
    username: cs.getOrDef('DATABASE_USER', 'test'),
    password: cs.getOrDef('DATABASE_PASS', 'test'),
    database: cs.getOrDef('DATABASE_DB', 'test'),
    synchronize: true,
    entities: Entities,
    keepConnectionAlive: true,
  }),
})
