import { Module } from '@nestjs/common'
import { ConfigModule } from 'src/helpers/config'
import { DBLModule } from 'src/dbl'
import { MODULES } from 'src/modules'

@Module({
  imports: [ConfigModule.forRoot({ envPath: `.env` }), DBLModule, ...MODULES],
})
export class AppModule {}
