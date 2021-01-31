import { Module } from '@nestjs/common'
import { AuthServiceProvider } from './providers'
import { AuthGuard } from './guards'
import { AUTH_SERVICE } from 'src/core/providers'

@Module({
  providers: [AuthServiceProvider, AuthGuard],
  exports: [AUTH_SERVICE],
})
export class AuthModule {}
