import { Module } from '@nestjs/common'
import { AuthServiceProvider } from './providers'
import { AuthGuard } from './guards'

@Module({
  providers: [AuthServiceProvider, AuthGuard],
})
export class AuthModule {}
