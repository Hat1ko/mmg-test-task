import { Module } from '@nestjs/common'
import { ConfigModule } from 'src/helpers/config'
import { DBLModule } from 'src/dbl'

@Module({
  imports: [ConfigModule.forRoot({ envPath: `.env` }), DBLModule],
  controllers: [],
})
export class AppModule {}
